---
title: Example app (replace me)
summary: A placeholder showing every field a project can have. Edit it into a real project, or delete the file.
date: 2026-11-06
category: app
status: active
tags: [example, template]
featured: true
cover: ./example-project.svg
links:
  - label: Live demo
    href: https://github.com/ethaserm/MyPortfolio
  - label: Source
    href: https://github.com/ethaserm/MyPortfolio
---

This file is the template for every project on the site. The filename (`example-project.md`) becomes the URL: `/projects/example-project`.

## What to write here

- **The problem:** what you set out to solve and why.
- **What you built:** the approach, the stack, anything you're proud of.
- **What happened:** results, numbers, what you learned.
- **What's next:** keep this current, it's what makes a portfolio feel alive.

## Fields worth knowing

- `category` is one of `app`, `game`, `video` or `learning`. It sets the colour, icon and which area page the project appears on.
- `cover` is an image next to this file. Without one, the card shows a tinted panel with the area's icon.
- `links` become buttons at the top. The first one is the filled, main button.
- `video` takes a YouTube link and embeds it at the top of the page.
- `gallery` takes a list of screenshots, each with a short `alt` description.

## Keeping it up to date

When something changes, edit this file and bump `date`. For milestones worth remembering, add a short note to `src/content/log/` with `project: example-project` in its front matter, and it will show up under this project and on the timeline.
