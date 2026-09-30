# m03l02 · Buffer Encodings: UTF-8, Hex, Base64 & Slicing

Module 3: Buffers, Binary Data & Crypto · lesson 3.2 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m03l02)

**Goal:** You can transform Buffers across UTF-8, Hex, and Base64 representations, and leverage subarray for zero-copy slicing vs copy mutations.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l02-02](m03l02-02/) | Buffer Encodings | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Decode multi-chunk UTF-8 streams using StringDecoder

1. Create a multi byte emoji character encoded into a UTF-8 Buffer.
2. Split the buffer into partial slices midway through the character.
3. Show that buffer dot toString produces corrupted replacement glyphs.
4. Process slices with StringDecoder to reconstruct the intact emoji.

> **Hint:** Import StringDecoder from node colon string decoder.

## Check yourself

- Why does Buffer.subarray() not allocate new memory?
- What problem does StringDecoder solve when reading chunked network streams?
- How many hex characters represent a single byte in Hex encoding?
- What risk is introduced by retaining a reference to a small subarray slice?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
