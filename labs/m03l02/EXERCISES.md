# Exercises — Buffer Encodings: UTF-8, Hex, Base64 & Slicing

Lesson `m03l02` · [Watch](https://learnsome.tech/courses/nodejs-course/watch?lesson=m03l02)

## Exercise 1: Decode multi-chunk UTF-8 streams using StringDecoder

1. Create a multi byte emoji character encoded into a UTF-8 Buffer.
2. Split the buffer into partial slices midway through the character.
3. Show that buffer dot toString produces corrupted replacement glyphs.
4. Process slices with StringDecoder to reconstruct the intact emoji.

> **Hint**: Import StringDecoder from node colon string decoder.


---

© LearnSome.tech · support@iwantto.learnsome.tech
