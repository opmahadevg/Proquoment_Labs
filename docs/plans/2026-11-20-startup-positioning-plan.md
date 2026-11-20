# Labs Proquoment Startup Services Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition Labs Proquoment landing page and services copy away from bloated enterprise consulting to 5-6 core high-impact offerings tailored for new-age startups (Full-Stack Apps, 4-6 Week MVP Sprints, Multi-Agent Swarms, Intelligent Document Extraction, Research/Enrichment Agents, Human-in-the-Loop Review Interfaces) with zero design, CSS, or color changes.

**Architecture:** Retain the existing 3-pillar layout structure (`product-engineering`, `agents-automation`, `transformation`) and copperplate design system on `ServicesPage.tsx` and `HomePage.tsx`. Streamline capability datasets from 27 enterprise items down to 6 focused startup services (2 per pillar), update use-case scenarios and engagement models for startup founders, update `ContactPage.tsx` options, and update contract tests in `test/phase6.test.mjs`.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS, Lucide React, Wouter, Node test runner (`node --test`).

**Spec:** User request specifying 4-5 major offerings: Full-Stack Web & Mobile Apps, SaaS MVP Sprint Acceleration in 4-6 weeks, Autonomous Multi-Agent, Intelligent Document Extraction, Autonomous Research & Enrichment Agents, Human-in-the-Loop Review Interfaces, founder-friendly non-technical copy, zero design/color alterations.

---

## Global Constraints

- **Design preservation:** Zero changes to CSS classes, Tailwind tokens, color variables, borders, padding, grids, or component markup structure. Only copy, labels, icons, datasets, and descriptions change.
- **Tone & readability:** Founder-first, velocity-focused, benefit-driven. Strip out corporate enterprise jargon (no DPDP Act audits, monolith modernization, or private VPC clusters).
- **Navigation & anchor stability:** Keep existing DOM IDs (`#product-engineering`, `#agents-automation`, `#transformation`) and routes intact so internal links and subnav scrolling work seamlessly.
- **Test suite integrity:** All contract tests in `test/phase5.test.mjs`, `test/phase6.test.mjs`, and associated test suites must pass cleanly (`npm test`).

## Review Focus

1. **Section anchoring and subnav scroll:** Confirm clicking `01. Product Engineering`, `02. Agents & Automation`, and `03. Transformation` smoothly scrolls to the correct section without broken targets.
2. **Contact form select options:** Ensure `SERVICE_TYPE_OPTIONS` on `ContactPage.tsx` contains the exact startup service names and correctly submits without validation errors.
3. **Data contract test passing:** Ensure `node --test test/phase6.test.mjs test/phase5.test.mjs` passes with zero failed assertions.
4. **No style regression:** Ensure all `EtchedCard`, `CapabilityGrid`, `PlateHeader`, and badge elements retain their original styling, tags, and icon sizing.
5. **Clear, non-technical founder copy:** Ensure all card titles, descriptions, deliverables, and benchmarks communicate concrete business outcomes without excessive technical density.

---

## Task Decomposition

### Task 1: Update `ServicesPage.tsx` Capabilities, Use Cases, and Engagement Copy

**Files:**
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/pages/ServicesPage.tsx`

**Interfaces:**
- Produces: Updated `SERVICES_PRODUCT_ENGINEERING`, `SERVICES_AGENTS_AUTOMATION`, `SERVICES_TRANSFORMATION`, `ENGAGEMENT_MODELS`, and `USE_CASE_SCENARIOS` arrays.

- [ ] **Step 1: Update `SERVICES_PRODUCT_ENGINEERING` dataset**
  Replace 9 enterprise capabilities with 2 focused startup capabilities:
  1. `Full-Stack Web & Mobile Applications` (Tag: `Web & Mobile`, Icon: `Code`)
  2. `SaaS MVP Sprint Acceleration` (Tag: `4-6 Wk MVP`, Icon: `Layers`)

- [ ] **Step 2: Update `SERVICES_AGENTS_AUTOMATION` dataset**
  Replace 9 enterprise capabilities with 2 focused startup capabilities:
  1. `Autonomous Multi-Agent Swarms` (Tag: `Multi-Agent`, Icon: `Workflow`)
  2. `Intelligent Document Extraction` (Tag: `Doc Intelligence`, Icon: `FileText`)

- [ ] **Step 3: Update `SERVICES_TRANSFORMATION` dataset**
  Replace 9 enterprise capabilities with 2 focused startup capabilities:
  1. `Autonomous Research & Enrichment Agents` (Tag: `Research Agents`, Icon: `Search`)
  2. `Human-in-the-Loop Review Interfaces` (Tag: `Human-in-Loop`, Icon: `Sliders`)

- [ ] **Step 4: Update section PlateHeader kickers, titles, and descriptions**
  Update headers on ServicesPage:
  - Header: Kicker `PRACTICE & CAPABILITIES`, Title `Engineered for Startups`, Italic `From Concept to Scale`, Description `We partner with early-stage founders to build production-grade web and mobile apps, launch SaaS MVPs in 4-6 weeks, and deploy autonomous agents that eliminate operational friction.`
  - Section 01: `AI Product Engineering` · `Ship your MVP in 4-6 weeks.`
  - Section 02: `AI Agents & Automation` · `Put manual workflows on autopilot.`
  - Section 03: `AI Research & Human-in-the-Loop` · `Autonomous intelligence with total human control.`

- [ ] **Step 5: Update `ENGAGEMENT_MODELS` and `USE_CASE_SCENARIOS`**
  - Refocus models on startups: `4-6 Week SaaS MVP Sprint`, `Dedicated Engineering Retainer`, `Project-Based Build`.
  - Refocus use cases on startup stories: `Generative FinTech SaaS MVP`, `Autonomous Document & Invoice Processing`, `AI Lead Research & Enrichment Agent`.

- [ ] **Step 6: Run verification command**
  Run: `cd Landing_Page-main/artifacts/proquoment-labs && npx tsc --noEmit`
  Expected: Zero TypeScript compilation errors.

---

### Task 2: Update `HomePage.tsx` Value Propositions, Bookmarks, and Ledger Rows

**Files:**
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/pages/HomePage.tsx`

