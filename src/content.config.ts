import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per project. The filename becomes the URL: my-app.md -> /projects/my-app
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // one or two sentences, shown on cards
      date: z.coerce.date(), // YYYY-MM-DD: when you started it, or last meaningfully updated it
      category: z.enum(['app', 'game', 'video', 'learning']).default('app'),
      status: z.enum(['active', 'shipped', 'completed', 'paused', 'archived', 'idea']).default('active'),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false), // featured projects appear on the home page
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

export const collections = { projects, log };
