// Runs after every build. Fails the build if any internal link on the built site
// ignores the base path (they'd 404 on GitHub Pages) or points at a page that doesn't exist.
//
//   node scripts/check-links.mjs [outputDir]     (defaults to dist; reads BASE like the build does)
//
// Tip: in Markdown, link to other pages with relative links such as [Timeline](../timeline/),
// not root links like /timeline, which don't know about the base path.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = process.argv[2] || 'dist';
const base = (process.env.BASE || '/').replace(/\/$/, ''); // '' or '/MyPortfolio'

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* htmlFiles(path);
    else if (name.endsWith('.html')) yield path;
  }
}

if (!existsSync(dist)) {
  console.error(`link check: output folder "${dist}" not found. Did the build run?`);
  process.exit(1);
}

const isFile = (p) => existsSync(p) && statSync(p).isFile();
const problems = [];
let checked = 0;

for (const file of htmlFiles(dist)) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/\s(?:href|src)="(\/[^"]*)"/g)) {
    const target = match[1];
    if (target.startsWith('//')) continue; // protocol-relative, i.e. external
    checked++;
    const where = relative(dist, file);

    if (base && target !== base && !target.startsWith(`${base}/`)) {
      problems.push(`${where}: ${target} ignores the base path "${base}"`);
      continue;
    }

    const path = decodeURI(target.slice(base.length).split(/[?#]/)[0]) || '/';
    const found = [join(dist, path), join(dist, path, 'index.html'), join(dist, `${path.replace(/\/$/, '')}.html`)].some(isFile);
    if (!found) problems.push(`${where}: ${target} points to a page that doesn't exist`);
  }
}

if (checked === 0) {
  console.error('link check: found no internal links at all, which looks wrong.');
  process.exit(1);
}

if (problems.length > 0) {
  console.error(`link check: ${problems.length} broken internal link(s):`);
  for (const p of [...new Set(problems)]) console.error(`  - ${p}`);
  process.exit(1);
}

console.log(`link check: ${checked} internal links OK`);
