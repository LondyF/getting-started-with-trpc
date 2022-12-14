// Import our tRPC instance
import { t } from "../trpc";

// Import our todo Router
import { todoRouter } from "./todo";

// Create an appRouter which will be used to tie together all our different routers
// In our case, we will only have one router, our todo router. This todo router will be exported under the namespace `todo`.
const appRouter = t.router({
  todo: todoRouter,
});

export default appRouter;

// Export only the **type** of a router to avoid importing server code on the client
export type AppRouter = typeof appRouter;
