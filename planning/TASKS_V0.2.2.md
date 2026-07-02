---
title: TASKS_V0.2.2
type: resource
created: 2026-07-02
updated: 2026-07-02
tags:
  - contractor-bid
  - projects
status: draft
---

# TASKS_V0.2.2

## Milestone: v0.2.2 "Installable"

Source: PRODUCT_ROADMAP.md v0.2.2 | Owner column: KEITH = manual/credentials, OPUS = agent work

**Exit test (from roadmap):** a stranger on a clean Mac and a clean Windows box gets from zero to the demo output in under 5 minutes using only the README.

**Order of operations:** A before B. B4 before B5. B5 before B7 (the Homebrew formula needs the published sdist URL and sha256).

---

## A. Audit first (AGENT)

- [ ] A1. Read `.github/workflows/`, identify the release workflow. Report: trigger condition (tag pattern), publish method (PyPI Trusted Publishing with `id-token: write`, or a token secret and its exact name), and any `environment:` name it declares.
  - Accept: a printed checklist titled "Keith's 10 minutes" with the exact names to configure on pypi.org and in repo Settings.
- [ ] A2. Verify `contractor-bid` is unclaimed on PyPI (https://pypi.org/project/contractor-bid/ should 404).
  - Accept: confirmed free, or a fallback name proposed (e.g. `contractor-bid-cli`) with pyproject and docs impact listed.
- [ ] A3. Verify pyproject.toml: version matches CHANGELOG (0.2.1), license, readme, project URLs, classifiers, and the `[mcp]` extra all present. Run `python -m build` and `twine check dist/*` locally.
  - Accept: both commands pass clean. If anything needed fixing, bump version to 0.2.2 and add a CHANGELOG entry.

## B. Keith's 10 minutes (KEITH, after A1 report)

- [ ] B1. Create pypi.org account, enable 2FA.
- [ ] B2. Configure what A1 reported: either add a Trusted Publisher / pending publisher (project `contractor-bid`, owner `ContractorKeith`, repo `contractor-bid`, exact workflow filename, environment name if any), OR create an API token and add it as the repo Actions secret under the exact name the workflow expects.
- [ ] B3. Tell Opus "PyPI side is done."

## C. Ship it (AGENT)

- [ ] C4. Commit any fixes. Tag the release commit (v0.2.1, or v0.2.2 if A3 bumped) and push the tag. Watch the Actions run to completion (`gh run watch`).
  - Accept: green workflow, package visible on pypi.org with rendered README.
- [ ] C5. Create the GitHub Release for the current tag with notes from CHANGELOG.md (full history in the body). Skip retroactive tags for 0.1.0/0.2.0 unless the publish workflow provably won't re-fire on them.
  - Accept: Releases page no longer says "No releases published."
- [ ] C6. Clean-machine verification: fresh pipx or container, `pipx install "contractor-bid[mcp]"`, then `contractor-bid doctor` and the fictional demo end to end. Bonus: repeat on ricardoclaw over Tailscale for a second-machine check.
  - Accept: demo outputs produced with no repo clone involved.
- [ ] C7. Homebrew: create `ContractorKeith/homebrew-tap`, write the formula against the published sdist (url + sha256, virtualenv pattern like homebrew-cli-toolbelt), test `brew install ContractorKeith/tap/contractor-bid` and `brew test`.
  - Accept: brew install works on a machine without the repo cloned.
- [ ] C8. README pass: install section leads with the pipx and brew one-liners (keep the script installer as the fallback), add the demo GIF slot at the top, keep the star CTA.
  - Accept: README shows one-command install above the fold.
- [ ] C9. Record the 30-second demo GIF with VHS (scripted tape running the fictional demo), place in README and save the webm for the landing page hero.
  - Accept: GIF plays in the README on GitHub; Keith approves the take.
- [ ] C10. Em dash sweep across README and docs; replace with periods, colons, or commas.
  - Accept: `grep -rn '—' README.md docs/` returns nothing.
- [ ] C11. Docs: add a "Why contractor-bid" page mirroring MASTER_PLAN.md Section 2 positioning.
  - Accept: page live on the MkDocs site, linked from the nav.

## D. Write TASKS_V0.3.0.md (AGENT)

- [ ] When v0.2.2 closes, have Opus generate TASKS_V0.3.0.md from PRODUCT_ROADMAP.md and PAID_TIER_DESIGN.md using this file as the template

## D. Close the milestone (KEITH)

- [ ] D1. Run the exit test yourself on one machine you didn't develop on. Time it.
- [ ] D2. That timing number is your first receipt. Post it.
