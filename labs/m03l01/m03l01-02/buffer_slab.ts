// Node.js Internals & Backend Services — lesson m03l01 — Buffer Fundamentals: Slab Allocator & V8 Memory
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m03l01
// © LearnSome.tech
interface BufferSlabCheck {
  poolSize: number; isShared: boolean; offset: number;
}
function checkSlabAllocation(): BufferSlabCheck {
  const b1 = Buffer.allocUnsafe(128);
  const b2 = Buffer.allocUnsafe(128);
  const shared = b1.buffer === b2.buffer;
  return {
    poolSize: Buffer.poolSize, isShared: shared, offset: b2.byteOffset,
  };
}
const check = checkSlabAllocation();
console.log(`Buffer pool size: ${check.poolSize}`);
console.log(`Shared slab buffer: ${check.isShared}`);
console.log(`Second buffer offset: ${check.offset > 0}`);
