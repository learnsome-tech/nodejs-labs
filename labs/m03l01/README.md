# m03l01 · Buffer Fundamentals: Slab Allocator & V8 Memory

Module 3: Buffers, Binary Data & Crypto · lesson 3.1 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m03l01)

**Goal:** You can explain how Node.js manages binary Buffers outside the V8 heap using a slab allocator pool, preventing memory fragmentation.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l01-02](m03l01-02/) | Buffer Slab | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Audit Buffer allocations for memory leak and security risks

1. Compare benchmark speeds between Buffer alloc and allocUnsafe.
2. Inspect raw bytes of uninitialized allocUnsafe buffers.
3. Allocate buffers exceeding half the slab size to verify direct heap.
4. Verify that large buffers receive independent ArrayBuffer instances.

> **Hint:** Buffers larger than half of Buffer poolSize bypass the slab.

## Check yourself

- Why does Node.js allocate Buffer memory outside the V eight heap?
- What is the threshold size below which Buffers are allocated from the shared slab?
- What security danger is associated with using Buffer.allocUnsafe()?
- How does modern Node.js Buffer relate to the standard JavaScript Uint8Array?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
