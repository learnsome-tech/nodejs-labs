# m04l05 · Stream Pipelines: pipeline, AbortSignal & Teardown

Module 4: Streams, Pipelines & Backpressure · lesson 4.5 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m04l05)

**Goal:** You can orchestrate resilient multi-stage stream pipelines using pipeline from node:stream/promises, handle graceful cancellations with AbortSignal, and prevent resource leaks.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l05-02](m04l05-02/) | Stream Pipeline Abort | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Resilient Abortable Streaming Service

1. Construct a multi stage stream pipeline with an AbortController.
2. Simulate an unhandled read error halfway through transmission.
3. Catch the resulting exception using standard try catch blocks.
4. Assert that all upstream and downstream streams were destroyed.

> **Hint:** Pass { signal: controller.signal } as the final argument to pipeline.

## Check yourself

- Why does legacy pipe() lead to resource leaks when intermediate streams throw errors?
- How does pipeline from node:stream/promises guarantee proper stream destruction?
- What exception does pipeline reject with when an AbortSignal is triggered?
- Why is passing an AbortSignal into pipeline essential for HTTP server implementations?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
