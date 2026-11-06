# My Portfolio

A static portfolio built with [Astro](https://astro.build), designed to be updated for years with as little friction as possible. Everything you add is a plain Markdown file.

## Everyday updates

| I want to… | Do this |
| --- | --- |
| Add a project | Create `src/content/projects/my-project.md` (copy `example-project.md`). The filename is the URL. |
| Log a milestone or year-end note | Create `src/content/log/YYYY-MM-DD-short-title.md`. Add `project: my-project` to link it to a project. |
| Update an existing project | Edit its file and bump `date`. |
| Change name, tagline, links | Edit `src/data/site.ts`. |
| Rewrite the About page | Edit `src/data/about.md`. |
| Hide something for now | Add `draft: true` to its front matter. Drafts show in `npm run dev` only. |
| Retire a project | Set `status: archived`. Don't delete it: the timeline is the point. |

Project front matter: `title`, `summary`, `date`, `status` (`active` / `shipped` / `paused` / `archived` / `idea`), `tags`, `featured`, `draft`, `cover` (image next to the file), `links` (list of `label` + `href`). The schema in `src/content.config.ts` rejects typos at build time.

Dates are always `YYYY-MM-DD`. Push to `main` and the site redeploys itself.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploying (GitHub Pages)

One-time setup: in the repo go to **Settings → Pages → Build and deployment → Source: GitHub Actions**. After that, every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

The workflow sets the site URL and base path automatically, so adding a custom domain later needs no code change.

## Keeping it healthy over the years

- **Content is portable.** It's all Markdown and front matter, so you could move to another framework without rewriting anything.
- **Few dependencies.** Only `astro`. Once a year, run `npm update`, then `npm run build` to confirm it still works.
- **No external fonts, scripts or services.** Nothing to break when a third party shuts down.

## Structure

```
src/
  content/projects/   one .md per project
  content/log/        one .md per update
  data/site.ts        name, tagline, links, nav
  data/about.md       About page text
  pages/              routes (home, projects, timeline, about)
  layouts/ components/ styles/ lib/
```
