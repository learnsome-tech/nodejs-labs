// Node.js Internals & Backend Services — lesson m05l04 — Worker Threads: worker_threads & SharedArrayBuffer
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l04
// © LearnSome.tech
import { Worker } from "node:worker_threads";

const sab = new SharedArrayBuffer(4);
const view = new Int32Array(sab);
Atomics.store(view, 0, 10);

const workerScript = `
  import("node:worker_threads").then(({ parentPort, workerData }) => {
    const v = new Int32Array(workerData);
    Atomics.add(v, 0, 15);
    parentPort.postMessage("done");
  });
`;
const worker = new Worker(workerScript, { eval: true, workerData: sab });
await new Promise((res) => worker.on("message", res));
await worker.terminate();

console.log("Initial value: 10");
console.log(`Worker modified atomic: ${Atomics.load(view, 0)}`);
