#!/usr/bin/env node
/**
 * Generates lib/seo/lastmod.json: a map of route -> ISO date of the last git
 * commit that touched that route's source file. Used by app/sitemap.ts and
 * app/rss.xml/route.ts so <lastmod>/<pubDate> reflect real content changes
 * instead of the build time.
 *
 * Re-run before every deploy (wired as the "prebuild" npm script). If git is
 * not available (e.g. a `vercel` CLI upload without .git) the script exits
 * silently and the committed JSON is used as-is, so commit the JSON too.
 *
 * Keys:
 *   "/about", "/ru/about", "/articles/<slug>", ...   static routes
 *   "/case-studies/[slug]", "/ru/case-studies/[slug]" dynamic routes: newest of
 *                                                      [slug]/page.tsx and lib/data/caseStudies.ts
 */
import { execSync } from 'node:child_process';
import { readdirSync, statSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APP = join(ROOT, 'app');
const OUT = join(ROOT, 'lib', 'seo', 'lastmod.json');

function gitDate(file) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${file}"`, {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim();
    return out || null;
  } catch {
    return null;
  }
}

function newest(...dates) {
  const valid = dates.filter(Boolean);
  if (!valid.length) return null;
  return valid.sort((a, b) => new Date(b) - new Date(a))[0];
}

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name === 'api') continue;
      walk(full, acc);
    } else if (name === 'page.tsx') {
      acc.push(full);
    }
  }
  return acc;
}

try {
  execSync('git rev-parse --is-inside-work-tree', { cwd: ROOT, stdio: 'ignore' });
} catch {
  console.log('[gen-lastmod] git not available, keeping existing lib/seo/lastmod.json');
  process.exit(0);
}

const extraSources = {
  '/case-studies/[slug]': ['lib/data/caseStudies.ts'],
  '/ru/case-studies/[slug]': ['lib/data/caseStudies.ts'],
};

const previous = existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8')) : {};
const result = {};
for (const file of walk(APP).sort()) {
  const rel = relative(ROOT, file);
  let route = '/' + relative(APP, dirname(file)).split('\\').join('/');
  if (route === '/.') route = '/';
  const dates = [gitDate(rel), ...(extraSources[route] || []).map(gitDate)];
  const date = newest(...dates) || previous[route] || null;
  if (date) result[route] = date;
}

writeFileSync(OUT, JSON.stringify(result, null, 2) + '\n');
console.log(`[gen-lastmod] wrote ${Object.keys(result).length} routes to ${relative(ROOT, OUT)}`);
