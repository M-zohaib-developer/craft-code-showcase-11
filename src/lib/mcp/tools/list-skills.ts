import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { skillCategories } from "../data";

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description: "Returns the developer's skills grouped by category (Frontend, Backend, Tools).",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe("Optional category filter (case-insensitive), e.g. 'Frontend'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const filtered = category
      ? skillCategories.filter(
          (c) => c.title.toLowerCase() === category.toLowerCase(),
        )
      : skillCategories;
    return {
      content: [{ type: "text", text: JSON.stringify(filtered, null, 2) }],
      structuredContent: { categories: filtered },
    };
  },
});
