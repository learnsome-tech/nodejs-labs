# m07l02 · Native Test Runner: node:test & node:assert/strict

Module 7: Diagnostics & Production Hardening · lesson 7.2 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m07l02)

**Goal:** You can author comprehensive test suites using node:test and node:assert/strict, assert asynchronous promise errors, and use built-in function mocks and spies.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l02-02](m07l02-02/) | Native Test Runner | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Component Test Suite with Method Mocks

1. Write a test suite using describe and it from node test.
2. Assert deep equality of complex objects with assert.deepEqual.
3. Verify expected promise rejections using assert.rejects.
4. Spy on object methods using mock.method to check invocation counts.

> **Hint:** Invoke mock.method(target, 'methodName') and inspect mock.callCount().

## Check yourself

- What are the benefits of using node:test over external frameworks like Jest?
- Why is node:assert/strict preferred over the default node:assert module?
- How does assert.rejects() simplify testing asynchronous error conditions?
- How do mocks created with t.mock prevent cross-test contamination?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
