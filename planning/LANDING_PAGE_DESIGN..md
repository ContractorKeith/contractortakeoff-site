---
title: LANDING_PAGE_DESIGN.
type: resource
created: 2026-07-02
updated: 2026-07-02
tags:
  - contractor-bid
  - projects
status: draft
---

# LANDING_PAGE_DESIGN

## contractortakeoff.ai: Landing Page Spec

Version 1.0 | 2026-07-01 | Status: ready for Claude Code build (Astro + Cloudflare Pages, same stack as contractorkeith.com)

---

## 1. Domain and site architecture

- Primary: **contractortakeoff.ai** (owned). Deploy Astro static to Cloudflare Pages, custom domain, email routing for support@contractortakeoff.ai via existing Cloudflare setup.
- contractorkeith.com: add a nav item "contractor-bid" linking over. Docs stay on GitHub Pages (link out); revisit moving them under /docs post-v1.0.
- Pages: `/` (everything below), `/dfy` (setup offer detail + booking), `/compare` (vs BuildingConnected/STACK/Downtobid, ships Week 6), `/security` (data handling, mirrors docs Security page). Pricing is an anchor on `/`, not a separate page.
- Redirect contractortakeoff.ai/github → repo, /founding → LS checkout, /call → booking link. Short links for videos.

## 2. Design direction

The site should look like it was built by the person who builds the tool: industrial, high-contrast, fast, zero AI-startup slop.

Tokens:

- Background `#F6F4EF` (paper), ink `#16181B`, secondary `#4A4F55`, accent `#F4501E` (safety orange), success `#1F7A3D`, code block bg `#0F1114` with `#E8E6E1` text.
- Type: Inter (or IBM Plex Sans) for UI/body, **JetBrains Mono** for headings' kicker lines, terminal blocks, numbers, and prices. Base 18px, 1.6 line height, max text width 68ch.
- Hard bans: gradients, glassmorphism, emoji, stock photos, purple anything, marquee logos, chat-widget popups, em dashes in copy.
- Motion: none except the terminal demo playing. Performance budget: static HTML, under 100kb JS total, LCP under 1.5s.

## 3. Section-by-section spec with copy

### 3.1 Nav

Logo text `contractor-bid` (mono), links: How it works, Pricing, Docs, GitHub (star count badge), CTA button "Get the setup" → /dfy.

### 3.2 Hero

- Kicker (mono, orange): `FOR COMMERCIAL SUBCONTRACTORS`
- H1 options (pick one, A/B later):
  - A: **From bid invite to supplier-ready package. Before lunch.**
  - B: **Stop shuffling PDFs. Start pricing work.**
  - C: **The four hours before you can price a job? Gone.**
- Sub: "contractor-bid turns a messy bid package into a source-backed workspace: your scope pages isolated, specs pulled, takeoff workbook built, traps flagged, supplier sendoff zipped. On your machine. Nothing uploaded anywhere."
- Primary CTA: `Get it set up for you $750` → /dfy. Secondary: `Install free` → copies `pipx install "contractor-bid[mcp]"` with a small "requires Python 3.11+" note. Tertiary text link: "Watch the 8-minute demo."
- Hero visual: the terminal demo (VHS-recorded webm/gif, 30 seconds, the real pipeline on the fictional demo bid). Not an illustration.

### 3.3 Problem strip (3 short columns, plain text)

- "400 pages, 3 addenda, one afternoon gone before you price a foot of work."
- "One missed addendum or one word of scope drift eats the whole margin."
- "Cloud AI tools want the GC's plan room uploaded to their servers. Your NDA disagrees."

### 3.4 How it works (3 steps, each with a real screenshot)

1. **Drop the docs.** "Plans, specs, addenda, bid forms go in bid-docs/. Scanned sets included." (v0.3+)
2. **Review, don't hunt.** "Triage finds your scope pages and proposes them. You approve. Packets, summary, and workbook get built from what you approved."
3. **Send it off.** "Scope-drift alerts, proposal language, and a supplier-ready zip. Every number traces to a source page." Below: the outputs gallery, a 2x4 grid naming the eight artifacts (Bid Scope Summary, scope-pages.pdf, spec-pages.pdf, Takeoff Worksheet, Proposal Letter, ALERTS.md, Bid Tracker, supplier sendoff zip).

