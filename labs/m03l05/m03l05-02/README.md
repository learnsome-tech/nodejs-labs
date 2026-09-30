# m03l05-02 · Zlib Compression

**Lesson:** [Native Compression: node:zlib & Streaming Codecs](https://learnsome.tech/learn/nodejs-course/m03l05) (lesson 3.5, module 3: Buffers, Binary Data & Crypto) · Pro  
**Check:** Graded

## Goal

You can perform high-performance compression and decompression using node:zlib with Gzip and Brotli algorithms across in-memory buffers and streaming pipelines.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`starter/zlib_compression.ts`](starter/zlib_compression.ts): the listing from the lesson
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m03l05/m03l05-02/starter`
2. Read `zlib_compression.ts`.
3. Run it: `node zlib_compression.ts`.
4. Check it from the repository root: `./check m03l05-02`.

## Expected output

```text
Original size: 615 bytes
Gzip compressed: 68 bytes
Brotli compressed: 47 bytes
Data integrity verified: true
```

## How to check

`./check m03l05-02` copies `starter/` into a scratch directory and runs `node zlib_compression.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m03l05) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
