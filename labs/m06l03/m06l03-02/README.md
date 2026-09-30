# m06l03-02 · Http2 Multiplexing

**Lesson:** [Native HTTP/2 Protocols: Multiplexed Streams & Push](https://learnsome.tech/learn/nodejs-course/m06l03) (lesson 6.3, module 6: Native HTTP, HTTPS & HTTP/2) · Pro  
**Check:** Graded

## Goal

You can design and deploy high-performance HTTP/2 servers and clients in Node.js, managing binary streams, multiplexing requests over single TCP sessions, and tuning flow control.

## Files

- [`starter/http2_multiplexing.ts`](starter/http2_multiplexing.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m06l03/m06l03-02/starter`
2. Read `http2_multiplexing.ts`.
3. Run it: `node http2_multiplexing.ts`.
4. Check it from the repository root: `./check m06l03-02`.

## Expected output

```text
HTTP2 response payload: h2:/api/metrics
Session closed successfully: true
```

## How to check

`./check m06l03-02` copies `starter/` into a scratch directory and runs `node http2_multiplexing.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m06l03) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
