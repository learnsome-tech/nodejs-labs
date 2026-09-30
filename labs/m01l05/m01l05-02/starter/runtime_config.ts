interface ServerConfig {
  port: number; host: string; isProduction: boolean;
}
function parseConfig(env: Record<string, string | undefined>): ServerConfig {
  const port = parseInt(env.PORT || "3000", 10);
  const host = env.HOST || "127.0.0.1";
  const isProduction = env.NODE_ENV === "production";
  return { port, host, isProduction };
}
const config = parseConfig({ PORT: "8080", NODE_ENV: "production" });
console.log(`Server port: ${config.port}`);
console.log(`Server host: ${config.host}`);
console.log(`Production mode: ${config.isProduction}`);
