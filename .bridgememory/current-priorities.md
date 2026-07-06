# Current Priorities

Derived from TASKS-V1.md and planning/ as of early July 2026. Update this file when a new milestone starts.

## Status: V1 milestone complete

TASKS-V1.md ("Landing Page Live") is fully checked off: the static Astro site ships the landing page (`/`), `/dfy`, `/security`, `/compare`, short-link redirects, generated assets, and the public repo `ContractorKeith/contractortakeoff-site` is pushed. All verification steps (asset build, `astro check` + build, format check, visual smoke, no-em-dash check) passed.

There is no TASKS-V2 file yet. What follows is inferred from planning/; confirm with the user before treating it as committed site work.

## Likely next site work (from planning/)

- **Support the v0.2.2 "Installable" product push** (product target ~Jul 13): the product roadmap's top fix is making `contractor-bid` actually installable (tagged release, PyPI, Homebrew tap). Site-side implications: keep install instructions and the `/github` / `/docs` links accurate, and the roadmap mentions a static version-check JSON hosted on the site.
- **Founding Pro countdown**: the Founding Pro card shows "X of 20 left" and swaps to standard Pro pricing when slots hit zero; the site needs a way to keep that count current.
- **Hero terminal demo**: landing page design calls for a real 30-second VHS-recorded terminal demo (webm/gif) as the hero visual, "not an illustration." Verify whether the current hero asset meets that or is a generated placeholder.
- **v0.3.0 "Pro" launch support** (product target mid-Aug): pricing/FAQ copy may need updates when license activation and Pro features ship.
- Email capture via Buttondown in the footer; confirm it is wired to a live list.

## Standing constraints (binding operating rules)

- One primary offer at a time: currently DFY setup + Founding Pro. Nothing else gets a landing page.
- Ship something public every week.
- Landing page changes are timeboxed; new feature ideas go to the product roadmap, not the site.

TODO (user): replace the "Likely next site work" section with the actual next milestone when it is defined.
