---
title: Poly Track
summary: "A low-poly time-trial racer with loops, wall rides, 16 campaign tracks and a track editor."
date: 2026-10-10
category: game
status: shipped
tags: [three.js, vite, racing, game-dev]
featured: false
cover: ../../assets/previews/poly-track-1.webp
gallery:
  - image: ../../assets/previews/poly-track-2.webp
    alt: The campaign screen showing the Summer tracks with their medal times
links:
  - label: Source on GitHub
    href: https://github.com/ethaserm/Poly-Track-Clone
archive: true
---

A browser recreation of **PolyTrack**, the low-poly time-trial racer by Kodub. You drive through loops, wall rides, jumps and boosters against the clock, chase medal times and your own ghost, watch replays, and build your own tracks in the editor. I built it from scratch with three.js and Vite. There are no asset files: every model, texture, sound and music note is generated in code.

## Driving

- Arcade raycast-vehicle physics at a fixed 240 Hz: suspension, grip-limited tyres, drifting, downforce, loops, wall rides and landings.
- Different surfaces: tarmac, booster pads, ice (almost no grip), loose dirt, grass, snow, sand and water.
- Checkpoints count in any order. A respawn keeps the speed you had, and the clock starts on your first input.
- Three cameras (chase, close and hood), with the camera rolling with the car through loops.

## Content

- **21 track pieces** for building: from straights and banked turns to wall rides, loops, ramps, tunnels, ice and dirt.
- **16 campaign tracks** across Summer, Winter and Desert, plus two finales. Each has Author, Gold, Silver and Bronze times.
- An autopilot finishes every track in the test suite, and its time is the author time, so every medal can really be earned.

## Look

A detailed low-poly car with working head, brake and reverse lights, exhaust flames, spoked rims and body roll. Tracks have textured asphalt, lattice start gates with LED strips, street lamps, hills, lakes and forests.
