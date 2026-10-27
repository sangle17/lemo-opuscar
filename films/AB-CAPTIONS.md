# A/B test: burned-in captions on Shorts (started 2026-10-27)

User decision 2026-10-27: test burned-in captions on half of the 12 draft Shorts. Until the result is in, CHANNEL-RULES §2/§5 (captions only as .srt) still holds for every other film. Every Short keeps its `.srt` either way. All 12 also get the new first 2–3 s from `films/FIRST-FRAME.md`, so the only planned difference between the groups is the caption strip.

| Group A: caption strip burned in | Group B: no strip (.srt only) |
|---|---|
| austria-short-vienna-1913 (Map Room) | belgium-short-baarle-front-door (Map Room) |
| caspian-short-monster (Map Room) | caspian-short-nobel (Map Room) |
| aztecs-short-moctezuma-pension (Map Room) | everest-short-k2 (Map Room) |
| everest-short-dots (Map Room) | everest-short-seafloor (Map Room) |
| france-short-pheasant-island (Atlas Engraving) | argentina-short-antarctica (Map Room) |
| austria-short-otzi (Atlas Engraving) | india-short-dahala-khagrabari (Atlas Engraving) |

Caption strip (FIRST-FRAME.md): the style's own lettering (Map Room: its STYLE §4 dark plate with the signal edge; Atlas Engraving: a paper slip with Bodoni italic, a test-only departure from STYLE §4), 3–6-word chunks from frame 0, placed at 64–74% of the frame height (clear of the bottom 15%).

## Reading the result
Post A and B Shorts alternately, at the same slots. After each has ~7 days, compare with `lemo-publisher/scripts/yt_analytics.py --retention`: engagedViews/views ("stayed"), averageViewPercentage, and relativeRetentionPerformance at the start, middle and end. Topic pairs (Monster/Nobel, dots/K2) make the comparison fairer. Six against six is small: treat a clear gap (≥ 10 points in "stayed" or average %) as a signal, not proof.
