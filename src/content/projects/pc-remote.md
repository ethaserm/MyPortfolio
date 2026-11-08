---
title: PC Remote
summary: "An iPhone web app that shows my PC screen and controls it, built in three evenings."
date: 2026-11-04
category: app
status: active
tags: [python, websocket, iphone, tailscale, windows]
featured: false
flow:
  title: How the phone reaches the PC
  steps:
    - label: Wake it
      note: A one-tap Home Screen Shortcut sends Wake-on-LAN
    - label: Connect
      note: Home Wi-Fi, or Tailscale from anywhere
    - label: Stream the screen
      note: A Python server sends JPEG frames over WebSocket
    - label: Control it
      note: Touch, trackpad, keys, text and a game mode
---

Claude suggested Chrome Remote Desktop. I said "can we make my own special one maybe". The first version worked on my iPhone **54 minutes** after my first message.

## What it does

A Python server streams my screen as JPEG frames and takes mouse, keyboard, scroll and text input back. The phone page has a trackpad mode and a touch mode, two-finger scroll, pinch-to-zoom that crops real pixels so small text stays sharp, and a **game mode** with hold-down pads. A one-tap Shortcut wakes the PC.

## How it grew

- **Day 1:** home Wi-Fi only. Frames at about 15 fps.
- **Day 2:** lag cut using GPU screen capture, pipelined encoding and per-frame acknowledgements. Normal mode now runs at roughly 10 to 26 fps, and game mode at 16 to 42.
- **Day 3:** Tailscale added so it works on mobile data, plus a power endpoint (sleep, lock, restart, shutdown).

## What went wrong

- After a restart the PIN stopped working. The Claude desktop app runs as a Windows app that sees its own private copy of `AppData`, so settings had to live in the home folder instead.
- PowerShell 5.1 writes a hidden byte-order mark into UTF-8 files, which broke the server's JSON reading.
- A proper H.264 video stream was skipped, because the browser feature it needs only works over HTTPS.
- **A limit I can't fix:** an iPhone web page can't send Wake-on-LAN, so if I shut the PC down while away from home I can't wake it.
