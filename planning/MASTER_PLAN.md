---
title: MASTER_PLAN
type: resource
created: 2026-07-02
updated: 2026-07-02
tags:
  - contractor-bid
  - projects
status: draft
---

# MASTER_PLAN

## contractor-bid: Paid Product Master Plan

Version 1.0 | 2026-07-01 | Owner: Keith Bloemendaal (ContractorKeith)

This is the decision document. The other five files execute it:

- PRODUCT_ROADMAP.md (what ships, in what order)
- PAID_TIER_DESIGN.md (free vs paid split, licensing architecture, Claude Code handoff)
- GTM_PLAN.md (launch sequence, channels, first customers)
- CONTENT_PLAN.md (YouTube, X, scripts, calendar)
- LANDING_PAGE_DESIGN.md (contractortakeoff.ai spec, copy, design tokens)

---

## 1. Decisions (locked unless evidence says otherwise)

1. Product name stays **contractor-bid**. Paid tier is **contractor-bid Pro**. No rebrand.
2. Marketing domain is **contractortakeoff.ai** (already owned, $0, keyword-rich). contractorkeith.com stays the personal brand hub and links to it.
3. Core repo stays **MIT and free forever**. Pro is new value on top: content packs, addenda diff, OCR, sendoff email drafts, priority support. Never claw back a free feature.
4. Payments and license keys: **Lemon Squeezy** (merchant of record, handles sales tax, has a license key API the CLI can call).
5. Pricing: Pro $49/mo or $490/yr. Shop $149/mo or $1,490/yr (5 seats). Founding Pro: $290/yr locked for life, first 20 customers only.
6. DFY "Bid Pipeline Setup" service is the cash engine while Pro subscriptions ramp: $750 for the first five, then $1,500. Includes 12 months of Pro.
7. Distribution before features: Week 1 is tagging a release, publishing to PyPI, shipping the Homebrew tap, and launching the landing page. No new features until the tool is installable in one command. (The repo currently shows zero tagged releases, so the PyPI workflow added in v0.2.0 has never fired. Fix first.)
8. Hosted web version is **gated**, not scheduled. Build it only when the waitlist or DFY customers prove demand (see roadmap gate criteria).
9. Pancreati stays parked. plan-markup-app stays parked (candidate for a packet viewer at v0.6+, not before).
10. Anti-circles operating rules are in Section 8 and they are binding.

---

## 2. Product thesis

Every AI construction tool chases takeoff measurement (Togal, Bobyard, Kreo) or the GC-side ITB blast (Downtobid, BuildingConnected). Nobody owns the specialty subcontractor's receiving side: the four hours of PDF shuffling between "you're invited to bid" and "I can actually price this."

contractor-bid owns that gap. It turns a messy bid folder into a source-backed package: scope pages isolated, specs pulled, takeoff workbook scaffolded, scope-drift alerts raised, supplier sendoff zipped. It runs locally, the JSON is the source of truth, and an AI agent works inside the structure instead of inventing numbers.

**Positioning statement:** contractor-bid is the bid-setup tool for commercial subcontractors. It gets you from bid invite to a reviewable, source-backed package in under an hour, on your own machine, without uploading a single plan sheet to anyone's cloud.

**One-liners for different contexts:**

- Landing page: "From bid invite to supplier-ready package. Before lunch."
- X bio / repo tagline: "AI-ready bid workspaces for commercial subcontractors." (Keep. It works.)
- For estimators: "Stop shuffling PDFs. Start pricing work."
- For the AI crowd: "The MCP server that runs a real estimating workflow."

---

## 3. Naming

**Recommendation: do not rename.** Reasons:

- `contractor-bid` says exactly what it is, matches the existing family (contractor-os, fence-calc), and already has GitHub equity, docs, install scripts, and plugin manifests pointing at it.
- A rename is the classic going-in-circles trap: two weeks of migration work with zero revenue impact.
- Product name and domain do not have to match. Plenty of tools live on a different domain than their package name.

**Domain use:** contractortakeoff.ai is the marketing site. "Contractor takeoff" is what subs actually type into Google, and the tool genuinely produces a takeoff workbook, so it is honest. The hero headline corrects any expectation mismatch in the first five words (this is bid-setup, not auto-measurement).

