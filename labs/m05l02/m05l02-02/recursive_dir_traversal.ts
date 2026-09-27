// Node.js Internals & Backend Services — lesson m05l02 — Directory Traversal: Recursive Readdir & fs.watch
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m05l02
// © LearnSome.tech
import { mkdir, readdir, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const root = join(tmpdir(), `node_tree_${Date.now()}`);
let files = 0, dirs = 0;

try {
  await mkdir(join(root, "pkg", "src"), { recursive: true });
  await writeFile(join(root, "index.ts"), "export {}");
  await writeFile(join(root, "pkg", "src", "mod.ts"), "export {}");

  const list = await readdir(root, { recursive: true, withFileTypes: true });
  for (const item of list) {
    if (item.isFile()) files++;
    if (item.isDirectory()) dirs++;
  }
} finally {
  await rm(root, { recursive: true, force: true }).catch(() => {});
}
console.log(`Discovered files: ${files}`);
console.log(`Discovered directories: ${dirs}`);
