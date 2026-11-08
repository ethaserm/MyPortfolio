---
title: FreeOpusClip
summary: "My own free, local version of a paid tool that cuts long videos into short highlight clips."
date: 2026-08-03
category: app
status: active
tags: [python, whisper, ollama, ffmpeg, video]
featured: false
flow:
  title: From long video to clip
  steps:
    - label: Transcribe
      note: Whisper turns speech into text with timestamps
    - label: Score
      note: A local model picks the best 30 to 60 second parts
    - label: Reframe
      note: Face tracking turns 16:9 into 9:16
    - label: Export
      note: ffmpeg adds pop-style captions
---

A paid auto-clipping service costs about £30 a month. I asked if I could use my Claude Pro account to build it instead. **No: a Pro subscription and the API are separate products.** So I used a local model through Ollama, which I already had set up for [Jarvis](../jarvis/).

## How it's built

Python. Whisper for transcripts, a language model that scores segments and returns JSON, OpenCV and MediaPipe for face tracking, and ffmpeg for the final cut. I built it in the order of difficulty: transcripts and captions first, scoring second, and auto-reframing last because it was the hardest.

## What went wrong

- **Antivirus again.** Its HTTPS scanning blocked the video and model downloads with `CERTIFICATE_VERIFY_FAILED`. Importing `truststore` fixed it.
- With Ollama off it falls back to a simple rule-based scorer, and GPU transcription failed on a missing library, so it falls back to the CPU.
- Local models judge "is this a good hook" worse than big ones. That is the real limit of going free.
- It needs an absolute path to the video. A relative path gives a confusing `OSError`.
