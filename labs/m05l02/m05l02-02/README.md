# m05l02-02 · Recursive Dir Traversal

**Lesson:** [Directory Traversal: Recursive Readdir & fs.watch](https://learnsome.tech/learn/nodejs-course/m05l02) (lesson 5.2, module 5: Async File System & Concurrency) · Pro  
**Check:** Graded

## Goal

You can perform recursive directory scans using readdir with Dirent inspection and monitor file system changes using promise-based fs.watch and AbortController.

## Files

- [`starter/recursive_dir_traversal.ts`](starter/recursive_dir_traversal.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m05l02/m05l02-02/starter`
2. Read `recursive_dir_traversal.ts`.
3. Run it: `node recursive_dir_traversal.ts`.
4. Check it from the repository root: `./check m05l02-02`.

## Expected output

```text
Discovered files: 2
Discovered directories: 2
```

## How to check

`./check m05l02-02` copies `starter/` into a scratch directory and runs `node recursive_dir_traversal.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m05l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
