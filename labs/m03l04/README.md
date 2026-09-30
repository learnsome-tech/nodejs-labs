# m03l04 · Cryptographic Primitives: node:crypto & Ciphers

Module 3: Buffers, Binary Data & Crypto · lesson 3.4 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m03l04)

**Goal:** You can execute cryptographic operations including SHA-256 hashing, HMAC signatures, and authenticated AES-256-GCM symmetric encryption using node:crypto.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m03l04-02](m03l04-02/) | Crypto Primitives | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Encrypt and decrypt sensitive payload with AES-256-GCM

1. Generate a random thirty two byte key and twelve byte IV.
2. Encrypt a secret JSON string with createCipheriv in aes 256 gcm mode.
3. Extract the sixteen byte authentication tag from the cipher.
4. Decrypt the payload with createDecipheriv and verify plaintext.

> **Hint:** Invoke cipher dot getAuthTag and decipher dot setAuthTag.

## Check yourself

- Why is standard string equality comparison dangerous when validating HMAC signatures?
- What security property does AES-256-GCM provide that legacy AES-CBC lacks?
- Why must an Initialization Vector never be reused with the same encryption key in GCM mode?
- What happens during AES-GCM decryption if the authentication tag does not match?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
