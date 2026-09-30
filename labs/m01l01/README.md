# m01l01 · V8 Engine & JIT Pipeline: Bytecode & Turbofan

Module 1: V8 Engine & Node.js Architecture · lesson 1.1 · Free · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m01l01)

**Goal:** You can describe how Google V8 parses JavaScript into bytecode via Ignition and optimizes hot loops into machine code via TurboFan.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m01l01-02](m01l01-02/) | Jit Monomorphism | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Profile engine optimization tiers via CLI flags

1. Create a loop intensive numeric function inside compute dot js.
2. Run node with trace opt flag enabled to observe TurboFan compiling.
3. Introduce polymorphic object shapes to force deoptimization.
4. Run node with trace deopt flag to inspect bailout reasons.

> **Hint:** Invoke node with dash dash trace opt and trace deopt flags.

## Check yourself

- What role does the Ignition component play within the V eight engine pipeline?
- Under what condition does TurboFan recompile bytecode into native machine instructions?
- Why does initializing object properties in a consistent order improve performance?
- What happens when a monomorphic function encounters a newly shaped object?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