**If a distinct paid brand is ever wanted (v0.5 hosted launch, not before), candidates to check for collisions and domain availability:**

| Candidate | Angle                                                            | Notes                                                             |
| --------- | ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| HardBid   | "Hard bid" is a real trade term for competitive lump-sum bidding | Insider credibility; verify no existing construction SaaS uses it |
| BidTriage | Names the wedge feature                                          | Descriptive, probably available                                   |
| BidPacket | Names the output                                                 | Descriptive; check .com                                           |
| Sendoff   | Already the name of a feature                                    | Short and memorable; likely collisions in other verticals, check  |
| ScopeDeck | Scope pages + deck of drawings                                   | Fine, less distinctive                                            |

**Rule:** naming gets a one-hour timebox, ever. Default answer is contractor-bid Pro.

---

## 4. Ideal user avatars

### Avatar 1: "One-Man Precon" Paul (primary DFY buyer)

- 48 to 62. Owns a specialty sub: fence, guardrail, site concrete, railings, specialties (Div 05/10/32 types). 5 to 25 field employees. He is the estimating department.
- Bids nights and weekends off Gmail, Excel, and a Bluebeam viewer. Gets 20+ ITBs a week from PlanHub, BuildingConnected, and GC emails. Skims plan sets on a laptop, misses addenda, has eaten at least one five-figure scope gap.
- Will not open a terminal. Will absolutely pay someone he trusts to set up a system that works. Watches YouTube how-tos at 1.5x.
- Buys: the DFY Bid Pipeline Setup, then keeps Pro because the packets keep showing up. The agent plugins are his bridge: after setup he types plain English into Claude and the tool does the rest.
- Found via: fence and specialty contractor Facebook groups, American Fence Association chapters, referrals, YouTube search ("how to bid commercial fence job").
- Objection: "I'm not technical." Answer: "You never touch the terminal. I set it up, you talk to it."

### Avatar 2: "Estimator Erin" (primary self-serve Pro buyer)

- 30 to 45. Staff or senior estimator at a 30-to-100-person commercial sub (Div 26 electrical, 22 plumbing, 23 HVAC, 09 finishes). Runs 15 to 30 bids a month.
- Has Bluebeam Revu and maybe STACK. Already uses ChatGPT or Claude personally but is not allowed to upload GC documents to it, or knows she shouldn't.
- Cares about audit trail: every number needs a source page. Hates that AI tools hallucinate quantities. Her boss asks "where did that number come from" weekly.
- Buys: Pro, self-serve, after watching one demo video. Expenses it or pays out of pocket because it saves her nights.
- Found via: LinkedIn, r/estimators, X, Google ("bid package organization," "spec section extraction").
- Objection: "IT will never approve a cloud AI tool." Answer: "It's local. MIT-licensed core you can read. Your plans never leave your machine."

### Avatar 3: "AI-Forward Frank" (distribution engine, secondary revenue)

- 28 to 50. Construction-tech tinkerer, tech-side sub owner, or developer building trade agents. Lives in Claude Code or Cursor. Follows the MCP ecosystem.
- Buys Pro occasionally, but his real value is stars, forks, retweets, and MCP directory visibility. He is why the repo gets found.
- Found via: X AI-builder community, MCP registries, Hacker News, Anthropic community spaces.
- Serve him with: clean docs, the MCP guide, build-in-public posts. Do not build features just for him.

**Priority: Erin and Paul pay the bills. Frank spreads the word.**

---

## 5. Selling points (and the proof each one needs)

