# m05l01 · Asynchronous File I/O: node:fs/promises & Handles

Module 5: Async File System & Concurrency · lesson 5.1 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m05l01)

**Goal:** You can perform asynchronous file system operations using node:fs/promises and low-level FileHandle instances with guaranteed descriptor cleanup and zero memory bloat.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l01-02](m05l01-02/) | Async File Handles | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Concurrent Safe File Record Appender

1. Open a binary data file using open from node fs promises.
2. Write structured binary records at explicit byte offsets.
3. Read records back into preallocated Uint8Array buffers.
4. Ensure file handles are safely closed and resources released.

> **Hint:** Pass the current file size as the position argument to handle.write.

## Check yourself

- What is the advantage of using a FileHandle over fs.promises.readFile()?
- What causes the 'EMFILE: too many open files' error in Node.js applications?
- Why must file handles always be closed in finally blocks?
- How does Node.js execute asynchronous file operations without blocking the event loop?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
