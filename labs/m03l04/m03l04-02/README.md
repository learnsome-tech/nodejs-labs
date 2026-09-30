# m03l04-02 · Crypto Primitives

**Lesson:** [Cryptographic Primitives: node:crypto & Ciphers](https://learnsome.tech/learn/nodejs-course/m03l04) (lesson 3.4, module 3: Buffers, Binary Data & Crypto) · Pro  
**Check:** Graded

## Goal

You can execute cryptographic operations including SHA-256 hashing, HMAC signatures, and authenticated AES-256-GCM symmetric encryption using node:crypto.

## Files

- [`starter/crypto_primitives.ts`](starter/crypto_primitives.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m03l04/m03l04-02/starter`
2. Read `crypto_primitives.ts`.
3. Run it: `node crypto_primitives.ts`.
4. Check it from the repository root: `./check m03l04-02`.

## Expected output

```text
HMAC prefix: f9546a3b
Signature valid: true
Tamper rejected: true
```

## How to check

`./check m03l04-02` copies `starter/` into a scratch directory and runs `node crypto_primitives.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m03l04) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
