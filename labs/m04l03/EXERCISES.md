# Exercises — Backpressure Engineering: Handling Mismatched I/O

Lesson `m04l03` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m04l03)

## Exercise 1: Implement Manual Flow Control with Pause and Resume

1. Create an aggressive readable stream generating thousands of strings.
2. Attach a delayed writable stream with small buffer limits.
3. Implement manual backpressure checks using pause, write, and drain.
4. Validate that process resident set size memory remains stable.

> **Hint**: Check the boolean return value of writable.write and pause readable if false.


---

© LearnSome.tech · support@iwantto.learnsome.tech
