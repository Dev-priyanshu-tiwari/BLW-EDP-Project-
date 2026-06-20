// api/index.ts
// Vercel imports this file as a serverless function. It simply re-exports the
// Express app defined in server.ts — Vercel's Node runtime handles converting
// incoming HTTP requests into calls against this app automatically.
import app from "../server";

export default app;