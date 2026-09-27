// Node.js Internals & Backend Services — lesson m01l01 — V8 Engine & JIT Pipeline: Bytecode & Turbofan
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m01l01
// © LearnSome.tech
interface Point { x: number; y: number; }
function computeDistance(p: Point): number {
  return Math.sqrt(p.x * p.x + p.y * p.y);
}
const p1: Point = { x: 3, y: 4 };
let total = 0;
for (let i = 0; i < 10000; i++) {
  total += computeDistance(p1);
}
const dist = computeDistance({ x: 6, y: 8 });
console.log(`Monomorphic distance: ${dist}`);
console.log(`Iterations completed: 10000`);
console.log(`Point coordinates: x=${p1.x}, y=${p1.y}`);
