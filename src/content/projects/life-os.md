---
title: Life OS
summary: "One app that tracks everything: body, habits, focus, sleep, money, projects and learning."
date: 2026-08-23
category: app
status: active
tags: [web-app, pwa, firebase, offline, tracking]
cover: ../../assets/previews/life-os-phone.webp
links:
  - label: Source on GitHub
    href: https://github.com/ethaserm/LifeOS
---

Life OS is one app for tracking everything about my day: body, habits, focus, sleep, money, projects and learning. It runs as a plain static website with no build step and no npm, and you can install it on a phone.

## How it works

- **A tab for each part of life,** each with its own accent colour. The Today screen shows a day score, my push-up goal, sleep and focus, with quick +1, +5 and +10 buttons.
- **Works offline.** Everything is drawn from the browser's own storage, so it works with no signal and when signed out.
- **Optional sync.** Signing in with Google syncs through Firestore, in the same format my older push-up and workout apps use, so they all read and write the same data.
- **Installable.** A service worker lets it open offline from the home screen.
- **AI tab.** On a PC it can talk to a local model through Ollama, with no setup. On a phone it can use a small Cloudflare Worker.

## What's left

Two optional pieces need accounts, so they're not switched on yet: the phone AI worker, and the evening reminders and calendar sync that run on a schedule through GitHub Actions.
