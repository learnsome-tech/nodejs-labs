# Exercises — Buffer Fundamentals: Slab Allocator & V8 Memory

Lesson `m03l01` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m03l01)

## Exercise 1: Audit Buffer allocations for memory leak and security risks

1. Compare benchmark speeds between Buffer alloc and allocUnsafe.
2. Inspect raw bytes of uninitialized allocUnsafe buffers.
3. Allocate buffers exceeding half the slab size to verify direct heap.
4. Verify that large buffers receive independent ArrayBuffer instances.

> **Hint**: Buffers larger than half of Buffer poolSize bypass the slab.


---

© LearnSome.tech · support@iwantto.learnsome.tech
