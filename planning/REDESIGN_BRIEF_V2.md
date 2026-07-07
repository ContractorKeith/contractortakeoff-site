# REDESIGN BRIEF V2: contractortakeoff.ai as the suite landing page

2026-07-07. Supersedes LANDING_PAGE_DESIGN..md where they conflict. Written after a full review
of contractor-bid-pro and plan-markup-app as they exist today.

## 1. What changed since V1

- The product pivoted (contractor-bid-pro/planning/MASTER_PLAN.md, 2026-07-02): the paid product
  is no longer "contractor-bid Pro" CLI extras. It is **Contractor Takeoff**, a hosted bid command
  center (Django app) built on the free MIT contractor-bid engine. It is pre-launch, in pilot phase.
- **Plan Markup** is no longer parked. It is a working Bluebeam Revu replacement for commercial
  estimators (any CSI division): Mac desktop app, standalone browser app, and an embeddable viewer
  that mounts inside Contractor Takeoff. 302 tests passing, phases 1 to 5 complete.
- The site therefore markets a **suite**, not a CLI: Contractor Takeoff (bid command center) +
  Plan Markup (measure and markup) + the free open-source engine underneath.

## 2. Positioning and copy rules (binding)

- Audience: specialty subcontractors and their estimators. Voice: a working estimator, plain talk.
- Hero pitch: one command center for every bid. Suite framing in the sub-line.
- Contractor Takeoff claims: bid board (status, due dates, owner, next action), per-bid document
  library (plans, specs, addenda, bid forms), AI-assisted triage where every finding links to a
  source page, scope and deadline alerts, team notes and dated decisions, deterministic bid packet
  export. Multi-workspace teams. Built on the open engine.
- Plan Markup claims: full markup toolset with reusable tool chest presets, length/area/volume/count
  measurement with per-page scale and scale regions, takeoff totals with CSV export, sheet overlay
  and markup transfer for addenda, flattened or Revu-compatible editable PDF export, local sidecar
  files that sync through Dropbox/iCloud. Runs on Mac and in the browser, and embeds inside
  Contractor Takeoff.
- HONESTY (carried forward from .bridgememory/public-claims.md, still binding):
  - Never claim it prices jobs. Pricing stays the estimator's judgment.
  - No auto-takeoff / computer-vision measurement claims. Plan Markup measures because a human
    draws the measurement; Contractor Takeoff builds workspaces, it does not guess quantities.
  - No invented statistics. No fake logos, no fake testimonials, no fake star counts.
  - Local-first and source-backed claims apply as stated: engine runs locally, hosted app is
    coming and its data handling is stated plainly (private S3 storage, no training on your docs
    unless that is verified true; if unverifiable, say less).
  - The hosted app is NOT LIVE yet. The site may say "in pilot" and invite pilot signups. It may
    not imply you can log in today.
  - No em dash characters anywhere in site source content. Use periods or colons.
  - The page ends with exactly one primary CTA.
- CTA structure: primary CTA is the pilot program (mailto:support@contractortakeoff.ai with a
  pilot subject line, until a form exists). Secondary: star/install the free engine on GitHub.
  The $750 done-for-you setup survives as the high-touch pilot onboarding offer on /dfy, reframed:
  I set up the free engine on your machine today and you get first access to the app pilot.
- Keith credibility block stays: 37 years in construction, master plumber, journeyman electrician,
  founded and sold a homebuilding company, estimates commercial fence in Florida every week.

## 3. Design direction: "Jobsite Blueprint"

The page should feel like it came off a plan table, not out of a template. Muted, flat, industrial.
Zero neon, zero purple, zero glassmorphism, no stock photos, no emoji.

### Palette (flat, muted, pulled from the real apps)

- --paper: #F2F1EC (warm paper, light sections)
- --paper-raised: #FBFAF6
- --ink: #1C2733 (from Contractor Takeoff)
- --ink-soft: #5A6B7D
- --slate: #1E2126 and --slate-panel: #262A31 (from Plan Markup, dark sections)
- --slate-text: #D8DCE2, --slate-dim: #8A919C
- --steel: #1F5F8B (Contractor Takeoff brand blue; primary brand color of the suite)
- --steel-deep: #174A6D
- --blueprint: #2F6FB2 (Plan Markup web blue; links/accents on dark)
- --safety: #C7500F (muted safety orange; small doses only: eyebrows, key numbers, one CTA)
- --ok: #2E7D4F
- --line: #D9D6CC (light) / #3A4049 (dark)
- Flat color only. No gradients except a barely-there paper grain/dither.

### Typography

- Display and body: **Barlow** (@fontsource/barlow + @fontsource/barlow-condensed). Barlow is
  drawn from California highway signage: industrial, legible, zero startup vibes. H1/H2 in
  Barlow Condensed 700, tight leading, large clamp sizes.
- Numbers, file paths, terminal, prices: **JetBrains Mono** (already installed).
- Pixel accent: **Silkscreen** (@fontsource/silkscreen) for eyebrows/kickers and tiny labels
  ("SEC 01 / BID BOARD" style section markers). This is the pixel note: typography, not clip art.
