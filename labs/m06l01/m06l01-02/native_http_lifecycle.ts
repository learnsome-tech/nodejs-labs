// Node.js Internals & Backend Services — lesson m06l01 — Native HTTP Server: Request & Response Lifecycles
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m06l01
// © LearnSome.tech
import { createServer } from "node:http";
import { once } from "node:events";

const server = createServer(async (req, res) => {
  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = Buffer.concat(chunks).toString();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ echo: body, url: req.url }));
});

server.listen(0);
await once(server, "listening");
const port = (server.address() as { port: number }).port;

const res = await fetch(`http://127.0.0.1:${port}/ping`, {
  method: "POST",
  body: "hello-http",
});
const data = await res.json() as { echo: string; url: string };
server.close();
console.log(`Status: ${res.status}, Echo: ${data.echo}, Path: ${data.url}`);
