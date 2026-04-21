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

## Homepage Repositioning

### What changed

The homepage messaging in [app/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/page.tsx) was repositioned from a narrow "data engineering" identity into a broader computer science and software learning publication.

### Why we changed it

The previous homepage still framed the site too tightly around data engineering.

That was limiting because the actual long-term plan is broader:

- blogs across computer science, cloud, data, AI/ML, system design, and Python,
- study materials for deeper understanding,
- content useful for people preparing for strong product-based companies,
- and eventually a platform that could grow into something monetizable if the content becomes consistently valuable.

### Strategic homepage decision

The homepage should not feel like a portfolio for one niche.
It should feel like:

- a serious technical publication,
- a learning hub,
- and a place where ambitious learners and engineers can keep coming back.

Projects still matter, but they should now support credibility instead of defining the full identity.

### New homepage structure

The homepage now communicates four things:

1. Broad technical scope
2. Who the site is for
3. What topic lanes it will cover
4. Where a first-time visitor should begin

### New audience framing

We explicitly shaped the homepage for:

- learners building computer science foundations,
- engineers exploring data and AI/ML,
- and interview-focused builders aiming for strong product companies.

### New topic lanes

The homepage now signals these future content areas:

- General Computer Science
- System Design
- Cloud
- Data and AI
- Python Concepts
- Python Coding

### Concepts involved

- Product positioning
- Audience design
- Information architecture
- Editorial strategy
- Homepage messaging as a systems problem

### Why this improves UX

- Visitors understand the breadth of the site faster
- Readers can self-identify with the intended audience
- The site feels more scalable because the homepage is no longer tied to a single niche
- The content promise is clearer, which matters for trust, return visits, and future monetization

### Commands to run next

After reviewing locally, commit and push with:

```bash
cd /Users/vishalcherupally/Documents/github/vishal-portfolio
git status --short
git add app/page.tsx BUILD_NOTES.md
git commit -m "Reposition homepage around broader CS learning"
git push origin main
```

## Homepage Refinement

### What changed

Two homepage refinements were made in [app/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/page.tsx):

- the `Topic map` section was removed,
- the hero heading was simplified.

### Why we changed it

The `Topic map` section was useful for internal thinking, but it was too explicit for the homepage.

That kind of content taxonomy is better handled through:

- blog categories,
- navigation,
- archive pages,
- or study section structure.

The homepage should create interest and direction, not explain the entire internal content plan.

The previous hero heading also felt too heavy and too long. The revised heading is broader, simpler, and closer to the intended identity of the site.

### New heading direction

The homepage now uses:

`The science behind computers, software, data, and Python.`

This works better because it:

- broadens the identity beyond data engineering,
- sounds more foundational and timeless,
- and leaves room for computer science, systems, cloud, AI/ML, and coding content.

### Concepts involved

- Homepage messaging
- Information density control
- Content architecture versus homepage storytelling
- Simplicity in product communication

### Why this improves UX

- The homepage feels less crowded
- The main idea is easier to understand quickly
- Visitors are not overloaded with the internal content structure too early
- The page becomes more intriguing and less explanatory

### Commands to run next

After reviewing locally, commit and push with:

```bash
cd /Users/vishalcherupally/Documents/github/vishal-portfolio
git status --short
git add app/page.tsx BUILD_NOTES.md
git commit -m "Refine homepage messaging"
git push origin main
```

## Blog Category Architecture

### What changed

The blog was restructured around categories instead of a flat list of links.

Files changed:

- [lib/blog.ts](/Users/vishalcherupally/Documents/github/vishal-portfolio/lib/blog.ts)
- [app/blog/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/blog/page.tsx)
- [app/blog/category/[slug]/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/blog/category/[slug]/page.tsx)
- [app/blog/two-pointer-technique/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/blog/two-pointer-technique/page.tsx)
- [app/blog/sliding-window-technique/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/blog/sliding-window-technique/page.tsx)

### Why we changed it

The site plan now clearly includes multiple writing lanes:

- General CS
- Data
- Cloud
- AI / ML
- System Design
- Python Concepts
- Python Coding

