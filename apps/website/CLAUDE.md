# NOCKO website — guidance for Claude

## When creating or editing content (articles, case studies, service/location pages)

**Follow `CONTENT-CREATION-ALGORITHM.md` step by step** (topic → EN page → RU page → register → build → deploy → verify → request indexing).

Verify against `CONTENT-INDEXING-CHECKLIST.md` before considering a page done.

### Non-negotiables (most common indexing bugs here)
- Every page: `robots: { index: true, follow: true }` + **self-referencing** `canonical` (RU pages canonical to `/ru/...`, never to the EN URL).
- Always create EN **and** RU pair with bidirectional `hreflang` (`en-AE` / `ru-RU`); RU content must actually be in Russian and use `HeaderWrapperRu`/`FooterRu`.
- Add the slug to **both** article/case-study lists in `app/sitemap.ts` (EN list + RU list are separate).
- New page must have at least one incoming internal link (link it from the matching `/services/*` page's `resources`); a sitemap entry is not a link.
- Titles: do **not** append `| NOCKO Information Technology` (root layout template already adds it).
- Dynamic `[slug]` fallback pages need a block in **both** `generateMetadata` and the component body, in EN and RU, or they serve a soft-404 with `noindex`.
- Case studies must also be added to `lib/data/caseStudies.ts` (`defaultCaseStudies`) to appear on the `/case-studies` index.
- `app/robots.ts` must not block `/_next/static/...` (Google needs JS/CSS to render).
- Commit every new file to git (don't rely on CLI-only deploy); build from `apps/website` and confirm `EXIT 0` before deploying.

## Deploy
Vercel CLI with token from `.env` (`VERCEL_TOKEN`): `npx vercel --prod --yes --token="$VERCEL_TOKEN"` from repo root (project is linked). GitHub auto-deploy is not reliably firing — deploy via CLI.
