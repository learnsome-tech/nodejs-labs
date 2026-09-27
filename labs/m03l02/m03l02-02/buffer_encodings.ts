// Node.js Internals & Backend Services — lesson m03l02 — Buffer Encodings: UTF-8, Hex, Base64 & Slicing
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m03l02
// © LearnSome.tech
interface EncodingCheck {
  hex: string; base64: string; isMutated: boolean;
}
function evaluateEncodings(input: string): EncodingCheck {
  const buf = Buffer.from(input, "utf8");
  const hex = buf.toString("hex");
  const b64 = buf.toString("base64");
  const slice = buf.subarray(0, 1);
  slice[0] = 65; // ASCII 'A'
  return { hex, base64: b64, isMutated: buf[0] === 65 };
}
const res = evaluateEncodings("Node");
console.log(`Hex encoded: ${res.hex}`);
console.log(`Base64 encoded: ${res.base64}`);
console.log(`Subarray shared memory: ${res.isMutated}`);