### 3.5 The trust block (this is the differentiator, give it room)

Heading: **AI that can't invent your numbers.** Copy: "The model reads, classifies, summarizes, and drafts. Deterministic code writes every quantity, from JSON you approved, tied to a source page. Two human review gates are built into the pipeline on purpose. If a number's in the workbook, you can prove where it came from." Side-by-side: `bid-docs/ (yours, untouched)` vs `bid-package-working/ (generated, reviewable)`.

### 3.6 Credibility block

Photo optional (jobsite, not headshot-studio). Copy: "Built by Keith Bloemendaal. 37 years in construction. Master plumber, journeyman electrician, founded and sold a homebuilding company, currently estimating commercial fence in Florida. This tool exists because I bid work every week and got tired of the paper shuffle. I run it on my own bids before you ever see a release."

### 3.7 Pricing (anchor #pricing, 3 cards + service banner)

- Free card: "$0 forever. The full open-source workflow." bullets: CLI + MCP + agent plugins, 22 CSI starter profiles, tracker, community support. CTA: Install free.
- **Founding Pro card (highlighted, orange border): "$290/yr, locked for life. X of 20 left."** bullets: everything in Pro at v0.3.0 (deep trade profile packs, addenda diff, OCR for scanned sets, sendoff email drafts, calendar, template library, priority support), Pro content pack today, roadmap vote. CTA: Claim a founding slot. (Card swaps to standard Pro $49/mo / $490/yr when slots hit zero.)
- Shop card: "$149/mo. 5 seats, shared profiles, onboarding call." CTA: email.
- Full-width banner below: "**Done-for-you setup: $750 flat** (first five, then $1,500). I install everything, build your trade profile, load your templates, and run your next live bid with you. Includes a year of Pro." CTA → /dfy.

### 3.8 FAQ (details/summary, no JS)

1. Do I need to use a terminal? "No. Either I set it up for you, or you drive it through Claude, Codex, or Cursor in plain English. The terminal is there for people who want it."
2. Where do my bid documents go? "Nowhere. They stay in a folder on your machine. The core is MIT-licensed; your IT can read every line."
3. Does it do the takeoff measurement? "It builds the source-backed takeoff workbook and page packets; you (or your Bluebeam workflow) still measure. It refuses to guess quantities, on purpose."
4. Will it price the job? "No, and it never will. Pricing is your judgment. This clears the four hours in front of it."
5. What trades? "Starter profiles for CSI Divisions 03 through 33, deeper Pro packs starting with fences and gates. `init` builds a custom profile in minutes."
6. Scanned plan sets? "Pro adds an OCR path at v0.3.0. Vector PDFs work today."
7. What happens if you disappear? "The core is open source forever and your bids are plain local files. You lose my updates, not your data."
8. Refunds? "14 days, no questions."

### 3.9 Footer

Email capture (Buttondown): "Bid-automation release notes. No spam, unsubscribe whenever." Links: Docs, GitHub, Changelog, Security, X, YouTube, contractorkeith.com. Line: "Made in Florida by a working estimator."

## 4. SEO and analytics

- Title: "contractor-bid: bid package automation for commercial subcontractors". Meta: the hero sub. OG image: terminal screenshot with the H1.
- Target queries: subcontractor bid software, construction bid package organization, commercial estimating workflow, contractor takeoff tool, BuildingConnected alternative for subs, bid triage.
- schema.org SoftwareApplication JSON-LD (name, OS, offers).
- Plausible: events `install_copy`, `founding_click`, `dfy_click`, `video_play`, `email_signup`. Weekly review against GTM gates.

## 5. Build notes for Claude Code

Components: Nav, Hero (with TerminalDemo webm + copy-to-clipboard install), ProblemStrip, Steps, OutputsGrid, TrustBlock, Credibility, PricingCards (founding countdown reads a static JSON updated by hand or a tiny Worker), FAQ, Footer/EmailForm. Astro static output, images as optimized webp, fonts self-hosted, no client framework unless a component truly needs it. Ship v1 ugly-but-live in two evenings; polish after the first sale.
