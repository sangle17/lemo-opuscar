# First frame: the first 3 seconds of a Short (and the first 30 s of a film)

Written 2026-10-27, when "Viewed vs. swiped away" sat at only 30–50% on every one of our Shorts, against a target of 70%+. It works alongside CHANNEL-RULES §2 and §11, and never asks a style to stop being itself: each rule is met with the style's own moves.

The per-style recipes for Map Room and Atlas Engraving, and the one-line fix for each of the ten Shorts re-cut on 2026-10-27, are in git history (commit `21adb2c`).

## 1. Evidence

Grades: **Strong** = a platform definition or replicated research; **Moderate** = large observational data or one credible test; **Practice** = what successful channels visibly do; **Own** = our analytics.

- **The first frame is the thumbnail** (Strong). In the Shorts feed the viewer never sees a thumbnail: the first moving frame, the first words and the sound decide the swipe. YouTube publishes no threshold for "viewed vs. swiped away"; compare against our own Shorts.
- **About 70–90% viewed for the best performers** (Moderate). Galloway & Gileta, about 5,400 Shorts (2023): below about 60%, distribution fell away. Long Shorts paid off only when view duration stayed high.
- **Motion onset and looming objects capture attention; a still frame doesn't** (Strong; Abrams & Christ 2003, Franconeri & Simons 2003).
- **Faces draw the first look,** contrast and saliency the rest (Strong; Cerf et al. 2008, Itti & Koch 2001).
- **One clear object helps; clutter and low contrast hurt** (Moderate–Strong; Pieters, Wedel & Batra 2010, ads).
- **Viewers zap less when a face shows joy or surprise early,** and more after a logo or a slow build-up (Moderate–Strong; Teixeira, Wedel & Pieters 2010, 2012, video ads).
- **Captions help comprehension and memory,** for hearing viewers too (Strong; Gernsbacher 2015, 100+ studies).
  - Many people watch with the sound off: 69% in public, 25% at home (Moderate; Verizon/Publicis survey of 5,616 US adults, 2019).
  - Shorts play with sound on by default, so this matters more on Facebook than on YouTube.
- **Ours** (Own):
  - The one early Short that held viewers had stakes, an ending that echoed the hook, and a burned-in caption strip.
  - Quiz outros ("Did you guess it? Tell me below") lost viewers sharply.
  - Dense opening frames got under 20 views.

### What 10 big faceless history and geography Shorts do in 0–3 s (Practice)

Studied 2026-10-27: RealLifeLore (two, 3.7M and 5.3M), Kings and Generals, History Matters, Kurzgesagt, Zack D. Films, The Armchair Historian, Simple History, The Infographics Show, Geography Now. They all:
1. fill the frame with the subject from frame 0, never an establishing shot or an empty tool;
2. have something moving at frame 0;
3. use saturated, high-contrast colour, never pale on pale;
4. show a face or human figure whenever the story has one;
5. change the picture by about 2 s;
6. make the hook readable as text (burned captions or a headline);
7. start the voice on frame 0.

### Our faults on 2026-10-27

1. Pale content on a pale ground.
2. A ring or frame (loupe, roundel) as the strongest shape, with nothing yet inside it.
3. The thing the first sentence names ("this man", "this island") small or missing.
4. Almost no change between 0 and 2.5 s.
5. No face, even when the story had one.

## 2. Rules

| # | Rule | Why |
|---|---|---|
| 1 | **Frame 1 shows what the first sentence names, filling the frame:** at least 50% of the height, centred between 20% and 70% of it. "This man / this island" must *be* on screen at the word "this". | The swipe decision is made on this frame. |
| 2 | **Already moving at frame 0:** start mid-move (a push, a line being drawn, an ink pull), so something visibly changes before 0.5 s. Never ease in from rest, fade in or start on black. | Motion onset captures attention. |
| 3 | **High contrast on the subject:** the darkest darks and the one strong colour sit on it. | Saliency drives the first look. |
| 4 | **A face first** whenever the story has one: a real portrait if one exists. | Faces win the first look; early faces cut zapping. |
| 5 | **One object, not a scene:** at most one label in 0–3 s. | Clutter hurts. |
| 6 | **A change at 1.2–2.0 s that adds information,** in the style's own way of cutting, and another by about 3 s. | Every top Short changes at about 2 s. |
| 7 | **The picture answers the voice within 0.3 s:** the number appears at the number, the face at the name. | Matching picture and words helps people take in a fact. |
| 8 | **Voice from frame 0,** at full energy, with concrete first words (a date, a number, a name, "this + noun"). No breath or room tone first. | Enthusiasm holds people. |
| 9 | **The hook readable as text** in the style's own lettering, if the caption test (CHANNEL-RULES §12) adopts it. | Sound-off viewers and fast deciders read it. |
| 10 | **Never open on the tool or the stage:** an empty frame or ring, bare paper, a table switching on, a title, a wide establishing shot, a logo. | Build-up raises zapping. |
| 11 | **Clear of the UI:** subject and text above the bottom 15% and below the top 8%, at least 60 px from the sides. | The Shorts UI covers those areas. |
| 12 | **Close the loop, don't ask:** the last line pays off or echoes the hook. No "Did you guess it? Tell me below". A clean loop into frame 1 turns the end into a replay. | Quiz outros dropped sharply; replays count as views. |

## 3. Re-cut checklist (change only 0–3 s; the voice stays)

1. Mark the first sentence's nouns, number and "this" words, with the time each is spoken.
2. Extract frames at 0, 0.5, 1, 1.5, 2, 2.5 and 3 s and tile them at 240 px wide (about phone-thumb size).
3. Check each frame against rules 1–7, 10 and 11. The usual fixes:
   - start the opening move about 1.5 s earlier, so frame 0 is mid-move;
   - open on the strongest real object or face;
   - push in.
4. Blend into the existing picture at about 3 s with a style-native move. Keep the soundtrack identical.
5. Run the style test (CHANNEL-RULES §11.5) on the new frame 0: it must look like the demo, not a poster.
6. Log the before and after "viewed" share.

## 4. Long-film openings (first 30 s)

- **0–5 s:** the most striking image of the film, the one the title and thumbnail promise, with the voice from frame 0. No logo, no title card, no "in this video". An opening that doesn't match the title causes the early drop.
- **5–15 s:** the question in one sentence, and the promise that it will be answered, without the answer (LONG-FORM §4c).
- **15–30 s:** the first real piece of evidence.
- **The rules above:** 1–7 hold at 16:9. The picture changes every 2–4 s. The first chapter marker comes only after the hook.
- **Re-hook:** at about 20–30 s, with a turn ("But here's the problem…").

## Sources

- YouTube Help, *Content tab analytics tips – Shorts*: https://support.google.com/youtube/answer/12942217
- Galloway & Gileta, 5,400 Shorts, via write-ups: https://nowbam.com/decoding-the-youtube-shorts-algorithm/
- Verizon Media/Publicis caption survey (2019): https://www.3playmedia.com/blog/verizon-media-and-publicis-media-find-viewers-want-captions/
- Gernsbacher (2015), *Policy Insights from the Behavioral and Brain Sciences* 2(1).
- Abrams & Christ (2003), *Psychological Science*; Franconeri & Simons (2003), *Perception & Psychophysics*.
- Cerf, Harel, Einhäuser & Koch (2008), *NIPS*; Itti & Koch (2001), *Nature Reviews Neuroscience*.
- Pieters, Wedel & Batra (2010), *Journal of Marketing*; Teixeira, Wedel & Pieters (2010), *Marketing Science*, (2012), *JMR*.
- Guo, Kim & Rubin (2014), *L@S*.
