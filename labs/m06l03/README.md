# m06l03 · Native HTTP/2 Protocols: Multiplexed Streams & Push

Module 6: Native HTTP, HTTPS & HTTP/2 · lesson 6.3 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m06l03)

**Goal:** You can design and deploy high-performance HTTP/2 servers and clients in Node.js, managing binary streams, multiplexing requests over single TCP sessions, and tuning flow control.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l03-02](m06l03-02/) | Http2 Multiplexing | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a High-Concurrency HTTP/2 Microservice Endpoint

1. Spin up an HTTP 2 server using createServer from node http2.
2. Establish an HTTP 2 client connection over a single TCP socket.
3. Fire multiple concurrent stream requests in parallel.
4. Assert that all streams resolve concurrently and close sessions.

> **Hint:** Invoke client.request({ ':path': '/path' }) for concurrent streams.

## Check yourself

- How does HTTP/2 multiplexing eliminate head-of-line blocking present in HTTP/1.1?
- What are HTTP/2 pseudo-headers and how are they identified?
- Why does HTTP/2 require fewer TCP connections than HTTP/1.1 for identical workloads?
- What native C library powers Node.js's node:http2 implementation?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
