<p>
  <a href="https://learnsome.tech/courses/nodejs-course">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset=".github/assets/wordmark-inverse.svg">
      <img src=".github/assets/wordmark.svg" alt="LearnSome.tech" width="260">
    </picture>
  </a>
</p>

# Node.js Internals & Backend Services

**V8, the Event Loop, Streams & Backpressure, Native HTTP & Diagnostics**

7 modules, 35 lessons: V8 Engine & Node.js Architecture; The Event Loop & Scheduling; Buffers, Binary Data & Crypto; Streams, Pipelines & Backpressure; Async File System & Concurrency; Native HTTP, HTTPS & HTTP/2; Diagnostics & Production Hardening. Advanced level, about 2 hours.

This repository holds the labs of the LearnSome.tech course [Node.js Internals & Backend Services](https://learnsome.tech/courses/nodejs-course): each lab's starter files, a README with the goal, the steps and the expected output, and `./check`, which tests your work the way the site does.

## Start

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/learnsome-tech/nodejs-labs?quickstart=1)

- **Codespaces:** the badge opens this repository in a dev container with Node.js 24.21.0, as in the site's lab sandbox.
- **On your machine:**

  ```sh
  git clone https://github.com/learnsome-tech/nodejs-labs.git
  cd nodejs-labs
  npm ci
  ./check m01l01-02
  ```

  You need Node.js for `./check`, and for the labs themselves Node.js 24.21.0. Other versions mostly work, but only the sandbox's versions are sure to print what the site prints. VS Code's Dev Containers extension builds the same container as Codespaces (x86-64).

## Doing a lab

1. Open the lesson on LearnSome.tech and the lab folder beside it: `labs/<lesson>/<lab>/`. The lab README has the goal, the steps and the expected output.
2. Work in the lab's `starter/` folder.
3. From the repository root, run `./check <lab>` (for example `./check m01l01-02`), or `./check <lesson>` for all labs of a lesson, or `./check --all`. `./check --list` shows every lab and how it is checked.

`./check` runs your starter the way the site's lab sandbox does: in a scratch copy that is its working directory and `HOME`, with `LANG=C.UTF-8`, `TZ=UTC`, `input.txt` on standard input, 10 seconds and 256 KiB of output per stream. It then compares the output with the site's own rules, so a pass here is a pass on the site.

| Check | What `./check` does | Labs |
| --- | --- | --- |
| Graded | Runs the program and compares its output with `expected.txt`. | 35 |

## What is published, and what is not

Every lab's starter is the code the lesson shows on screen, which is also what the lab editor on the site opens with. Where that code is the whole program, such as a recorded shell session or a script from the video, it is published as it is: it is the lesson content. Nothing beyond the lesson is published. There are no reference solutions and no answers to the lesson exercises, and nothing the site keeps private.

Pro lessons' labs are here as starters too. LearnSome.tech runs and grades your labs in its sandbox, hosts the videos and keeps your progress; running and grading a Pro lab on the site needs Pro.

## Modules and lessons

