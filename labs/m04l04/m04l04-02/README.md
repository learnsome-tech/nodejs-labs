# m04l04-02 · Transform Packet Decoder

**Lesson:** [Transform Streams: Custom Packet Decoding & Codecs](https://learnsome.tech/learn/nodejs-course/m04l04) (lesson 4.4, module 4: Streams, Pipelines & Backpressure) · Pro  
**Check:** Graded

## Goal

You can implement custom Transform streams to parse fragmented binary network data, reassemble delimited or length-prefixed packets, and emit typed objects.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/transform_packet_decoder.ts`](starter/transform_packet_decoder.ts): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m04l04/m04l04-02/starter`
2. Read `transform_packet_decoder.ts`.
3. Run it: `node transform_packet_decoder.ts`.
4. Check it from the repository root: `./check m04l04-02`.

## Expected output

```text
Decoded packets: 3
Packets: msg:1, msg:2, msg:3
```

## How to check

`./check m04l04-02` copies `starter/` into a scratch directory and runs `node transform_packet_decoder.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nodejs-course/m04l04) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
