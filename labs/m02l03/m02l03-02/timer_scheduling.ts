// Node.js Internals & Backend Services — lesson m02l03 — Timers Phase: setTimeout, Min-Heap Scheduling & Drift
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m02l03
// © LearnSome.tech
interface TimerEvaluation {
  completed: boolean; thresholdMet: boolean; canUnref: boolean;
}
const start = performance.now();
const targetDelay = 10;
setTimeout(() => {
  const elapsed = Math.round(performance.now() - start);
  const res: TimerEvaluation = {
    completed: true, thresholdMet: elapsed >= targetDelay,
    canUnref: typeof setTimeout(() => {}).unref === "function",
  };
  console.log(`Timer completed: ${res.completed}`);
  console.log(`Elapsed threshold met: ${res.thresholdMet}`);
  console.log(`Handle unref available: ${res.canUnref}`);
}, targetDelay);
