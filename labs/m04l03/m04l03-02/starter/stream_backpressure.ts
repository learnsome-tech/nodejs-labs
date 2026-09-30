import { Readable, Writable } from "node:stream";
import { once } from "node:events";

let count = 0, paused = 0, drains = 0;
const src = new Readable({
  read() {
    while (count < 8) {
      count++;
      if (!this.push(`item-${count}`)) { paused++; return; }
    }
    this.push(null);
  },
  highWaterMark: 2,
});
const dst = new Writable({
  highWaterMark: 2,
  write(_c, _, cb) { setImmediate(cb); },
});
dst.on("drain", () => { drains++; });
src.pipe(dst);
await once(dst, "finish");
console.log(`Items: ${count}, Pauses: ${paused}, Drains: ${drains}`);
