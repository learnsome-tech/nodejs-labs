# m01l02 · libuv Architecture: Event Demultiplexer & Thread Pool

Module 1: V8 Engine & Node.js Architecture · lesson 1.2 · Free · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m01l02)

**Goal:** You can explain how libuv abstracts OS-level asynchronous I/O across platforms and orchestrates thread pool workers for blocking system calls.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l02-02](m01l02-02/) | Thread Pool Dispatch | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Benchmarking thread pool concurrency with PBKDF2

1. Author a benchmark script executing eight concurrent pbkdf2 calls.
2. Time total elapsed milliseconds with default four thread workers.
3. Set UV THREADPOOL SIZE to eight and rerun the benchmark.
4. Compare throughput gains when thread count matches workload count.

> **Hint:** Prefix your node execution with UV THREADPOOL SIZE equals eight.

## Check yourself

- Which operating system mechanism does libuv use on Linux for network polling?
- Why do asynchronous file system operations require the libuv thread pool?
- What is the default number of worker threads in the libuv thread pool?
- Which environment variable allows developers to increase the libuv thread pool size?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
