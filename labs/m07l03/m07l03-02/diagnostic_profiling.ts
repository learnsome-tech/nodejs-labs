// Node.js Internals & Backend Services — lesson m07l03 — Diagnostic Profiling: CPU Profiler & Heap Snapshots
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m07l03
// © LearnSome.tech
import v8 from "node:v8";
import inspector from "node:inspector/promises";

const heap = v8.getHeapStatistics();
const session = new inspector.Session();
session.connect();

await session.post("Profiler.enable");
await session.post("Profiler.start");

let total = 0;
for (let i = 0; i < 10000; i++) total += i % 3;

const { profile } = await session.post("Profiler.stop");
await session.post("Profiler.disable");
session.disconnect();

console.log(`Heap limit allocated: ${heap.heap_size_limit > 0}`);
console.log(`Total heap used: ${heap.used_heap_size > 0}`);
console.log(`CPU profile nodes captured: ${profile.nodes.length > 0}`);
console.log(`Workload executed: ${total > 0}`);
