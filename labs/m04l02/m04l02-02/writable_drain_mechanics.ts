// Node.js Internals & Backend Services — lesson m04l02 — Writable Streams: Drain Events & highWaterMark
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m04l02
// © LearnSome.tech
import { Writable } from "node:stream";
import { once } from "node:events";

let bytes = 0, drained = false;
const sink = new Writable({
  highWaterMark: 16,
  write(chunk, _, cb) {
    bytes += chunk.length;
    setImmediate(cb);
  },
});
sink.on("drain", () => { drained = true; });

const firstOk = sink.write(Buffer.alloc(16, "A"));
await once(sink, "drain");
sink.end();
await once(sink, "finish");

console.log(`Initial write ok: ${firstOk}`);
console.log(`Drain event fired: ${drained}`);
console.log(`Total bytes written: ${bytes}`);