A flat blog index would get messy as soon as more posts are added.
For example, an article like `S3 storage classes` belongs under `Cloud`, and the site should already know how to represent that.

### Architecture decision

We introduced a small shared content model in `lib/blog.ts`.

This file now stores:

- the list of categories,
- the list of blog posts,
- helper functions to fetch category-specific posts.

This is a good intermediate step before a larger content system like MDX or a CMS because it teaches structure without adding too much complexity too early.

### New blog behavior

The main blog page now does three things:

1. highlights a featured article,
2. shows all categories as dedicated entry points,
3. lists currently published posts with their category, date, and reading time.

### New category pages

Each category now has its own route:

- `/blog/category/general-cs`
- `/blog/category/data`
- `/blog/category/cloud`
- `/blog/category/ai-ml`
- `/blog/category/system-design`
- `/blog/category/python-concepts`
- `/blog/category/python-coding`

If a category has no posts yet, the page still exists and communicates that the section is ready for future content.

### Existing post updates

The existing posts were updated to feel connected to the new architecture:

- category link added at the top,
- typography aligned with the newer visual system,
- code blocks styled consistently with the rest of the site.

### Concepts involved

- Content modeling
- Separation of content and presentation
- Dynamic routing
- `generateStaticParams`
- Category-based information architecture
- Designing for future scale before content volume becomes messy

### Why this improves UX

- Readers can browse by interest instead of only by publish order
- The blog feels more organized and scalable
- New topic lanes like `Cloud` can exist before posts are published
- Future posts such as `S3 storage classes` can slot into the right section naturally

### Commands to run next

After reviewing locally, commit and push with:

```bash
cd /Users/vishalcherupally/Documents/github/vishal-portfolio
git status --short
git add lib/blog.ts app/blog/page.tsx 'app/blog/category/[slug]/page.tsx' app/blog/two-pointer-technique/page.tsx app/blog/sliding-window-technique/page.tsx BUILD_NOTES.md
git commit -m "Organize blog by category"
git push origin main
```

## S3 Storage Classes Article Upgrade

### What changed

The draft in [s3_storage_classes](/Users/vishalcherupally/Documents/github/vishal-portfolio/s3_storage_classes) was rewritten into a more structured, engaging long-form article.

### Why we changed it

The original draft already had a strong idea and a good storytelling instinct, especially the "home storage" metaphor.

What it needed was:

- stronger pacing,
- clearer structure,
- more memorable humor,
- a better decision framework,
- and more "reader payoff" so it feels like an article people would actually finish and share.

### Editorial decisions

The rewrite kept the original narrative spirit, but improved it by adding:

- a stronger opening hook,
- a simpler temperature-based mental model,
- a quick comparison table,
- cleaner sectioning for each storage class,
- small moments of humor without turning the article into a joke,
- common mistakes,
- a practical decision guide,
- and a one-screen summary diagram.

### Why this improves the article

- The reader gets value early
- The article is easier to scan
- The analogies are more consistent
- The content works for both beginners and more experienced readers
- The humor makes the piece feel human without weakening the technical explanation

### Concepts involved

- Technical writing
- Information pacing
- Reader engagement
- Narrative explanation
- Teaching through analogy
- "Explain, compare, decide" article structure

### Important note

Instead of adding random decorative images, the article uses:

- a comparison table,
- and a Mermaid diagram

because those are more useful than generic pictures for this topic.

### Commands to run next

After reviewing locally, commit and push with:

```bash
cd /Users/vishalcherupally/Documents/github/vishal-portfolio
git status --short
git add s3_storage_classes BUILD_NOTES.md
git commit -m "Rewrite S3 storage classes article"
git push origin main
```

## Moving S3 Into The Cloud Blog

### What changed

The standalone draft file [s3_storage_classes](/Users/vishalcherupally/Documents/github/vishal-portfolio/s3_storage_classes) was moved into the actual blog as a real Cloud article.

Files changed:

- [app/blog/s3-storage-classes/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/blog/s3-storage-classes/page.tsx)
- [lib/blog.ts](/Users/vishalcherupally/Documents/github/vishal-portfolio/lib/blog.ts)

