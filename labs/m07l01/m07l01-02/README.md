# m07l01-02 · Global Error Trapping

**Lesson:** [Global Error Trapping: uncaughtException & Exits](https://learnsome.tech/learn/nodejs-course/m07l01) (lesson 7.1, module 7: Diagnostics & Production Hardening) · Pro  
**Check:** Graded

## Goal

You can architect resilient crash-handling strategies using uncaughtExceptionMonitor, manage process exit lifecycles, and prevent corrupted state in production services.

## Files

- [`starter/global_error_trapping.ts`](starter/global_error_trapping.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m07l01/m07l01-02/starter`
2. Read `global_error_trapping.ts`.
3. Run it: `node global_error_trapping.ts`.
4. Check it from the repository root: `./check m07l01-02`.

## Expected output

```text
Exit code: 1
Captured monitor log: MONITOR:fatal_boom
Crashed safely: true
```

## How to check

`./check m07l01-02` copies `starter/` into a scratch directory and runs `node global_error_trapping.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m07l01) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
