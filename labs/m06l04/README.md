# m06l04 · Native WebSockets: Bidirectional Real-Time Streams

Module 6: Native HTTP, HTTPS & HTTP/2 · lesson 6.4 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m06l04)

**Goal:** You can implement real-time bidirectional WebSocket servers and clients using native Node.js APIs, manage protocol upgrade handshakes, and parse WebSocket frames.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l04-02](m06l04-02/) | Websocket Handshake | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Resilient WebSocket Echo Protocol

1. Implement an HTTP upgrade handler validating Sec-WebSocket-Key.
2. Transmit HTTP 101 Switching Protocols headers over the TCP socket.
3. Construct and write an unmasked binary text frame to the socket.
4. Connect using global WebSocket and receive the payload message.

> **Hint:** Remember to call socket.destroy() when cleaning up upgraded sockets.

## Check yourself

- What HTTP status code and header signify a successful WebSocket upgrade?
- How is the Sec-WebSocket-Accept response header computed from the client key?
- Why are client-to-server WebSocket frames masked while server-to-client frames are not?
- Why must developers explicitly manage and destroy upgraded TCP sockets on server shutdown?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
