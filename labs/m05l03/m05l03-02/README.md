# m05l03-02 · Child Process Spawn

**Lesson:** [Child Processes: spawn, execFile, fork & IPC](https://learnsome.tech/learn/nodejs-course/m05l03) (lesson 5.3, module 5: Async File System & Concurrency) · Pro  
**Check:** Graded

## Goal

You can safely execute external processes using spawn and execFile, prevent shell injection attacks, and orchestrate dedicated Node worker processes using fork and IPC channels.

## Files

- [`starter/child_process_spawn.ts`](starter/child_process_spawn.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m05l03/m05l03-02/starter`
2. Read `child_process_spawn.ts`.
3. Run it: `node child_process_spawn.ts`.
4. Check it from the repository root: `./check m05l03-02`.

## Expected output

```text
Exit code: 0
Standard output: worker:ready
Standard error: worker:warn
```

## How to check

`./check m05l03-02` copies `starter/` into a scratch directory and runs `node child_process_spawn.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m05l03) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
