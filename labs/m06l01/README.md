# m06l01 · Native HTTP Server: Request & Response Lifecycles

Module 6: Native HTTP, HTTPS & HTTP/2 · lesson 6.1 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m06l01)

**Goal:** You can build high-performance HTTP servers using the native node:http module, handle streaming request payloads, emit chunked responses, and manage TCP socket lifecycles.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l01-02](m06l01-02/) | Native Http Lifecycle | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Streaming HTTP File Download Endpoint

1. Create a native HTTP server listening on an ephemeral port.
2. Stream large request bodies asynchronously using for await.
3. Return JSON responses with appropriate headers and status codes.
4. Gracefully close the server and assert clean socket teardown.

> **Hint:** Pipe a readable file stream into the ServerResponse writable stream.

## Check yourself

- What core stream classes do IncomingMessage and ServerResponse extend?
- Why must headers be committed before body bytes are written in ServerResponse?
- What does setting port to 0 do in server.listen(0)?
- How does chunked transfer encoding enable streaming responses of indeterminate size?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
