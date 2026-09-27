# Exercises — Asynchronous File I/O: node:fs/promises & Handles

Lesson `m05l01` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l01)

## Exercise 1: Build a Concurrent Safe File Record Appender

1. Open a binary data file using open from node fs promises.
2. Write structured binary records at explicit byte offsets.
3. Read records back into preallocated Uint8Array buffers.
4. Ensure file handles are safely closed and resources released.

> **Hint**: Pass the current file size as the position argument to handle.write.


---

© LearnSome.tech · support@iwantto.learnsome.tech
