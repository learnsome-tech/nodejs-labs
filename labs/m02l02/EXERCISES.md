# Exercises — Microtask Queues: process.nextTick vs Promise Timing

Lesson `m02l02` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m02l02)

## Exercise 1: Diagnose and fix event loop starvation caused by nextTick

1. Write a recursive function scheduling work via process nextTick.
2. Observe that an accompanying setTimeout timer never executes.
3. Refactor the recursive recursion to use setImmediate instead.
4. Verify the timer executes concurrently with the background task.

> **Hint**: Replace process dot nextTick with setImmediate to yield control.


---

© LearnSome.tech · support@iwantto.learnsome.tech
