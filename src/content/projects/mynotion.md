---
title: MyNotion
summary: "My own Notion-style notes and database app, built in a morning after my Notion account ran out."
date: 2026-10-27
category: app
status: shipped
tags: [web-app, react, supabase, mcp, ai]
featured: true
flow:
  title: How it came together
  steps:
    - label: Scope it
      note: Same interface, no AI bot, simple login, templates
    - label: Log in and save
      note: Supabase with Google sign-in, one table for pages
    - label: Editor and databases
      note: Blocks, table, board and calendar views
    - label: Let Claude use it
      note: An 8-tool MCP server, later hosted in the cloud
---

My Notion account ran out, so I asked whether I could just build my own. Claude's first answer was that an exact clone is years of work. So I scoped a smaller one: the same feel, no built-in AI bot, simple login, templates, and a way for Claude to read and write it.

It was online with Google login working about **1 hour 23 minutes** after my first message.

## What it does

- A nested page sidebar, favourites, icons, covers, trash and restore.
- A block editor with autosave and templates.
- Databases with table, board and calendar views, filters and sorts.
- Canvas pages for diagrams, mind maps and freehand drawing.
- Page history, image and file uploads, sharing, Notion import and export, a light and dark theme and a phone layout.

## How it works

- **Vite, React and TypeScript,** with BlockNote as the editor, and Supabase for the database, login and realtime. It is hosted on Firebase Hosting.
- **One table holds everything.** Pages, databases and database rows are all "pages". A row is just a page whose parent is a database.
- **An MCP server with 8 tools** lets Claude read and write the app. I later hosted a copy as a cloud function, so Claude on the web can use it with my PC off.

## What went wrong

- The first MCP sign-in failed with "fetch failed". My antivirus re-signs HTTPS traffic, and the fix was telling Node to use the system certificates.
- Importing my real Notion export came in flat, so the importer was rewritten to follow link-only lines. It now builds a tree of 38 pages.
- Dragging pages in the sidebar needed the drop zone worked out from mouse coordinates.
- **Never tested:** a real iPhone, or a second real user. There is no offline mode yet.

I made the login screen about 70% lighter to download (369 KB down to 115 KB).
