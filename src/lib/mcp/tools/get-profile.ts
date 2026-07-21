import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { personalInfo } from "../data";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Returns the developer's public profile: name, role, bio, location, and public contact links (email, GitHub, LinkedIn).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(personalInfo, null, 2) }],
    structuredContent: personalInfo,
  }),
});
