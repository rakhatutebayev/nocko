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

/**
 * Commits that touch MASS_EDIT_THRESHOLD or more page.tsx files at once are
 * site-wide sweeps (title rewrites, bylines, shared-component fixes), not
 * content changes. They would stamp one identical date on every route, which
 * Google treats as a meaningless lastmod and ignores. Such commits are skipped
 * when picking a route's date; the route's own creation commit is always kept.
 */
const MASS_EDIT_THRESHOLD = 30;

function massEditCommits() {
  const mass = new Set();
  try {
    const log = execSync('git log --format=COMMIT%x20%H --name-only -- app', {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'ignore'],
      maxBuffer: 64 * 1024 * 1024,
    }).toString();
    let sha = null;
    let count = 0;
    for (const line of log.split('\n')) {
      if (line.startsWith('COMMIT ')) {
        if (sha && count >= MASS_EDIT_THRESHOLD) mass.add(sha);
        sha = line.slice(7);
        count = 0;
      } else if (line.endsWith('page.tsx')) {
        count++;
      }
    }
    if (sha && count >= MASS_EDIT_THRESHOLD) mass.add(sha);
  } catch {
    /* no git: caller already handled */
  }
  return mass;
}

const MASS_EDITS = massEditCommits();

function gitDate(file) {
  try {
    const lines = execSync(`git log --format=%H%x09%cI -- "${file}"`, {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim()
      .split('\n')
      .filter(Boolean);
    if (!lines.length) return null;
    const meaningful = lines.find((l) => !MASS_EDITS.has(l.split('\t')[0]));
    // Fall back to the oldest commit (file creation) if every edit was a sweep.
    return (meaningful || lines[lines.length - 1]).split('\t')[1] || null;
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
