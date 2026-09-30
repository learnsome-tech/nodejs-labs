import { Readable } from "node:stream";

interface StreamReport {
  initial: boolean | null; flowing: boolean | null; chunks: string[];
}
async function inspectReadable(): Promise<StreamReport> {
  const stream = Readable.from(["payload-a", "payload-b"]);
  const initial = stream.readableFlowing;
  const chunks: string[] = [];
  await new Promise<void>((resolve) => {
    stream.on("data", (c: Buffer) => chunks.push(c.toString()));
    stream.on("end", resolve);
  });
  return { initial, flowing: stream.readableFlowing, chunks };
}
const obs = await inspectReadable();
console.log(`Initial flowing: ${obs.initial}`);
console.log(`Active flowing: ${obs.flowing}`);
console.log(`Collected chunks: ${obs.chunks.join(", ")}`);
