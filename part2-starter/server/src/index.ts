// Import the tRPC Express Adatper
import * as trpcExpress from "@trpc/server/adapters/express";

// Import Express
import express from "express";

// Import our App Router
import appRouter from "./routers";

// Initialize Express
const app = express();

// Tell Express to parse incoming requests using JSON
app.use(express.json());

// Tell Express to let the tRPC adapter handle all incoming requests to `/trpc`
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

// Start the server under the port 3000
app.listen(3000);
