# Exercises — Child Processes: spawn, execFile, fork & IPC

Lesson `m05l03` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l03)

## Exercise 1: Orchestrate an IPC Child Worker with Graceful Teardown

1. Spawn an external command using spawn without invoking a shell.
2. Stream standard output chunks into an asynchronous collector.
3. Handle non zero exit codes and child error events appropriately.
4. Establish an IPC message channel using fork for bidirectional ping.

> **Hint**: Listen to child.on('message') and respond with child.send().


---

© LearnSome.tech · support@iwantto.learnsome.tech
