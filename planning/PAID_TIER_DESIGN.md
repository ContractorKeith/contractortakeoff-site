---
title: PAID_TIER_DESIGN
type: resource
created: 2026-07-02
updated: 2026-07-02
tags:
  - contractor-bid
  - projects
status: draft
---

# PAID_TIER_DESIGN

## contractor-bid Pro: Free/Paid Split and Licensing Architecture

Version 1.0 | 2026-07-01 | Status: ready for Claude Code implementation at v0.3.0

This is the design.md. Hand it to Claude Code with PRODUCT_ROADMAP.md when v0.3.0 work starts.

---

## 1. Goals

- Sell Pro without ever degrading the free tool. Free users are distribution.
- Zero-to-minimal infrastructure: Lemon Squeezy (merchant of record) plus one Cloudflare Worker. Nothing else to babysit.
- The license check must never block core commands, never phone home silently, and fail soft when offline.
- Pro value is roughly half content (profile packs, templates: Keith's 37 years) and half code (addenda diff, OCR, email drafts). Content cannot be forked out of a git history because it is never in the public repo.

## Non-goals

- No DRM arms race. A determined pirate is not the customer. Convenience, updates, and support are what's actually being sold.
- No telemetry, no usage analytics, no account system beyond the license key.
- No seat-management UI. Machine activation counts are the seat mechanism.

---

## 2. Free vs Pro vs Shop matrix

| Capability                                                                                | Free               | Pro               | Shop                               |
| ----------------------------------------------------------------------------------------- | ------------------ | ----------------- | ---------------------------------- |
| CLI core: new, triage, build-packets, build-workbook, check, package-sendoff, run, status | yes                | yes               | yes                                |
| MCP server + Claude Code/Codex/Cursor plugins                                             | yes                | yes               | yes                                |
| 22 CSI division starter profiles + trade examples                                         | yes                | yes               | yes                                |
| Bid tracker + learning loop                                                               | yes                | yes               | yes                                |
| Pro profile packs (deep scope/exclusion/proposal libraries)                               |                    | yes               | yes                                |
| Template library (proposal variants, RFI, scope letter blocks)                            |                    | yes               | yes                                |
| `diff-addendum`                                                                           |                    | yes               | yes                                |
| OCR triage path (`--ocr`)                                                                 |                    | yes               | yes                                |
| Sendoff .eml draft generation                                                             |                    | yes               | yes                                |
| Bid calendar ICS export                                                                   |                    | yes               | yes                                |
| Support                                                                                   | GitHub Discussions | Email, 48h        | Email 48h + 60-min onboarding call |
| Machine activations                                                                       | n/a                | 2                 | 10                                 |
| Price                                                                                     | $0                 | $49/mo or $490/yr | $149/mo or $1,490/yr               |

Rule: features shipped free stay free. The line only ever moves by adding new Pro value.

---

## 3. Phase A: sell before the licensing code exists (Week 1, zero infra)

1. Create the Lemon Squeezy store and one product: **Founding Pro, $290/yr**, license keys ENABLED (LS generates them at purchase), activation limit 2.
2. Fulfillment now, manually: buyer gets an automated LS email with (a) the Pro Pack v0 download (zip of the deep fences-gates profile + template library v0, LS-hosted file) and (b) a note that the license key activates the full Pro feature set at v0.3.0, expected mid-August.
3. Add buyers to a Buttondown list segment "founding" for release notes and roadmap votes.
4. DFY customers: create a $750 LS product (first five) and a $1,500 product. Fulfillment is the DFY checklist in GTM_PLAN.md. Their 12 months of Pro = issue a 100% discount code for the Pro product, or generate a key manually in LS.

This means revenue can start the same week the landing page goes live, with the only build work being the content pack itself.

## 4. Phase B: licensing in the CLI (v0.3.0)

### 4.1 Architecture

```
buyer ──► Lemon Squeezy checkout ──► license key emailed
                                          │
                    contractor-bid activate <KEY>
                                          │
                          POST api.lemonsqueezy.com/v1/licenses/activate
                                          │
              ~/.contractor-bid/license.json  (key, instance_id, tier,
                                               last_validated, expires)
                                          │
        contractor-bid pro install ──► GET pro.contractortakeoff.ai/wheel
                                          │ (Cloudflare Worker validates key
                                          │  against LS API, streams wheel)
                                          ▼
                     pip installs contractor-bid-pro into the same venv
                                          │
              core CLI discovers pro via entry_points("contractor_bid.pro")
```

### 4.2 Repo and package layout

- Public repo `contractor-bid`: unchanged, MIT. Gains only the license client, the `pro install` bootstrapper, and the entry-point discovery hooks. All MIT.
- Private repo `contractor-bid-pro`: proprietary. Contains `diff_addendum.py`, `ocr.py`, `email_drafts.py`, `calendar.py`, the pro profile packs, and the template library. Ships as a wheel. Short EULA in the wheel (single company, activation-limited, no redistribution).
- Core detects pro at runtime via entry points and registers the extra subcommands. If pro is present but the license is invalid/expired past grace, pro subcommands print a clear message and exit 2; core is untouched.

### 4.3 CLI surface

```
contractor-bid activate <KEY>      # validate + activate instance, write license.json (chmod 600)
contractor-bid license status      # tier, activations, last validated, grace remaining
contractor-bid deactivate          # free the activation slot (calls LS deactivate)
contractor-bid pro install         # fetch + pip install the pro wheel (requires valid license)
contractor-bid pro update          # same endpoint, honors pinned/latest
```

### 4.4 Validation rules

- On any pro command: if `last_validated` is under 7 days old, run. Else re-validate against LS in the background of the command.
- Offline or LS unreachable: 21-day grace from `last_validated`, with a one-line notice after day 14. Never interrupt a bid because Wi-Fi at the jobsite is garbage.
- Expired subscription: pro commands stop after grace; everything free keeps working; `license status` says exactly what happened and links the billing portal.
- Clock-tampering paranoia: skip it. See non-goals.

### 4.5 Cloudflare Worker (the only server)

- `GET /wheel?key=...&product=pro` : POST the key to LS `/v1/licenses/validate`; on valid + active, stream the current wheel from a private R2 bucket; on invalid, 403 with a human-readable JSON error.
- `GET /latest.json` : current versions for `version --check` (public, static).
- Env: `LS_API_KEY`, R2 binding. Log nothing but status codes. Roughly 80 lines of code, deployable in an afternoon.

### 4.6 Error UX copy (write these, don't improvise later)

- Invalid key: "That key didn't validate. Check for typos or reply to your purchase email and I'll sort it. Nothing in your free install is affected."
- Activation limit: "This key is active on 2 machines already. Run `contractor-bid deactivate` on one of them, or email for a bump."
- Expired: "Your Pro subscription lapsed on <date>. Free features still work. Renew: <portal link>."

### 4.7 Testing plan

- Unit: license.json read/write, grace math, entry-point discovery with and without pro installed.
- Integration: mock LS API (validate/activate/deactivate happy + sad paths), Worker responses.
- Manual matrix before release: clean machine, free-only; activate; pro install; offline for 8 days; deactivate; expired key.

---

## 5. Pro Pack v0 content spec (Keith-hours, start now)

This is the Phase A deliverable and the moat. For fences-gates first:

1. Scope-term library: every term you'd search a spec book for (fabric, framework, gates, operators, access control interfaces, footings, grounding, temporary fence, screening, bollards adjacency, etc.), each tagged carry / exclude / flag.
2. Exclusion library: the standard proposal exclusions you actually use at CCF, generalized.
3. Flag-before-pricing list: the traps (operator power/control responsibility, gate hardware conflicts between sheets, DOT vs commercial spec mismatches). The Mavis lessons live here, sanitized.
4. Proposal language blocks: inclusions, exclusions, alternates, clarifications, schedule and payment qualifiers.
5. RFI templates: the drawing-conflict RFI, the missing-spec-section RFI, the responsibility-gap RFI. Repeat the pattern per trade later; founding members vote on the next two divisions.

---

## 6. Policies

- Refunds: 14 days, no questions, LS button.
- Support: Discussions (free), support@contractortakeoff.ai 48h (Pro), plus onboarding call (Shop). Calls are setup delivery, never open-ended consulting.
- Privacy: no telemetry, ever, stated on the site Security page. `version --check` is opt-in and hits a static file.
- Trademark: file for "contractor-bid" wordmark when revenue clears $1k MRR; until then, consistent brand use establishes common-law priority.

## 7. Open questions (decide at v0.3.0 kickoff, one hour max)

1. Monthly Pro at launch, or annual-only until licensing is proven? (Lean: annual-only for founding, add monthly at public v0.3.0 launch.)
2. Pro wheel Python floor: match core at 3.11.
3. Shop seat sharing pattern: document a git-remote profile/lessons sync recipe rather than building sync. Revisit if Shop sells.
