---
title: Conveyor Chaos Simulator
summary: A Roblox game where you grab items off a factory conveyor belt and sell them for coins.
date: 2026-05-30
category: game
status: paused
tags: [roblox, luau, simulator]
---

A Roblox game from May, built with Roblox Studio connected to Claude through an MCP server.

## What works

- A conveyor belt spawns items: a crate, gold bar, gear, hazard box, cannonball and a rubber duck.
- Hold **E** for 0.7 seconds to grab an item and get coins, or let it fall into the sell bin at the end.
- Rare items appear 15% of the time and are worth three times as much.
- A factory environment with beams, barrels and hazard stripes, plus a coin counter and a hint bar.

## What I changed my mind on

I built a full inventory system and then ripped it out: it felt overcomplicated, and **direct coin rewards** were more fun. Complex item models with broken welds went the same way. Simple items that clearly look like what they are won.

## Still to do

Wire up the upgrade shop (belt speed, spawn rate, item value, rare chance), add chaos events, and a proper shop building.
