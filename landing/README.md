# BlockLink landing page

Fundraising landing page for [BlockLink](../README.md), built with Next.js 16 (App Router, Cache Components), React 19 and Tailwind CSS v4. The page is fully static.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Deploy

The site is a static export (`output: "export"` in [`next.config.ts`](next.config.ts)): `npm run build` writes plain HTML/CSS/JS to `out/`, which any static host can serve. Cache Components and Partial Prefetching are disabled because they are incompatible with static export; the page doesn't need them.

**Cloudflare Workers (recommended, free, commercial use allowed):** [`wrangler.jsonc`](wrangler.jsonc) serves `out/` as static assets.

- From Git (Workers Builds): set **Root directory** `landing`, **Build command** `npm run build`, **Deploy command** `npx wrangler deploy`.
- Or from your machine: `npm run build && npx wrangler deploy`.

Then add your domain under the Worker's **Settings → Domains & Routes**.

## Editing content

All copy lives in [`src/content/site.ts`](src/content/site.ts). Items marked `TODO` are still open:

- `raise.stage` / `raise.amount`: round stage and target. Leave as `null` to hide them.

## Structure

```
src/
├── app/
│   ├── layout.tsx        # fonts, metadata
│   ├── page.tsx          # section order
│   ├── globals.css       # design tokens (colors, fonts) and animations
│   └── icon.svg          # favicon
├── components/
│   ├── ledger-feed.tsx   # animated job ledger in the hero (client component)
│   ├── nav.tsx, footer.tsx, logo.tsx, section.tsx
│   └── sections/         # one file per page section
└── content/
    └── site.ts           # all copy and investor details
```

The hero's ledger feed is an illustrative simulation and is labeled as such on the page.
