// api/index.ts
// Vercel imports this file as a serverless function. It simply re-exports the
// Express app defined in server.ts — Vercel's Node runtime handles converting
// incoming HTTP requests into calls against this app automatically.
//
// NOTE: the extension below is intentionally ".js" (not ".ts") even though
// the source file is server.ts — this is required because the project uses
// ESM ("type": "module" in package.json), and Node's ESM resolver expects
// the compiled output extension, not the source extension, regardless of
// what bundler/transpiler runs underneath.
import app from "../server.js";

export default app;