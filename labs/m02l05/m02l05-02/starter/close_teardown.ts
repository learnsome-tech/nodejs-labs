import { EventEmitter } from "node:events";

interface TeardownRecord {
  resource: string; closed: boolean; code: number;
}
class ManagedResource extends EventEmitter {
  close(): void { this.emit("close"); }
}
const res = new ManagedResource();
const record: TeardownRecord = {
  resource: "socket", closed: false, code: 0
};
res.on("close", () => { record.closed = true; });
res.close();
console.log(`Resource target: ${record.resource}`);
console.log(`Close dispatched: ${record.closed}`);
console.log(`Exit code status: ${record.code}`);
