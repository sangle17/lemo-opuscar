# Channel rules: how every film for the channel is made

The user's YouTube channel and Facebook Page turn encyclopedia pages into short films for a US/EU audience, in English. These rules sit on top of `AGENTS.md`, `DIRECTOR.md` and the chosen `STYLE.md`: the style decides the look, these rules decide the hook, the structure, the titles and the thumbnail. Agreed with the user on 2026-10-22, built on research (evidence levels at the end).

## 1. Choosing the shape: options, not a fixed formula

Every Short has a hook, real value (the viewer learns something true and worth knowing, never "bullshit content") and a point of view. **How it is built is chosen per subject.** No shape applies to every scenario (user, 2026-10-24).

| Option | When it fits | Shape |
|---|---|---|
| **Main point + fun fact** | A place, thing or idea worth explaining, with a surprising story attached (Tierra del Fuego + the beavers; the Falklands + Maradona) | Hook with the fun fact → what the subject is and why it's special → the fun fact, grown out of it → tie-back + POV |
| **Story** | One event that is itself the value, told in order | Hook statement → what happened → turn → payoff → POV |
| **Fun fact with numbers** | One striking fact that carries itself | The fact → the details and numbers that make it vivid → POV |
| **Quiz** | Only when a natural question has a fairly guessable answer (a place, a record, a number) | Question → wrong guess → hints → reveal → POV |

Pick the one that suits the material; say which and why when showing the script. Mixing is fine.

- **Topic: anything in the book**: countries, continents, animals, aircraft, science, history. Never steer the user toward fewer topics.
- **Source: the user's encyclopedia page.** Facts are free to use; the book's sentences and pictures are not. Retell in our own words; drawn visuals or open-licence material.

## 2. Short (vertical, 45–55 s, about 120–140 spoken words)

- **Hook in the first 3 s**, spoken from frame 1 over a strong, moving image. No title card, no fade from black, no "Did you know…", no "In this video".
- One opinion line in the narrator's voice; a loop into the first line only if it comes naturally.
- **Content decides length, never padding.** Thin topic → a tight 30–40 s Short.
- **The look belongs to the style.** `STYLE.md` and the style's demo set the bar for everything visual: composition, characters, motion, camera, type and how much text is on screen. These rules never add title cards, big captions, stamps or labels on top of it (user, 2026-10-24: the channel rules had turned every style into text on flat cards). Build real scenes with the style's own techniques, at the quality of its demo film.
- **Use the style's own engine.** Copy the demo's renderer (print shader, stroke engine, brush engine) into the project and draw with it. Never swap it for a quicker stack (plain SVG, Remotion shapes, flat fills with a texture on top): the Tierra del Fuego "watercolour" and the Argentina Risograph cuts (2026-10-24) became flat vector that way.
- **Compose for the vertical frame.** Stage each shot again for 9:16 and fill the frame with the scene; never a small subject in the top half over empty ground.
- Only two platform constraints: keep the bottom ~15% free of important detail (Shorts UI), and deliver captions as an `.srt` file.

### Several Shorts from one film

