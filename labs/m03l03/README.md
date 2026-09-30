# m03l03 · Binary Data Manipulation: TypedArrays & Endianness

Module 3: Buffers, Binary Data & Crypto · lesson 3.3 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m03l03)

**Goal:** You can parse multi-byte binary structures using DataView and TypedArrays, handling Big-Endian and Little-Endian byte orders explicitly.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l03-02](m03l03-02/) | Binary Endianness | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Parse a custom binary packet header with DataView

1. Allocate a twelve byte ArrayBuffer representing a custom packet.
2. Write a two byte magic number and two byte packet length.
3. Write a four byte timestamp and four byte checksum in Big Endian.
4. Read and validate all fields using DataView explicit endianness.

> **Hint:** Pass false as the third parameter to DataView setters for Big Endian.

## Check yourself

- What is the difference between Big-Endian and Little-Endian byte order?
- Why is Big-Endian referred to as Network Byte Order?
- Why can using Uint32Array directly lead to bugs when parsing network packets?
- Which API allows developers to specify endianness explicitly per operation?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
