# Smooth Page Glide and Etched Skeleton Loading Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminate jarring hero mount ("blue box" popping), replace generic spinners with bespoke etched copperplate skeletons, and implement fluid Framer Motion page glides across all Proquoment Labs pages.

**Architecture Decisions:**
- CSS `@property --ctl-r` registration in `src/index.css` for smooth GPU-interpolated radial etch in the hero stage.
- Hero stage mount transition with hardware-accelerated opacity and subtle scale (`cubic-bezier(0.16, 1, 0.3, 1)`).
- Dedicated `src/components/ui/copperplate-skeletons.tsx` providing `HeroSkeleton`, `CardGridSkeleton`, `ArticleSkeleton`, and unified `PageFallbackSkeleton` matching the copperplate toile aesthetic.
- Framer Motion `AnimatePresence` and `<PageTransition>` in `src/App.tsx` with smooth vertical glide (`y: 14px -> 0px`, `duration: 0.38s`, `ease: [0.22, 1, 0.36, 1]`).
- Synchronized `ScrollToTop` handling so smooth scroll coordinates seamlessly with exit and entry animations.

---

## File Structure Map

- `src/index.css`: Add CSS `@property --ctl-r` and skeleton shimmer animations.
- `src/components/ui/cobalt-toile-landing.tsx`: Optimize hero stage mounting, smooth out `.ctl-stage` initial paint, eliminate layout pop-in.
- `src/components/ui/copperplate-skeletons.tsx` (new): Etched copperplate skeletons with corner tick marks and engraved hatch shimmer.
- `src/components/PageTransition.tsx` (new): Framer Motion transition wrapper for page view gliding.
- `src/App.tsx`: Integrate `AnimatePresence`, `<PageTransition>`, and route-specific skeleton fallbacks.
- `src/components/ScrollToTop.tsx`: Coordinate scroll-to-top timing with page transition exits.
- `test/smooth-transitions.test.mjs` (new): Automated contract and unit tests verifying transition exports, skeleton invariants, and router structure.

---

## Tasks

### Task 1: Register CSS `@property` and Smooth Hero Stage Mount

**Files:**
- `src/index.css`
- `src/components/ui/cobalt-toile-landing.tsx`

- [ ] Step 1: In `src/index.css`, declare `@property --ctl-r` with `<percentage>` syntax and initial value `0%`.
- [ ] Step 2: In `src/components/ui/cobalt-toile-landing.tsx`, add smooth initial mount styling to `.ctl-stage` (`opacity` transition and `scale(0.99) -> scale(1)`), and optimize `@keyframes ctl-settle` and `@keyframes ctl-etch`.
- [ ] Step 3: Run `npx tsc -p tsconfig.json --noEmit` to verify type safety.
- [ ] Step 4: Verify hero renders cleanly without jarring pop-in.

### Task 2: Build Copperplate Skeleton Loading Components

**Files:**
- `src/components/ui/copperplate-skeletons.tsx`
- `src/index.css`

- [ ] Step 1: In `src/index.css`, create `.ctl-skeleton-shimmer` with repeating linear gradient hatch effect.
- [ ] Step 2: Create `src/components/ui/copperplate-skeletons.tsx` implementing:
  - `HeroSkeleton`: Wireframe of etched arch, monogram kicker, header lines, and CTA outline.
  - `CardGridSkeleton`: Grid of etched cards with corner ticks, badge headers, and text line placeholders.
  - `ArticleSkeleton`: Blog and article layout skeleton with metadata divider rule.
  - `PageFallbackSkeleton`: Universal fallback component adapting to current route context.
- [ ] Step 3: Run `npx tsc -p tsconfig.json --noEmit` to verify exports and types.

### Task 3: Implement Framer Motion Page Glide Transitions

**Files:**
- `src/components/PageTransition.tsx`
- `src/App.tsx`
- `src/components/ScrollToTop.tsx`

- [ ] Step 1: Create `src/components/PageTransition.tsx` using `motion.div` with ease `[0.22, 1, 0.36, 1]`, entry `y: 14 -> 0`, exit `y: 0 -> -10`.
- [ ] Step 2: In `src/App.tsx`, wrap the router `<Switch>` in `AnimatePresence mode="wait" initial={false}`.
- [ ] Step 3: Replace old generic spinner `<PageFallback>` with `<PageFallbackSkeleton>` across all routes.
- [ ] Step 4: Update `src/components/ScrollToTop.tsx` to handle route changes smoothly without snapping before exit animations complete.
- [ ] Step 5: Run `npx tsc -p tsconfig.json --noEmit` to verify zero compile errors.

### Task 4: Automated Testing & Production Build Verification

**Files:**
- `test/smooth-transitions.test.mjs`

- [ ] Step 1: Write `test/smooth-transitions.test.mjs` verifying:
  - Registration of CSS `@property --ctl-r` in stylesheet.
  - Presence of `PageTransition` and `AnimatePresence` in routing tree.
  - Export of `HeroSkeleton`, `CardGridSkeleton`, `PageFallbackSkeleton`.
  - Zero em dashes (`—`) or en dashes (`–`) in newly created source files.
- [ ] Step 2: Run all tests: `npm test`.
- [ ] Step 3: Run production build: `npm run build`.
- [ ] Step 4: Sync changes to `scratch/proquoment_repo` and push to GitHub `opmahadevg/Proquoment_Labs`.
