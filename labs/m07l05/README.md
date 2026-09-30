# m07l05 · Production Hardening: Graceful Shutdown & Docker

Module 7: Diagnostics & Production Hardening · lesson 7.5 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m07l05)

**Goal:** You can engineer production-ready Node.js container images, handle SIGTERM and SIGINT operating system signals, coordinate graceful request draining, and manage container memory boundaries.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m07l05-02](m07l05-02/) | Graceful Shutdown Docker | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Resilient Graceful Shutdown Controller

1. Handle SIGTERM and SIGINT signals in a native Node server.
2. Flip readiness health checks to 503 while draining requests.
3. Close HTTP servers and await active client connection drains.
4. Enforce a ten second force kill timeout to guarantee exit.

> **Hint:** Set a timer calling process.exit(1) if server.close takes too long.

## Check yourself

- Why does running Node.js as PID 1 in Docker containers cause signal-handling issues?
- What is the recommended sequence of operations during a graceful server shutdown?
- Why should containerized Node processes run as an unprivileged user rather than root?
- How does aligning max_old_space_size with Docker container memory limits prevent OOM kills?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
