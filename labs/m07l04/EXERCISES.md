# Exercises — Cluster Architecture: node:cluster & Zero-Downtime

Lesson `m07l04` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m07l04)

## Exercise 1: Build a Resilient Clustered Web Cluster

1. Design a primary cluster process that inspects CPU core counts.
2. Fork child workers and balance incoming HTTP traffic across ports.
3. Implement a rolling restart signal handler that replaces workers.
4. Verify that in flight requests complete before workers terminate.

> **Hint**: Listen to worker.on('listening') before invoking oldWorker.disconnect().


---

© LearnSome.tech · support@iwantto.learnsome.tech
