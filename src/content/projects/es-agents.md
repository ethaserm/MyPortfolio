---
title: ES Agents
summary: A small business making AI tools for UK local businesses, which I built.
date: 2026-09-03
category: app
status: active
tags: [business, AI-agents, chatbot, web, cloudflare]
featured: true
links:
  - label: Visit the site
    href: https://esagents.dpdns.org
flow:
  title: "How the Website Agent answers"
  steps:
    - label: "A visitor asks"
      note: "A question typed into the chat widget on the client's website"
    - label: "The widget sends it"
      note: "To a small server I run (a Cloudflare Worker)"
    - label: "Only the client's facts"
      note: "The Worker gives the AI the business's own facts as its instructions"
    - label: "An AI writes the reply"
      note: "Its answers stick to those facts"
    - label: "The visitor gets an answer"
      note: "Chat only: it doesn't collect leads"
---

ES Agents makes AI tools for small UK businesses such as plumbers, electricians, roofers, salons, garages and cafés. I built it.

## What it is

- **Website Agent:** a chat widget that answers a visitor's questions using only the client's own facts, so it can't make things up. There is a free working example to try first.
- **A second agent for missed calls** is built but not released yet, so it stays on a waitlist.
- **The website** has animations, a pricing page and the chat widget itself, deployed on Vercel.
- **Lead-finding tools** that build the list of businesses to contact: see [Lead-finder tools](../lead-finder-tools/).

## What I learned

**Honesty is the product.** The brand promise is to be honest about what's real today. I never describe an unreleased product as available, and the site had to be checked line by line because the same fact (a price, a feature) lived in several places and drifted apart. One change means checking all of them.

**Keep a dated backup before touching a live site,** and always know where it is.
