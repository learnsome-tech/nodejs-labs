import { fileURLToPath } from "node:url";

interface ModuleMeta {
  url: string; isEsModule: boolean; hasFileProtocol: boolean;
}
function inspectModule(importMetaUrl: string): ModuleMeta {
  const isFile = importMetaUrl.startsWith("file://");
  return {
    url: importMetaUrl, isEsModule: true, hasFileProtocol: isFile,
  };
}
const meta = inspectModule(import.meta.url);
const filePath = fileURLToPath(import.meta.url);
console.log(`Module system: ESM`);
console.log(`URL protocol file: ${meta.hasFileProtocol}`);
console.log(`Path string resolved: ${filePath.length > 0}`);
