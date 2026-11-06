import { getCollection } from 'astro:content';

// Drafts are visible while running `npm run dev` so you can preview them, hidden in production.
const visible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

export async function getProjects() {
  const all = await getCollection('projects', visible);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getLog() {
  const all = await getCollection('log', visible);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
