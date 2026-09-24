# zohaib.engineer — Audit + Redesign & Technical SEO Plan

## 1. Audit (from the actual repository)

**Architecture**
- Framework: React 18.3 SPA, TypeScript 5.8
- Build: Vite 7.3 (SWC plugin) + Lovable MCP plugin; package manager bun/npm
- Router: react-router-dom 6 — only `/` and `*` (404). Single page, anchor-based sections
- Styling: Tailwind 3 + CSS variable tokens in `src/index.css`, shadcn/ui (many unused Radix packages)
- Animation: Framer Motion on every card, plus the underwater `OceanDive` layer, `ParticleBackground`, a scroll progress bar
- Content source: `src/data/projects.ts` (personalInfo, 5 projects, skills, experience) — also feeds the MCP tools
- Deployment: no `vercel.json` / `netlify.toml` in repo. Lovable URL is `craft-code-showcase-11.lovable.app`; `www.zohaib.engineer` is **not connected in Lovable**, so it's probably hosted elsewhere from GitHub (not confirmed)
- Backend: Lovable Cloud, used only for the MCP edge function. No analytics, no Search Console verification tag, no external scripts apart from Google Fonts

**Current SEO**
- Title/description exist but are generic ("Portfolio - ..."); no canonical, robots meta, theme-color, og:url, og:image, og:site_name, og:locale
- `twitter:site="@zohaib"` looks made up and will be removed unless you confirm a real handle
- No JSON-LD, no sitemap, no manifest, no apple-touch-icon; favicon is a generic terminal icon
- robots.txt allows everything but has no Sitemap line
- Headings: one H1 (split name), H2 per section, H3 cards — the structure is fine
- Alt text: hero uses the name; project images use raw titles like "MOBOCHECK_PLATFORM"
- Content quirks: titles/tech in SNAKE_CASE ("My_SQL", "QYRA_AI_ASSISTENCE"); every GitHub link points to the profile root
- Limit: as an SPA, crawlers that don't run JavaScript only see the static `index.html` head. Google renders JS; social previews read only static tags

**Current performance risks**
- LCP: hero photo `image-copy.png` is 1.1 MB PNG with no width/height; project PNGs are 0.2–2.0 MB (automatev 2 MB)
- Fonts: 3 families / ~12 weights loaded through a render-blocking CSS `@import`
- INP/main thread: always-running particle + bubble + caustics layers, scroll listeners, blur-heavy glows, `whileInView` with `once:false` (animations replay constantly)
- CLS: images without dimensions; the "Available For Work" bar computes the year at render (harmless)
- Bundle: recharts, embla, cmdk, day-picker, etc. are installed; they're tree-shaken if unused, so there's little build risk

**Current UI**
- Underwater cyan theme with glassmorphism, big gradient/italic text, heavy motion — this conflicts with the requested restrained direction
- Navigation: fixed, blur on scroll, mobile toggle has no focus trap and no `aria-expanded`
- No reduced-motion handling

## 2. Design direction (replaces the underwater theme)

- Palette (HSL tokens in `index.css`): bg #05070A, surface #0B0F14, elevated #10161D, border #1B232D, text #F5F7FA / #8B96A5 / #626D7A. Single accent: the existing cyan, toned down (≈ #22D3EE → used sparingly for links, focus rings, small markers)
- Type: Inter (400/500/600) + JetBrains Mono (400) only for metadata labels. Space Grotesk and DM Sans are dropped. Fonts load via `<link rel="preconnect">` + `<link>` in `index.html` with `display=swap` (no CSS @import)
- Remove: OceanDive, ParticleBackground, the depth HUD, heavy glows and blur orbs, shimmer text. The scroll progress bar stays but becomes a thin line
- Motion: one shared fade/translate-up reveal (`once: true`, short), hover transitions; everything turned off under `prefers-reduced-motion`
- Memory update: the underwater theme is replaced by the "premium dark engineering" direction

## 3. Page structure (single page, semantic)

```text
header > nav (About, Experience, Projects, Skills, Contact)
main
  Hero (h1 Muhammad Zohaib + role + truthful summary, CTAs: View projects / Contact, CV download, GitHub/LinkedIn)
  About (h2) — existing bio + approach points
  Experience (h2) — existing roles as <article>, timeline kept
  Projects (h2) — MoboCheck featured; each <article>: title, one-line summary, description, stack, live link with descriptive anchor text ("Visit MoboCheck")
  Skills (h2) — existing categories
  Engineering Approach (h2) — short, built from content already in About (no invented claims)
  Contact (h2)
footer
```
- Project titles get proper display names (e.g., "MoboCheck", "Postsiva", "Qyra AI Assistant"), and tech labels get cleaned up ("MySQL", "React Native"). Descriptions stay factual; no metrics are added
- No project detail pages or blog in this pass: a JS-only SPA can't give them crawler-visible unique metadata. I'll recommend these for after an SSR migration

## 4. Technical SEO

- `index.html`: title "Muhammad Zohaib | Full-Stack Software Engineer"; description based on the real stack (React, Next.js, TypeScript, Node.js, MySQL, React Native); canonical `https://www.zohaib.engineer/`; `robots index,follow`; theme-color; full OG (type, url, title, description, image, site_name, locale) + Twitter card; the fake twitter:site is removed
- OG image: a 1200×630 JPG (<200 KB) generated with the name, role, and zohaib.engineer text, saved in `public/og-image.jpg` and referenced by its absolute www URL
- JSON-LD in `index.html`: `ProfilePage` → `Person` (name, url, jobTitle, image, email, address locality only if already on the site, `sameAs` = GitHub + LinkedIn from `personalInfo`, knowsAbout = real skills) + `WebSite`
- `public/sitemap.xml` (static; only `/` exists) and robots.txt simplified to `User-agent: *` / `Allow: /` + `Sitemap: https://www.zohaib.engineer/sitemap.xml`
- Favicon: an "MZ" monogram SVG in the accent color + apple-touch-icon PNG (180) + minimal `site.webmanifest`
- Security headers: can't be set from this repo (the host is unknown). I'll list them as a recommendation

## 5. Performance and accessibility

- Convert hero and project PNGs to resized WebP (hero ~800px, projects ~1200px), with explicit width/height, `loading="lazy"` on projects, `fetchpriority="high"` on the hero; originals are kept
- Descriptive alt text; skip-to-content link; visible `focus-visible` rings; nav toggle with `aria-expanded`/`aria-controls`; touch targets ≥44px; AA contrast check on muted text
- Test at 320/375/390/414/768/1024/1280 with Playwright for horizontal overflow

## 6. Validation and report

- Run `lint`, `vitest run`, and the build log check; screenshot the viewports; confirm the head tags, JSON-LD parse, and that robots/sitemap/OG image are served
- Final report in your format: files changed, SEO values, performance, accessibility, validation results, and what couldn't be verified (live domain hosting, headers, Search Console, real CWV field data)

## Files touched
`index.html`, `src/index.css`, `tailwind.config.ts`, `src/pages/Index.tsx`, `src/components/{Navbar,Footer,ScrollProgress}.tsx`, `src/sections/*.tsx`, `src/data/projects.ts` (display names/labels only), `public/{robots.txt,sitemap.xml,favicon.svg,apple-touch-icon.png,site.webmanifest,og-image.jpg,*.webp}`; delete `ScrollDoor.tsx`, `ParticleBackground.tsx`. MCP tools are left alone.

## Needs your confirmation
- Is www.zohaib.engineer deployed from this project's GitHub repo (e.g., Vercel)? The canonical URL assumes the www version
- Do you have a real X/Twitter handle? If not, it gets removed