The loose draft file was deleted so the article now lives in the same structure as the rest of the site.

### Why we changed it

The article was good, but it was still outside the actual blog system.

That meant:

- it would not show up on the blog index,
- it would not appear under the Cloud category,
- and the content source of truth would be split between "real blog pages" and random draft files.

Moving it into the blog makes the architecture cleaner and the content easier to scale.

### Product decision

If an article is ready enough to publish, it should live inside the site structure:

- it gets a permanent route,
- it appears in the right category,
- and readers can discover it through the normal browsing flow.

### What the new article page includes

- Cloud category backlink
- article-style hero section
- structured sections instead of a raw text dump
- a quick comparison table
- memorable analogies
- practical decision questions
- common mistakes section
- cleaner reading layout

### Why this improves UX

- The S3 article is now discoverable through the blog
- Cloud readers can find it naturally through category navigation
- The blog feels more real because it now has category depth beyond Python coding posts
- The content is now stored where future readers expect it to be

### Commands to run next

After reviewing locally, commit and push with:

```bash
cd /Users/vishalcherupally/Documents/github/vishal-portfolio
git status --short
git add app/blog/s3-storage-classes/page.tsx lib/blog.ts BUILD_NOTES.md
git rm s3_storage_classes
git commit -m "Publish S3 article in cloud blog"
git push origin main
```

## NotebookLM-Inspired Mind Map For S3

### What changed

A new mind-map-style visual section was added to the S3 article in [app/blog/s3-storage-classes/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/blog/s3-storage-classes/page.tsx).

### Why we changed it

The goal was to bring in the same "see the whole topic at a glance" feeling that NotebookLM mind maps give, but in a way that works natively inside the website.

Instead of trying to embed NotebookLM directly, we created a static, article-friendly version tailored to the S3 topic.

### Design decision

We used a custom visual section with:

- one central concept card,
- multiple branch cards,
- grouped ideas like hot data, archive choices, and lifecycle automation,
- and clear visual chunking instead of a plain paragraph explanation.

This approach is better for the site because it is:

- easier to style,
- easier to maintain,
- and easier to reuse across future technical articles.

### Why this improves UX

- Readers can understand the entire S3 topic faster
- The article feels more visual and memorable
- The page becomes more engaging without needing decorative images
- The structure invites scanning before deep reading

### Concepts involved

- Visual information architecture
- Technical education through diagrams
- Turning dense topics into skimmable structures
- Reusable article patterns

### Commands to run next

After reviewing locally, commit and push with:

```bash
cd /Users/vishalcherupally/Documents/github/vishal-portfolio
git status --short
git add app/blog/s3-storage-classes/page.tsx BUILD_NOTES.md
git commit -m "Add mind map section to S3 article"
git push origin main
```

## Interactive Mind Map Upgrade

### What changed

The S3 article was upgraded from a static mind-map-inspired section to an interactive expandable map.

Files changed:

- [components/s3-mind-map.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/components/s3-mind-map.tsx)
- [app/blog/s3-storage-classes/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/blog/s3-storage-classes/page.tsx)
- [app/globals.css](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/globals.css)

### Why we changed it

The NotebookLM reference showed a stronger interaction model:

- boxes can be clicked,
- branches expand and collapse,
- and the topic feels explorable instead of just visually summarized.

The earlier static version captured the idea, but not the experience.

### Implementation approach

We built a custom client-side component with:

- nested tree data,
- expandable nodes,
- simple branch connectors,
- animated reveal and collapse,
- and a horizontally explorable layout.

This is not a direct clone of NotebookLM, but it aims for the same learning effect:

- reveal the big picture first,
- then let readers progressively expand detail.

### Why this improves UX

- The article becomes more interactive
- Readers can explore the structure at their own pace
- The visual feels closer to a true mind map
- The pattern can be reused for future technical articles

### Concepts involved

- Client components in Next.js
- Local interaction state
- Recursive UI rendering
- Information architecture through expandable trees
- Animation for progressive disclosure

### Commands to run next

After reviewing locally, commit and push with:

