# Exercises — Native HTTP Server: Request & Response Lifecycles

Lesson `m06l01` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m06l01)

## Exercise 1: Build a Streaming HTTP File Download Endpoint

1. Create a native HTTP server listening on an ephemeral port.
2. Stream large request bodies asynchronously using for await.
3. Return JSON responses with appropriate headers and status codes.
4. Gracefully close the server and assert clean socket teardown.

> **Hint**: Pipe a readable file stream into the ServerResponse writable stream.


---

© LearnSome.tech · support@iwantto.learnsome.tech
