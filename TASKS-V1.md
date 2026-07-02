# TASKS-V1

## Milestone: contractortakeoff.ai V1 "Landing Page Live"

Source: `planning/MASTER_PLAN.md`, `planning/LANDING_PAGE_DESIGN..md`, `planning/GTM_PLAN.md`, `planning/PAID_TIER_DESIGN.md`, `planning/PRODUCT_ROADMAP.md`, `planning/CONTENT_PLAN.md`.

Exit test: a static Astro build ships the landing page, DFY page, security page, comparison page, short-link redirects, generated visual assets, and public GitHub repository.

## A. Planning Review

- [x] A1. Review the locked product decisions in `MASTER_PLAN.md`.
- [x] A2. Review the landing page page architecture, copy, design tokens, and SEO requirements.
- [x] A3. Review GTM, paid-tier, product-roadmap, and content-plan requirements that affect the site.
- [x] A4. Confirm the upstream `contractor-bid` repo and docs URLs.

## B. Site Build

- [x] B1. Scaffold an Astro static site suitable for Cloudflare Pages.
- [x] B2. Implement `/` with nav, hero, problem strip, how-it-works, output artifacts, trust block, credibility, pricing, FAQ, and footer email capture.
- [x] B3. Implement `/dfy` for the done-for-you setup offer and founding Pro handoff.
- [x] B4. Implement `/security` with local-first, no-telemetry, AI-boundary, and retention copy.
- [x] B5. Implement `/compare` with honest alternatives positioning against GC-side bid boards, takeoff tools, and estimating suites.
- [x] B6. Add Cloudflare short-link redirects for `/github`, `/docs`, `/founding`, and `/call`.
- [x] B7. Generate bitmap marketing assets for the hero, workflow, trust block, and OG image.

## C. Repo Readiness

- [x] C1. Add README instructions for local development, asset generation, and checks.
- [x] C2. Add `.gitignore`, `.prettierignore`, Astro config, and TypeScript config.
- [x] C3. Install project dependencies and commit the lockfile.

## D. Verification

- [x] D1. Run generated asset build.
- [x] D2. Run Astro type and production build checks.
- [x] D3. Run formatting check.
- [x] D4. Run desktop and mobile visual smoke checks.
- [x] D5. Confirm no em dash characters in source content.

## E. Publish

- [x] E1. Initialize the local git repository.
- [x] E2. Create the public GitHub repository `ContractorKeith/contractortakeoff-site`.
- [x] E3. Commit all site files.
- [x] E4. Push `main` to GitHub.
