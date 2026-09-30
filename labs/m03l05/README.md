# m03l05 · Native Compression: node:zlib & Streaming Codecs

Module 3: Buffers, Binary Data & Crypto · lesson 3.5 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m03l05)

**Goal:** You can perform high-performance compression and decompression using node:zlib with Gzip and Brotli algorithms across in-memory buffers and streaming pipelines.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l05-02](m03l05-02/) | Zlib Compression | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Streaming Gzip Archive Pipeline

1. Create a readable stream from a multi megabyte string buffer.
2. Pipe data through createGzip using pipeline from stream promises.
3. Pipe into a custom writable sink stream collecting binary chunks.
4. Validate that the decompressed output matches the original input.

> **Hint:** Chain readable source, createGzip, and destination sink using pipeline.

## Check yourself

- Why should synchronous zlib methods be avoided in high-concurrency production servers?
- When is Brotli compression preferable to Gzip, and what is its performance tradeoff?
- How does streaming compression prevent Node process out-of-memory crashes?
- Why is pipeline from node:stream/promises preferred over standard pipe for zlib streams?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
