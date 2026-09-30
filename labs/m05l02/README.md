# m05l02 · Directory Traversal: Recursive Readdir & fs.watch

Module 5: Async File System & Concurrency · lesson 5.2 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m05l02)

**Goal:** You can perform recursive directory scans using readdir with Dirent inspection and monitor file system changes using promise-based fs.watch and AbortController.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l02-02](m05l02-02/) | Recursive Dir Traversal | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Resilient File Change Event Streamer

1. Create a temporary directory structure with deep nested subfolders.
2. Start a file watcher using watch from node fs promises.
3. Write and modify files inside the watched directory hierarchy.
4. Capture change events using an async loop and abort cleanly.

> **Hint:** Consume watch using for await and cancel via signal.abort().

## Check yourself

- Why is using { withFileTypes: true } in readdir significantly faster than calling stat() on each file?
- How does recursive: true in fs.promises.readdir differ from manual directory traversal?
- What operating system mechanisms underpin fs.watch on Linux and macOS?
- Why must file watchers be paired with an AbortSignal in server environments?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
