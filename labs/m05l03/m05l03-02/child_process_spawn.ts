// Node.js Internals & Backend Services — lesson m05l03 — Child Processes: spawn, execFile, fork & IPC
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l03
// © LearnSome.tech
import { spawn } from "node:child_process";

interface ProcessResult {
  code: number | null; out: string; err: string;
}
async function runChild(): Promise<ProcessResult> {
  const child = spawn(process.execPath, [
    "-e",
    'console.log("worker:ready"); console.error("worker:warn");',
  ]);
  let out = "", err = "";
  child.stdout.on("data", (d: Buffer) => { out += d.toString(); });
  child.stderr.on("data", (d: Buffer) => { err += d.toString(); });

  const code = await new Promise((res) => child.on("close", res));
  return { code, out: out.trim(), err: err.trim() };
}
const res = await runChild();
console.log(`Exit code: ${res.code}`);
console.log(`Standard output: ${res.out}`);
console.log(`Standard error: ${res.err}`);
