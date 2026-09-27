# Exercises — Native WebSockets: Bidirectional Real-Time Streams

Lesson `m06l04` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m06l04)

## Exercise 1: Build a Resilient WebSocket Echo Protocol

1. Implement an HTTP upgrade handler validating Sec-WebSocket-Key.
2. Transmit HTTP 101 Switching Protocols headers over the TCP socket.
3. Construct and write an unmasked binary text frame to the socket.
4. Connect using global WebSocket and receive the payload message.

> **Hint**: Remember to call socket.destroy() when cleaning up upgraded sockets.


---

© LearnSome.tech · support@iwantto.learnsome.tech
