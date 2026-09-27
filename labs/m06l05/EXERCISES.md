# Exercises — TLS & HTTPS Encryption: Certificates & SNI Contexts

Lesson `m06l05` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m06l05)

## Exercise 1: Build a Multi-Tenant HTTPS Server with SNI Contexts

1. Initialize a secure context enforcing TLS version one point three.
2. Register multiple domain certificates using server addContext.
3. Validate client connections matching Server Name Indication domains.
4. Assert that mismatched hostnames fail certificate identity checks.

> **Hint**: Invoke server.addContext('sub.domain.com', { key, cert }) on the HTTPS server.


---

© LearnSome.tech · support@iwantto.learnsome.tech
