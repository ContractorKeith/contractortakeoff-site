# Public Claims Discipline

Messaging rules for contractortakeoff.ai, the marketing site for contractor-bid.
Sources: planning/MASTER_PLAN.md, planning/PRODUCT_ROADMAP.md, planning/LANDING_PAGE_DESIGN..md, live page copy in src/pages/.

## What the site MAY claim

- contractor-bid is a **bid-setup tool for commercial subcontractors**. It organizes and compiles bid materials: triages a messy bid folder, isolates scope pages, pulls specs, scaffolds a takeoff workbook, builds source-backed packets, raises scope-drift alerts, and zips a supplier sendoff.
- It **helps decide whether to bid**: triage turns "you're invited to bid" into a reviewable picture of what's actually in the set, so the estimator can bid or pass with confidence.
- It fits **between the invite and the estimate** (the /compare page headline). It clears the hours of PDF shuffling in front of pricing.
- **Local-first**: the core workflow runs locally; plans stay on the estimator's machine. The free core has **no telemetry**. Core is **MIT-licensed and free forever**.
- **Source-backed outputs**: every generated number/page traces to a source; the AI reads and drafts, deterministic code transcribes, with human review gates.
- Works alongside Bluebeam, Excel, and email; nothing gets ripped out.
- Built by a working estimator (37 years in construction).

## What the site MUST NOT claim

- **It does not create final estimates and never will price a job.** Pricing is the estimator's judgment. The site FAQ answers "Will it price the job?" with "No, and it never will." Keep that answer.
- **No auto-takeoff / computer-vision measurement claims.** The domain says "takeoff" because the tool produces a takeoff *workbook scaffold*; the hero must correct the expectation in the first five words (bid-setup, not auto-measurement).
- No GC-side features, no marketplace, no plugin store (explicit product non-goals).
- **No invented statistics.** Time-savings claims only from real measured before/after numbers.
- Comparisons on /compare stay honest: acknowledge what BuildingConnected/STACK/Downtobid/takeoff tools are good at; contractor-bid handles the work before and after measurement.
- Never lead marketing with the terminal (CLI is real but not the pitch).
- If a hosted version ever ships, its data-handling difference must be stated loudly; until then, "plans never leave your machine" applies to the local product only.

## Style

- No em dash characters anywhere in source content (verified check; use periods or colons).
- Every page/content piece ends with exactly one CTA.
