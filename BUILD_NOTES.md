# Build Notes

## Purpose

This file documents what we are building, why we are building it, what was changed, and the commands that were run. The goal is to turn the repo into both a real website and a learning project.

## Project Goal

1. Build a website that feels interesting, intriguing, and engaging to visitors.
2. Learn by building, not just by shipping features quickly.

## Inspiration Direction

We discussed using `blog.bytemonk.io` as inspiration, but not as something to copy.

What we want to borrow:

- Strong editorial feel
- Better content hierarchy
- Clear entry points for readers
- A homepage that guides visitors into content

What we do not want:

- Direct copying of layout or branding
- A clone of another site

## Current Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Learning Approach

We decided this project should be treated as a guided build:

- The site should become a portfolio + technical publication + learning lab.
- Each feature should teach a concept.
- The repo should help build intuition for frontend, full stack, and system design.

## First Homepage Improvement

### What changed

The homepage in [app/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/page.tsx) was redesigned from a small centered intro into a more intentional landing page.

### Why we changed it

The old homepage introduced the name and a few links, but it did not:

- build curiosity,
- explain the site clearly,
- guide the next click,
- or create a strong first impression.

### What was added

- A stronger hero section
- Better positioning statement
- `Link`-based internal navigation
- Three featured cards:
  - Projects
  - Writing
  - Study Notes
- A `Start here` section for first-time visitors

### Concepts involved

- App Router homepage routing with `app/page.tsx`
- `next/link` for internal navigation
- Semantic HTML with `main` and `section`
- Data-driven rendering with arrays and `.map()`
- Homepage UX and content hierarchy
- Responsive layout with Tailwind utility classes

## Commands Run

These are the commands that were used during this step:

```bash
cd /Users/vishalcherupally/Documents/github/vishal-portfolio
git status --short
git add app/page.tsx
git commit -m "Redesign homepage landing page"
git push origin main
```

## Outcome

- The homepage change was committed and pushed.
- The site should update on the deployed environment if the repository is connected to an auto-deploy platform such as Vercel.

## Next Planned Improvement

The next likely step is to improve visual identity through:

- color system,
- motion/animation,
- and stronger visual depth.

## Visual Identity Improvement

### What changed

The homepage and global styles were updated to introduce a more intentional visual direction.

Files changed:

- [app/globals.css](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/globals.css)
- [app/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/page.tsx)

### Why we changed it

The first homepage improvement fixed structure, but the visual system still felt too plain and scaffold-like.

We wanted the site to feel:

- more memorable,
- more designed,
- and more aligned with a modern data engineering / technical publication identity.

### Visual direction chosen

We used a "modern data engineer" direction:

- warm off-white background instead of pure white,
- deep ink foreground instead of harsh black,
- teal accent for action and identity,
- soft elevated cards,
- subtle gradients and glow for depth,
- restrained animation that supports attention rather than distracting from content.

### What was added

- CSS variables for page background, foreground, surfaces, borders, muted text, and accent colors
- A softer layered page background using gradients
- A proper font stack using the imported Geist font variable
- Intro animations:
  - fade-up
  - delayed fade-up
  - slow fade-up
- A floating effect for the side card on large screens
- Reduced-motion handling for accessibility
- Updated homepage sections to use the new color system consistently
- Stronger button, card, and CTA styling

### Concepts involved

- Design systems with reusable tokens
- CSS variables
- Motion as UX support, not decoration
- Accessibility with `prefers-reduced-motion`
- Visual hierarchy through contrast, depth, and emphasis
- Brand/personality through palette selection

### Why these choices help UX

- Warm background: feels less sterile than pure white
- Teal accent: gives the site a recognizable identity without feeling loud
- Muted text color: improves hierarchy between primary and supporting copy
- Soft surfaces and borders: make sections easier to scan
- Fade-up entrance: gives the page a polished first impression
- Hover lift on cards/buttons: reinforces what is interactive
- Reduced-motion support: keeps the experience accessible

### Commands to run next

After reviewing locally, commit and push with:

```bash
cd /Users/vishalcherupally/Documents/github/vishal-portfolio
git status --short
git add app/globals.css app/page.tsx BUILD_NOTES.md
git commit -m "Add homepage color system and motion"
git push origin main
```

## How to Keep Using This File

For every future step, add:

1. What we changed
2. Why we changed it
3. What concept it teaches
4. What commands were run
5. What we should do next
