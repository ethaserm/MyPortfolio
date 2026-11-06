import { getCollection } from 'astro:content';

// Drafts are visible while running `npm run dev` so you can preview them, hidden in production.
const visible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

// Newest first; ties broken by id so the order is stable between builds.
const newestFirst = <T extends { id: string; data: { date: Date } }>(a: T, b: T) =>
  b.data.date.valueOf() - a.data.date.valueOf() || a.id.localeCompare(b.id);

export async function getProjects() {
  return (await getCollection('projects', visible)).sort(newestFirst);
}

export async function getLog() {
  return (await getCollection('log', visible)).sort(newestFirst);
}
