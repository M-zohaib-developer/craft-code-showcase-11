import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../data";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description: "Returns the portfolio's projects with title, description, tech stack, and links. Optionally filter by a technology (case-insensitive substring match on the tech stack).",
  inputSchema: {
    tech: z
      .string()
      .optional()
      .describe("Optional technology filter, e.g. 'React' or 'PostgreSQL'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ tech }) => {
    const filtered = tech
      ? projects.filter((p) =>
          p.techStack.some((t) => t.toLowerCase().includes(tech.toLowerCase())),
        )
      : projects;
    return {
      content: [{ type: "text", text: JSON.stringify(filtered, null, 2) }],
      structuredContent: { projects: filtered, count: filtered.length },
    };
  },
});
