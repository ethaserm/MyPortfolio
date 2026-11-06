import { getCollection } from 'astro:content';
import type { Category } from './categories';
import { url } from './url';

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

// Everything on the timeline, merged: projects, updates and short dated moments.
export type TimelineItem = {
  id: string;
  kind: 'project' | 'update' | 'moment';
  date: Date;
  title: string;
  summary: string;
  category?: Category;
  href?: string; // where the title links to
  external: boolean; // href leaves this site
  milestone: boolean; // render as a bigger card
  tags: string[];
  project?: { title: string; href: string }; // the project a moment belongs to
};

export async function getTimeline(): Promise<TimelineItem[]> {
  const [projects, log, moments] = await Promise.all([
    getProjects(),
    getLog(),
    getCollection('journey'),
  ]);
  const projectInfo = new Map(projects.map((p) => [p.id, { title: p.data.title, href: url(`/projects/${p.id}`) }]));

  const items: TimelineItem[] = [
    ...projects.map((p) => ({
      id: `project-${p.id}`,
      kind: 'project' as const,
      date: p.data.date,
      title: p.data.title,
      summary: p.data.summary,
      category: p.data.category,
      href: url(`/projects/${p.id}`),
      external: false,
      milestone: true,
      tags: p.data.tags,
    })),
    ...log.map((e) => ({
      id: `log-${e.id}`,
      kind: 'update' as const,
      date: e.data.date,
      title: e.data.title,
      summary: '',
      href: url(`/log/${e.id}`),
      external: false,
      milestone: false,
      tags: [],
      project: e.data.project ? projectInfo.get(e.data.project.id) : undefined,
    })),
    ...moments.map((m) => ({
      id: `moment-${m.id}`,
      kind: 'moment' as const,
      date: m.data.date,
      title: m.data.title,
      summary: m.data.note ?? '',
      category: m.data.category,
      // A moment links out if it has its own link, otherwise to its project page.
      href: m.data.href ?? (m.data.project ? projectInfo.get(m.data.project.id)?.href : undefined),
      external: Boolean(m.data.href),
      milestone: m.data.milestone,
      tags: m.data.tags,
      project: m.data.project ? projectInfo.get(m.data.project.id) : undefined,
    })),
  ];

  // Newest first; at equal dates, bigger items first, then by title for a stable order.
  return items.sort(
    (a, b) =>
      b.date.valueOf() - a.date.valueOf() ||
      Number(b.milestone) - Number(a.milestone) ||
      a.title.localeCompare(b.title),
  );
}
