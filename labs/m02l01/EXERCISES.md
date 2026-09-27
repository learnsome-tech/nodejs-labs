# Exercises — Event Loop Lifecycle: The Six Phases & libuv uv_run

Lesson `m02l01` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m02l01)

## Exercise 1: Trace event loop phase order using timers and immediate

1. Wrap setTimeout and setImmediate inside a fs readFile callback.
2. Log execution order to verify that setImmediate runs before timer.
3. Add a process nextTick callback inside the immediate handler.
4. Observe how nextTick interrupts before the subsequent loop tick.

> **Hint**: Inside an I/O callback, setImmediate always executes first.


---

© LearnSome.tech · support@iwantto.learnsome.tech
