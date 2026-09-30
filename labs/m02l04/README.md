# m02l04 · Poll & Check Phases: I/O Callbacks & setImmediate

Module 2: The Event Loop & Scheduling · lesson 2.4 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m02l04)

**Goal:** You can explain how the poll phase retrieves I/O events, blocks when idle, and transitions directly to the check phase for setImmediate execution.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l04-02](m02l04-02/) | Poll Check Cycle | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build an I/O starvation detector using poll and check

1. Author an asynchronous server handling incoming HTTP requests.
2. Schedule a setImmediate loop tracking elapsed turn duration.
3. Simulate blocking synchronous work in a request handler.
4. Measure how poll phase latency increases during thread blocks.

> **Hint:** Compare the delta between scheduled and actual immediate execution.

## Check yourself

- How does libuv determine how long to sleep during the poll phase?
- Why does the poll phase skip sleeping when setImmediate callbacks are queued?
- What makes setImmediate more predictable than setTimeout(fn, 0) inside I/O callbacks?
- Which operating system API does libuv use on Linux to poll file descriptors?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
