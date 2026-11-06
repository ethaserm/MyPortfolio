---
title: Life OS (the first attempt)
summary: "A ten-tab app to track body, habits, money and more. I scrapped it after a week and started again as ATLAS."
date: 2026-08-23
category: app
status: archived
tags: [web-app, pwa, firebase, offline, tracking]
featured: true
cover: ../../assets/previews/life-os-phone.webp
gallery:
  - image: ../../assets/previews/life-os-body.webp
    alt: The Body tab, with a push-up counter, a goal and a last-30-days chart
  - image: ../../assets/previews/life-os-habits.webp
    alt: The Habits tab, with a progress ring and a list of daily habits
  - image: ../../assets/previews/life-os-money.webp
    alt: The Money tab, showing this month's spending and an add-spend form
  - image: ../../assets/previews/life-os-review.webp
    alt: The Review tab, with the week in numbers
  - image: ../../assets/previews/life-os-learning.webp
    alt: The Learning tab, with a what-I-learned-today box and books and courses
links:
  - label: Source on GitHub
    href: https://github.com/ethaserm/LifeOS
---

Life OS was my first try at **one app that tracks everything**: body, habits, focus, sleep, money, projects and learning. It runs as a plain static website with no build step and no npm, and you can install it on a phone.

## What it had

Ten tabs, each with its own accent colour:

- **Today:** a day score, my push-up goal, sleep and focus, with quick +1, +5 and +10 buttons.
- **Body:** push-ups, a log, personal records and weight.
- **Habits:** daily habits with a progress ring and a streak grid.
- **Money:** spending by category.
- **Mind:** sleep, mood and energy.
- **Projects, Learning, AI, Review and Settings:** where my time went, what I learned, a chat tab, and the week in numbers.

It worked offline from the browser's own storage, and signing in with Google synced it through Firestore in the same format as my older push-up and workout apps, so they all read the same data. A service worker made it installable.

## Why I scrapped it

On 2026-08-31, a week after I started, I decided I didn't want ten tabs at all. I said "forget everything about Life OS, we're making a new one", and started again as [ATLAS](../atlas-life-os/), a single canvas with no pages and no menus. The code is still here and still runs. It just isn't where I'm building any more.
