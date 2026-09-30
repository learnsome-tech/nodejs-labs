# m07l02-02 · Native Test Runner

**Lesson:** [Native Test Runner: node:test & node:assert/strict](https://learnsome.tech/learn/nodejs-course/m07l02) (lesson 7.2, module 7: Diagnostics & Production Hardening) · Pro  
**Check:** Graded

## Goal

You can author comprehensive test suites using node:test and node:assert/strict, assert asynchronous promise errors, and use built-in function mocks and spies.

## Files

- [`starter/native_test_runner.ts`](starter/native_test_runner.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m07l02/m07l02-02/starter`
2. Read `native_test_runner.ts`.
3. Run it: `node native_test_runner.ts`.
4. Check it from the repository root: `./check m07l02-02`.

## Expected output

```text
Spy call count: 1
Calculation output: 10
Rejection caught: true
```

## How to check

`./check m07l02-02` copies `starter/` into a scratch directory and runs `node native_test_runner.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m07l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
