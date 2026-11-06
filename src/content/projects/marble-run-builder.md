---
title: Marble Run Builder
summary: "A toy-like 3D marble run builder in a single HTML file, with real physics."
date: 2026-10-01
category: game
status: shipped
tags: [three.js, physics, rapier, builder]
cover: ../../assets/previews/marble-run-builder-1.webp
gallery:
  - image: ../../assets/previews/marble-run-builder-2.webp
    alt: A built marble run with a marble rolling down the track
links:
  - label: Source on GitHub
    href: https://github.com/ethaserm/Marble-Run-Game
---

Build a marble run piece by piece, then press Run and watch the marbles go. The whole game is a single `index.html` with no build step and no asset files: every model, texture and sound is generated in code. It uses three.js for rendering and Rapier for physics.

## How to play

- Pick a piece from the tray and click to place it. Pieces snap onto open ports, the glowing rings.
- Build a path from the **Start tower** to a **Finish bucket**, then press **Run**.
- Choose one to five marbles, slow everything down to 0.25× for a closer look, and follow a marble with the chase camera.
- Builds save automatically, and **Share** copies a link that holds your whole build.

## What I'm proud of

**What you see is what the marble hits.** Each track piece is a U-channel swept along a curve, and the physics colliders are built from the same sweep. Physics runs on a fixed 1/240-second step, so frame rate and slow-motion never change how a run turns out. All the tuning numbers live in one block at the top of the script.
