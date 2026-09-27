// Node.js Internals & Backend Services — lesson m01l03 — Node.js Process Architecture: Memory & Heap Spaces
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m01l03
// © LearnSome.tech
interface MemoryProfile {
  rssMb: number; heapTotalMb: number;
  heapUsedMb: number; externalMb: number;
}
function getMemoryProfile(): MemoryProfile {
  const mem = process.memoryUsage();
  return {
    rssMb: Math.round(mem.rss / 1024 / 1024),
    heapTotalMb: Math.round(mem.heapTotal / 1024 / 1024),
    heapUsedMb: Math.round(mem.heapUsed / 1024 / 1024),
    externalMb: Math.round(mem.external / 1024 / 1024),
  };
}
const profile = getMemoryProfile();
console.log(`Memory RSS allocated: ${profile.rssMb > 0}`);
console.log(`Heap total initialized: ${profile.heapTotalMb > 0}`);
console.log(`Heap used bounded: ${profile.heapUsedMb <= profile.heapTotalMb}`);
