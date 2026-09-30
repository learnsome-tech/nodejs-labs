import * as fs from "node:fs";

interface PhaseTrace { order: string[]; pollToCheckDirect: boolean; }
fs.readFile(process.execPath, () => {
  const order: string[] = [];
  setTimeout(() => {
    order.push("Timer");
    const trace: PhaseTrace = {
      order, pollToCheckDirect: order[0] === "Immediate",
    };
    console.log(`First executed: ${trace.order[0]}`);
    console.log(`Second executed: ${trace.order[1]}`);
    console.log(`Direct check transition: ${trace.pollToCheckDirect}`);
  }, 5);
  setImmediate(() => { order.push("Immediate"); });
});
