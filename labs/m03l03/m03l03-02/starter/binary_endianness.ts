interface EndianCheck {
  beHex: string; leHex: string; firstByte: number;
}
function parseBinaryHeader(): EndianCheck {
  const buf = new ArrayBuffer(4);
  const view = new DataView(buf);
  view.setUint32(0, 0x12345678, false);
  return {
    beHex: view.getUint32(0, false).toString(16),
    leHex: view.getUint32(0, true).toString(16),
    firstByte: view.getUint8(0),
  };
}
const check = parseBinaryHeader();
console.log(`Big endian: 0x${check.beHex}`);
console.log(`Little endian: 0x${check.leHex}`);
console.log(`First byte: 0x${check.firstByte.toString(16)}`);
