# m07l03-02 · Diagnostic Profiling

**Lesson:** [Diagnostic Profiling: CPU Profiler & Heap Snapshots](https://learnsome.tech/learn/nodejs-course/m07l03) (lesson 7.3, module 7: Diagnostics & Production Hardening) · Pro  
**Check:** Graded

## Goal

You can diagnose performance bottlenecks, capture CPU profiles, and analyze V8 heap space allocations using node:v8 and the programmatic node:inspector API.

## Files

- [`starter/diagnostic_profiling.ts`](starter/diagnostic_profiling.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m07l03/m07l03-02/starter`
2. Read `diagnostic_profiling.ts`.
3. Run it: `node diagnostic_profiling.ts`.
4. Check it from the repository root: `./check m07l03-02`.

## Expected output

```text
Heap limit allocated: true
Total heap used: true
CPU profile nodes captured: true
Workload executed: true
```

## How to check

`./check m07l03-02` copies `starter/` into a scratch directory and runs `node diagnostic_profiling.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m07l03) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
