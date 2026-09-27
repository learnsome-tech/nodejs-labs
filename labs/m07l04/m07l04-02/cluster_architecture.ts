// Node.js Internals & Backend Services — lesson m07l04 — Cluster Architecture: node:cluster & Zero-Downtime
// https://learnsome.tech/courses/nodejs-course/watch?lesson=m07l04
// © LearnSome.tech
import cluster from "node:cluster";

interface WorkerNode { id: number; status: "online" | "draining"; }
class RollingCluster {
  nodes = new Map<number, WorkerNode>();
  spawn(id: number) { this.nodes.set(id, { id, status: "online" }); }
  drain(id: number) { 
    const w = this.nodes.get(id);
    if (w) w.status = "draining";
  }
}
const clusterSim = new RollingCluster();
clusterSim.spawn(1);
clusterSim.spawn(2);
clusterSim.drain(1);

console.log(`Primary process: ${cluster.isPrimary}`);
console.log(`Round robin: ${cluster.schedulingPolicy === cluster.SCHED_RR}`);
console.log(`Worker two status: ${clusterSim.nodes.get(2)?.status}`);
console.log(`Worker one draining: ${clusterSim.nodes.get(1)?.status}`);
