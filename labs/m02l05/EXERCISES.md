# Exercises — Close Phase & Signal Dispatch: Sockets & Teardown

Lesson `m02l05` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m02l05)

## Exercise 1: Implement a graceful shutdown lifecycle coordinator

1. Listen for SIGTERM and SIGINT signals on the process object.
2. Close active HTTP server connections using server dot close.
3. Drain database connection pools and flush telemetry spans.
4. Exit cleanly with status zero after completing teardown tasks.

> **Hint**: Invoke process dot exit zero once all teardown promises resolve.


---

© LearnSome.tech · support@iwantto.learnsome.tech
