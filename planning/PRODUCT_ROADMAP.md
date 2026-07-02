---
title: PRODUCT_ROADMAP
type: resource
created: 2026-07-02
updated: 2026-07-02
tags:
  - contractor-bid
  - projects
status: draft
---

# PRODUCT_ROADMAP

## contractor-bid: v0.2.1 to v1.0

Version 1.0 | 2026-07-01

Effort sizing: S = an evening or two, M = about a week of part-time work, L = 2 to 4 weeks part-time. Every version has an exit test. If the exit test fails, the version is not done.

---

## Current state: v0.2.1 (shipped 2026-07-01)

What exists: CLI (new, triage, build-packets, build-workbook, check, package-sendoff, init, learn, doctor, run, status, list-profiles, track-*), FastMCP stdio server via `contractor-bid[mcp]`, Claude Code / Codex / Cursor plugin manifests, 22 CSI division starter profiles plus trade examples, bid tracker with xlsx output, learning loop, consolidated outputs, MkDocs Material docs site, CI, a sanitized fences/gates demo.

Known gaps that matter commercially:

- **No tagged release has ever been published.** The repo shows "No releases published," which means the PyPI workflow added in v0.2.0 has never run. `pipx install contractor-bid` is documented but may not actually work. This is the single highest-leverage fix in the entire roadmap.
- Homebrew formula is a template, not a live tap.
- No OCR (scanned plan sets fail triage). Documented limitation, common in the real world.
- No addenda handling beyond alerts.
- No licensing or payment path.
- README has a handful of em dashes (bid tracker section). Swap for periods or colons. They read as AI tells and that is exactly the accusation to avoid.

---

## v0.2.2 "Installable" (Week 1 to 2, target Jul 13)

Theme: anyone can install and run the demo in five minutes. Zero new features.

| Item                                                                                            | Effort | Notes                                                                 |
| ----------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------- |
| Tag v0.2.1/v0.2.2, verify PyPI publish workflow end to end                                      | S      | Confirm `pipx install "contractor-bid[mcp]"` works on a clean machine |
| Stand up `ContractorKeith/homebrew-tap` with a working formula                                  | S      | You already run homebrew-cli-toolbelt; same pattern                   |
| GitHub Release notes for all three versions                                                     | S      | Releases are a discovery surface                                      |
| README: 30-second demo GIF at the top (VHS or asciinema), install one-liners, star CTA kept     | S      | The GIF is the landing page for GitHub traffic                        |
| Fix em dashes in README/docs                                                                    | S      | One pass                                                              |
| `contractor-bid version --check` against a static JSON on the site (no telemetry, opt-in check) | S      | Update channel without phoning home                                   |
| Docs: add a "Why contractor-bid" page mirroring the positioning                                 | S      |                                                                       |

Exit test: a stranger on a clean Mac and a clean Windows box gets from zero to the demo output in under 5 minutes using only the README.

---

## v0.3.0 "Pro" (Weeks 3 to 6, target mid-Aug)

Theme: the paid tier exists and delivers value the free tier does not. Full technical spec in PAID_TIER_DESIGN.md.

| Item                                                                                                                                                                               | Effort | Tier          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------- |
| `contractor-bid activate / license status / deactivate` against Lemon Squeezy license API, offline grace                                                                           | M      | infra         |
| `contractor-bid pro install` fetching the private pro wheel via license-gated Cloudflare Worker                                                                                    | M      | infra         |
| **Pro profile packs v1**: deep fences-gates pack (full scope-term library, exclusions, flag terms, proposal language), plus 2 more trades chosen by founding members               | M      | Pro (content) |
| **`diff-addendum`**: compare an addendum PDF against the triaged set, flag changed/added pages touching carried scope, write to ALERTS.md                                          | M      | Pro           |
| **OCR path**: `--ocr` on triage using ocrmypdf when Poppler text extraction comes back empty                                                                                       | M      | Pro           |
| **Sendoff email drafts**: generate .eml drafts (supplier RFQ with the zip attached, internal review note) from templates. Drafts only, never auto-send, no SMTP credentials stored | S      | Pro           |
| **Bid calendar**: ICS export from the tracker (due dates, follow-ups)                                                                                                              | S      | Pro           |
| **Template library v1**: proposal letter variants, RFI template, scope letter language blocks per division                                                                         | S      | Pro (content) |
| Docs: Pro setup guide, license troubleshooting                                                                                                                                     | S      |               |

Exit test: a founding member activates a key, installs pro, runs diff-addendum and OCR on a real bid, and the free CLI still works perfectly with no key at all.

Content authoring note: the profile packs and template library are Keith-hours, not code-hours. They are also the moat. Budget real evenings for them.

---

## v0.4.0 "Intake" (Weeks 7 to 10, target mid-Sep)

Theme: the bid comes to the tool instead of the estimator ferrying files. Prioritize by what DFY customers actually ask for; drop anything they don't.

| Item                                                                                                                                  | Effort | Tier |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---- |
| ITB email intake: parse a saved/forwarded .eml (subject, GC, due date, links) into `contractor-bid new` scaffolding                   | M      | Pro  |
| Watch folder: drop downloaded plan sets into an inbox dir, auto-file into bid-docs/                                                   | S      | Pro  |
| Unit-cost library: per-profile CSV of assemblies/unit costs that prefills workbook pricing columns (estimator still owns the numbers) | M      | Pro  |
| Tracker analytics: hit rate, won/lost value by GC and project type, on a tracker sheet                                                | S      | Free |
| Workbook polish from field feedback                                                                                                   | S      | Free |

Exit test: forward an ITB email, drop the plans in the inbox folder, and reach a built packet with at most two human review gates in between.

---

## v0.5.0 "Hosted beta" (Weeks 11 to 16, ONLY if the gate opens)

Theme: the same engine behind a browser upload for the Pauls who will never install anything.

**Gate to greenlight (any one):** 100+ waitlist emails, or 10 explicit "I'd pay for a web version" asks from real prospects, or 3 DFY customers who stall specifically on local install.

| Item                                                                                                                                     | Effort |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Minimal web front end: upload PDFs, pick a profile, download the packet zip. Same Python engine, job queue, files deleted after delivery | L      |
| Auth + billing via Lemon Squeezy checkout                                                                                                | M      |
| Clear data-handling page (this is the one product surface where files do leave the machine; be loud and honest about retention)          | S      |

If the gate never opens, skip to v1.0 and stay local-first. That is a fine outcome, not a failure.

---

## v1.0 "Steady" (Q4 2026)

- Stability pass, error-message quality, upgrade paths, docs completeness.
- Three public case studies with real timing numbers.
- Price raise: Pro to $59/$590. Founding members untouched.
- Decide the next-year bet from data: hosted growth vs. deeper trade packs vs. Bluebeam companion.

---

## Explicit non-goals (write them down so they stop whispering)

- No pricing engine. The tool never tells anyone what a job costs.
- No computer-vision auto-takeoff. That is Togal/Bobyard's funded knife-fight.
- No GC-side features. Sub-side only.
- No marketplace, no community platform, no plugin store.
- plan-markup-app: parked. Earliest consideration v0.6 as a packet viewer/annotator, and only if customers ask.
- Pancreati: parked, per MASTER_PLAN.md.

## Standing dependencies

- Poppler (existing), ocrmypdf (v0.3, system dep, document it in doctor), Lemon Squeezy account, one Cloudflare Worker, the contractortakeoff.ai site (LANDING_PAGE_DESIGN.md).
