---
title: "SPRINT: 3D parkour speedrun"
summary: "A bright, toy-like 3D parkour speedrun game with eight courses, ghosts and medals."
date: 2026-10-02
category: game
status: shipped
tags: [three.js, parkour, speedrun, game-dev]
cover: ../../assets/previews/sprint-1.webp
links:
  - label: Source on GitHub
    href: https://github.com/ethaserm/3D-parkour-speedrun-game
archive: true
featured: false
---

Run, jump, slide and wall-jump your way through eight courses as fast as you can. It's one self-contained `index.html` with no build step and no local assets: all the art is procedural and all the audio is synthesised with the Web Audio API.

## Moves

Move, jump (hold for higher), wall-jump, slide at speed, air dash, instant restart, and switch between first and third person. It has touch controls with a floating thumb stick, so it plays on a phone.

## The eight courses

1. **Warm-Up:** straight platforms and simple jumps
2. **Sky Steps:** bigger gaps, floating platforms and two turns
3. **Low Road:** slide tunnels and low barriers
4. **Wall Street:** wall-run corridors
5. **Springboard:** bounce pads and vertical routes
6. **Machine Room:** moving platforms and spinning bars
7. **Skyline:** wall-runs, wall-jump chimneys and air dashes
8. **Gauntlet:** everything, back to back

Finish a course to unlock the next. Best times, splits, medals and ghosts are saved in the browser.

## How it's built

Every gameplay value sits in one `CONFIG` object, and the courses are plain data. Each one lists its platforms, walls, hazards, movers and medal times, with notes on the jump distances it was designed around.
