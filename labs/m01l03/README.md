# m01l03 · Node.js Process Architecture: Memory & Heap Spaces

Module 1: V8 Engine & Node.js Architecture · lesson 1.3 · Free · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m01l03)

**Goal:** You can inspect and monitor process memory structures including Resident Set Size, V8 heap spaces, external ArrayBuffers, and garbage collection behavior.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l03-02](m01l03-02/) | Memory Profile | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Monitor process memory and trigger allocation growth

1. Author a script logging process memory usage every hundred milliseconds.
2. Allocate large Buffer instances and record external memory growth.
3. Populate a large array of objects to observe heapUsed expansion.
4. Inspect how garbage collection recovers heap after clearing references.

> **Hint:** Use setInterval and process dot memoryUsage to track memory changes.

## Check yourself

- What is the difference between Resident Set Size and V eight heapUsed?
- Why do Node.js Buffer instances allocate memory outside the V eight heap?
- Which garbage collection algorithm collects short-lived objects in New Space?
- How can a Node.js process experience high RAM usage while heapUsed remains low?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
