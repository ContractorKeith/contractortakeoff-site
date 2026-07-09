# Launch Status

Running log of what is actually live. Newest entry first. For binding copy rules see
.bridgememory/public-claims.md; for the full-site spec see REDESIGN_BRIEF_V2.md.

## 2026-07-09: domain, lander, and docs live

- **contractortakeoff.ai** moved to Cloudflare (registrar stays Namecheap, DNS is all
  Cloudflare). Apex + www serve the coming-soon lander (`coming-soon/index.html`) via the
  Pages project `contractortakeoff` (direct upload). The lander has one CTA (pilot email)
  and a "Read the docs" link.
- **docs.contractortakeoff.ai** live: Astro Starlight suite docs, 25 pages covering
  Contractor Takeoff (pilot), Plan Markup (early access), and the free engine (links to its
  MkDocs site). Source: private repo `ContractorKeith/contractortakeoff-docs`, Pages project
  `contractortakeoff-docs` (direct upload). Docs carry the site's pixel-mark logo/favicon.
- **Email**: support@contractortakeoff.ai (Namecheap forwarding) presumed dead after the NS
  move. Lander and docs temporarily use keith@contractorkeith.com. TODO: Cloudflare Email
  Routing, then swap back.
- **Full Astro site (src/)**: still unreleased on purpose. REDESIGN_BRIEF_V2 is the spec;
  review against it before ever deploying src/ to the apex. `site.ts` docsUrl already points
  at docs.contractortakeoff.ai.

## Earlier

- 2026-07-07: suite docs repo created and staged (see contractortakeoff-docs history).
- 2026-07-02: site redesigned around the Contractor Takeoff suite (commit 7678665);
  V1 "Landing Page Live" milestone was complete before the pivot (TASKS-V1.md).