### Module 1: V8 Engine & Node.js Architecture

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 1.1 | [V8 Engine & JIT Pipeline: Bytecode & Turbofan](https://learnsome.tech/learn/nodejs-course/m01l01) | [1 lab](labs/m01l01/) | Free |
| 1.2 | [libuv Architecture: Event Demultiplexer & Thread Pool](https://learnsome.tech/learn/nodejs-course/m01l02) | [1 lab](labs/m01l02/) | Free |
| 1.3 | [Node.js Process Architecture: Memory & Heap Spaces](https://learnsome.tech/learn/nodejs-course/m01l03) | [1 lab](labs/m01l03/) | Free |
| 1.4 | [Native Module Systems: ESM Loader Hooks vs CommonJS](https://learnsome.tech/learn/nodejs-course/m01l04) | [1 lab](labs/m01l04/) | Free |
| 1.5 | [Runtime Configuration: CLI Flags & Native --env-file](https://learnsome.tech/learn/nodejs-course/m01l05) | [1 lab](labs/m01l05/) | Free |

### Module 2: The Event Loop & Scheduling

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 2.1 | [Event Loop Lifecycle: The Six Phases & libuv uv_run](https://learnsome.tech/learn/nodejs-course/m02l01) | [1 lab](labs/m02l01/) | Pro |
| 2.2 | [Microtask Queues: process.nextTick vs Promise Timing](https://learnsome.tech/learn/nodejs-course/m02l02) | [1 lab](labs/m02l02/) | Pro |
| 2.3 | [Timers Phase: setTimeout, Min-Heap Scheduling & Drift](https://learnsome.tech/learn/nodejs-course/m02l03) | [1 lab](labs/m02l03/) | Pro |
| 2.4 | [Poll & Check Phases: I/O Callbacks & setImmediate](https://learnsome.tech/learn/nodejs-course/m02l04) | [1 lab](labs/m02l04/) | Pro |
| 2.5 | [Close Phase & Signal Dispatch: Sockets & Teardown](https://learnsome.tech/learn/nodejs-course/m02l05) | [1 lab](labs/m02l05/) | Pro |

### Module 3: Buffers, Binary Data & Crypto

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 3.1 | [Buffer Fundamentals: Slab Allocator & V8 Memory](https://learnsome.tech/learn/nodejs-course/m03l01) | [1 lab](labs/m03l01/) | Pro |
| 3.2 | [Buffer Encodings: UTF-8, Hex, Base64 & Slicing](https://learnsome.tech/learn/nodejs-course/m03l02) | [1 lab](labs/m03l02/) | Pro |
| 3.3 | [Binary Data Manipulation: TypedArrays & Endianness](https://learnsome.tech/learn/nodejs-course/m03l03) | [1 lab](labs/m03l03/) | Pro |
| 3.4 | [Cryptographic Primitives: node:crypto & Ciphers](https://learnsome.tech/learn/nodejs-course/m03l04) | [1 lab](labs/m03l04/) | Pro |
| 3.5 | [Native Compression: node:zlib & Streaming Codecs](https://learnsome.tech/learn/nodejs-course/m03l05) | [1 lab](labs/m03l05/) | Pro |

### Module 4: Streams, Pipelines & Backpressure

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 4.1 | [Stream Mechanics: Readable Streams & Flowing Modes](https://learnsome.tech/learn/nodejs-course/m04l01) | [1 lab](labs/m04l01/) | Pro |
| 4.2 | [Writable Streams: Drain Events & highWaterMark](https://learnsome.tech/learn/nodejs-course/m04l02) | [1 lab](labs/m04l02/) | Pro |
| 4.3 | [Backpressure Engineering: Handling Mismatched I/O](https://learnsome.tech/learn/nodejs-course/m04l03) | [1 lab](labs/m04l03/) | Pro |
| 4.4 | [Transform Streams: Custom Packet Decoding & Codecs](https://learnsome.tech/learn/nodejs-course/m04l04) | [1 lab](labs/m04l04/) | Pro |
| 4.5 | [Stream Pipelines: pipeline, AbortSignal & Teardown](https://learnsome.tech/learn/nodejs-course/m04l05) | [1 lab](labs/m04l05/) | Pro |

### Module 5: Async File System & Concurrency

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 5.1 | [Asynchronous File I/O: node:fs/promises & Handles](https://learnsome.tech/learn/nodejs-course/m05l01) | [1 lab](labs/m05l01/) | Pro |
| 5.2 | [Directory Traversal: Recursive Readdir & fs.watch](https://learnsome.tech/learn/nodejs-course/m05l02) | [1 lab](labs/m05l02/) | Pro |
| 5.3 | [Child Processes: spawn, execFile, fork & IPC](https://learnsome.tech/learn/nodejs-course/m05l03) | [1 lab](labs/m05l03/) | Pro |
| 5.4 | [Worker Threads: worker_threads & SharedArrayBuffer](https://learnsome.tech/learn/nodejs-course/m05l04) | [1 lab](labs/m05l04/) | Pro |
| 5.5 | [Thread Pooling: Piscina & CPU-Bound Workload Pools](https://learnsome.tech/learn/nodejs-course/m05l05) | [1 lab](labs/m05l05/) | Pro |

### Module 6: Native HTTP, HTTPS & HTTP/2

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 6.1 | [Native HTTP Server: Request & Response Lifecycles](https://learnsome.tech/learn/nodejs-course/m06l01) | [1 lab](labs/m06l01/) | Pro |
| 6.2 | [Routing & Middleware: Path Parsing & Async Context](https://learnsome.tech/learn/nodejs-course/m06l02) | [1 lab](labs/m06l02/) | Pro |
| 6.3 | [Native HTTP/2 Protocols: Multiplexed Streams & Push](https://learnsome.tech/learn/nodejs-course/m06l03) | [1 lab](labs/m06l03/) | Pro |
| 6.4 | [Native WebSockets: Bidirectional Real-Time Streams](https://learnsome.tech/learn/nodejs-course/m06l04) | [1 lab](labs/m06l04/) | Pro |
| 6.5 | [TLS & HTTPS Encryption: Certificates & SNI Contexts](https://learnsome.tech/learn/nodejs-course/m06l05) | [1 lab](labs/m06l05/) | Pro |

### Module 7: Diagnostics & Production Hardening

| # | Lesson | Labs | Access |
| --- | --- | --- | --- |
| 7.1 | [Global Error Trapping: uncaughtException & Exits](https://learnsome.tech/learn/nodejs-course/m07l01) | [1 lab](labs/m07l01/) | Pro |
| 7.2 | [Native Test Runner: node:test & node:assert/strict](https://learnsome.tech/learn/nodejs-course/m07l02) | [1 lab](labs/m07l02/) | Pro |
| 7.3 | [Diagnostic Profiling: CPU Profiler & Heap Snapshots](https://learnsome.tech/learn/nodejs-course/m07l03) | [1 lab](labs/m07l03/) | Pro |
| 7.4 | [Cluster Architecture: node:cluster & Zero-Downtime](https://learnsome.tech/learn/nodejs-course/m07l04) | [1 lab](labs/m07l04/) | Pro |
| 7.5 | [Production Hardening: Graceful Shutdown & Docker](https://learnsome.tech/learn/nodejs-course/m07l05) | [1 lab](labs/m07l05/) | Pro |

**Free** lessons are open to anyone with a free LearnSome.tech account; **Pro** lessons need a Pro membership to watch, run and grade on the site.

## Licence

- **Code** (starter files, `check` and `.learnsome/`, the dev container and the workflows) is under the [MIT licence](LICENSE).
- **Written text** (the READMEs, lab instructions, lesson text, exercises and questions) is under [CC BY-NC-SA 4.0](LICENSE-text.md): share and adapt it with attribution to LearnSome.tech, not commercially, under the same licence.
- The LearnSome.tech name and logo are not covered by either licence.

## Contributing and security

This repository is generated from the course. Report a broken lab or a content error [as an issue](../../issues/new/choose); see [CONTRIBUTING.md](CONTRIBUTING.md). Security reports go to [SECURITY.md](SECURITY.md).

© 2026 LearnSome.tech
