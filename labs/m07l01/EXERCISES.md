# Exercises — Global Error Trapping: uncaughtException & Exits

Lesson `m07l01` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m07l01)

## Exercise 1: Build a Synchronous Crash Reporter and Exit Trap

1. Register an uncaughtExceptionMonitor listener for diagnostic logs.
2. Trigger an uncaught exception from an asynchronous timer turn.
3. Verify that telemetry is logged while exit semantics remain fatal.
4. Ensure unhandled promise rejections are handled with proper exits.

> **Hint**: Write crash metadata synchronously using fs.writeSync to file descriptor 2.


---

© LearnSome.tech · support@iwantto.learnsome.tech
