# Exercises — Binary Data Manipulation: TypedArrays & Endianness

Lesson `m03l03` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m03l03)

## Exercise 1: Parse a custom binary packet header with DataView

1. Allocate a twelve byte ArrayBuffer representing a custom packet.
2. Write a two byte magic number and two byte packet length.
3. Write a four byte timestamp and four byte checksum in Big Endian.
4. Read and validate all fields using DataView explicit endianness.

> **Hint**: Pass false as the third parameter to DataView setters for Big Endian.


---

© LearnSome.tech · support@iwantto.learnsome.tech
