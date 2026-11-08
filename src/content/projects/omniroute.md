---
title: OmniRoute
summary: "A local router that lets Claude Code run on free models, with automatic fallback."
date: 2026-10-21
category: app
status: active
tags: [claude-code, routing, free-models, windows]
featured: false
flow:
  title: How a request is routed
  steps:
    - label: Claude Code asks
      note: Started through a profile
    - label: Local gateway
      note: Loopback-only, with a dashboard
    - label: Try models in order
      note: Five free models, then a no-account fallback
    - label: Answer comes back
      note: The next model takes over if one fails
---

I kept running out of Claude Code usage, so I tried running it on free models. OmniRoute is a small gateway on my own PC that sits between Claude Code and several free providers and tries them in order.

## What I found

Claude Code sends about **18,000 to 21,000 tokens per request**. That ruled providers out:

- **Groq:** useless, because its 8,000 tokens-per-minute limit is below one request.
- **OpenRouter free:** worked at 21k tokens. About 50 requests a day per account.
- **DeepSeek:** needed a paid balance.
- **Mistral:** blocked behind a plan upgrade.

All five models in my "free-coder" combo passed a 20k-token test that included a tool call. A hidden start-up script runs it at Windows login, added after it didn't restart on its own.

## What I learned

- The router covers a model going down, not the daily cap. The cap is per account.
- Plain `omniroute launch` fails with "Ambiguous model", so always launch through a profile.
- "Free" can still be paid underneath. A related experiment hit "insufficient credits" because the free-looking models route through paid providers.
