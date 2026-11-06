---
title: Rules I've learned building with AI
summary: "Nine rules from things that went wrong: checking output, reading it back, backups, and keeping demo data away from real data."
date: 2026-10-13
category: learning
status: active
tags: [ai, workflow, lessons, debugging]
featured: false
---

I build almost everything with AI help, and the same kinds of mistakes keep appearing. These are the rules I've settled on, each with the project that taught me.

## 1. Check the output, not the log

A tool saying "done" isn't proof. On [Infinite Roads](../infinite-roads/) I check the real frames, for example that the stickman is standing on clear floor and not inside the furniture, before I trust a render.

## 2. Read it back

A Windows keystroke call once reported success while quietly corrupting the text it typed. The return value wasn't a test. Reading the real output back was. It's the rule behind [Dynamic Island](../dynamic-island-windows/)'s dictation, and I read back every write to my video spreadsheet too.

## 3. Cross-check one AI with a second source, and with your own senses

An AI told me a channel's videos had background music. They don't, and I only found out by listening. See [studying a top channel](../studying-a-top-channel/).

## 4. Take a dated backup before changing something live

Before touching the [ES Agents](../es-agents/) website, I copy it to a dated backup and note where it is. The site is live.

## 5. Stop at the second failed install

If a quick task turns into installing things, and the second attempt fails, I stop and rethink instead of falling further into a setup rabbit hole.

## 6. Check a repository's stars, not just its install count

When I look for tools and skills, I cross-check how many people really starred the repository. Install counts alone can mislead.

## 7. Keep demo data away from real data

[ATLAS](../atlas-life-os/)'s sample entries once got written into my real notes. Now sample data can never reach them.

## 8. Ask what it costs before spending free credits

Some tools give you a small pile of free credits. I ask what a call costs before making it, and I note the exact spend afterwards.

## 9. Write it down as you go

I once ran out of AI usage before I'd saved what I'd built. It's the idea behind [the Brain](../obsidian-brain/), where everything gets saved automatically.
