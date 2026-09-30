import { createServer } from "node:http";
import { once } from "node:events";

let terminating = false;
const steps: string[] = [];
const srv = createServer((_q, res) => {
  res.writeHead(terminating ? 503 : 200).end(terminating ? "down" : "ok");
});
srv.listen(0);
await once(srv, "listening");
const port = (srv.address() as { port: number }).port;

const res = await fetch(`http://127.0.0.1:${port}/`);
terminating = true;
steps.push("draining");
srv.close();
await once(srv, "close");
steps.push("closed");

console.log(`Initial status: ${res.status}`);
console.log(`Lifecycle order: ${steps.join(" -> ")}`);
console.log(`Listener terminated: ${!srv.listening}`);
