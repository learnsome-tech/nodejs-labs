# m06l02 · Routing & Middleware: Path Parsing & Async Context

Module 6: Native HTTP, HTTPS & HTTP/2 · lesson 6.2 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m06l02)

**Goal:** You can implement path routing, compose middleware pipelines, and track distributed request contexts across asynchronous call stacks using AsyncLocalStorage.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l02-02](m06l02-02/) | Router Async Context | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Context-Aware Audit Logging Middleware

1. Create an HTTP server with custom regex based path routing.
2. Wrap request handlers in an AsyncLocalStorage execution scope.
3. Access contextual trace IDs deep within an async database helper.
4. Validate that concurrent requests maintain distinct isolated stores.

> **Hint:** Invoke als.run(store, callback) and access state with als.getStore().

## Check yourself

- What architectural problem does AsyncLocalStorage solve in asynchronous architectures?
- How does AsyncLocalStorage maintain context across await expressions?
- Why is using global variables dangerous for tracking per-request state in Node.js?
- How does WHATWG URL parsing simplify query string and path extraction?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
