# My Portfolio

A static portfolio built with [Astro](https://astro.build), designed to be updated for years with as little friction as possible. Everything you add is a plain Markdown file.

Live at https://ethaserm.github.io/MyPortfolio/

## Everyday updates

| I want to… | Do this |
| --- | --- |
| Add a project | Copy `templates/project.md` to `src/content/projects/my-project.md`. The filename is the URL. |
| Add a quick moment to the timeline (a repo created, a video published, something learned) | Add an entry to `src/data/journey.yaml`. The format is explained at the top of that file. |
| Write up a milestone or year-end note | Create `src/content/log/YYYY-MM-DD-short-title.md`. Add `project: my-project` to link it to a project. |
| Update an existing project | Edit its file and bump `date`. |
| Change name, tagline, "Now" line, links | Edit `src/data/site.ts`. |
| Rewrite the About page | Edit `src/data/about.md`. |
| Hide something for now | Add `draft: true` to its front matter. Drafts show in `npm run dev` only. |
| Retire a project | Set `status: archived`. Don't delete it: the timeline is the point. |

Dates are always `YYYY-MM-DD`. Push to `main` and the site redeploys itself.

## Project front matter

```yaml
---
title: My Project
summary: One or two sentences, shown on cards.
date: 2026-11-06            # started or last meaningfully updated
category: app               # app | game | video | learning
status: active              # active | shipped | completed | paused | archived | idea
tags: [typescript, ai]
featured: true              # show on the home page
cover: ./my-project.png     # image next to this file; optional
video: https://youtu.be/XXXXXXXXXXX    # optional, embedded at the top of the page
gallery:                    # optional screenshots
  - image: ./shot-1.png
    alt: What the screenshot shows
links:                      # first link becomes the main button
  - label: Live demo
    href: https://example.com
  - label: Source
    href: https://github.com/you/repo
---
```

Only `title`, `summary` and `date` are required. The schema in `src/content.config.ts` rejects typos (like a misspelt `status`) at build time.

### The four areas

`category` sets a project's colour, icon and which area page it appears on (`/projects/category/…`):

| `category` | Shown as | Good for |
| --- | --- | --- |
| `app` | Apps & tools | Software, tools, websites |
| `game` | Games | Anything playable |
| `video` | YouTube & video | Channels, series, single videos |
| `learning` | School & learning | Courses, awards, milestones |

Projects without a `cover` get a tinted panel with the area's icon, so they still look good before you have screenshots. To rename an area or add a fifth, edit `src/lib/categories.ts`, the `category` list in `src/content.config.ts`, and the colour in `src/styles/global.css`.

### Video embeds

Paste any normal YouTube link (`watch?v=`, `youtu.be/` or `/shorts/`) into `video:`. It uses the privacy-friendly `youtube-nocookie.com` player and replaces the cover on the project page (the cover is still used on cards). Other video sites are ignored, so put those in `links` instead.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploying (GitHub Pages)

Pages is set to **Source: GitHub Actions**. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`. The workflow sets the site URL and base path automatically, so adding a custom domain later needs no code change.

The `github-pages` environment only accepts deploys from `main` (Settings → Environments). If you ever rename the default branch, update that rule too, or deploys will be refused.

## Design notes

- **Colour:** one accent for the site plus one per area, defined at the top of `src/styles/global.css`. Light and dark themes follow the visitor's system setting. Every text and background pairing meets WCAG AA contrast (4.5:1), so check any new colour the same way.
- **Layout:** works from 320px wide upward, with no horizontal scrolling.
- **Motion:** hover effects are switched off for visitors who prefer reduced motion.

## Keeping it healthy over the years

- **Content is portable.** It's all Markdown and front matter, so you could move to another framework without rewriting anything.
- **Few dependencies.** Only `astro`. Once a year, run `npm update`, then `npm run build` to confirm it still works.
- **No external fonts, scripts or services.** Nothing to break when a third party shuts down.
- **Check before publishing.** This site is public. Never paste raw notes or chat logs into it: leave out keys, private repositories, other people's names and anything you wouldn't put on a poster.

## The timeline

`/timeline` merges three sources into one scrollable page, grouped by month, newest first:

- **Projects** (`src/content/projects/`) appear as cards.
- **Moments** (`src/data/journey.yaml`) are short dated entries. Set `milestone: true` for a bigger card, `href` to link out, and `project:` to tie a moment to a project page.
- **Updates** (`src/content/log/`) are written-up notes.

Visitors can filter by area and jump to any month. With JavaScript off, everything still shows.

## Structure

```
src/
  content/projects/   one .md per project
  content/log/        one .md per update
  data/journey.yaml   short dated moments for the timeline
  data/site.ts        name, tagline, "Now" line, links, nav
  data/about.md       About page text
  lib/categories.ts   the four areas
  pages/              routes (home, projects, areas, timeline, about)
  components/ layouts/ styles/ lib/
templates/project.md  copy-me starting point for a new project (not published)
```
