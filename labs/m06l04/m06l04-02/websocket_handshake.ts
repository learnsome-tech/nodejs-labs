// Node.js Internals & Backend Services — lesson m06l04 — Native WebSockets: Bidirectional Real-Time Streams
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m06l04
// © LearnSome.tech
import { createServer } from "node:http";
import { createHash } from "node:crypto";
import { once } from "node:events";

let sock: any;
const srv = createServer().on("upgrade", (req, s) => {
  sock = s;
  const k = req.headers["sec-websocket-key"] +
    "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
  const acc = createHash("sha1").update(k).digest("base64");
  s.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\n` +
    `Connection: Upgrade\r\nSec-WebSocket-Accept: ${acc}\r\n\r\n`);
  const msg = Buffer.from("ws:ack");
  s.write(Buffer.concat([Buffer.from([0x81, msg.length]), msg]));
});
srv.listen(0);
await once(srv, "listening");
const port = (srv.address() as { port: number }).port;
const ws = new WebSocket(`ws://127.0.0.1:${port}`);
const res = await new Promise((r) => { ws.onmessage = (e) => r(e.data); });
ws.close(); sock?.destroy(); srv.close();
console.log(`WebSocket payload: ${res}`);
