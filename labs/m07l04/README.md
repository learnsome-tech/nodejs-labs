# m07l04 · Cluster Architecture: node:cluster & Zero-Downtime

Module 7: Diagnostics & Production Hardening · lesson 7.4 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m07l04)

**Goal:** You can scale Node.js web applications across multiple CPU cores using node:cluster, coordinate port sharing, and execute zero-downtime rolling worker restarts.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l04-02](m07l04-02/) | Cluster Architecture | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Resilient Clustered Web Cluster

1. Design a primary cluster process that inspects CPU core counts.
2. Fork child workers and balance incoming HTTP traffic across ports.
3. Implement a rolling restart signal handler that replaces workers.
4. Verify that in flight requests complete before workers terminate.

> **Hint:** Listen to worker.on('listening') before invoking oldWorker.disconnect().

## Check yourself

- How does node:cluster allow multiple worker processes to bind to the same TCP port?
- What scheduling policy does Node.js use by default to distribute connections across cluster workers?
- Why must a rolling restart spawn a replacement worker before disconnecting the old worker?
- What is the difference between worker.disconnect() and worker.kill()?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
