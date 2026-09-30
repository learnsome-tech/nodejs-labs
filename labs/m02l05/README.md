# m02l05 · Close Phase & Signal Dispatch: Sockets & Teardown

Module 2: The Event Loop & Scheduling · lesson 2.5 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m02l05)

**Goal:** You can describe how libuv executes close callbacks, dispatches POSIX process signals, and safely tears down active event handles.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m02l05-02](m02l05-02/) | Close Teardown | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement a graceful shutdown lifecycle coordinator

1. Listen for SIGTERM and SIGINT signals on the process object.
2. Close active HTTP server connections using server dot close.
3. Drain database connection pools and flush telemetry spans.
4. Exit cleanly with status zero after completing teardown tasks.

> **Hint:** Invoke process dot exit zero once all teardown promises resolve.

## Check yourself

- What is the primary responsibility of the libuv Close Callbacks phase?
- Which POSIX signal is issued by Kubernetes when requesting container termination?
- How does process.on('beforeExit') differ from process.on('exit')?
- Why must cleanup logic inside a process.on('exit') listener be purely synchronous?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
