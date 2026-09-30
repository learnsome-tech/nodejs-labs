# m03l01-02 · Buffer Slab

**Lesson:** [Buffer Fundamentals: Slab Allocator & V8 Memory](https://learnsome.tech/learn/nodejs-course/m03l01) (lesson 3.1, module 3: Buffers, Binary Data & Crypto) · Pro  
**Check:** Graded

## Goal

You can explain how Node.js manages binary Buffers outside the V8 heap using a slab allocator pool, preventing memory fragmentation.

## Files

- [`starter/buffer_slab.ts`](starter/buffer_slab.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m03l01/m03l01-02/starter`
2. Read `buffer_slab.ts`.
3. Run it: `node buffer_slab.ts`.
4. Check it from the repository root: `./check m03l01-02`.

## Expected output

```text
Buffer pool size: 65536
Shared slab buffer: true
Second buffer offset: true
```

## How to check

`./check m03l01-02` copies `starter/` into a scratch directory and runs `node buffer_slab.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m03l01) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
