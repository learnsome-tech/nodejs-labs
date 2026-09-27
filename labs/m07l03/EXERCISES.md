# Exercises — Diagnostic Profiling: CPU Profiler & Heap Snapshots

Lesson `m07l03` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m07l03)

## Exercise 1: Build an Automated Diagnostic Trigger Middleware

1. Query V8 heap statistics using getHeapStatistics and space APIs.
2. Connect an inspector session and enable the CPU profiler.
3. Execute a simulated workload and capture the profile tree.
4. Verify that profile nodes capture function names and timestamps.

> **Hint**: Invoke session.post('Profiler.start') and capture nodes on stop.


---

© LearnSome.tech · support@iwantto.learnsome.tech
