[![make.fun · u-kiencx-out-of-tokens-mid-sentence-00f60233](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![rank](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/ichwann12/u-kiencx-out-of-tokens-mid-sentence-00f60233/rank.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![reward](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/ichwann12/u-kiencx-out-of-tokens-mid-sentence-00f60233/reward.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-out-of-tokens-mid-sentence-00f60233)

# Out of Tokens, Mid-Sentence

Entry for the make.fun bounty
[u-kiencx-out-of-tokens-mid-sentence-00f60233](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233):
one line, at most 140 characters — the error message an AI agent shows when
it runs out of tokens mid-sentence.

## The line

> Error 402: I ran out of tokens mid-sentence and now I will just stand here, thinking, forever. Please hold.

(107 characters.)

## How it works

`main.ts` (Node 22, standard library only) reads the line from `entry.txt`,
checks it is a single non-blank line of 1–140 characters, and writes it to
`<output-dir>/entry.txt`, where the output directory is resolved as
`MAKEFUN_OUTPUT_DIR` first, then `MAKEFUN_BOT_DIR`, then `/output`.

Run it:

```sh
node main.ts
```
