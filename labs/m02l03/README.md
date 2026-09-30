# m02l03 · Timers Phase: setTimeout, Min-Heap Scheduling & Drift

Module 2: The Event Loop & Scheduling · lesson 2.3 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m02l03)

**Goal:** You can explain how libuv schedules timers using a min-heap, calculate and mitigate timer drift, and cancel active handles with clear and unref.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l03-02](m02l03-02/) | Timer Scheduling | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Mitigate timer drift with drift compensation loops

1. Schedule a recurring task every hundred milliseconds.
2. Measure variance between expected interval and actual elapsed time.
3. Compute negative drift compensation for subsequent setTimeout calls.
4. Apply unref to the timer handle to allow clean process exits.

> **Hint:** Subtract measured latency from the next interval delay.

## Check yourself

- What data structure does libuv use to manage timers in logarithmic time?
- Why do Node.js timers represent minimum delays rather than exact execution guarantees?
- What does calling unref() on a timer handle accomplish?
- How can CPU-intensive synchronous operations cause timer drift?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
