# Exercises — Thread Pooling: Piscina & CPU-Bound Workload Pools

Lesson `m05l05` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l05)

## Exercise 1: Build a Resilient Multi-Thread Task Queue

1. Construct a worker pool maintaining two warm worker threads.
2. Queue multiple tasks exceeding total pool thread concurrency.
3. Dispatch jobs to idle workers and return promises to callers.
4. Verify that all queued jobs resolve and pool terminates cleanly.

> **Hint**: Track idle worker instances in an array and shift when work arrives.


---

© LearnSome.tech · support@iwantto.learnsome.tech
