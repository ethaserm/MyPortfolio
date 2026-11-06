---
title: The Brain
summary: An Obsidian vault that automatically saves every AI coding chat and its notes, with secrets redacted.
date: 2026-10-07
category: learning
status: active
tags: [obsidian, claude-code, hooks, notes, automation]
featured: false
flow:
  title: "How the Brain fills itself"
  steps:
    - label: "I finish a chat"
      note: "An AI coding chat or task ends"
    - label: "A hook fires"
      note: "A small script runs when the session closes"
    - label: "Secrets come out"
      note: "Keys and tokens are redacted on the way in"
    - label: "It lands in Obsidian"
      note: "The chat and its notes are saved and indexed, newest first"
    - label: "It syncs to Drive"
      note: "So chat-based AI can read the same notes"
---

I wanted nothing forgotten. So I built a "Brain": an Obsidian vault that fills itself.

## How it works

- **Automatic saving:** hooks run after every Claude Code chat and Cowork task and copy the conversation into the vault. A chat index lists everything, newest first.
- **Secrets removed:** API keys and tokens are redacted on the way in.
- **Memory notes:** each project has a short note covering what it is and where I left off. Reading these first means I can pick up any project without re-explaining it.
- **Work log:** a dated log of everything done.
- **Synced to Google Drive** (2026-10-13), so chat-based AI can read the same notes the coding sessions write.

## What I learned

Memory is per working folder, so several separate sets of notes exist unless I copy them across on purpose. Much of what's on this site started as a note in the Brain.
