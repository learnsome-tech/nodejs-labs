# Exercises — Production Hardening: Graceful Shutdown & Docker

Lesson `m07l05` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m07l05)

## Exercise 1: Build a Resilient Graceful Shutdown Controller

1. Handle SIGTERM and SIGINT signals in a native Node server.
2. Flip readiness health checks to 503 while draining requests.
3. Close HTTP servers and await active client connection drains.
4. Enforce a ten second force kill timeout to guarantee exit.

> **Hint**: Set a timer calling process.exit(1) if server.close takes too long.


---

© LearnSome.tech · support@iwantto.learnsome.tech
