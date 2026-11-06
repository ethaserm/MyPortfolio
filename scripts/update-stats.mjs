// Refreshes src/data/stats.json from your public GitHub repositories. Run it whenever you like:
//
//   node scripts/update-stats.mjs            (writes src/data/stats.json)
//   node scripts/update-stats.mjs --dry      (prints the result instead of writing it)
//
// It counts real commits per month straight from each repository (GitHub's commit *search* is
// incomplete, so it isn't used), the number of public repos, and their main languages.
// Commits made by bots (for example scheduled GitHub Actions runs) are counted separately,
// so automation never inflates the number of commits you actually made.
// Only public, non-fork repositories are used.
//
// Optional environment variables:
//   GITHUB_TOKEN   raises the API rate limit (60 requests/hour without one; this uses roughly 30)
//   REPOS          comma-separated list like "ethaserm/MyPortfolio" to check only those repos
import { writeFileSync } from 'node:fs';

const USER = 'ethaserm';
const dry = process.argv.includes('--dry');
const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'portfolio-stats' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function get(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res;
}

// Follow GitHub's pagination (Link: <...>; rel="next").
async function all(url) {
  const out = [];
  while (url) {
    const res = await get(url);
    const page = await res.json();
    out.push(...(Array.isArray(page) ? page : [page]));
    url = /<([^>]+)>;\s*rel="next"/.exec(res.headers.get('link') ?? '')?.[1];
  }
  return out;
}

const isBot = (c) => c.author?.type === 'Bot' || /bot/i.test(`${c.commit.author?.name ?? ''} ${c.commit.author?.email ?? ''}`);

let repos;
if (process.env.REPOS) {
  repos = [];
  for (const full of process.env.REPOS.split(',').map((s) => s.trim()).filter(Boolean)) repos.push(...(await all(`https://api.github.com/repos/${full}`)));
} else {
  repos = await all(`https://api.github.com/users/${USER}/repos?per_page=100&type=owner`);
}
repos = repos.filter((r) => !r.fork && !r.private);

const commitsByMonth = {};
const automatedByMonth = {};
const reposByMonth = {};
const languages = {};
let commits = 0;
let automatedCommits = 0;

for (const repo of repos) {
  const created = repo.created_at.slice(0, 7);
  reposByMonth[created] = (reposByMonth[created] ?? 0) + 1;
  if (repo.language) languages[repo.language] = (languages[repo.language] ?? 0) + 1;

  let list = [];
  try {
    list = await all(`https://api.github.com/repos/${repo.full_name}/commits?per_page=100`);
  } catch (e) {
    if (!String(e).includes('409')) throw e; // 409 = empty repository
  }
  let mine = 0;
  let bots = 0;
  for (const c of list) {
    const month = (c.commit.author?.date ?? c.commit.committer.date).slice(0, 7);
    if (isBot(c)) {
      automatedByMonth[month] = (automatedByMonth[month] ?? 0) + 1;
      automatedCommits++;
      bots++;
    } else {
      commitsByMonth[month] = (commitsByMonth[month] ?? 0) + 1;
      commits++;
      mine++;
    }
  }
  console.error(`${repo.name.padEnd(28)} ${String(mine).padStart(4)} commits${bots ? ` + ${bots} automated` : ''}`);
}

const sortKeys = (o) => Object.fromEntries(Object.entries(o).sort(([a], [b]) => a.localeCompare(b)));
const stats = {
  generated: new Date().toISOString().slice(0, 10),
  repos: repos.length,
  commits,
  automatedCommits,
  firstRepo: repos.map((r) => r.created_at.slice(0, 10)).sort()[0],
  commitsByMonth: sortKeys(commitsByMonth),
  automatedByMonth: sortKeys(automatedByMonth),
  reposByMonth: sortKeys(reposByMonth),
  languages: Object.fromEntries(Object.entries(languages).sort(([, a], [, b]) => b - a)),
};

const json = JSON.stringify(stats, null, 2) + '\n';
if (dry) {
  console.log(json);
} else {
  writeFileSync(new URL('../src/data/stats.json', import.meta.url), json);
  console.error(`\nWrote src/data/stats.json: ${stats.repos} public repos, ${stats.commits} commits (+${stats.automatedCommits} automated) since ${stats.firstRepo}`);
}
