---
title: Making Claude Code usage last longer
summary: "I tried a stack of saving tools, then had Claude read my own history and show what was actually eating my usage."
date: 2026-10-21
category: learning
status: active
tags: [claude-code, usage, tokens, workflow]
featured: false
---

I kept hitting my limit, so I tried several add-ons: one for shorter replies, one for writing less code, one that trims context, one that rewrites a messy sentence into a single scoped prompt, and a cheaper helper agent for searching.

Then I asked the real question: why was I running out even with the shorter-replies tool on?

## What the scan of my week said

- **Replies were only 11%** of usage, so the shorter-replies tool could only ever save a little.
- **68% was old conversation being read again** and 21% was it being rewritten.
- My two biggest sessions averaged 520,000 and 880,000 tokens of context per message, and made up 61% of the week.
- Opus was 46% of tokens, and every session started at around 94,000.

## What I changed

New chats and `/clear` instead of one endless chat, a smaller default model, and fewer plugins. Each saver adds its own fixed context, so stacking them has a cost.

## Caught on the way

- Handing work to a helper isn't free: one search helper used about 60,000 tokens to list ten files.
- The savers' own claims (such as "45% fewer tokens") are unverified, and I never measured a before and after.
- I installed one tool and removed it five minutes later because it billed another provider and sent my code to a third party.
