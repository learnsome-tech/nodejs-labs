<img src="https://learnsome.tech/logo.png" width="48" alt="LearnSome.tech">

# Node.js Internals & Backend Services

7 modules, 35 lessons: V8 Engine & Node.js Architecture; The Event Loop & Scheduling; Buffers, Binary Data & Crypto; Streams, Pipelines & Backpressure; Async File System & Concurrency; Native HTTP, HTTPS & HTTP/2; Diagnostics & Production Hardening.

## Watch and read

- **Course page**: [https://learnsome.tech/courses/nodejs-course](https://learnsome.tech/courses/nodejs-course)
- **Video player**: [https://learnsome.tech/courses/nodejs-course/watch](https://learnsome.tech/courses/nodejs-course/watch)
- **Handbook PDF**: [https://learnsome.tech/handbooks/nodejs/book.pdf](https://learnsome.tech/handbooks/nodejs/book.pdf)
- **On-site handbook**: [https://learnsome.tech/courses/nodejs-course/book](https://learnsome.tech/courses/nodejs-course/book)

## What is in this repository

This repository contains code artifacts, exercises and reference files for the lessons in this course.
35 lessons include a `labs/<lessonId>/` folder.
Each folder is named after the lesson identifier (e.g. `labs/m01l01/`) and contains the
artifact files shown in the course video, an `EXERCISES.md` with hands-on tasks, and
sub-directories named by artifact reference (e.g. `m01l01-02/`).

## Lessons

| # | Lesson | Watch | Labs | Handbook |
|---|--------|-------|------|----------|
| | **V8 Engine & Node.js Architecture** | | | |
| 1 | V8 Engine & JIT Pipeline: Bytecode & Turbofan | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m01l01) | [labs/m01l01/](labs/m01l01/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-1-1) |
| 2 | libuv Architecture: Event Demultiplexer & Thread Pool | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m01l02) | [labs/m01l02/](labs/m01l02/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-1-2) |
| 3 | Node.js Process Architecture: Memory & Heap Spaces | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m01l03) | [labs/m01l03/](labs/m01l03/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-1-3) |
| 4 | Native Module Systems: ESM Loader Hooks vs CommonJS | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m01l04) | [labs/m01l04/](labs/m01l04/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-1-4) |
| 5 | Runtime Configuration: CLI Flags & Native --env-file | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m01l05) | [labs/m01l05/](labs/m01l05/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-1-5) |
| | **The Event Loop & Scheduling** | | | |
| 6 | Event Loop Lifecycle: The Six Phases & libuv uv_run | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m02l01) | [labs/m02l01/](labs/m02l01/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-2-1) |
| 7 | Microtask Queues: process.nextTick vs Promise Timing | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m02l02) | [labs/m02l02/](labs/m02l02/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-2-2) |
| 8 | Timers Phase: setTimeout, Min-Heap Scheduling & Drift | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m02l03) | [labs/m02l03/](labs/m02l03/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-2-3) |
| 9 | Poll & Check Phases: I/O Callbacks & setImmediate | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m02l04) | [labs/m02l04/](labs/m02l04/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-2-4) |
| 10 | Close Phase & Signal Dispatch: Sockets & Teardown | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m02l05) | [labs/m02l05/](labs/m02l05/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-2-5) |
| | **Buffers, Binary Data & Crypto** | | | |
| 11 | Buffer Fundamentals: Slab Allocator & V8 Memory | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m03l01) | [labs/m03l01/](labs/m03l01/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-3-1) |
| 12 | Buffer Encodings: UTF-8, Hex, Base64 & Slicing | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m03l02) | [labs/m03l02/](labs/m03l02/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-3-2) |
| 13 | Binary Data Manipulation: TypedArrays & Endianness | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m03l03) | [labs/m03l03/](labs/m03l03/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-3-3) |
| 14 | Cryptographic Primitives: node:crypto & Ciphers | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m03l04) | [labs/m03l04/](labs/m03l04/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-3-4) |
| 15 | Native Compression: node:zlib & Streaming Codecs | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m03l05) | [labs/m03l05/](labs/m03l05/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-3-5) |
| | **Streams, Pipelines & Backpressure** | | | |
| 16 | Stream Mechanics: Readable Streams & Flowing Modes | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m04l01) | [labs/m04l01/](labs/m04l01/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-4-1) |
| 17 | Writable Streams: Drain Events & highWaterMark | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m04l02) | [labs/m04l02/](labs/m04l02/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-4-2) |
| 18 | Backpressure Engineering: Handling Mismatched I/O | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m04l03) | [labs/m04l03/](labs/m04l03/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-4-3) |
| 19 | Transform Streams: Custom Packet Decoding & Codecs | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m04l04) | [labs/m04l04/](labs/m04l04/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-4-4) |
| 20 | Stream Pipelines: pipeline, AbortSignal & Teardown | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m04l05) | [labs/m04l05/](labs/m04l05/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-4-5) |
| | **Async File System & Concurrency** | | | |
| 21 | Asynchronous File I/O: node:fs/promises & Handles | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l01) | [labs/m05l01/](labs/m05l01/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-5-1) |
| 22 | Directory Traversal: Recursive Readdir & fs.watch | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l02) | [labs/m05l02/](labs/m05l02/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-5-2) |
| 23 | Child Processes: spawn, execFile, fork & IPC | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l03) | [labs/m05l03/](labs/m05l03/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-5-3) |
| 24 | Worker Threads: worker_threads & SharedArrayBuffer | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l04) | [labs/m05l04/](labs/m05l04/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-5-4) |
| 25 | Thread Pooling: Piscina & CPU-Bound Workload Pools | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l05) | [labs/m05l05/](labs/m05l05/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-5-5) |
| | **Native HTTP, HTTPS & HTTP/2** | | | |
| 26 | Native HTTP Server: Request & Response Lifecycles | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m06l01) | [labs/m06l01/](labs/m06l01/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-6-1) |
| 27 | Routing & Middleware: Path Parsing & Async Context | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m06l02) | [labs/m06l02/](labs/m06l02/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-6-2) |
| 28 | Native HTTP/2 Protocols: Multiplexed Streams & Push | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m06l03) | [labs/m06l03/](labs/m06l03/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-6-3) |
| 29 | Native WebSockets: Bidirectional Real-Time Streams | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m06l04) | [labs/m06l04/](labs/m06l04/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-6-4) |
| 30 | TLS & HTTPS Encryption: Certificates & SNI Contexts | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m06l05) | [labs/m06l05/](labs/m06l05/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-6-5) |
| | **Diagnostics & Production Hardening** | | | |
| 31 | Global Error Trapping: uncaughtException & Exits | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m07l01) | [labs/m07l01/](labs/m07l01/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-7-1) |
| 32 | Native Test Runner: node:test & node:assert/strict | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m07l02) | [labs/m07l02/](labs/m07l02/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-7-2) |
| 33 | Diagnostic Profiling: CPU Profiler & Heap Snapshots | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m07l03) | [labs/m07l03/](labs/m07l03/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-7-3) |
| 34 | Cluster Architecture: node:cluster & Zero-Downtime | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m07l04) | [labs/m07l04/](labs/m07l04/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-7-4) |
| 35 | Production Hardening: Graceful Shutdown & Docker | [▶](https://learnsome.tech/courses/nodejs-course/watch?lesson=m07l05) | [labs/m07l05/](labs/m07l05/) | [§](https://learnsome.tech/courses/nodejs-course/book#lesson-7-5) |

## Exercises

Each lesson folder contains an `EXERCISES.md` with hands-on tasks drawn directly from the course material.
Open the file for a lesson to see the tasks and, where provided, hints.

---

© LearnSome.tech · support@iwantto.learnsome.tech
