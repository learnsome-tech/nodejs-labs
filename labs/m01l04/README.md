# m01l04 · Native Module Systems: ESM Loader Hooks vs CommonJS

Module 1: V8 Engine & Node.js Architecture · lesson 1.4 · Free · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m01l04)

**Goal:** You can explain how Node.js resolves and executes ECMAScript Modules and CommonJS, and how customization loader hooks intercept module resolution.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l04-02](m01l04-02/) | Module Resolution | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Implement a custom TypeScript loader hook

1. Create a loader dot mjs file exporting resolve and load hooks.
2. Intercept files ending in dot t s and specify module format.
3. Register the custom loader via module dot register in main dot js.
4. Import and execute a TypeScript file without prior build steps.

> **Hint:** Use module dot register with a file URL pointing to your loader.

## Check yourself

- How does the loading lifecycle of ECMAScript Modules differ from CommonJS?
- What setting in package.json instructs Node.js to treat .js files as ESM?
- In what thread environment do modern module.register loader hooks execute?
- Why is top-level await prohibited in CommonJS modules?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
