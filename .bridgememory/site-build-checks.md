# Site Build and Checks

Static Astro site for contractortakeoff.ai. Astro 7, `output: "static"`, sitemap integration, `site: "https://contractortakeoff.ai"`. Deployed on Cloudflare Pages. Source: package.json, astro.config.mjs, README.md.

## Setup and dev

```sh
npm install
npm run generate:assets   # node scripts/generate-assets.mjs (bitmap hero/workflow/trust/OG assets, uses sharp)
npm run dev
```

## Build

```sh
npm run build
```

`npm run build` runs `astro check && astro build`: the Astro/TypeScript type check (`astro check`) runs **before** static generation, so type errors fail the build. `npm run check` runs the type check alone. `npm run preview` serves the built output.

## Checks to run before shipping

1. `npm run generate:assets` (asset build)
2. `npm run build` (type check + production static build)
3. `npm run format:check` (Prettier; `npm run format` to fix)
4. Desktop and mobile visual smoke check (playwright is a devDependency)
5. Confirm no em dash characters in source content

## Pages and redirects

- Content pages: `/` (index), `/dfy`, `/security`, `/compare` in src/pages/
- Short links: `/github`, `/founding`, `/call` are redirect pages in src/pages/; `/docs` and friends live in public/_redirects (Cloudflare Pages redirects file)
