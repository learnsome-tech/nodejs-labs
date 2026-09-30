# m04l03 · Backpressure Engineering: Handling Mismatched I/O

Module 4: Streams, Pipelines & Backpressure · lesson 4.3 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m04l03)

**Goal:** You can design and diagnose streaming systems with mismatched producer and consumer speeds, managing backpressure to maintain constant memory consumption.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l03-02](m04l03-02/) | Stream Backpressure | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement Manual Flow Control with Pause and Resume

1. Create an aggressive readable stream generating thousands of strings.
2. Attach a delayed writable stream with small buffer limits.
3. Implement manual backpressure checks using pause, write, and drain.
4. Validate that process resident set size memory remains stable.

> **Hint:** Check the boolean return value of writable.write and pause readable if false.

## Check yourself

- What is backpressure, and why is it essential in stream-based architectures?
- What should a custom Readable stream do when this.push() returns false?
- Why does consuming a Readable via raw 'data' events without pause() cause memory leaks?
- How does the pipe() method coordinate backpressure between readable and writable streams?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
