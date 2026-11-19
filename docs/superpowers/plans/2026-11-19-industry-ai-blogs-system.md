# Implementation Plan: AI Implementation Industry Blogs System

**Date**: 2026-11-19
**System**: Proquoment Labs (`Landing_Page-main/artifacts/proquoment-labs`)

## 1. Overview
Build an end-to-end, high-authority Blog & Insights system focused on **how AI implementation across industries helps startups and growing companies**.
- Built natively within the Cobalt Toile copperplate engraving design language (`PlateHeader`, `EtchedCard`, `WaxSealBadge`, `CopperplateButton`, hairline rules, `--ctl-*` palette tokens).
- Integrated into the Homepage `Insights / Latest Press` section with live category filtering and direct article routing.
- Dedicated `/blog` index with interactive search, category & industry filter chips, and reading metrics.
- Dedicated `/blog/:slug` deep-dive article view with technical architecture callouts, ROI metrics, and consultation CTAs.
- Full responsive support, theme toggle (white parchment / black nocturnal) compatibility, zero em dashes (`—`), and super smooth scrolling.

## 2. File & Component Architecture
- `src/data/blogs.ts`: Structured dataset of 6 comprehensive industry AI implementation articles with full markdown/rich-text content, technical highlights, metrics, and metadata.
- `src/pages/BlogPage.tsx`: The primary Blog / Insights directory with hero plate, search bar, industry/category filter chips, featured article spotlight, and etched article grid.
- `src/pages/BlogPostPage.tsx`: Single article deep-dive reader with executive summary, technical architecture breakdowns, ROI metrics table, author card, and lead generation CTA.
- `src/components/ui/cobalt-toile-landing.tsx`: Connect `Insights` section items to Wouter navigation so clicking an article routes seamlessly to `/blog/:slug`.
- `src/pages/HomePage.tsx`: Pass the industry blog posts into `<CobaltToileLanding press={...} pressCopy={...} />`.
- `src/components/Layout.tsx`: Add "Insights" / "Blog" to Navbar and Footer navigation links.
- `src/App.tsx`: Register `/blog` and `/blog/:slug` routes with React.lazy and Suspense.
- `test/blog-system.test.mjs`: Test suite validating blog data integrity, routing, filtering, and design system contracts.

## 3. Step-by-Step Task Decomposition
- [ ] Task 1: Author Comprehensive Industry AI Blogs Dataset (`src/data/blogs.ts`)
- [ ] Task 2: Build Dedicated Blog Directory Page (`src/pages/BlogPage.tsx`)
- [ ] Task 3: Build Single Blog Post Reader Page (`src/pages/BlogPostPage.tsx`)
- [ ] Task 4: Connect Homepage Insights Section to Blog System & Enable Wouter Route Navigation
- [ ] Task 5: Update Navigation (Navbar & Footer in `Layout.tsx`)
- [ ] Task 6: Wire Router in `src/App.tsx` & Update Route Verification
- [ ] Task 7: Contract Testing & Production Build Verification
