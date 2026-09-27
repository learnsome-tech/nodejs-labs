# Exercises — Native Module Systems: ESM Loader Hooks vs CommonJS

Lesson `m01l04` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m01l04)

## Exercise 1: Implement a custom TypeScript loader hook

1. Create a loader dot mjs file exporting resolve and load hooks.
2. Intercept files ending in dot t s and specify module format.
3. Register the custom loader via module dot register in main dot js.
4. Import and execute a TypeScript file without prior build steps.

> **Hint**: Use module dot register with a file URL pointing to your loader.


---

© LearnSome.tech · support@iwantto.learnsome.tech
