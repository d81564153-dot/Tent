# Tent MCP starter

A minimal TypeScript [Model Context Protocol](https://modelcontextprotocol.io/) server. Configure supported AI clients to connect to this server; it does not embed or connect to a private Copilot or ChatGPT API.

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```sh
npm install
npm run dev
```

The server uses stdio for MCP communication. Its example `hello` tool accepts a name and returns a greeting. To add capabilities, register more tools in `src/index.ts` and validate their inputs with Zod.

## Build

```sh
npm run build
npm start
```

## Connect an AI client

Add this server to the MCP configuration supported by your client. For a local stdio server, the command and arguments are:

```json
{
  "command": "node",
  "args": ["/absolute/path/to/Tent/dist/index.js"]
}
```

Some clients require a remote MCP server or a different configuration format. Follow the client’s current MCP setup instructions and use the transport it supports. Copilot and ChatGPT are separate applications; this template lets compatible clients use the same tools, rather than making one application a proxy for the other.
