# m05l03 · Child Processes: spawn, execFile, fork & IPC

Module 5: Async File System & Concurrency · lesson 5.3 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m05l03)

**Goal:** You can safely execute external processes using spawn and execFile, prevent shell injection attacks, and orchestrate dedicated Node worker processes using fork and IPC channels.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l03-02](m05l03-02/) | Child Process Spawn | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Orchestrate an IPC Child Worker with Graceful Teardown

1. Spawn an external command using spawn without invoking a shell.
2. Stream standard output chunks into an asynchronous collector.
3. Handle non zero exit codes and child error events appropriately.
4. Establish an IPC message channel using fork for bidirectional ping.

> **Hint:** Listen to child.on('message') and respond with child.send().

## Check yourself

- Why does child_process.exec() pose a severe security vulnerability compared to execFile()?
- How does child_process.fork() differ from child_process.spawn()?
- What protocol enables bidirectional message passing between parent and forked processes?
- Why does running heavy CPU computations in a child process protect event loop responsiveness?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
