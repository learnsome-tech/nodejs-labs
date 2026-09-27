// Node.js Internals & Backend Services — lesson m04l05 — Stream Pipelines: pipeline, AbortSignal & Teardown
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m04l05
// © LearnSome.tech
import { pipeline } from "node:stream/promises";
import { Readable, Writable } from "node:stream";

const collected: string[] = [];
let cleanedUp = false;

const source = Readable.from(["data-a", "data-b", "data-c"]);
const sink = new Writable({
  objectMode: true,
  write(chunk, _, cb) { collected.push(String(chunk)); cb(); },
  destroy(err, cb) { cleanedUp = true; cb(err); },
});

await pipeline(source, sink);
console.log(`Pipeline finished: ${collected.length === 3}`);
console.log(`Stream teardown: ${cleanedUp}`);
console.log(`Items delivered: ${collected.join(", ")}`);
