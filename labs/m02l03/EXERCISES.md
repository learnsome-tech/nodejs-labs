# Exercises — Timers Phase: setTimeout, Min-Heap Scheduling & Drift

Lesson `m02l03` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m02l03)

## Exercise 1: Mitigate timer drift with drift compensation loops

1. Schedule a recurring task every hundred milliseconds.
2. Measure variance between expected interval and actual elapsed time.
3. Compute negative drift compensation for subsequent setTimeout calls.
4. Apply unref to the timer handle to allow clean process exits.

> **Hint**: Subtract measured latency from the next interval delay.


---

© LearnSome.tech · support@iwantto.learnsome.tech
