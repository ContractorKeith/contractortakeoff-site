# Current Priorities

Updated 2026-07-09 after the suite pivot (planning/REDESIGN_BRIEF_V2.md) and the public
launch of the domain, lander, and docs. Update this file when a new milestone starts.

## Status: domain live, lander + docs shipped, full site unreleased

- **contractortakeoff.ai is live on Cloudflare** (nameservers moved from Namecheap 2026-07-08).
  The apex and www serve the coming-soon lander from `coming-soon/index.html`, deployed by
  direct upload to the Pages project `contractortakeoff`.
- **docs.contractortakeoff.ai is live**: Astro Starlight suite docs from the private repo
  `ContractorKeith/contractortakeoff-docs` (Pages project `contractortakeoff-docs`). Covers
  Contractor Takeoff (pilot), Plan Markup (early access), and links out to the free engine's
  MkDocs site. Lander links to it ("Read the docs").
- **The full Astro site in src/ is intentionally NOT deployed.** REDESIGN_BRIEF_V2 is the
  spec for it; some V1-era page copy predates the suite pivot. Do not deploy src/ to the
  apex without a review against the V2 brief.
- **Email caveat**: support@contractortakeoff.ai was Namecheap email forwarding and likely
  broke when nameservers moved. The lander CTA and four docs pages temporarily use
  keith@contractorkeith.com. `src/data/site.ts` still uses support@ (unreleased, left as is).

## Next

1. Set up Cloudflare Email Routing for support@contractortakeoff.ai, verify delivery, then
   swap the branded address back into the lander and docs.
2. Fact-check the docs page plan-markup/limitations-and-roadmap against the actual
   plan-markup-app code (the roadmap doc it was drafted from is behind the code).
3. Decide the launch path for the full site: rework src/ pages to the V2 brief, then replace
   the lander.
4. Pilot outreach: the lander and docs are now safe to share with pilot prospects.

## Standing constraints (binding operating rules)

- One primary offer at a time: currently the pilot program. The $750 DFY setup survives only
  as high-touch pilot onboarding (per REDESIGN_BRIEF_V2), not as a separate headline offer.
- Ship something public every week.
- Landing page changes are timeboxed; new feature ideas go to the product roadmap, not the site.
