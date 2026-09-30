# m07l01 · Global Error Trapping: uncaughtException & Exits

Module 7: Diagnostics & Production Hardening · lesson 7.1 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m07l01)

**Goal:** You can architect resilient crash-handling strategies using uncaughtExceptionMonitor, manage process exit lifecycles, and prevent corrupted state in production services.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l01-02](m07l01-02/) | Global Error Trapping | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Synchronous Crash Reporter and Exit Trap

1. Register an uncaughtExceptionMonitor listener for diagnostic logs.
2. Trigger an uncaught exception from an asynchronous timer turn.
3. Verify that telemetry is logged while exit semantics remain fatal.
4. Ensure unhandled promise rejections are handled with proper exits.

> **Hint:** Write crash metadata synchronously using fs.writeSync to file descriptor 2.

## Check yourself

- Why is continuing execution after an uncaughtException considered an anti-pattern?
- How does uncaughtExceptionMonitor differ from uncaughtException?
- What is the default behavior of modern Node.js when a Promise rejection is unhandled?
- Why must crash logging inside uncaughtException handlers be performed synchronously?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
