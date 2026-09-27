# Exercises — Routing & Middleware: Path Parsing & Async Context

Lesson `m06l02` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m06l02)

## Exercise 1: Build a Context-Aware Audit Logging Middleware

1. Create an HTTP server with custom regex based path routing.
2. Wrap request handlers in an AsyncLocalStorage execution scope.
3. Access contextual trace IDs deep within an async database helper.
4. Validate that concurrent requests maintain distinct isolated stores.

> **Hint**: Invoke als.run(store, callback) and access state with als.getStore().


---

© LearnSome.tech · support@iwantto.learnsome.tech
