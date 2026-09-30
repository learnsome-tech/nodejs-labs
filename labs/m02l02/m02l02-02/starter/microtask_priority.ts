setImmediate(() => {
  const trace: string[] = [];
  trace.push("1: Sync turn");
  Promise.resolve().then(() => {
    trace.push("3: Promise microtask");
  });
  queueMicrotask(() => {
    trace.push("4: Standard microtask");
  });
  process.nextTick(() => {
    trace.push("2: NextTick callback");
  });
  setTimeout(() => {
    for (const item of trace) console.log(item);
  }, 10);
});
