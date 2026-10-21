// 文字版面自检：node core/render/textcheck.mjs <demo> [--q 'k=v'] [--step 0.25] [--contrast 4.5] [--safe 0.05,0.05,0.05,0.05] [--size 1920x1080]
// 用和 readcheck.mjs 同一个页面约定 window.TEXTS(t) → [{id, text, x0, y0, x1, y1}]（见它的文件头）。每 --step 秒查一次，三条：
//   1. 对比度：截下每块文字的框，按亮度分成"字"和"底"两群（Otsu），两群中位亮度的 WCAG 对比度要 ≥ --contrast（默认 4.5）。
//      每段文字取它在画时所有采样的中位数，所以淡入淡出的几帧不会误报；字压在花底上没有衬底，两群分不开，也会报出来。
//      这是估算：报 BAD 的那几块去看一眼截图，大字号的标题按 WCAG 3:1 也行（--contrast 3）。
//   2. 互相压字：同一时刻两块文字的框有重叠。
//   3. 安全边距：框要在画面内缩 --safe 左,上,右,下（画面宽高的比例，默认各 5%）的范围里。竖版 9:16 发平台时留出平台按钮和标题区，
//      例如 --safe 0.06,0.12,0.16,0.22。
// 字幕条不用报：字幕的位置由它自己的设计决定，readcheck 也不查它。
// 退出码：0 全部达标；1 有不达标；2 检查没能运行（页面没有 window.TEXTS，或整片没返回过任何文字）——这不算通过。
import { openDemo, closeServer, requireDemo, takeSize } from './page.mjs';
const args = process.argv.slice(2), { w: VW, h: VH } = takeSize(args), opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const dir = args[0]; requireDemo(dir);
const Q = opt('--q', ''), STEP = +opt('--step', 0.25), CR = +opt('--contrast', 4.5), SAFE = opt('--safe', '0.05,0.05,0.05,0.05').split(',').map(Number);
if (![STEP, CR].every(Number.isFinite) || STEP <= 0 || SAFE.length !== 4 || !SAFE.every(v => v >= 0 && v < 0.5)) { console.error('bad option value (step > 0; --safe is four fractions l,t,r,b below 0.5)'); process.exit(2); }
const { browser, page } = await openDemo(dir, { w: VW, h: VH, q: Q });
const info = await page.evaluate(() => ({ texts: typeof window.TEXTS === 'function', dur: window.DUR }));
if (!info.texts || !(info.dur > 0)) {
  console.error('textcheck: NOT CHECKED — ' + (!info.texts ? 'the page has no window.TEXTS(t) (see the header of core/render/readcheck.mjs for the contract).' : 'window.DUR is not a positive number.') + ' This is not a pass.');
  await browser.close(); closeServer(); process.exit(2);
}
// 截图在页面里解码，算出框里"字"和"底"的对比度
const contrastOf = png => page.evaluate(async b64 => {
  const img = new Image(); img.src = 'data:image/png;base64,' + b64; await img.decode();
  const c = new OffscreenCanvas(img.width, img.height), g = c.getContext('2d'); g.drawImage(img, 0, 0);
  const d = g.getImageData(0, 0, img.width, img.height).data, lin = v => (v /= 255) <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  const L = new Float32Array(d.length / 4), hist = new Array(256).fill(0);
  for (let i = 0; i < L.length; i++) { L[i] = 0.2126 * lin(d[4 * i]) + 0.7152 * lin(d[4 * i + 1]) + 0.0722 * lin(d[4 * i + 2]); hist[Math.min(255, L[i] ** (1 / 2.2) * 256 | 0)]++; }
  let sum = 0, sumB = 0, wB = 0, best = -1, th = 0;   // Otsu，在近似感知亮度上分两群
  for (let i = 0; i < 256; i++) sum += i * hist[i];
  for (let i = 0; i < 256; i++) {
    wB += hist[i]; if (!wB) continue; const wF = L.length - wB; if (!wF) break;
    sumB += i * hist[i]; const v = wB * wF * (sumB / wB - (sum - sumB) / wF) ** 2; if (v > best) { best = v; th = i; }
  }
  const lo = [], hi = []; for (const v of L) ((v ** (1 / 2.2) * 256 | 0) <= th ? lo : hi).push(v);
  if (!lo.length || !hi.length) return 1;   // 框里只有一种颜色：字看不见
  const med = a => { a.sort((x, y) => x - y); return a[a.length >> 1]; };
  return (med(hi) + 0.05) / (med(lo) + 0.05);
}, png.toString('base64'));

const pieces = {}, problems = [];
const [sl, st, sr, sb] = [SAFE[0] * VW, SAFE[1] * VH, VW - SAFE[2] * VW, VH - SAFE[3] * VH];
for (let t = 0; t <= info.dur; t += STEP) {
  const boxes = (await page.evaluate(t => { window.render(t); return window.TEXTS(t) || []; }, t))
    .map(b => ({ ...b, id: String(b.id) })).filter(b => b.x1 > b.x0 && b.y1 > b.y0);
  for (const b of boxes) {
    const key = b.id + '\u0000' + b.text, p = pieces[key] ??= { id: b.id, text: b.text, t0: t, cr: [], unsafe: null };
    if (!(b.x0 >= sl && b.y0 >= st && b.x1 <= sr && b.y1 <= sb)) p.unsafe ??= t;
    const x = Math.max(0, Math.floor(b.x0)), y = Math.max(0, Math.floor(b.y0)), w = Math.min(VW, Math.ceil(b.x1)) - x, h = Math.min(VH, Math.ceil(b.y1)) - y;
    if (w >= 2 && h >= 2) p.cr.push({ t, v: await contrastOf(await page.screenshot({ type: 'png', clip: { x, y, width: w, height: h } })) });
  }
  for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
    const a = boxes[i], b = boxes[j], key = [a.id, b.id].sort().join(' & ');
    if (a.id !== b.id && a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1 && !problems.some(p => p.key === key)) problems.push({ key, t, line: `BAD overlap  ${key} at ${t.toFixed(2)}s  ${JSON.stringify(a.text.slice(0, 20))} / ${JSON.stringify(b.text.slice(0, 20))}` });
  }
}
await browser.close(); closeServer();

const all = Object.values(pieces);
if (!all.length) { console.error('textcheck: NOT CHECKED — window.TEXTS(t) never returned any text over the whole film. This is not a pass.'); process.exit(2); }
let bad = problems.length;
for (const p of all) {
  const s = p.cr.map(c => c.v).sort((a, b) => a - b), med = s.length ? s[s.length >> 1] : NaN, low = med < CR, at = p.cr.length ? p.cr.reduce((a, c) => c.v < a.v ? c : a).t : p.t0;
  if (low || p.unsafe !== null) bad++;
  console.log(`${low || p.unsafe !== null ? 'BAD' : 'OK '} ${p.id.padEnd(18)} at ${p.t0.toFixed(2)}s  contrast ${Number.isFinite(med) ? med.toFixed(1).padStart(4) + ':1' : '   ?  '}${low ? ` (below ${CR}:1, worst at ${at.toFixed(2)}s)` : ''}${p.unsafe !== null ? `  outside the safe area at ${p.unsafe.toFixed(2)}s` : ''}  ${JSON.stringify(p.text.slice(0, 24))}`);
}
for (const p of problems) console.log(p.line);
process.exit(bad ? 1 : 0);
