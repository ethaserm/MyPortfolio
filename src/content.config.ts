import { defineCollection, reference, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const area = z.enum(['app', 'game', 'video', 'learning']);

// One Markdown file per project. The filename becomes the URL: my-app.md -> /projects/my-app
// A copy-me starting point lives in templates/project.md (outside this folder, so it isn't published).
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // one or two sentences, shown on cards
      date: z.coerce.date(), // YYYY-MM-DD: when you started it, or last meaningfully updated it
      category: area.default('app'),
      status: z.enum(['active', 'shipped', 'completed', 'paused', 'archived', 'idea']).default('active'),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false), // featured projects appear on the home page
      archive: z.boolean().default(false), // true = kept off the home page, project list and timeline; lives on /projects/archive/
      flow: z.object({ title: z.string().optional(), steps: z.array(z.object({ label: z.string(), note: z.string().optional() })).min(2) }).optional(), // a "how it works" diagram
      segments: z.object({ title: z.string().optional(), note: z.string().optional(), end: z.string(), parts: z.array(z.object({ label: z.string(), from: z.string() })).min(2) }).optional(), // a proportional bar, e.g. the structure of a video (times as m:ss)
      draft: z.boolean().default(false), // drafts show in `npm run dev` only
      cover: image().optional(), // card + header image, path relative to the .md file, e.g. ./my-app.png
      video: z.string().url().optional(), // YouTube link: embedded at the top of the project page
      gallery: z.array(z.object({ image: image(), alt: z.string() })).default([]), // screenshots
      links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
    }),
});

// One Markdown file per update: a milestone, a launch, a lesson, a year-end note.
// Name them YYYY-MM-DD-short-title.md so they sort naturally.
const log = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/log' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    project: reference('projects').optional(), // filename (without .md) of the related project
    draft: z.boolean().default(false),
  }),
});

// Short dated moments for the journey timeline, all in one file: src/data/journey.yaml.
// Use this for quick facts (a repo created, a video published, something learned).
// Anything that deserves a page of its own should be a project or a log entry instead.
const journey = defineCollection({
  loader: file('src/data/journey.yaml'),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    category: area.default('app'),
    note: z.string().optional(), // one sentence shown under the title
    milestone: z.boolean().default(false), // true = shown as a bigger card
    archive: z.boolean().default(false), // true = hidden from the timeline (shown only via the archive)
    href: z.string().url().optional(), // external link, e.g. the GitHub repo
    project: reference('projects').optional(), // links the moment to a project page
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, log, journey };
