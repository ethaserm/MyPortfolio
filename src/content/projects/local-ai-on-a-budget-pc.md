---
title: Local AI on a budget PC
summary: "Measuring which model actually runs on an 8 GB graphics card, instead of guessing."
date: 2026-10-22
category: learning
status: completed
tags: [ollama, local-models, hardware, benchmarking]
featured: false
---

I wanted the Hermes agent to run locally without hogging the PC, so Blender and Roblox Studio could run next to it. It needs a context window of 64K or more, and my GPU has 8 GB.

## What I measured

- `qwen3:8b` caps at about 41K context and spills onto the CPU, so it was out.
- A 35B model needs 22 GB, so it was out.
- **`qwen3.5:4b` fits.** At 65,536 context it ran fully on the GPU using 4.5 GB, peaking around 5.7 GB, at about **52 tokens a second** once warm.
- An 8.4K-token prompt takes 3 to 5 seconds. Hermes' first prompt is about 15K tokens, so the first reply takes 35 to 45 seconds cold.

I set the context, a short keep-alive, flash attention and a compressed cache, and backed up the config before changing it.

## What I learned

- About 2.5 GB of headroom is all there is.
- One out-of-memory error didn't come back in five reruns, so I treated it as a one-off, not a fix to chase.
- Claude told me to expect an approval prompt for a read-only command, and was wrong. The agent's own docs say its approval check is a guess about dangerous patterns, not a security boundary.
