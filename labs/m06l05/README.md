# m06l05 · TLS & HTTPS Encryption: Certificates & SNI Contexts

Module 6: Native HTTP, HTTPS & HTTP/2 · lesson 6.5 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m06l05)

**Goal:** You can configure production TLS contexts enforcing modern ciphers, manage multi-tenant certificates with Server Name Indication (SNI), and validate certificates.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m06l05-02](m06l05-02/) | Tls Certificate Validation | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Multi-Tenant HTTPS Server with SNI Contexts

1. Initialize a secure context enforcing TLS version one point three.
2. Register multiple domain certificates using server addContext.
3. Validate client connections matching Server Name Indication domains.
4. Assert that mismatched hostnames fail certificate identity checks.

> **Hint:** Invoke server.addContext('sub.domain.com', { key, cert }) on the HTTPS server.

## Check yourself

- What security advantage does enforcing TLS 1.3 provide over older TLS protocols?
- How does Server Name Indication (SNI) enable hosting multiple HTTPS domains on one IP?
- Why should rejectUnauthorized never be set to false in production Node clients?
- What function does tls.checkServerIdentity() perform during client handshakes?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
