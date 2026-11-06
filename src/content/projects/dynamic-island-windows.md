---
title: Dynamic Island for Windows
summary: A macOS-style Dynamic Island for my PC with music controls, notes and local voice dictation that types into any app.
date: 2026-08-13
category: app
status: active
tags: [electron, windows, whisper.cpp, local-AI, powershell]
featured: true
flow:
  title: "Fullscreen detection: the rule I ended up with"
  steps:
    - label: "Covers the monitor"
      note: "The foreground window's true visible edges fill the whole screen"
    - label: "No title bar"
      note: "It has no title-bar style at the Windows level"
    - label: "Can't be resized"
      note: "Real fullscreen games have no resize border"
    - label: "Fade the island out"
      note: "All three are true, so it fades out. It uses opacity, because hiding the window can make it lose its always-on-top status"
---

A small black pill pinned to the top-centre of my screen that grows when I hover over it. It is an Electron app with a long-running PowerShell helper that talks to Windows for media keys, audio levels, the current song and keystrokes.

## What it does

- **Music and screenshots:** the two things I use it for most, so most of the work goes there.
- **Notes and tools panels:** the island opens into larger panels when I need them.
- **Voice dictation (2026-08-24):** click the orb, talk, stop talking, and the words are typed into whichever window I was using. It stops by itself after about a second of quiet. It runs entirely on my PC with whisper.cpp, so there is no API key, no cost and no internet needed after setup.
- **Polite about music:** dictating pauses what's playing and resumes it afterwards, but only if the island was the one that paused it.
- **Hides itself in fullscreen games.**

## What I learned

**Verify with an independent readback.** A batched Windows keystroke call reported success while quietly corrupting the typed text. The API's own return value was not a test. Reading the real output back was.

**Fullscreen detection took four attempts.** Each version looked correct and then failed on a real app:

1. The Windows "fullscreen" flag only catches exclusive fullscreen, and missed windowed fullscreen games.
2. Comparing the window to the screen over-reported by 8 pixels on every edge, because of an invisible resize border.
3. My taskbar auto-hides, so a maximised window and a true fullscreen game have identical bounds.
4. Checking for a missing title bar fired on Spotify and Discord too. The final rule: the window covers the monitor **and** has no title-bar style **and** no resize border, because real fullscreen games can't be resized.

That last version worked on ordinary apps, and I hadn't finished testing it against real games yet.

One honest limit: dictation doesn't work in Roblox's in-game chat, because games often reject synthetic keystrokes to stop macros.
