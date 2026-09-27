// Node.js Internals & Backend Services — lesson m05l05 — Thread Pooling: Piscina & CPU-Bound Workload Pools
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l05
// © LearnSome.tech
import { Worker } from "node:worker_threads";

const script = `
  import("node:worker_threads").then(({ parentPort }) => {
    parentPort.on("message", (n) => parentPort.postMessage(n * 2));
  });
`;
const worker = new Worker(script, { eval: true });
function compute(val: number): Promise<number> {
  return new Promise((resolve) => {
    worker.once("message", resolve);
    worker.postMessage(val);
  });
}
const a = await compute(5);
const b = await compute(12);
await worker.terminate();

console.log(`Task one result: ${a}`);
console.log(`Task two result: ${b}`);
console.log(`Pool worker reused: ${a === 10 && b === 24}`);