```bash
cd /Users/vishalcherupally/Documents/github/vishal-portfolio
git status --short
git add components/s3-mind-map.tsx app/blog/s3-storage-classes/page.tsx app/globals.css BUILD_NOTES.md
git commit -m "Add interactive mind map to S3 article"
git push origin main
```

## Mind Map Cleanup

### What changed

The S3 mind map was refined to remove meta-explanatory copy and make the layout more compact.

Files changed:

- [app/blog/s3-storage-classes/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/blog/s3-storage-classes/page.tsx)
- [components/s3-mind-map.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/components/s3-mind-map.tsx)
- [app/globals.css](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/globals.css)

### Why we changed it

Two issues showed up in the first version:

- the section was over-explaining itself to the reader,
- and the map was too wide and too spaced out to feel like one coherent frame.

### Fixes made

- Removed the user-facing implementation explanation
- Simplified the heading
- Reduced gaps between nodes and branches
- Reduced node padding
- Closed deeper branches by default so the initial state fits better
- Tightened the expansion width so the map stays tidier

### Why this improves UX

- The map feels cleaner
- The reader sees the concept, not our implementation process
- The initial frame is easier to understand at a glance
- Expansion still exists, but the default state is more readable

### Commands to run next

After reviewing locally, commit and push with:

```bash
cd /Users/vishalcherupally/Documents/github/vishal-portfolio
git status --short
git add app/blog/s3-storage-classes/page.tsx components/s3-mind-map.tsx app/globals.css BUILD_NOTES.md
git commit -m "Tighten S3 mind map layout"
git push origin main
```

## Compact Mind Map Redesign

### What changed

The S3 mind map was redesigned again from a wide branching tree into a compact hub-and-cluster layout.

Files changed:

- [components/s3-mind-map.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/components/s3-mind-map.tsx)
- [app/globals.css](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/globals.css)

### Why we changed it

Even after spacing fixes, the tree still felt too wide and too stretched to work well inside the article frame.

That meant the interaction was interesting, but the visual was not doing the main job of a mind map:

- helping the reader see the whole topic in one glance.

### New design decision

Instead of trying to imitate the exact wide branch geometry, we kept the useful part:

- click to expand,
- progressive disclosure,
- topic grouping.

But we changed the visual structure to:

- one central concept,
- multiple compact cluster cards,
- expandable detail inside each cluster.

This makes it feel tidier and more article-friendly.

### Why this improves UX

- Fits better in one frame
- Feels cleaner on desktop and mobile
- Keeps interaction without creating visual sprawl
- Makes the whole topic easier to scan quickly

### Concepts involved

- Compact information architecture
- Progressive disclosure
- Interaction design versus literal visual imitation
- Adapting inspiration instead of copying it exactly

### Commands to run next

After reviewing locally, commit and push with:

```bash
cd /Users/vishalcherupally/Documents/github/vishal-portfolio
git status --short
git add components/s3-mind-map.tsx app/globals.css BUILD_NOTES.md
git commit -m "Redesign S3 mind map to fit article layout"
git push origin main
```

## Python Coding Teaching Direction

### What changed

The first Two Pointer draft in [Two Pointer/Article_1](/Users/vishalcherupally/Documents/github/vishal-portfolio/Two%20Pointer/Article_1) was rewritten and the live blog page was upgraded.

Files changed:

- [Two Pointer/Article_1](/Users/vishalcherupally/Documents/github/vishal-portfolio/Two%20Pointer/Article_1)
- [app/blog/two-pointer-technique/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/blog/two-pointer-technique/page.tsx)
- [lib/blog.ts](/Users/vishalcherupally/Documents/github/vishal-portfolio/lib/blog.ts)

### Why we changed it

The goal for Python Coding is not to publish ordinary problem explanations.

The content should:

- teach the essence of the technique,
- use narrative and analogy,
- connect problems through small mutations,
- build an easy-to-hard ladder,
- help readers recognize patterns in interviews,
- and feel interesting enough that people actually want to keep reading.

### Editorial decision

The article now avoids comparison with other websites and focuses only on the learning experience we want to create.

The core teaching promise is:

- do not memorize random problems,
- understand the invariant,
- see how one problem mutates into the next,
- and build interview intuition step by step.

### What was added to the live article

