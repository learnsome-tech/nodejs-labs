// Node.js Internals & Backend Services — lesson m06l05 — TLS & HTTPS Encryption: Certificates & SNI Contexts
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m06l05
// © LearnSome.tech
import tls from "node:tls";

const ctx = tls.createSecureContext({ minVersion: "TLSv1.3" });
const cert = {
  subject: { CN: "api.domain.com" },
  subjectaltname: "DNS:api.domain.com, DNS:*.domain.com",
};
const direct = tls.checkServerIdentity("api.domain.com", cert) === undefined;
const sub = tls.checkServerIdentity("auth.domain.com", cert) === undefined;
const bad = tls.checkServerIdentity("fake.com", cert) instanceof Error;

console.log(`Secure context initialized: ${Boolean(ctx)}`);
console.log(`Primary domain verified: ${direct}`);
console.log(`Wildcard SAN verified: ${sub}`);
console.log(`Imposter domain rejected: ${bad}`);
