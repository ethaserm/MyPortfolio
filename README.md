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
| Tuck something away (still public, but not on the front pages) | Add `archive: true`. See "The archive" below. |
| Refresh the "By the numbers" stats | Run `node scripts/update-stats.mjs`, then commit `src/data/stats.json`. |

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
archive: false              # true = hidden from home, lists and timeline; lives at /projects/archive/
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

### The archive

Set `archive: true` on a project (or on a moment in `journey.yaml`) and it disappears from the home page, `/projects/`, the area pages and the timeline. Its own page still exists, and it is listed at `/projects/archive/`, which is linked only from the footer, so people find it by digging. An area with nothing left in it (Games, right now) vanishes from the area tiles and timeline filters on its own. Remove the flag and it all comes back.

### Diagrams instead of screenshots

When there is no screenshot worth showing (a background tool, a pipeline), add a diagram to the front matter. It draws as a card cover and as a section on the project page:

```yaml
flow:                       # a row of steps
  title: How an entry travels
  steps:
    - label: Type or say it
      note: Optional one-liner under the label
    - label: File it

segments:                   # a timeline split into parts, for a video or a talk
  title: Where the time goes
  end: 12:30
  parts:
    - label: Intro
      from: 0:00
    - label: The twist
      from: 4:10
```

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

- **Two themes, both from chosen palettes.** Light is orange and white (navy and blue for text and supporting colour). Dark is red and black (sand and pearl for text and supporting colour). The site follows each visitor's system setting, and the button in the header switches it and remembers the choice. All the colours are defined at the top of `src/styles/global.css`.
- **Readable by construction.** Every text and background pairing meets WCAG AA contrast (4.5:1, or 3:1 for large text), measured on the real rendered pixels in both themes, including over the gradients. If you change a colour, check it the same way.
- **Corner gradients and highlights** come from four tokens per theme (`--g0` to `--g3`) plus two highlight colours (`--hi`, `--hi2`).
- **Layout:** works from 320px wide upward with no horizontal scrolling.
- **Motion:** hover effects are switched off for visitors who prefer reduced motion.

## Preview images

Every project can show a picture. Put images in `src/assets/previews/` (WebP keeps the site light) and point a project at one:

```yaml
cover: ../../assets/previews/my-game-1.webp      # the card and the top of the project page
gallery:
  - image: ../../assets/previews/my-game-2.webp
    alt: What this screenshot shows
```

- **Landscape screenshots** (about 1280×720 works well) get a soft corner wash of the theme colours.
- **Portrait phone screenshots** (about 780×1688) are shown as a phone on a coloured panel.
- **No image yet?** The project gets a designed panel with its area's icon, so nothing is ever blank. Add a `cover` whenever you have one.

## By the numbers

`src/data/stats.json` feeds the charts on the home and About pages (repos, commits by month, languages). Refresh it with `node scripts/update-stats.mjs` (needs network access to GitHub; `--dry` prints without writing). Commits made by bots are counted separately so they don't inflate the human total.

## Keeping it healthy over the years

- **Content is portable.** It's all Markdown and front matter, so you could move to another framework without rewriting anything.
- **Few dependencies.** `astro`, plus one font package (`@fontsource-variable/manrope`) that is self-hosted, so visitors never contact Google. Once a year, run `npm update`, then `npm run build` to confirm it still works.
- **No external fonts, scripts or services.** Fonts, images and styles are all served from the site itself. Nothing to break when a third party shuts down.
- **Check before publishing.** This site is public. Never paste raw notes or chat logs into it: leave out keys, private repositories, other people's names and anything you wouldn't put on a poster.

## Links inside Markdown

To link to another page of this site from Markdown, use a **relative** link such as `[Timeline](../timeline/)` or `[My app](../my-app/)`, not a root link like `/timeline`. Root links don't know about GitHub Pages' sub-path and would 404. `npm run build` checks every internal link and fails if one is broken, so a mistake can't get published.

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
  data/stats.json     numbers for the charts (see "By the numbers")
  lib/categories.ts   the four areas
  pages/              routes (home, projects, archive, areas, timeline, about)
  components/ layouts/ styles/ lib/
scripts/              check-links.mjs (runs after every build), update-stats.mjs
templates/project.md  copy-me starting point for a new project (not published)
```