- stronger article hero
- hallway analogy
- invariant explanation
- visual rope/string mental model
- interview-ready Python code
- takeaway cards
- easy-to-hard ladder
- mutation into Valid Palindrome
- interview talk-track

### Why this improves UX

- The reader gets a story before code
- The article teaches why the technique works, not just how to code it
- The ladder creates curiosity for the next article
- The narrative makes the concept more memorable

### Concepts involved

- Technical storytelling
- Pattern recognition
- Invariants
- Progressive problem ladders
- Interview communication
- Curriculum design

### Commands to run next

After reviewing locally, commit and push with:

```bash
cd /Users/vishalcherupally/Documents/github/vishal-portfolio
git status --short
git add 'Two Pointer/Article_1' app/blog/two-pointer-technique/page.tsx lib/blog.ts BUILD_NOTES.md
git commit -m "Upgrade two pointer article"
git push origin main
```

## Two Pointer Article Visual And Code Refinement

### What changed

The Two Pointer article page was refined based on article-quality feedback.

Files changed:

- [app/blog/two-pointer-technique/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/blog/two-pointer-technique/page.tsx)
- [app/globals.css](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/globals.css)

### Why we changed it

The page had three issues:

- the easy-to-hard ladder section felt too much for the current article page,
- the code block looked like plain text instead of a proper Python snippet,
- and the hallway analogy needed a stronger visual connection to the actual code.

### Fixes made

- Removed the easy-to-hard ladder section from the page
- Added a visual hallway model where `left` is "you" and `right` is "your friend"
- Added subtle pointer movement animation
- Restyled the code block to look like a real editor/code snippet
- Added comments inside the Python code that connect the code back to the analogy
- Added small explanation cards for `left`, `right`, and `while left < right`

### Why this improves UX

- The article becomes more visual and less text-heavy
- The analogy is no longer separate from the code
- Readers can map story to implementation directly
- The page feels closer to a polished teaching resource

### Concepts involved

- Visual teaching
- Code annotation
- Analogy-to-implementation mapping
- Reducing page clutter
- Motion as explanation

### Commands to run next

After reviewing locally, commit and push with:

```bash
cd /Users/vishalcherupally/Documents/github/vishal-portfolio
git status --short
git add app/blog/two-pointer-technique/page.tsx app/globals.css BUILD_NOTES.md
git commit -m "Refine two pointer article visuals"
git push origin main
```

## Two Pointer Code And Illustration Refinement

### What changed

The Two Pointer article was refined again to better match the intended learning experience.

Files changed:

- [app/blog/two-pointer-technique/page.tsx](/Users/vishalcherupally/Documents/github/vishal-portfolio/app/blog/two-pointer-technique/page.tsx)
- [public/two-pointer-hallway.svg](/Users/vishalcherupally/Documents/github/vishal-portfolio/public/two-pointer-hallway.svg)

### Why we changed it

The previous version improved the code block background, but the real issue was that the code still did not visually feel like Python code.

Also, the article described a hallway and two friends, but the page needed an actual visual illustration to support that analogy.

### Fixes made

- Added a custom hallway SVG illustration
- Replaced the basic hallway boxes with the new illustration
- Added manual Python-style syntax coloring inside the code block
- Connected the code comments directly to the hallway analogy
- Kept the article focused on teaching, not just decoration

### Why this improves UX

- The visual analogy is now easier to understand
- The code feels more like a real Python snippet
- The reader can connect `left` with "you" and `right` with "your friend"
- The article becomes more memorable and less text-only

### Future improvement

Manual syntax coloring works for this article, but a real syntax-highlighting library would scale better once the site has many coding articles.

### Commands to run next

After reviewing locally, commit and push with:

```bash
cd /Users/vishalcherupally/Documents/github/vishal-portfolio
git status --short
git add app/blog/two-pointer-technique/page.tsx public/two-pointer-hallway.svg BUILD_NOTES.md
git commit -m "Improve two pointer code and illustration"
git push origin main
```

## How to Keep Using This File

For every future step, add:

1. What we changed
2. Why we changed it
3. What concept it teaches
4. What commands were run
5. What we should do next
