# m04l01-02 · Readable Stream Modes

**Lesson:** [Stream Mechanics: Readable Streams & Flowing Modes](https://learnsome.tech/learn/nodejs-course/m04l01) (lesson 4.1, module 4: Streams, Pipelines & Backpressure) · Pro  
**Check:** Graded

## Goal

You can construct and manage Node.js Readable streams, controlling flowing and paused execution modes and consuming data via async iteration and event handlers.

## Files

- [`starter/readable_stream_modes.ts`](starter/readable_stream_modes.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m04l01/m04l01-02/starter`
2. Read `readable_stream_modes.ts`.
3. Run it: `node readable_stream_modes.ts`.
4. Check it from the repository root: `./check m04l01-02`.

## Expected output

```text
Initial flowing: null
Active flowing: true
Collected chunks: payload-a, payload-b
```

## How to check

`./check m04l01-02` copies `starter/` into a scratch directory and runs `node readable_stream_modes.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m04l01) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
