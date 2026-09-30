# m01l05-02 · Runtime Config

**Lesson:** [Runtime Configuration: CLI Flags & Native --env-file](https://learnsome.tech/learn/nodejs-course/m01l05) (lesson 1.5, module 1: V8 Engine & Node.js Architecture) · Free  
**Check:** Graded

## Goal

You can configure the Node.js runtime using command line flags, process arguments, and native .env file loading without third-party dependencies.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/runtime_config.ts`](starter/runtime_config.ts): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l05/m01l05-02/starter`
2. Read `runtime_config.ts`.
3. Run it: `node runtime_config.ts`.
4. Check it from the repository root: `./check m01l05-02`.

## Expected output

```text
Server port: 8080
Server host: 127.0.0.1
Production mode: true
```

## How to check

`./check m01l05-02` copies `starter/` into a scratch directory and runs `node runtime_config.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m01l05) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
