# Exercises — Worker Threads: worker_threads & SharedArrayBuffer

Lesson `m05l04` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l04)

## Exercise 1: Build a Shared-Memory Multi-Threaded Accumulator

1. Allocate a SharedArrayBuffer for thread safe state synchronization.
2. Spawn multiple worker threads passing the shared buffer reference.
3. Perform synchronized atomic counter increments across all workers.
4. Verify that race conditions are prevented and final sums are exact.

> **Hint**: Use Atomics.add to increment the shared integer without race conditions.


---

© LearnSome.tech · support@iwantto.learnsome.tech
