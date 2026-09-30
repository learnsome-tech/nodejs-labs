import { mock } from "node:test";
import assert from "node:assert/strict";

const math = {
  calculate: (x: number) => x * 2,
  async fail(): Promise<void> { throw new Error("bad_input"); },
};
const spy = mock.method(math, "calculate");
const val = math.calculate(5);

await assert.rejects(() => math.fail(), { message: "bad_input" });
assert.equal(spy.mock.callCount(), 1);

console.log(`Spy call count: ${spy.mock.callCount()}`);
console.log(`Calculation output: ${val}`);
console.log(`Rejection caught: true`);
