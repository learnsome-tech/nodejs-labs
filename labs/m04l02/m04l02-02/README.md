# m04l02-02 · Writable Drain Mechanics

**Lesson:** [Writable Streams: Drain Events & highWaterMark](https://learnsome.tech/learn/nodejs-course/m04l02) (lesson 4.2, module 4: Streams, Pipelines & Backpressure) · Pro  
**Check:** Graded

## Goal

You can configure Writable streams, tune highWaterMark limits, detect write backpressure thresholds, and safely resume transmission using drain event listeners.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`starter/writable_drain_mechanics.ts`](starter/writable_drain_mechanics.ts): the listing from the lesson
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m04l02/m04l02-02/starter`
2. Read `writable_drain_mechanics.ts`.
3. Run it: `node writable_drain_mechanics.ts`.
4. Check it from the repository root: `./check m04l02-02`.

## Expected output

```text
Initial write ok: false
Drain event fired: true
Total bytes written: 16
```

## How to check

`./check m04l02-02` copies `starter/` into a scratch directory and runs `node writable_drain_mechanics.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m04l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
