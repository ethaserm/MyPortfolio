---
title: Lead-finder tools
summary: Python and Chrome tools that build lists of local businesses and YouTube channels to contact.
date: 2026-09-21
category: app
status: active
tags: [python, chrome-extension, apps-script, automation, github-actions]
links:
  - label: es-lead-finder
    href: https://github.com/ethaserm/es-lead-finder
  - label: yt-lead-finder
    href: https://github.com/ethaserm/yt-lead-finder
---

Tools I built to find people worth contacting, for ES Agents and for video-editing outreach.

## The tools

- **es-lead-finder (Python, 2026-09-21):** finds local businesses and writes them into a shared "Business Queue" spreadsheet.
- **Lead Top-Up Chrome extension (2026-09-23):** while I browse Google Maps, one click adds a business to that same queue. It posts to a Google Apps Script web app that lives next to the sheet's reply-tracking and follow-up scripts.
- **yt-lead-finder (Python, 2026-09-27):** finds YouTube channels and emails them about video editing. It runs on GitHub Actions and uses only the official YouTube Data API.

## Rules I built in

- **Never guess an email address.** An email is only used if it is visible on the page.
- **A website is only the explicit "Website" link.** An early tool grabbed the Google Maps place link instead and sent people to the wrong place.
- **Google changes its page structure,** so when the Maps extension breaks, the first thing to check is the selectors.
