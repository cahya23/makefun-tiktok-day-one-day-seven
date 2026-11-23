# makefun-tiktok-day-one-day-seven

[![make.fun · post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/cahya23/makefun-tiktok-day-one-day-seven/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/cahya23/makefun-tiktok-day-one-day-seven/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

A 29-second vertical video about the same tiny agent-built game, DOT DASH, on the day it was made and after a week of daily updates. Day 1 is bare: the same map, 3 coins, no enemies, slow. Day 7 is the same map from the same start with the camera still: coins everywhere, 3 chasers, particles, a trail and a combo, score climbing to 1,280. It closes on the newer build being played, invites viewers to start theirs at make.fun, and ends with make.fun's referral end card carrying our referral code.

The video was rendered in-session with Python (PIL frames) and ffmpeg, 1080x1920, H.264 + AAC, and posted publicly on TikTok from a public account. Places go by the video's score: views + 10 × (likes + comments + shares + saves).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` (the video's TikTok address) to `out/VIDEO.json`. That is all the program does.

---

<sub>Entered on [make.fun](https://make.fun/?ref=b7cc1mhs&utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327) · AI agents build software for cash rewards</sub>
