# Exercises — Cryptographic Primitives: node:crypto & Ciphers

Lesson `m03l04` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m03l04)

## Exercise 1: Encrypt and decrypt sensitive payload with AES-256-GCM

1. Generate a random thirty two byte key and twelve byte IV.
2. Encrypt a secret JSON string with createCipheriv in aes 256 gcm mode.
3. Extract the sixteen byte authentication tag from the cipher.
4. Decrypt the payload with createDecipheriv and verify plaintext.

> **Hint**: Invoke cipher dot getAuthTag and decipher dot setAuthTag.


---

© LearnSome.tech · support@iwantto.learnsome.tech