- Drop Inter entirely.

### Pixel and texture language (the trending bit, kept tasteful)

- Section markers and eyebrows in Silkscreen with a small pixel-square ornament (CSS box-shadow
  pixel clusters or inline SVG, 3 to 5 squares stepping like a dither ramp).
- A subtle blueprint grid stays on light sections (current 28px grid is good, recolor to steel
  at ~6% opacity). Dark sections get a fine dot grid.
- Dither/halftone edge where light sections meet dark sections: a short band of pixel squares
  transitioning paper into slate (pure CSS or one inline SVG, image-rendering: pixelated).
- Pixel-art mini-icons are allowed for artifact/feature chips (inline SVG, currentColor).

### Motion (new; V1 banned it, V2 wants it)

- Page-load: staggered hero reveal (opacity + translateY, 40 to 80ms steps).
- Scroll: IntersectionObserver adds .in-view; sections and cards get short staggered reveals.
  One small shared script in BaseLayout, no library. Threshold ~0.2, reveal once.
- Hero centerpiece: hand-coded CSS mockups of BOTH apps (no screenshots exist for marketing):
  a light Contractor Takeoff bid-board card and a dark Plan Markup canvas card, overlapping,
  slightly rotated. Inside the bid board, a CSS keyframe loop cycles a "triage" sequence
  (alert rows appearing with a source-page tag). Inside the markup card, a measurement line
  draws itself (stroke-dashoffset) with a live ft-in label. These two cards ARE the brand image.
- Hover: buttons shift their hard shadow (press feel), cards lift 2px, links underline-slide.
- Everything respects prefers-reduced-motion (reveals become instant, loops pause).
- Performance budget still applies: static HTML, JS under ~10kb, LCP under 1.5s. No motion library.

### Layout

- Alternating light/dark bands that mirror the two products: light = Contractor Takeoff sections,
  dark slate = Plan Markup sections. The dither band stitches them together.
- Oversized numerals for the three workflow steps (Barlow Condensed, safety orange, ~120px).
- Keep hard 2px ink borders + offset hard shadows (current site's best trait; carries the
  industrial feel). Radius stays small (6 to 8px).
- Asymmetry welcome: overlapping app cards in hero, offset section headers, full-bleed dark bands.

## 4. Page map (index)

1. Nav: brand "Contractor Takeoff" wordmark + pixel mark; links: Products, How it works, Open
   source, Security, Docs; CTA button "Join the pilot".
2. Hero: eyebrow FOR SPECIALTY SUBCONTRACTORS; H1 about running every bid from one command
   center; suite sub-line; primary CTA "Join the pilot" + secondary "Star the free engine";
   overlapping dual-app CSS mockup.
3. Problem strip (3 cells, kept, copy refreshed: 400-page sets, missed addenda eat margin,
   cloud tools want the plan room uploaded).
4. Product band A (light): Contractor Takeoff. Bid board, doc triage, source-backed alerts,
   notes/decisions, export. Feature chips + a second small mockup (alerts list).
5. Product band B (dark): Plan Markup. Measure, tool chest, overlay/compare, CSV takeoff,
   Revu round-trip, Mac + browser. Feature chips + measurement mockup.
6. Better together: the embed story. Markups saved on a bid live inside the bid workspace.
   One suite for the whole bid, from invite to sendoff.
7. Trust band (dark or ink): source-backed AI + local-first engine. "AI that can't invent your
   numbers" survives verbatim; add the MIT engine line.
8. Built by an estimator (Keith block, kept, tightened).
9. Pilot section (replaces old pricing cards): pilot program card (what pilots get, what it
   costs: free during pilot in exchange for feedback, if that is accurate per planning docs;
   otherwise "pilot terms discussed on a call") + DFY setup banner reframed as high-touch
   onboarding at $750 + free engine card ($0 forever, pipx install).
10. FAQ: rewrite for the suite (Is the app live? What happens to my documents? Does it price
    jobs? Does Plan Markup replace Bluebeam? What about Windows? What if Keith disappears?
    What does the free engine do without the app?).
11. Final CTA section: single primary CTA "Join the pilot". Footer: email capture, links,
    "Made in Florida by a working estimator."

## 5. File ownership (for subagents)

- Agent A (foundation): global.css, BaseLayout.astro, SiteNav.astro, SiteFooter.astro,
  src/data/site.ts, package.json font deps, scripts/generate-assets.mjs (new OG image in new
  palette), public/favicon.svg (pixel mark). Owns all design tokens and shared motion script.
- Agent B (landing): src/pages/index.astro only. Page-specific styles live scoped in the page.
  Does not touch global.css.
- Agent C (subpages): dfy.astro, security.astro, compare.astro, call/founding/github redirect
  pages. Scoped styles only. Does not touch global.css.
- Agent D (QA): npm run generate:assets, npm run build, npm run format, playwright desktop +
  mobile screenshots, em dash sweep of src/, claims check against section 2 of this brief.
