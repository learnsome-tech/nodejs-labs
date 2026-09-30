import { spawn } from "node:child_process";

const childCode = `
  process.on("uncaughtExceptionMonitor", (err) => {
    console.log("MONITOR:" + err.message);
  });
  throw new Error("fatal_boom");
`;
const child = spawn(process.execPath, ["-e", childCode]);
let out = "";
child.stdout.on("data", (d: Buffer) => { out += d.toString(); });
const code = await new Promise((res) => child.on("close", res));

console.log(`Exit code: ${code}`);
console.log(`Captured monitor log: ${out.trim()}`);
console.log(`Crashed safely: ${code !== 0}`);
