interface EventLoopPhase {
  name: string; description: string; source: string;
}
function getLoopPhases(): EventLoopPhase[] {
  return [
    { name: "Timers", description: "Timer callbacks", source: "setTimeout" },
    { name: "Pending", description: "Deferred I/O", source: "libuv" },
    { name: "Idle", description: "Internal operations", source: "kernel" },
    { name: "Poll", description: "Retrieves I/O events", source: "fs/net" },
    { name: "Check", description: "Immediate tasks", source: "setImmediate" },
    { name: "Close", description: "Teardown tasks", source: "socket.close" },
  ];
}
const phases = getLoopPhases();
console.log(`Total phases count: ${phases.length}`);
console.log(`Initial phase: ${phases[0].name} (${phases[0].source})`);
console.log(`I/O poll phase: ${phases[3].name} (${phases[3].source})`);
console.log(`Check phase: ${phases[4].name} (${phases[4].source})`);
