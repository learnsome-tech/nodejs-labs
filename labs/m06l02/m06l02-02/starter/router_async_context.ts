import { createServer } from "node:http";
import { AsyncLocalStorage } from "node:async_hooks";
import { once } from "node:events";

const als = new AsyncLocalStorage<{ id: string }>();
const server = createServer(async (req, res) => {
  const id = (req.headers["x-req-id"] as string) ?? "auto";
  await als.run({ id }, async () => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ log: `[${als.getStore()?.id}] done`, id }));
  });
});
server.listen(0);
await once(server, "listening");
const port = (server.address() as { port: number }).port;

const res = await fetch(`http://127.0.0.1:${port}/`, {
  headers: { "x-req-id": "req-888" },
});
const data = await res.json() as { log: string; id: string };
server.close();
console.log(`Log: ${data.log}, ID: ${data.id}`);
