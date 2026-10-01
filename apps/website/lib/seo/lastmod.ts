/**
 * Real last-modified dates per route, generated from git history by
 * `node scripts/gen-lastmod.mjs` (runs automatically as the "prebuild" npm
 * script when git is available). Re-run the script and commit lastmod.json
 * before deploying so the sitemap/RSS dates stay accurate.
 */
import lastmod from './lastmod.json';

/** Fallback used when a route has no entry (e.g. new page not yet committed). */
export const FALLBACK_LASTMOD = '2026-09-30T00:00:00+04:00';

const map: Record<string, string> = lastmod;

/**
 * Returns the ISO lastmod for a route path such as "/about" or
 * "/ru/case-studies/scalini". Dynamic routes fall back to their
 * "[slug]" template entry.
 */
export function getLastmod(path: string): Date {
  const direct = map[path];
  if (direct) return new Date(direct);

  const parts = path.split('/');
  if (parts.length > 2) {
    const template = [...parts.slice(0, -1), '[slug]'].join('/');
    if (map[template]) return new Date(map[template]);
  }
  return new Date(FALLBACK_LASTMOD);
}