1. **Bid setup in under an hour instead of an afternoon.** Proof: time yourself on the next three real CCF bids, before/after. Publish the real numbers. Never use invented stats.
2. **Never price off a missed addendum again.** Proof: the `check` command and ALERTS.md today; the Pro addenda diff at v0.3.0. Tell the Mavis Tire story (incomplete spec book, A-801 vs A-200 gate conflict) with details sanitized.
3. **Your plans never leave your machine.** Proof: local-first architecture, MIT core anyone can read, the docs Security page. This is the anti-Togal/anti-cloud wedge and it is loud.
4. **Every number traces to a source page.** Proof: the JSON source-of-truth design, the two human review gates in the pipeline. Speak the law: the AI reads and drafts, deterministic code transcribes.
5. **Built by a working estimator.** 37 years in construction, master plumber, journeyman electrician, built and sold a homebuilding company, bidding commercial fence right now. No VC product manager can say that sentence.
6. **Works with what you already run.** Bluebeam, Excel, email. Nothing gets ripped out.
7. **A tank of diesel, not a car payment.** $49/mo against STACK Pro at roughly $2,500/yr, Downtobid sub plans at $299/mo, BuildingConnected at $3,600+/yr.

---

## 6. Pricing and packaging

| Tier                       | Price                          | What's in it                                                                                                                                                                                                                                                  |
| -------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Free (OSS)                 | $0 forever                     | Everything shipped through v0.2.1: CLI, MCP server, agent plugins, 22 CSI starter profiles, tracker, learning loop. Community support via GitHub Discussions.                                                                                                 |
| **Pro**                    | $49/mo or $490/yr              | Pro profile packs (deep scope-term, exclusion, and proposal-language libraries per trade), addenda diff, OCR for scanned sets, supplier sendoff email drafts, bid calendar ICS export, template library, priority email support (48h), 2 machine activations. |
| **Shop**                   | $149/mo or $1,490/yr           | Everything in Pro, 5 seats / 10 activations, shared lessons and profile sync pattern, 60-minute onboarding screen-share (delivery, not consulting).                                                                                                           |
| **Founding Pro**           | $290/yr, price locked for life | First 20 customers. Pro content pack delivered immediately, license key when v0.3.0 ships, direct input on the roadmap.                                                                                                                                       |
| **DFY Bid Pipeline Setup** | $750 first five, then $1,500   | I install and configure the whole pipeline on your machine and your first live bid, load your profile, your templates, your supplier list. Includes 12 months Pro. Fixed scope, fixed price.                                                                  |

Rules: annual = two months free. 14-day refund, no questions. Raise Pro to $59/$590 at v1.0; founding members never move.

**90-day money math (targets, not fantasies):**

- 5 DFY setups: $3,750 to $7,500 cash
- 20 Founding Pro: $5,800 cash
- Day-90 goal: $1,500 to $2,500 MRR-equivalent plus service cash. If total collected by day 90 is under $2,000, run the day-90 gate review in GTM_PLAN.md before writing more code.

---

## 7. Risks and honest mitigations

| Risk                                                | Mitigation                                                                                                                                        |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| MIT core gets forked and re-sold                    | Moat is the brand, the pace, and the Pro content (37 years of scope knowledge in the profiles). Code was never the moat.                          |
| Bluebeam/Autodesk moves down-market                 | Their MCP is text-only and Max-gated. Stay local-first and sub-side. Revisit quarterly.                                                           |
| CLI ceiling: most estimators won't touch a terminal | Agent plugins are bridge one, DFY is bridge two, hosted at v0.5 is bridge three. Never lead marketing with the terminal.                          |
| One maintainer, day job                             | Fixed weekly shipping budget (Section 8), scope everything S/M/L, cut ruthlessly.                                                                 |
| AI platforms commoditize the workflow               | The profiles, lessons files, and trade knowledge are the durable asset. Keep pouring domain expertise into content the platforms cannot generate. |

---

## 8. Operating rules (anti-circles, binding)

1. One primary offer at a time. Right now: DFY setup + Founding Pro. Nothing else gets a landing page.
2. Ship something public every week: a release, a video, or a case study. If the week produced none, the next week starts with the smallest shippable thing.
3. Timeboxes: naming 1 hour (spent), logo 2 hours max, landing page v1 two evenings, any new feature idea gets written into PRODUCT_ROADMAP.md and waits for the next version boundary.
4. No new repos for 90 days. No Pancreati work. No plan-markup-app work.
5. Every piece of content ends with exactly one CTA.
6. Decisions get made against the day-30/60/90 gates in GTM_PLAN.md, not against mood on a Tuesday.
