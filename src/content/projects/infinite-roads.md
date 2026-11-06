---
title: Infinite Roads
summary: A stickman YouTube channel of 10-minute survival stories, made with an AI pipeline and my own cloned voice.
date: 2026-10-07
category: video
status: active
tags: [youtube, stickman, storytelling, automation, AI]
featured: true
---

Infinite Roads is a stickman animation channel. Each video is a roughly 10-minute survival story told in the second person: *"You..."* It follows Day 1 to the last day, uses real facts, and builds a mystery that escalates and never fully explains itself, ending on a cliffhanger. The format is inspired by the big stickman survival channels.

## The videos

- **Video 1: EMP Attack Survival, 30 Days.** Public since 2026-10-11.
- **Video 2: Zombie Outbreak, 30 Days in an Apartment Block.** Scheduled for 2026-10-14.
- **A backup: Nuclear Winter Survival, 1 Year.** Uploaded privately and held back.
- **Next: Supervolcano Survival, 1 Year**, the first video made with the new hook rules and sound effects.

Each video also gets five Shorts, one a day at 18:00.

## How a video is made

1. I describe the idea and Claude writes the plan, the script and the image prompts.
2. Pictures are generated in a batch while the voice is made, using a clone of **my own voice** running locally on my PC.
3. One script builds the video: it places the stickman on clear floor space, adds captions, chapters and sound effects, renders the video and the Shorts, and makes the thumbnail.
4. I check the result, upload and schedule it.

## Rules I learned the hard way

- **Hook fast.** Danger in the first sentence, the title's threat said within 5 seconds, a mystery before 30 seconds.
- **Re-hook every 20 to 40 seconds,** with escalations at a quarter, half and two-thirds of the way through.
- **Rotate cliffhangers.** Several copycat channels appeared in October, and knocks at the door and radio voices became clichés.
- **Real sounds only,** at most 8 per video and 3 seconds each, so effects never fight the voice.
- **Check the output, not the log.** A tool saying it succeeded isn't proof. I check the real pictures, for example that the stickman is standing on clear floor.

## Tools

Claude for scripts and planning, Gemini for batch image generation, Chatterbox for the cloned voice, Python for the build script, and a Google Sheet as the video database.
