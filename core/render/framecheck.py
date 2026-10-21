"""冻帧 / 黑帧自检：python core/render/framecheck.py video.mp4 [--max 1.0] [--per30 3.0] [--min 0.2] [--noise -60] [--allow a:b ...]
查渲染出来的成片（用 mux 之前的 out/video.mp4：mux 加的颗粒会让每一帧都在"动"，冻帧就查不出来了）。
规则（同 DIRECTOR.md §11）：
  - 画面完全不动的一段不能超过 --max 秒（默认 1.0）；停顿和标题卡也要有微动（极慢的推镜、漂移、光影），不是定格。
  - 任意 30 秒窗口里，不动的总时长（只算 ≥ --min 秒的段）不超过 --per30 秒（默认 3.0）。
  - 没有黑帧（blackdetect，像素亮度 < 5%），第一帧也算：开头就要是一张完成的画。
  - 故意的定格或黑场，用 --allow a:b 标出秒数区间（可多次），落在区间里的段不算。
退出码：0 通过；1 有问题；2 用法错误或 ffmpeg 读不了这个文件。"""
import re, subprocess, sys

args = sys.argv[1:]
def opt(k, d):
    if k in args: i = args.index(k); v = args[i + 1]; del args[i:i + 2]; return v
    return d
allow = []
while '--allow' in args:
    i = args.index('--allow'); a, b = map(float, args[i + 1].split(':')); allow.append((a, b)); del args[i:i + 2]
MAX, PER30, MIN, NOISE = float(opt('--max', 1.0)), float(opt('--per30', 3.0)), float(opt('--min', 0.2)), float(opt('--noise', -60))
if len(args) != 1 or args[0].startswith('--'):
    print('usage: python core/render/framecheck.py video.mp4 [--max 1.0] [--per30 3.0] [--min 0.2] [--noise -60] [--allow a:b ...]', file=sys.stderr); sys.exit(2)
src = args[0]

vf = f'freezedetect=n={NOISE}dB:d={MIN},blackdetect=d=0:pix_th=0.05'
p = subprocess.run(['ffmpeg', '-hide_banner', '-nostats', '-i', src, '-an', '-vf', vf, '-f', 'null', '-'], capture_output=True, text=True)
if p.returncode:
    print(f'framecheck: ffmpeg could not read {src}:\n' + p.stderr[-800:], file=sys.stderr); sys.exit(2)
log = p.stderr
m = re.search(r'Duration: (\d+):(\d+):([\d.]+)', log)
dur = int(m[1]) * 3600 + int(m[2]) * 60 + float(m[3]) if m else 0.0

freezes, s = [], None
for k, v in re.findall(r'lavfi\.freezedetect\.freeze_(start|end): ([\d.]+)', log):
    if k == 'start': s = float(v)
    elif s is not None: freezes.append((s, float(v))); s = None
if s is not None: freezes.append((s, dur))   # 冻到片尾
merged = []   # freezedetect 会把一段长定格切成首尾相接的几段：接起来
for a, b in freezes:
    if merged and a - merged[-1][1] < 0.05: merged[-1] = (merged[-1][0], b)
    else: merged.append((a, b))
freezes = merged
blacks = [(float(a), float(b)) for a, b in re.findall(r'black_start:([\d.]+) black_end:([\d.]+)', log)]

inside = lambda a, b: any(x - 1e-3 <= a and b <= y + 1e-3 for x, y in allow)
freezes = [f for f in freezes if not inside(*f)]
blacks = [f for f in blacks if not inside(*f)]

bad = 0
for a, b in freezes:
    if b - a > MAX + 1e-6: bad += 1; print(f'BAD frozen {a:7.2f}s - {b:7.2f}s  ({b - a:.2f}s, limit {MAX:.2f}s)')
# 30 秒窗口：从每段冻帧的起点开始量（最坏的窗口一定从某段的起点开始）
worst, wt = 0.0, 0.0
for a, _ in freezes:
    tot = sum(max(0.0, min(y, a + 30) - max(x, a)) for x, y in freezes)
    if tot > worst: worst, wt = tot, a
if worst > PER30 + 1e-6: bad += 1; print(f'BAD {worst:.2f}s frozen in the 30 s from {wt:.2f}s (limit {PER30:.2f}s)')
for a, b in blacks:
    bad += 1; print(f'BAD black  {a:7.2f}s - {b:7.2f}s' + ('  (the first frame is black)' if a < 1e-3 else ''))
print(f'framecheck: {dur:.2f}s, {len(freezes)} still stretch(es) >= {MIN}s, worst 30 s window {worst:.2f}s frozen, '
      f'{len(blacks)} black stretch(es){", " + str(len(allow)) + " allowed range(s)" if allow else ""} -> {"FAIL" if bad else "OK"}')
sys.exit(1 if bad else 0)
