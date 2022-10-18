// Import tRPC
import * as trpc from "@trpc/server";

// Import Zod
import { z } from "zod";

// Import our tRPC instance
import { t } from "../trpc";

// Import our todo Schema
import { todoSchema, Todo } from "../models/todo";

// Initalize an empty array where we will be storing our todo's.
let todos: Todo[] = [];

// Create our todo router, and add a query (equivalent of a REST Get request) procedure with the name `all`
// Which be responsible for returning all the stored todos
export const todoRouter = t.router({
  all: t.procedure.query(() => {
    return todos;
  }),
  add: t.procedure.input(todoSchema).mutation(({ input }) => {
    todos.push(input);

    return todos as Todo[];
  }),
  delete: t.procedure
    .input(z.object({ id: z.number() }))
    .mutation(({ input }) => {
      const filteredTodos = todos.filter((todo) => todo.id !== input.id);

      todos = [...filteredTodos];

      return todos;
    }),
  update: t.procedure.input(todoSchema.partial()).mutation(({ input }) => {
    const index = todos.findIndex((todo) => todo.id === input.id);
    const todo = todos?.[index];

    if (!todo) {
      throw new trpc.TRPCError({
        code: "NOT_FOUND",
        message: "Given id doesn't exist",
      });
    }

    todos[index] = {
      ...todo,
      ...input,
    };

    return todos[index];
  }),
});
