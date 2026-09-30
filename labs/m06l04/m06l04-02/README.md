# m06l04-02 · Websocket Handshake

**Lesson:** [Native WebSockets: Bidirectional Real-Time Streams](https://learnsome.tech/learn/nodejs-course/m06l04) (lesson 6.4, module 6: Native HTTP, HTTPS & HTTP/2) · Pro  
**Check:** Graded

## Goal

You can implement real-time bidirectional WebSocket servers and clients using native Node.js APIs, manage protocol upgrade handshakes, and parse WebSocket frames.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`starter/websocket_handshake.ts`](starter/websocket_handshake.ts): the listing from the lesson
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m06l04/m06l04-02/starter`
2. Read `websocket_handshake.ts`.
3. Run it: `node websocket_handshake.ts`.
4. Check it from the repository root: `./check m06l04-02`.

## Expected output

```text
WebSocket payload: ws:ack
```

## How to check

`./check m06l04-02` copies `starter/` into a scratch directory and runs `node websocket_handshake.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m06l04) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
