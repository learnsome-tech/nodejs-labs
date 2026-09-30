import http2 from "node:http2";
import { once } from "node:events";

const server = http2.createServer();
server.on("stream", (stream, headers) => {
  stream.respond({ ":status": 200, "content-type": "text/plain" });
  stream.end(`h2:${headers[":path"]}`);
});
server.listen(0);
await once(server, "listening");
const port = (server.address() as { port: number }).port;

const client = http2.connect(`http://127.0.0.1:${port}`);
const req = client.request({ ":path": "/api/metrics" });
let out = "";
req.on("data", (d: Buffer) => { out += d.toString(); });
await new Promise((res) => req.on("end", res));

client.close();
server.close();
console.log(`HTTP2 response payload: ${out}`);
console.log(`Session closed successfully: ${client.closed}`);
