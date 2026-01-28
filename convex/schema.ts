import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  todos: defineTable({
    text: v.string(),
    completed: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
    userId: v.string(),
  })
    .index("by_createdAt", ["createdAt"])
    .index("by_user", ["userId"])
    .index("by_user_createdAt", ["userId", "createdAt"]),
});
