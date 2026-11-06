---
title: ATLAS (Life OS)
summary: A personal life tracker on a zoomable canvas, with screen-time tracking, weekly backups and a voice brainstorm panel.
date: 2026-08-31
category: app
status: active
tags: [web-app, firebase, voice, life-tracking]
featured: true
links:
  - label: Source on GitHub
    href: https://github.com/ethaserm/LifeOS
---

ATLAS began with one prompt: *"i really want to make a nice looking life web app just for me."* It grew into a life tracker where everything lives on one big zoomable canvas instead of in separate screens.

## What it does

- **Zoomable canvas:** zoom out for the big picture, zoom in on the detail.
- **Screen time:** captures how I use my PC. It was built in on 2026-08-23 and synced to the cloud with Firestore.
- **Weekly backups:** my data is copied automatically.
- **Voice brainstorm:** a voice-call panel for talking ideas through. It started as its own module and was merged into ATLAS on 2026-09-13.

## What I learned

Firebase's Realtime Database silently **drops empty arrays** and **rejects NaN**. Both of them broke ATLAS's sync without a single error message. Silent failures are the hardest bugs to find.
