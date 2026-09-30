# m04l01 · Stream Mechanics: Readable Streams & Flowing Modes

Module 4: Streams, Pipelines & Backpressure · lesson 4.1 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m04l01)

**Goal:** You can construct and manage Node.js Readable streams, controlling flowing and paused execution modes and consuming data via async iteration and event handlers.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l01-02](m04l01-02/) | Readable Stream Modes | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement an Async Iteration Stream Consumer

1. Create a readable stream from an array of JSON string payloads.
2. Consume the stream using an asynchronous for await loop.
3. Parse each JSON chunk and calculate cumulative metrics.
4. Handle end of stream and abort signals cleanly.

> **Hint:** Iterate directly over the stream instance with for await.

## Check yourself

- What is the initial value of readableFlowing when a Readable stream is instantiated?
- How does attaching a 'data' event listener affect stream flowing mode?
- Why is async iteration ('for await') safer for stream consumption than 'data' events?
- What method must a custom Readable implementation call to signal end-of-stream?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
