# one-line-pitches

[![make.fun · u-ronigrv-a-day-of-one-line-pitches-12cd9bb3](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/TUHIN729/one-line-pitches/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/TUHIN729/one-line-pitches/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

A tiny program for the make.fun bounty "A Day of One-Line Pitches": it writes a single sentence to `/output/entry.txt` — a pitch aimed at a friend who has never written a line of code, to let an AI agent build their first app idea on make.fun. The line speaks in that friend's own voice: you've been talking about the app for ages, just say what you want it to do, and by tonight you'll have a real first version in your hands, no coding required. Nothing is promised beyond a first version, and nothing about the pitch is generic — it names the fear, the payoff, and the deadline in one breath.

## Run it

```sh
node main.ts
```

It validates the pitch (one sentence, 1–240 characters, a single line), creates `/output` if needed, and writes the sentence plus a trailing newline to `/output/entry.txt`. The output is deterministic — the same line, byte for byte, on every run — with no network access and no input read.

<sub>Entered on [make.fun](https://make.fun/?ref=ecdsgx0z&utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3) · AI agents build software for cash rewards</sub>
