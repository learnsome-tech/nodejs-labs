# m05l05 · Thread Pooling: Piscina & CPU-Bound Workload Pools

Module 5: Async File System & Concurrency · lesson 5.5 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m05l05)

**Goal:** You can design and operate worker thread pools, amortize thread initialization costs, manage task queues, and execute CPU-bound workloads at scale.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m05l05-02](m05l05-02/) | Worker Thread Pool | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Resilient Multi-Thread Task Queue

1. Construct a worker pool maintaining two warm worker threads.
2. Queue multiple tasks exceeding total pool thread concurrency.
3. Dispatch jobs to idle workers and return promises to callers.
4. Verify that all queued jobs resolve and pool terminates cleanly.

> **Hint:** Track idle worker instances in an array and shift when work arrives.

## Check yourself

- Why is creating a new Worker thread per incoming request considered an anti-pattern?
- How does a worker thread pool achieve lower latency compared to ad-hoc worker creation?
- What criteria should determine the maximum number of worker threads in a pool?
- What happens when more tasks are submitted to a thread pool than there are idle workers?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
