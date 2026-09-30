# m04l04 · Transform Streams: Custom Packet Decoding & Codecs

Module 4: Streams, Pipelines & Backpressure · lesson 4.4 · Pro · [Open the lesson](https://learnsome.tech/learn/nodejs-course/m04l04)

**Goal:** You can implement custom Transform streams to parse fragmented binary network data, reassemble delimited or length-prefixed packets, and emit typed objects.

## Labs

| Lab | What it is | Check |
| --- | --- | --- |
| [m04l04-02](m04l04-02/) | Transform Packet Decoder | Graded |

## Exercises

Open exercises from the lesson, to try on your own. They have no answer files: work them out, and use the labs above as reference.

### Build a Length-Prefixed Binary Protocol Decoder

1. Create a custom Transform stream implementing length prefixed framing.
2. Read four byte big endian integer lengths followed by payload bytes.
3. Accumulate partial fragments across multiple stream chunks.
4. Emit decoded string payloads and assert complete data integrity.

> **Hint:** Check if buffer length is at least header plus payload length before slicing.

## Check yourself

- What is the difference between a Duplex stream and a Transform stream?
- When is the _flush method invoked in a custom Transform stream?
- Why must network packet decoders buffer partial chunks across _transform calls?
- How does setting readableObjectMode to true benefit downstream consumers?

---

[Course README](../../README.md) · [Node.js Internals & Backend Services on LearnSome.tech](https://learnsome.tech/courses/nodejs-course)
