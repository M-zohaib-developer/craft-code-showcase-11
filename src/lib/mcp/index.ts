import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listProjects from "./tools/list-projects";
import listSkills from "./tools/list-skills";
import listExperience from "./tools/list-experience";

export default defineMcp({
  name: "portfolio-mcp",
  title: "Muhammad Zohaib — Portfolio",
  version: "0.1.0",
  instructions:
    "Public tools for browsing Muhammad Zohaib's developer portfolio. Use `get_profile` for bio and contact links, `list_projects` for project details (optionally filtered by tech), `list_skills` for skills by category, and `list_experience` for work history.",
  tools: [getProfile, listProjects, listSkills, listExperience],
});
