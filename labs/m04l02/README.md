# m04l02 · Writable Streams: Drain Events & highWaterMark

Module 4: Streams, Pipelines & Backpressure · lesson 4.2 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m04l02)

**Goal:** You can configure Writable streams, tune highWaterMark limits, detect write backpressure thresholds, and safely resume transmission using drain event listeners.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l02-02](m04l02-02/) | Writable Drain Mechanics | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Resilient Rate-Limited Stream Writer

1. Create a custom writable stream with a sixty four byte highWaterMark.
2. Implement a write loop writing consecutive numbers until write returns false.
3. Pause the loop and await the drain event before resuming writes.
4. End the stream and verify that all generated integers were recorded.

> **Hint:** Use await once(stream, 'drain') when write returns false.

## Check yourself

- What does a return value of false from writable.write() signify?
- When does a Writable stream emit the 'drain' event?
- What happens to memory consumption if a producer continues writing when write() returns false?
- How do writable.cork() and writable.uncork() improve network throughput?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
