# m07l03 · Diagnostic Profiling: CPU Profiler & Heap Snapshots

Module 7: Diagnostics & Production Hardening · lesson 7.3 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m07l03)

**Goal:** You can diagnose performance bottlenecks, capture CPU profiles, and analyze V8 heap space allocations using node:v8 and the programmatic node:inspector API.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l03-02](m07l03-02/) | Diagnostic Profiling | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build an Automated Diagnostic Trigger Middleware

1. Query V8 heap statistics using getHeapStatistics and space APIs.
2. Connect an inspector session and enable the CPU profiler.
3. Execute a simulated workload and capture the profile tree.
4. Verify that profile nodes capture function names and timestamps.

> **Hint:** Invoke session.post('Profiler.start') and capture nodes on stop.

## Check yourself

- How does programmatic profiling with node:inspector differ from attaching external debuggers?
- What information does v8.getHeapSpaceStatistics() provide beyond total heap size?
- What is a retaining path in a V8 heap snapshot and why is it crucial for fixing memory leaks?
- Why must inspector sessions always be disconnected after profiling concludes?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
