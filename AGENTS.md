# Project architecture

- Keep portfolio facts in `src/data/projects.ts` so pages and MCP tools stay consistent.
- Store user-uploaded project imagery as Lovable asset pointers imported by the portfolio data, keeping uploaded binaries out of source control.
- Keep project rows in normal document order with CSS sticky progression on desktop; this preserves reading order and avoids scroll-driven JavaScript.