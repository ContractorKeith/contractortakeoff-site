---
title: GTM_PLAN
type: resource
created: 2026-07-02
updated: 2026-07-02
tags:
  - contractor-bid
  - projects
status: draft
---

# GTM_PLAN.md

## contractor-bid: Go-To-Market

Version 1.0 | 2026-07-01

Everything here serves two offers: the DFY Bid Pipeline Setup (cash now) and Founding Pro (recurring later). One CTA per piece of content. No paid ads until $1k MRR.

---

## 1. Launch phases

### Phase 0: Soft launch (Week 1, Jul 1 to Jul 8)

Day-by-day. All of this is shippable with what exists today plus Phase A of PAID_TIER_DESIGN.md.

- Day 1 to 2: Tag and publish the release. Verify `pipx install "contractor-bid[mcp]"` on a clean machine. Stand up the Homebrew tap. (PRODUCT_ROADMAP v0.2.2 items.)
- Day 2 to 3: Lemon Squeezy store live: Founding Pro $290/yr, DFY $750. Landing page v1 on contractortakeoff.ai (LANDING_PAGE_DESIGN.md). Buttondown list wired.
- Day 3 to 4: Record and publish the YouTube welcome video plus Video 1 (full pipeline demo). Record the README GIF in the same session.
- Day 5: X launch thread (draft in CONTENT_PLAN.md). Pin it.
- Day 5 to 7: DM 20 warm contacts (script below). Post the offer once in two fence/sub Facebook groups where you already participate.
- Goal: 2 DFY bookings or founding sales. Even one is a launch.

### Phase 1: Founding push (Weeks 2 to 6)

- Deliver DFY setups; film every one (screen capture + notes) for case studies.
- Publish 2 videos/week and daily X posts per CONTENT_PLAN.md.
- One value-first post each in r/estimators and r/Construction (format below). One Show HN for the Frank audience: "Show HN: contractor-bid, a local-first CLI that turns commercial bid packages into source-backed workspaces." Answer comments for a day, then move on.
- Close out the 20 founding slots. Scarcity is real: the count on the pricing page decrements.
- Goal by day 30: 3 DFY + 10 founding sales, 100 GitHub stars, 150 emails.

### Phase 2: Public v0.3.0 launch (Weeks 6 to 8)

- Ship Pro licensing (PAID_TIER_DESIGN Phase B). Announce: launch video #2 (addenda diff hero demo), X thread, email blast, updated pricing page with monthly Pro on.
- Publish case study #1 with real before/after timing from a DFY customer.
- Comparison content goes live: "BuildingConnected raised your price again. Here's the sub-side stack for $490/yr." and a STACK/Downtobid comparison page. Target the refugees.
- Goal by day 60: first $500 true MRR, 5 DFY total.

### Phase 3: Sustain and decide (Weeks 9 to 12)

- Keep the cadence. Add LinkedIn repurposing (Erin lives there).
- Open the hosted waitlist on the site; it is the v0.5 gate counter.
- Day-90 gate review (Section 5).

---

## 2. First-customers playbook

**Warm 20 (Day 5):** GC estimators and PMs who send you ITBs, fence and specialty sub owners from CCF/Dutch Built years, trade contacts from AFA circles, plus the handful of construction-tech mutuals on X.

DM/text script (adjust per person, keep it this short):

> "Built a tool that takes a commercial bid package from inbox to a reviewable scope packet, takeoff workbook, and supplier sendoff in under an hour. Local, nothing uploaded anywhere. I'm setting it up for five subs at $750 flat, includes a year of the paid tier. Want the 3-minute video?"

**Facebook groups / AFA:** Post the workflow result, not the product. A screenshot of the ALERTS.md that caught a scope gap plus two sentences of story out-pulls any pitch. Offer the video link in comments.

**Reddit format (value-first, self-promo-rule safe):** Write the "how I triage a 400-page plan set for my scope" process as a text post that is genuinely useful with zero links. Mention the open-source tool once at the bottom because someone will ask. Do not post the landing page.

**BuildingConnected refugees:** Search X and Reddit for BuildingConnected price complaints; reply helpfully with the local-first angle, never spammy. The comparison page does the selling.

---

## 3. DFY fulfillment checklist (fixed scope so it never becomes consulting)

1. 30-min kickoff screen-share: confirm trade, CSI division, current bid flow, pick the live bid to set up on.
2. Install CLI + MCP + agent plugin on their machine (or remote session).
3. Build their custom profile: scope terms, exclusions, flags, standard proposal exclusions (this seeds their moat and yours).
4. Load their templates: proposal letterhead, RFI form, supplier list.
5. Run their live bid through the full pipeline together, end to end.
6. Handoff: 10-minute Loom recorded on their setup, one-page cheat sheet.
7. Collect: testimonial quote + permission to anonymize the case study numbers. Timebox: 4 hours total. Anything beyond scope goes on the roadmap, not the calendar.

---

## 4. Objection handling

| Objection                                     | Answer                                                                                                                                                            |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "I'm not touching a terminal."                | You don't. Either I set it up (DFY) or you talk to it through Claude in plain English. Terminal is optional.                                                      |
| "IT / the GC won't let plans in an AI cloud." | Nothing leaves your machine. The core is open source; your IT can read every line. That's the whole point.                                                        |
| "AI makes up numbers."                        | Agreed, which is why this one can't. The AI reads and drafts; deterministic code writes the workbook from JSON you approve. Every number traces to a source page. |
| "We already pay for STACK/Bluebeam."          | Keep them. This handles the two hours before takeoff and the hour after: triage, scope, alerts, sendoff. It feeds Bluebeam, not replaces it.                      |
| "What if you get hit by a bus?"               | Core is MIT on GitHub forever. Your bids are local files you own. Worst case you keep everything and lose my updates.                                             |
| "$49/month for a script?"                     | It's $49 against one missed addendum. You've eaten one. So have I.                                                                                                |

---

## 5. Metrics and decision gates

Track weekly in one row of a sheet: PyPI installs, GitHub stars, site visits, emails, DFY booked, founding sold, MRR, videos shipped.

- **Day 30 gate:** under 1 sale of anything and under 50 stars → the offer or the message is wrong, not the code. Fix positioning, re-run Phase 0 outreach. Do not add features.
- **Day 60 gate:** DFY selling but Pro isn't → lean service-led; raise DFY to $1,500 immediately and let Pro follow. Pro selling but DFY isn't → drop DFY to a setup add-on and go product-led.
- **Day 90 gate:** total collected under $2,000 → stop, run ten customer conversations, and revisit MASTER_PLAN before writing another line of code. $2,000 to $5,000 → working; double down on whichever offer converted. Over $5,000 → raise prices and greenlight the v0.5 gate check early.

## 6. What NOT to do (90 days)

No paid ads. No rebrand. No new repos. No conference booths. No Bluebeam companion work. No hosted build before the gate opens. No custom feature promises to close a sale.
