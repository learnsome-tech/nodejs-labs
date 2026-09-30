# m02l02 · Microtask Queues: process.nextTick vs Promise Timing

Module 2: The Event Loop & Scheduling · lesson 2.2 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m02l02)

**Goal:** You can explain the priority hierarchy between process.nextTick, Promise microtasks, and macrotasks, avoiding event loop starvation.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l02-02](m02l02-02/) | Microtask Priority | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Diagnose and fix event loop starvation caused by nextTick

1. Write a recursive function scheduling work via process nextTick.
2. Observe that an accompanying setTimeout timer never executes.
3. Refactor the recursive recursion to use setImmediate instead.
4. Verify the timer executes concurrently with the background task.

> **Hint:** Replace process dot nextTick with setImmediate to yield control.

## Check yourself

- Why does process.nextTick execute before Promise.resolve().then() in Node.js?
- When does Node.js drain the microtask queues during the event loop lifecycle?
- What causes event loop starvation when using recursive process.nextTick calls?
- Why is setImmediate preferred over process.nextTick for recursive asynchronous loops?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
