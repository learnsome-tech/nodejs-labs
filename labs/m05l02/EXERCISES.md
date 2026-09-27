# Exercises — Directory Traversal: Recursive Readdir & fs.watch

Lesson `m05l02` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l02)

## Exercise 1: Build a Resilient File Change Event Streamer

1. Create a temporary directory structure with deep nested subfolders.
2. Start a file watcher using watch from node fs promises.
3. Write and modify files inside the watched directory hierarchy.
4. Capture change events using an async loop and abort cleanly.

> **Hint**: Consume watch using for await and cancel via signal.abort().


---

© LearnSome.tech · support@iwantto.learnsome.tech
