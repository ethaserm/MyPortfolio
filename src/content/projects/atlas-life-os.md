---
title: ATLAS
summary: "One infinite canvas for my whole life, with an AI memory graph at the centre that mirrors my Obsidian notes."
date: 2026-08-31
category: app
status: active
tags: [web-app, ai, firebase, obsidian, cloudflare-workers]
featured: true
flow:
  title: How an entry travels
  steps:
    - label: Type or say it
      note: One box on the canvas, or a quick-capture page on my phone
    - label: Decide where it goes
      note: A cloud model, a local model or plain rules, tried in that order so it always works
    - label: File it
      note: The entry lands in the right place, like a spend or a task
    - label: Add a node
      note: Every entry becomes a point in the memory graph
    - label: Write a note
      note: A Markdown note is saved into my Obsidian vault
---

ATLAS is my second attempt at an app that tracks my whole life. The first, [Life OS](../life-os/), was a ten-tab web app. On 2026-08-31 I scrapped it and started again from a long interview about what I actually wanted. The answer was no pages and no menus at all.

## The idea

- **One infinite black canvas** that you pan and zoom like a map.
- **Widgets float on it,** far apart, each one draggable and resizable and snapping to a grid. Zoom out and they shrink to tiles with titles that stay readable. Zoom in for the detail.
- **An AI core in the middle:** a force-directed memory graph that mirrors my Obsidian vault. Every entry is a node, and light-blue pulses ripple through it.
- **One input box with two jobs.** Type a quick log like "spent £12 lunch" and it files it for you. Or just talk to it about your life.
- **A strict look:** black, greyscale, and blue as the only colour. Inter for text, a monospace font for numbers, and panels with hairline borders and corner ticks, like a heads-up display.

## How I built it

I tried one AI app builder first and didn't like what it gave me. Then I used Claude Design, whose export turned out to be a complete working prototype, and had it ported into a clean single-file app with no build step, so you can just double-click it to run.

## Under the hood

- **A three-tier brain.** Requests go through a small Cloudflare Worker to a cloud AI model. If that's unavailable, a model running on my own PC takes over, and if that's off too, plain pattern-matching still files the entry. It never hangs.
- **Sync everywhere** with Firebase and Google sign-in, plus a quick-capture page for my phone that works even when my PC is off.
- **Obsidian write-back.** Using the browser's File System Access API, every entry is also saved as a Markdown note in my vault, linked to its day and topic.
- **A shared brain.** ATLAS reads my AI memory notes from the vault, so the model knows what my other tools know, and writes its own state back for them.
- **Auto-capture.** My [Dynamic Island](../dynamic-island-windows/) app drops a small file with my screen time and what I worked on, and ATLAS shows it.
- **Voice brainstorming.** A voice call with an AI that tags ideas into an idea box. It started as its own page and I merged it into ATLAS on 2026-09-13.

## Design by deleting

On 2026-09-16 I said the panels weren't fitting. I backed up the full version, then removed every box except the graph and the settings, and left the old code dormant so any widget can come back by un-commenting it. I also merged the chat box into the brainstorm panel, so one box holds the briefing, the chat and the call. On 2026-09-18 I added a quick-log, so typed entries file into one simple feed.

## What I learned

- **Chrome's File System Access API won't follow shortcuts** (symlinks or junctions). The notes had to be real copies.
- **A page served over HTTPS can't talk to a server on `http://localhost`.** So the local model only works from the local copy of the app, and the hosted one uses the cloud brain.
- **AI model names rotate.** One day the main model started returning errors, so the Worker now tries a list of candidates.
- **Keep demo data away from real data.** Some of ATLAS's sample entries once got written into my real vault. I moved them out and made sure it can't happen again.
- **Silent failures are the worst.** Firebase's Realtime Database drops empty arrays and rejects NaN without any error, and both broke my sync.
