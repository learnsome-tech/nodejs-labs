// Node.js Internals & Backend Services — lesson m05l01 — Asynchronous File I/O: node:fs/promises & Handles
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l01
// © LearnSome.tech
import { open, unlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const target = join(tmpdir(), `node_fs_${Date.now()}.txt`);
let written = 0, bytesRead = 0;

const handle = await open(target, "w+");
try {
  const writeRes = await handle.write(Buffer.from("Enterprise file handle"));
  written = writeRes.bytesWritten;
  const buf = Buffer.alloc(written);
  const readRes = await handle.read(buf, 0, written, 0);
  bytesRead = readRes.bytesRead;
} finally {
  await handle.close();
  await unlink(target).catch(() => {});
}
console.log(`Bytes written: ${written}`);
console.log(`Bytes read: ${bytesRead}`);
console.log(`Roundtrip match: ${written === bytesRead}`);
