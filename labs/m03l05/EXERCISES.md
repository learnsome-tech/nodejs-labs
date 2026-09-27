# Exercises — Native Compression: node:zlib & Streaming Codecs

Lesson `m03l05` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m03l05)

## Exercise 1: Build a Streaming Gzip Archive Pipeline

1. Create a readable stream from a multi megabyte string buffer.
2. Pipe data through createGzip using pipeline from stream promises.
3. Pipe into a custom writable sink stream collecting binary chunks.
4. Validate that the decompressed output matches the original input.

> **Hint**: Chain readable source, createGzip, and destination sink using pipeline.


---

© LearnSome.tech · support@iwantto.learnsome.tech
