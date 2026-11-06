---
title: My Ramen Bowl
summary: A merge tycoon for Roblox, built live inside Roblox Studio with Claude connected through an MCP server.
date: 2026-08-15
category: game
status: paused
tags: [roblox, luau, tycoon, roblox-studio]
featured: false
---

A ramen-shop merge tycoon for Roblox, built live inside Roblox Studio with Claude connected to it through an MCP server, so it could work in the real game while I watched.

## How it went

- **2026-08-15:** connected Studio and started the game (a session of over a hundred messages).
- **2026-08-16:** a floor-replication session, 95 messages.
- **2026-08-19:** an 86-message session on the economy and customers.

## What I learned

- **Pivot and import traps cost hours.** Getting models into Studio with the right pivot point was a bigger time sink than I expected.
- **The test sandbox has its own memory.** The tool that runs Luau code in Studio keeps its own module cache, so checking a module's state there tells you nothing. Setting an attribute on a real object and reading it back is the reliable test.
- **Save notes during a Studio session.** I once ran out of usage before writing down what I'd built, so now progress notes get saved as I go.
