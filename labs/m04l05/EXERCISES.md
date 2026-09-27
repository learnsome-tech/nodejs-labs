# Exercises — Stream Pipelines: pipeline, AbortSignal & Teardown

Lesson `m04l05` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m04l05)

## Exercise 1: Build a Resilient Abortable Streaming Service

1. Construct a multi stage stream pipeline with an AbortController.
2. Simulate an unhandled read error halfway through transmission.
3. Catch the resulting exception using standard try catch blocks.
4. Assert that all upstream and downstream streams were destroyed.

> **Hint**: Pass { signal: controller.signal } as the final argument to pipeline.


---

© LearnSome.tech · support@iwantto.learnsome.tech
