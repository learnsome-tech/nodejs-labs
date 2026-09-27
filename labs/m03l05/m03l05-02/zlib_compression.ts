// Node.js Internals & Backend Services — lesson m03l05 — Native Compression: node:zlib & Streaming Codecs
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m03l05
// © LearnSome.tech
import { gzipSync, gunzipSync } from "node:zlib";
import { brotliCompressSync, brotliDecompressSync } from "node:zlib";

interface CompressionReport {
  orig: number; gz: number; br: number; restored: boolean;
}
function testCompression(input: string): CompressionReport {
  const buf = Buffer.from(input);
  const gz = gzipSync(buf);
  const br = brotliCompressSync(buf);
  const match = gunzipSync(gz).toString() === input &&
    brotliDecompressSync(br).toString() === input;
  return { orig: buf.length, gz: gz.length, br: br.length, restored: match };
}
const text = "Enterprise streaming payloads in Node.js ".repeat(15);
const report = testCompression(text);
console.log(`Original size: ${report.orig} bytes`);
console.log(`Gzip compressed: ${report.gz} bytes`);
console.log(`Brotli compressed: ${report.br} bytes`);
console.log(`Data integrity verified: ${report.restored}`);
