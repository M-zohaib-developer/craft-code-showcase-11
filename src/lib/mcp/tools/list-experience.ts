import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { experiences } from "../data";

export default defineTool({
  name: "list_experience",
  title: "List experience",
  description: "Returns the developer's professional experience: company, role, period, description, and responsibilities.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(experiences, null, 2) }],
    structuredContent: { experience: experiences },
  }),
});
