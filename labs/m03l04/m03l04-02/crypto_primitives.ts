// Node.js Internals & Backend Services — lesson m03l04 — Cryptographic Primitives: node:crypto & Ciphers
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m03l04
// © LearnSome.tech
import { createHmac, timingSafeEqual } from "node:crypto";

interface CryptoCheck {
  hashHex: string; signatureMatch: boolean; tamperRejected: boolean;
}
function verifyPayload(payload: string, key: string): CryptoCheck {
  const sig = createHmac("sha256", key).update(payload).digest("hex");
  const exp = createHmac("sha256", key).update(payload).digest("hex");
  const bad = createHmac("sha256", key).update(payload + "x").digest("hex");
  const ok = timingSafeEqual(Buffer.from(sig), Buffer.from(exp));
  const badOk = timingSafeEqual(Buffer.from(sig), Buffer.from(bad));
  return {
    hashHex: sig.slice(0, 8),
    signatureMatch: ok, tamperRejected: !badOk,
  };
}
const check = verifyPayload("user_42", "secret_key_32_bytes_length!!");
console.log(`HMAC prefix: ${check.hashHex}`);
console.log(`Signature valid: ${check.signatureMatch}`);
console.log(`Tamper rejected: ${check.tamperRejected}`);
