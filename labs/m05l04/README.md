# m05l04 · Worker Threads: worker_threads & SharedArrayBuffer

Module 5: Async File System & Concurrency · lesson 5.4 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m05l04)

**Goal:** You can offload CPU-intensive tasks using worker_threads, coordinate thread execution, and manage zero-copy lockless data sharing using SharedArrayBuffer and Atomics.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l04-02](m05l04-02/) | Worker Threads Shared Mem | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Shared-Memory Multi-Threaded Accumulator

1. Allocate a SharedArrayBuffer for thread safe state synchronization.
2. Spawn multiple worker threads passing the shared buffer reference.
3. Perform synchronized atomic counter increments across all workers.
4. Verify that race conditions are prevented and final sums are exact.

> **Hint:** Use Atomics.add to increment the shared integer without race conditions.

## Check yourself

- How does memory isolation differ between child_process.fork() and worker_threads?
- Why does standard postMessage() introduce overhead when passing massive datasets to workers?
- What role does the Atomics object play when working with SharedArrayBuffer?
- When should a developer choose Worker Threads instead of standard async I/O in Node.js?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
