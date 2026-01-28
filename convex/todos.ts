import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getTodos = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("todos").order("desc").collect();
  },
});

export const addTodos = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const res = await ctx.db.insert("todos", {
      text: args.text,
      completed: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      userId: "anonymus",
    });
    return res;
  },
});

export const toggleComplete = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get("todos", args.id);
    if (!todo) {
      throw new Error("Todo not found");
    }

    const res = await ctx.db.patch("todos", args.id, {
      completed: true,
      updatedAt: Date.now(),
    });
    return res;
  },
});