A film usually covers 2–3 book pages, so it can give **2–3 Shorts**, one per strong subject. Each must stand alone:
- **Its own hook and content.** Never cut-downs of the same Short, never the same opening footage, never the same hook formula twice in one film (YouTube's "inauthentic content" rule targets near-duplicates; Meta cuts reach of duplicates).
- Built from the film's shared assets (art, voice engine, score), but each gets its own first frame and ending.
- Every Short sets "Related video" to the same landscape film, so all of them feed it.
- Make a Short only when its hook passes the quality gate (§11). Two strong Shorts beat three where one is padding.
- **Default 3–4 Shorts per film, the strongest hooks first.** Make the rest only if the first ones perform. A quiz-round landscape can hold more questions than there are Shorts.
- Interleave Shorts from different films so the channel never shows one topic for a week straight.

## 4. Landscape (16:9, 2:30–3:00, about 400 words, with chapters)

**A landscape film needs one spine.** Decide which kind before writing:
- **One story** (the pages share one question, like "Why were only 2 African countries free in 1914?"): use the chapter outline below.
- **Quiz round** (overview pages with many unrelated facts, like a continent page): "N questions about Asia most people get wrong. Keep score." Each chapter is one question → guess pause (2–3 s, on-screen countdown) → answer → one deeper fact the Short didn't have. End on the score bands ("5+: you know Asia better than most") and a comment prompt ("What was your score?"). The score is the spine; it keeps people to the end. Never just the Shorts stitched together: each question gets new depth.
- **Neither fits:** no landscape film; Shorts only. Don't force a scattered long video.

| Time | Chapter | Rule |
|---|---|---|
| 0:00 | **Hook + promise** | The same question, then "by the end you'll know X, and why". The first 10 s must deliver what the title and thumbnail promised. |
| 0:10 | **Setup** | What the subject is, with a sense of scale. |
| 0:40 | **Why the obvious answer is wrong** | The clues. |
| ~1:20 | **The answer** (about 60%) | The reveal. |
| 1:50 | **The real story** | Why and how, with a human element: a person, a date, a moment. |
| 2:30 | **Ending** | Call back to the opening image, then a new question (another video's teaser) and a comment prompt. |

- Each chapter starts with a small re-hook. Deeper than the Short; never the Short stretched.
- Chapters in the description. Mid-roll ads need 8+ min: revisit length once landscape videos get real views; until then stay at 2:30–3:00.

## 5. Script rules (both cuts)

- One fact per sentence, about 12 words at most. Enthusiastic, informal delivery.
- **Talk like a person.** Never number points in the voice or on screen ("Clue one…", "CLUE III"). Read every line aloud: if you wouldn't say it to a friend, rewrite it. (User feedback, 2026-10-23.)
- **Pauses are part of the script (user feedback, 2026-10-23: "pausing is an art").** Lines back to back sound like a non-stop read. Mark pauses: 0.2–0.3 s between sentences, 0.5–0.7 s between beats, 0.7–1.0 s after a surprising number or the hook. Pauses are silent in the voice, never frozen on screen: the picture keeps moving, the music carries the gap. Trim words to fit, never the pauses.
- Make every number tangible with a comparison.
- No filler: "interestingly", "fun fact", "in this video", "let's dive in".
- Captions go in the `.srt`; on-screen text only where the style itself would use it.
- At least one point-of-view line per film (this is the human creative direction both platforms look for).

## 6. Titles

- **Short:** the fun fact with its concrete detail, the hook in the first ~40 characters (the Shorts shelf cuts there), under 60 characters. A question only if it is natural. Hashtags at the end, 1–3.
  - Good: "Argentina flew 20 beavers to the end of the world", "Only 2 African countries were free in 1914. Which?"
  - Bad: "In 1765, Britain taxed THIS 10× more than…" (vague), "Africa in Ink: 54 Countries…" (art words, no hook).
- **Landscape:** searchable keyword first + curiosity, never the answer, never the art technique ("in Watercolour", "Animated History", "Printed Layer by Layer" say how it was made, not why to watch).
  - Good: "Why Only 2 African Countries Escaped Colonization", "The Continent That Belongs to No One".
  - Bad: "African History" (generic, unsearchable).

## 7. Thumbnail (landscape, 1280×720)

- **One subject**, big, high contrast against the background. No split panels, no collage.
- **2–4 big words** that add to the title rather than repeat it. A hook or a mystery, **never the payoff** (the "ONLY 2 FREE" map labelled Liberia and Ethiopia: it gave the answer away).
- Text in the left or right two-thirds, clear of the duration badge (bottom right).
- **Phone-size check:** look at it at 320 px wide. If the words or the subject don't read, it fails.
- Model to follow: the Antarctica thumbnail ("NO COUNTRY CLAIMS THIS" + one arrow), with fewer words.
- Deliver `thumbnail.jpg` with every film, plus `poster-short.jpg` (the Short's first frame) for checking.

## 8. Facebook

- **One cut per film per Page: the Short as a Reel.** Never also the landscape cut (Meta reduces reach for duplicates; it split views on 2026-10-21).
- Caption, hand-written: line 1 the hook, line 2 one line of the main point, line 3 an easy comment prompt (an opinion or "Had you heard this?"). No chapters, no #shorts.

## 9. Posting

- **YouTube: up to 2–3 Shorts a day**, at least 4–6 h apart, never two in the same hour. No penalty for frequency is documented and each Short is tested on its own, but keep the pace you can sustain every day: consistency matters more than bursts.
- **Facebook: 1 Reel a day, never two in the same hour.** Page reach is shared across posts: five Reels in 14 h on 2026-10-21 left the last one at reach 1, and two Reels at the same minute on 2026-10-23 gave the second 1 view.
- Shorts from the same film go out on different days or far apart, not back to back.
- US evening ≈ 07:00–10:00 Vietnam time; Europe evening ≈ 00:00–03:00. Prefer the Page's own Insights once it has data.
- In each Short, set "Related video" to its landscape version.
- Don't re-upload a Short that flopped; carry the lesson into the next film.

## 10. Facts

- Every claim in the voice and on screen goes into `FACTS.md` with a current source, worded as the source has it.
- **The hook must be literally true for every case it covers.** A punchy hook that overstates gets corrected in the comments and costs trust. Lesson: "Two wars never officially ended" was wrong for Japan–Russia (the state of war ended in 1956; only the peace treaty is missing), so it became "never got a peace treaty".
- Check every record, "biggest/fastest/only/first" claim and population or count twice: the book may be out of date (the An-225, "the world's largest plane", was destroyed in 2022). An outdated book fact can become the hook.

## 11. Quality gate (before building, and again before delivery)

1. **Hook test:** reading only the first line, you want to keep watching.
2. **Value test:** the viewer learns something true and worth knowing, not only a piece of trivia.
3. **Fact test:** every claim is in `FACTS.md`.
4. **Originality test:** own words, no book sentences or images, one point-of-view line.
5. **Style test, before any animation:** render 2–3 key frames with the style's own engine and tile them next to `styles/<slug>/poster.jpg` at the same size. Name the style's §1 features you can see in them (overprints, knife strokes, bristle tracks…). If a frame looks cheaper, or reads as a headline plus an icon on an empty card, redraw it before building on it. Passing the text checks never makes up for this one.
6. **Thumbnail test:** passes the 320 px check; no answer on it.
7. **Title test:** concrete, under the length limit, no answer, no art-technique words.
8. **Ending test:** the last beat ties the fun fact back to the subject (a loop is optional).
9. **Variety test:** the hook and the style differ from the last few films.
10. **No clipped text:** extract a full-size frame at the midpoint of every subtitle cue and every piece of text the style itself draws; every line wraps inside its box, ≥ 60 px from the frame edges. The library's text check doesn't catch text overflowing its box (missed in the Antarctica remake, 2026-10-23).

Then the library's own checks (DIRECTOR.md §11).

## 12. Reading the results

- **Short:** Studio → "Viewed vs. swiped away". About 70%+ is good. Low = the hook or first frame failed. Good but views stall = the middle drags (check the retention graph).
- **Landscape:** Studio → Reach. Impressions under about 100 = YouTube barely showed it (new channel, give it time). Impressions fine but click-through under about 2–3% = title or thumbnail.
- **Facebook:** 3-second views and average watch time.
- After about 10 films in this format, compare retention graphs and adjust the timings in §3–4 to what this channel's viewers do.

## Evidence behind these rules

- **Strong:** hook in the first 1–3 s (YouTube's own "viewed vs. swiped away" metric; consistent retention data); guessing before the answer improves memory of it (pretesting-effect research); shorter, enthusiastic videos hold people longer (Guo, Kim & Rubin 2014, 6.9M edX sessions); landscape early drop-off comes from openings that don't match the title.
- **Moderate:** question headlines get more clicks, but too-vague ones lose them (headline experiments, 2025 meta-analysis of ~9,000 tests); 50–60 s Shorts win only with high view duration (Galloway, 5,400 Shorts, 2023); captions +12% view time (Facebook test, secondary sources); every Shorts replay counts as a public view since 2025-03-31 (earnings use engaged views); YouTube's "inauthentic content" and Meta's unoriginal/duplicate rules (2025).
- **Practitioner advice / judgment:** re-hook at ~20 s, a visual change every 2–3 s, the answer at ~60% of the landscape cut, posting times, thumbnail word count.
- **This channel's own data (2026-10-21/22):** "By 1914, only 2 African countries were still free…" 366 views; statement or vague hooks 14–90; dense opening frames under 20.
- **First films made under these rules (2026-10-23, under a day old):** YouTube Shorts Caspian 698, Everest 443, two wars 210 views, against 1–90 for every earlier Short but one. Facebook: Caspian (alone, 23:10) 182 views; two wars and Everest posted as Reels in the same minute (08:00) got 34 and 1. Two Reels at once on one Page: the second gets almost nothing, so space them.
