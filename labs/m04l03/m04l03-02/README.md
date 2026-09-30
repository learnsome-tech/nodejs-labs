# m04l03-02 · Stream Backpressure

**Lesson:** [Backpressure Engineering: Handling Mismatched I/O](https://learnsome.tech/learn/nodejs-course/m04l03) (lesson 4.3, module 4: Streams, Pipelines & Backpressure) · Pro  
**Check:** Graded

## Goal

You can design and diagnose streaming systems with mismatched producer and consumer speeds, managing backpressure to maintain constant memory consumption.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/stream_backpressure.ts`](starter/stream_backpressure.ts): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m04l03/m04l03-02/starter`
2. Read `stream_backpressure.ts`.
3. Run it: `node stream_backpressure.ts`.
4. Check it from the repository root: `./check m04l03-02`.

## Expected output

```text
Items: 8, Pauses: 8, Drains: 7
```

## How to check

`./check m04l03-02` copies `starter/` into a scratch directory and runs `node stream_backpressure.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m04l03) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