**Interfaces:**
- Produces: Updated `PRODUCT_ENGINEERING_CAPABILITIES`, `TRANSFORMATION_CAPABILITIES`, `CORE_ENGINE_CAPABILITIES`, and bookmark/ledger copy in `HomePage.tsx`.

- [ ] **Step 1: Update hero subtitles and value proposition points**
  Align hero points with startup messaging:
  - Ship revenue-ready SaaS MVPs in 4-6 weeks
  - Build full-stack web and mobile apps with clean, scalable code
  - Deploy autonomous multi-agent systems and document extraction

- [ ] **Step 2: Update Pillar 01, 02, and 03 Bookmarks**
  - Pillar 01: `Full-Stack Web & Mobile Apps` and `4-6 Week SaaS MVP Sprints`
  - Pillar 02: `Autonomous Multi-Agent Swarms` and `Intelligent Document Extraction`
  - Pillar 03: `Autonomous Research Agents` and `Human-in-the-Loop Review Interfaces`

- [ ] **Step 3: Update Services Ledger items**
  Update the 4 ledger items to:
  1. `SaaS MVP Sprint Acceleration` (4 to 6 Weeks · From concept to live production software with auth, billing, and database)
  2. `Full-Stack Web & Mobile Apps` (6 to 10 Weeks · Turnkey web, iOS, and Android applications engineered to scale)
  3. `Autonomous Multi-Agent Systems` (3 to 6 Weeks · Digital teams automating complex multi-step workflows)
  4. `Document Intelligence & Enrichment` (2 to 4 Weeks · Automated document extraction and autonomous research agents)

- [ ] **Step 4: Update capability arrays**
  Update `PRODUCT_ENGINEERING_CAPABILITIES`, `TRANSFORMATION_CAPABILITIES`, and `CORE_ENGINE_CAPABILITIES` to match the 5-6 core startup offerings in founder-friendly language.

- [ ] **Step 5: Verify TypeScript compilation**
  Run: `cd Landing_Page-main/artifacts/proquoment-labs && npx tsc --noEmit`
  Expected: Zero TypeScript compilation errors.

---

### Task 3: Update `ContactPage.tsx` Service Options and Form Placeholders

**Files:**
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/pages/ContactPage.tsx`

**Interfaces:**
- Produces: Updated `SERVICE_TYPE_OPTIONS` and description placeholder in `ContactPage.tsx`.

- [ ] **Step 1: Update `SERVICE_TYPE_OPTIONS`**
  Set options to:
  - `4-6 Week SaaS MVP Sprint`
  - `Full-Stack Web & Mobile Applications`
  - `Autonomous Multi-Agent Systems`
  - `Intelligent Document Extraction`
  - `Autonomous Research & Enrichment Agents`
  - `Human-in-the-Loop Review Interfaces`
  - `General Architecture Advisory`

- [ ] **Step 2: Update placeholder text**
  Update description placeholder: `Tell us about your product idea, target timeline, or the manual workflow you want to automate with AI agents...`

- [ ] **Step 3: Verify TypeScript compilation**
  Run: `cd Landing_Page-main/artifacts/proquoment-labs && npx tsc --noEmit`
  Expected: Zero TypeScript compilation errors.

---

### Task 4: Update Contract Test Suite in `test/phase6.test.mjs` and Run All Tests

**Files:**
- Modify: `Landing_Page-main/artifacts/proquoment-labs/test/phase6.test.mjs`

**Interfaces:**
- Verifies: All contract assertions against new startup capabilities.

- [ ] **Step 1: Update Task 25 test assertions in `phase6.test.mjs`**
  Update test `contains expanded capability lists with at least 8-10 technical items each` to:
  - Check for `SERVICES_PRODUCT_ENGINEERING`
  - Check for `SERVICES_AGENTS_AUTOMATION`
  - Check for `SERVICES_TRANSFORMATION`
  - Assert the new startup capabilities:
    - `Full-Stack Web & Mobile Applications`
    - `SaaS MVP Sprint Acceleration`
    - `Autonomous Multi-Agent Swarms`
    - `Intelligent Document Extraction`
    - `Autonomous Research & Enrichment Agents`
    - `Human-in-the-Loop Review Interfaces`

- [ ] **Step 2: Run contract test suite**
  Run: `cd Landing_Page-main/artifacts/proquoment-labs && node --test test/phase5.test.mjs test/phase6.test.mjs`
  Expected: All 64+ contract tests pass with 0 failures.

- [ ] **Step 3: Run full verification build**
  Run: `cd Landing_Page-main/artifacts/proquoment-labs && npm run build`
  Expected: Vite build succeeds with zero errors.
