# Exercises — Native HTTP/2 Protocols: Multiplexed Streams & Push

Lesson `m06l03` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m06l03)

## Exercise 1: Build a High-Concurrency HTTP/2 Microservice Endpoint

1. Spin up an HTTP 2 server using createServer from node http2.
2. Establish an HTTP 2 client connection over a single TCP socket.
3. Fire multiple concurrent stream requests in parallel.
4. Assert that all streams resolve concurrently and close sessions.

> **Hint**: Invoke client.request({ ':path': '/path' }) for concurrent streams.


---

© LearnSome.tech · support@iwantto.learnsome.tech
