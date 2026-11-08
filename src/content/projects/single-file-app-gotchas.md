---
title: Single-file app gotchas
summary: "The bugs I hit again and again in Firebase and one-file web apps, and what fixed them."
date: 2026-09-01
category: learning
status: completed
tags: [firebase, javascript, sync, github-pages]
featured: false
---

A reference I wrote for myself after one empty-data bug cost a long debugging session.

## The bugs

- **Empty arrays vanish.** Firebase's Realtime Database deletes them and returns sparse arrays as objects. Fix: a `hydrate()` on every read.
- **One bad number poisons every write.** It rejects `NaN`, `Infinity` and `undefined`, and fails silently. Fix: a recursive `scrub()` before every write.
- **A vague error hid the cause for several rounds.** Fix: show `e.code || e.message` in the interface, not just "SYNC ERROR".
- The sign-in check can fire late and wipe your state.
- Local storage keys need a namespace, or apps overwrite each other.
- Save goals per day, or your stats change retroactively.
- UTC and local date keys have to agree.
- GitHub Pages can serve stale files after a deploy.

The bug that started it: pressing START EMPTY on [ATLAS](../atlas-life-os/) crashed with `Cannot read properties of undefined (reading 'forEach')`.
