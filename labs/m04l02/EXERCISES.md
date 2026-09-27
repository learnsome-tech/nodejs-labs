# Exercises — Writable Streams: Drain Events & highWaterMark

Lesson `m04l02` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m04l02)

## Exercise 1: Build a Resilient Rate-Limited Stream Writer

1. Create a custom writable stream with a sixty four byte highWaterMark.
2. Implement a write loop writing consecutive numbers until write returns false.
3. Pause the loop and await the drain event before resuming writes.
4. End the stream and verify that all generated integers were recorded.

> **Hint**: Use await once(stream, 'drain') when write returns false.


---

© LearnSome.tech · support@iwantto.learnsome.tech
