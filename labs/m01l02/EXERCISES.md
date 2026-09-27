# Exercises — libuv Architecture: Event Demultiplexer & Thread Pool

Lesson `m01l02` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m01l02)

## Exercise 1: Benchmarking thread pool concurrency with PBKDF2

1. Author a benchmark script executing eight concurrent pbkdf2 calls.
2. Time total elapsed milliseconds with default four thread workers.
3. Set UV THREADPOOL SIZE to eight and rerun the benchmark.
4. Compare throughput gains when thread count matches workload count.

> **Hint**: Prefix your node execution with UV THREADPOOL SIZE equals eight.


---

© LearnSome.tech · support@iwantto.learnsome.tech
