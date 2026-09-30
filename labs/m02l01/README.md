# m02l01 · Event Loop Lifecycle: The Six Phases & libuv uv_run

Module 2: The Event Loop & Scheduling · lesson 2.1 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m02l01)

**Goal:** You can trace the execution lifecycle of the libuv event loop across its six distinct phases and describe how uv_run orchestrates asynchronous callbacks.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l01-02](m02l01-02/) | Event Loop Phases | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Trace event loop phase order using timers and immediate

1. Wrap setTimeout and setImmediate inside a fs readFile callback.
2. Log execution order to verify that setImmediate runs before timer.
3. Add a process nextTick callback inside the immediate handler.
4. Observe how nextTick interrupts before the subsequent loop tick.

> **Hint:** Inside an I/O callback, setImmediate always executes first.

## Check yourself

- What is the first phase executed during an event loop tick in libuv?
- Why does setImmediate execute before setTimeout when scheduled inside an I/O callback?
- What does the event loop do during the poll phase when no callbacks are pending?
- Under what condition does the Node.js event loop terminate and exit the process?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
