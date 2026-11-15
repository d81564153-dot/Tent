import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "tent-tools",
  version: "0.1.0",
});

// Example tool. Add tools here for capabilities you want MCP-compatible
// clients (such as supported Copilot or ChatGPT experiences) to call.
server.tool(
  "hello",
  "Return a greeting for a name.",
  {
    name: z.string().min(1).describe("Name to greet"),
  },
  async ({ name }) => ({
    content: [{ type: "text", text: `Hello, ${name}!` }],
  }),
);

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error: unknown) => {
  // MCP stdio uses stdout for protocol messages; log diagnostics to stderr.
  console.error("MCP server failed to start:", error);
  process.exitCode = 1;
});
