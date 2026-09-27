# Exercises — Transform Streams: Custom Packet Decoding & Codecs

Lesson `m04l04` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m04l04)

## Exercise 1: Build a Length-Prefixed Binary Protocol Decoder

1. Create a custom Transform stream implementing length prefixed framing.
2. Read four byte big endian integer lengths followed by payload bytes.
3. Accumulate partial fragments across multiple stream chunks.
4. Emit decoded string payloads and assert complete data integrity.

> **Hint**: Check if buffer length is at least header plus payload length before slicing.


---

© LearnSome.tech · support@iwantto.learnsome.tech
