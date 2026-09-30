# m01l05 · Runtime Configuration: CLI Flags & Native --env-file

Module 1: V8 Engine & Node.js Architecture · lesson 1.5 · Free · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m01l05)

**Goal:** You can configure the Node.js runtime using command line flags, process arguments, and native .env file loading without third-party dependencies.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l05-02](m01l05-02/) | Runtime Config | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Configure environment cascaded defaults and memory limits

1. Create dot env and dot env dot local configuration files.
2. Run node passing multiple dash dash env file arguments.
3. Add max old space size set to five twelve megabytes.
4. Print process env variables to confirm local file override.

> **Hint:** Pass dash dash env file dot env before dot env dot local.

## Check yourself

- What is the advantage of using the native dash dash env-file flag over the dotenv npm package?
- How does Node.js resolve conflicts when multiple dash dash env-file flags are specified?
- Which CLI flag allows developers to increase the maximum V eight heap allocation?
- What is the purpose of the NODE_OPTIONS environment variable?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
