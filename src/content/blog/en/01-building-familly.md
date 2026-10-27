---
title: "Building Familly: A Product Builder's Journey with AI and Zero Complex Menus"
description: "Why I decided to build a proactive family assistant powered by voice and text, and how this blog documents the architecture, challenges, and weekly experiments."
pubDate: 2026-10-27
author: "Stefano Merino"
lang: "en"
tags: ["build-in-public", "ai", "mvp", "voice-first"]
alternateSlug: "01-construyendo-familly"
---

We are surrounded by productivity tools, yet the mental load of managing a household remains untouched.

If you have a family, you know the drill: pediatrician visits scribbled on random scraps of paper, soccer practices overlapping with client calls, medication routines lost in messaging group chats, and shared calendar apps nobody touches because opening an app, navigating five menus, and filling out seven form fields is exhausting after a long workday.

Technology should not add friction to our days. It should work like an attentive family member: someone you mention things to in passing, and they quietly make sure everything fits together.

That is why I am building **Familly**.

---

## The Foundation: Zero Complex Menus and Human Common Sense

From day one, I set a non-negotiable rule: **no endless forms and no labyrinthine menus**.

The core interface of Familly is not a complex spreadsheet or an analytics dashboard with 20 toggles. It is a living presence: a dynamic sphere that listens when you speak and responds when you write.

1. **Conversational voice and text:** Speak or type naturally. *"Dentist appointment for my daughter on Tuesday at 6 PM"* or *"Remind me to pick up milk after work"*.
2. **Native Google Calendar integration:** Familly connects directly to the calendars your family already relies on every single day.
3. **Proactive alerts with common sense:** A flight needs a reminder the evening before to pack and another 3 hours prior to leave for the airport. A doctor appointment needs an early morning heads-up and another 45 minutes before departure. Familly handles those offsets automatically without forcing you to configure multiple manual alarms.
4. **Open, evolving family memory:** Household life cannot be boxed into rigid schemas. Temporary situations (a house move, job interviews, seasonal allergies) are followed up with care. When resolved, they transition smoothly into historical context instead of disappearing.

---

## Why This Blog (Build in Public)

As a Product Builder, I believe the most compelling software is created out in the open. Sharing the raw journey: architectural trade-offs, latency optimizations with language models, household privacy decisions, and balancing technical simplicity with an intuitive user experience.

Here is what you will find in this journey log:

- **Engineering deep dives:** How we cap model reasoning budgets to achieve sub-1.5s responses across tiered fallback cascades.
- **Product and UX design:** Building high-performance conversational web voice experiences using native browser APIs (Web Speech API, Web Push, SSE) without heavy framework bloat.
- **Weekly takeaways:** Real feedback from private beta families, product iterations, and experiments that worked alongside the ones we had to discard.

If you want to follow along or test the early builds before public launch, join the waitlist on our main page.

See you in the next entry.

