// Node.js Internals & Backend Services — lesson m04l04 — Transform Streams: Custom Packet Decoding & Codecs
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m04l04
// © LearnSome.tech
import { Transform, Readable } from "node:stream";

class LineSplitter extends Transform {
  buf = "";
  _transform(chunk: Buffer, _enc: unknown, cb: () => void) {
    this.buf += chunk.toString();
    const parts = this.buf.split(";");
    this.buf = parts.pop() ?? "";
    for (const p of parts) if (p) this.push(p);
    cb();
  }
}
const splitter = new LineSplitter({ objectMode: true });
const results: string[] = [];
splitter.on("data", (d) => results.push(String(d)));

const src = Readable.from([Buffer.from("msg:1;msg:"), Buffer.from("2;msg:3;")]);
src.pipe(splitter);
await new Promise((res) => splitter.on("end", res));

console.log(`Decoded packets: ${results.length}`);
console.log(`Packets: ${results.join(", ")}`);
