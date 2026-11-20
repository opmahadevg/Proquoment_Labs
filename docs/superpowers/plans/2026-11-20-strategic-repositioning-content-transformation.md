# Strategic Repositioning & Website Content Transformation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. Execution mode: **Native Sequential Implementation**.

**Goal:** Transform Proquoment Labs business identity, messaging, and service copy into an AI-native Product & Engineering Studio serving two distinct audiences (startups building AI products and businesses becoming AI-ready), structured around three primary service pillars, while strictly preserving 100% of existing visual design, styling, layout, components, and animations.

**Architecture:** Maintain all existing React components, Tailwind styling tokens, CSS variables, DOM hierarchies, and animations. Execute surgical copy and data updates across pages, meta tags, and contract tests. Retain backwards-compatible identifiers, anchor targets, and exports while eliminating speculative consulting jargon. Flag all unverified claims and author names for founder confirmation.

**Tech Stack:** React 19, TypeScript 5.7, Tailwind CSS, Vite 7, Wouter, Lucide React, Framer Motion, Node test runner (`node --test`).

**Spec:** Strategic Repositioning Specification (Proquoment Labs) with Dual-Audience Enhancement.

## Global Constraints

- Retain existing website design, styling, layouts, section order, components, icons, and animations 100% intact.
- Dual-audience positioning:
  1. **Startups building the future:** Founders turning product ideas into MVPs, building AI SaaS platforms, integrating AI into new digital products.
  2. **Existing businesses preparing for the AI era:** Companies automating repetitive workflows, integrating AI into existing software/systems, modernizing applications and digital infrastructure to become AI-ready.
- Primary positioning headlines and supporting statements:
  - Headline: *"Build for the future. Become AI-ready today."*
  - Central positioning: *"We turn ideas into AI-powered products, from concept to launch."*
  - Supporting message: *"We help ambitious startups build AI-powered products and help businesses prepare for an AI-powered future through intelligent software, automation and modern engineering."*
  - Alternative supporting message: *"Whether you're building your next big product or preparing your business for the AI era, we help turn opportunities into working technology."*
- Practical definition of "AI-Ready" (engineering implementation, not slide decks):
  - AI opportunity discovery and feasibility mapping.
  - Business workflow and operational analysis.
  - AI integration into existing business applications.
  - Business process automation and intelligent orchestration.
  - Custom AI agents, copilots, and assistive interfaces.
  - Data synchronizations, APIs, and webhook architectures.
  - Modern software, cloud infrastructure, and continuous maintenance.
- Three primary service pillars:
  1. Pillar 01: AI SaaS & Digital Product Engineering
  2. Pillar 02: Business Process Automation & Integrations
  3. Pillar 03: Web Applications & Digital Experiences
  (Secondary capabilities: custom AI agents, multi-agent systems, RAG, copilots, observability across pillars).
- Commercial & delivery model: Project-based development ($3k-$10k entry, $10k-$50k+ product/systems) with optional follow-on retainers. Founder-led and AI-enabled delivery (founder oversight + AI-assisted workflows + specialist engineering + human QA). No claims of massive permanent internal departments or autonomous AI delivery without engineering supervision.
- Brand relationship: Proquoment Labs is a distinct client-services engineering studio; Proquoment is a separate procurement SaaS platform (`proquoment.in`).
- Factual credibility: Do not label unvalidated metrics or architectures as "verified". Do not assume author names or metrics are fictitious without verification. Explicitly flag all unverified numbers, case studies, and author names for founder confirmation.
- Text invariant: STRICTLY ZERO em dashes ([U+2014]) or en dashes ([U+2013]). Use standard hyphens (-) or colons only.
- Validation: `npm run typecheck`, `npm run test` (all unit/contract tests), and `npm run build` must pass with 0 errors.

## Claims Requiring Founder Confirmation

| Item | Location | Current Value / Text | Audit Status | Recommendation / Action |
|---|---|---|---|---|
| Author Name | `src/data/blogs.ts:49` | `"Devon Reed", Head of Autonomous Systems` | Uncertain origin | Flag for founder confirmation. If unconfirmed, attribute to `"Proquoment Labs Engineering"`. |
| Author Name | `src/data/blogs.ts:110` | `"Elena Rostova", Principal AI Architect` | Uncertain origin | Flag for founder confirmation. If unconfirmed, attribute to `"Proquoment Labs Engineering"`. |
| Author Name | `src/data/blogs.ts:162` | `"Karan Patel", Lead Full-Stack Engineer` | Uncertain origin | Flag for founder confirmation. If unconfirmed, attribute to `"Proquoment Labs Engineering"`. |
| Author Name | `src/data/blogs.ts:214` | `"Dr. Marcus Vance", Healthcare Systems Lead` | Uncertain origin | Flag for founder confirmation. If unconfirmed, attribute to `"Proquoment Labs Engineering"`. |
| Author Name | `src/data/blogs.ts:260` | `"Sophia Chen", Enterprise Governance Specialist` | Uncertain origin | Flag for founder confirmation. If unconfirmed, attribute to `"Proquoment Labs Engineering"`. |
| Author Name | `src/data/blogs.ts:306` | `"Liam Gallagher", Quantitative Commerce Engineer` | Uncertain origin | Flag for founder confirmation. If unconfirmed, attribute to `"Proquoment Labs Engineering"`. |
| Metric | `WorkPage.tsx:77-79` | `85% manual data entry eliminated`, `50,000+ actions executed daily` | Unvalidated numerical claim | Flag for founder confirmation. Reframe as architectural capability (stateful supervisor queue, audit logging). |
| Metric | `WorkPage.tsx:112-114` | `$12,400 First 30 days recurring revenue`, `24% trial conversion rate` | Unvalidated financial outcome | Flag for founder confirmation. Reframe as engineering milestone (28-day MVP launch, Stripe billing, pgvector RAG). |
| Metric | `WorkPage.tsx:146-148` | `9 days -> 4m invoice cycle`, `99.4% extraction accuracy` | Unvalidated numerical claim | Flag for founder confirmation. Reframe as technical architecture (asynchronous Celery queue, multi-format parsing). |

## Review Focus

1. Dual-audience balance: verify that both startups building products and existing businesses seeking AI-readiness have equal prominence across Hero, Solutions, Audience profiles, and Services.
2. Anchor hash links (`#product-engineering`, `#agents-automation`, `#transformation` / `#digital-experiences`): existing links from navbar, footer, and deep links must resolve cleanly without page breakage.
3. Contact form schema and submission: Supabase submission payload to `labs_enquiries` and Google Sheets webapp webhook must remain fully operational without runtime errors.
4. Export contract stability: exported arrays (`PRODUCT_ENGINEERING_CAPABILITIES`, `TRANSFORMATION_CAPABILITIES`, `SERVICES_PRODUCT_ENGINEERING`, `SERVICES_AGENTS_AUTOMATION`, `SERVICES_TRANSFORMATION`, `AUDIENCE_PROFILES`, `CASE_STUDIES`, `SERVICE_TYPE_OPTIONS`, `BUDGET_RANGE_OPTIONS`) must maintain array lengths and shape expected by consumers.
5. Invariant enforcement: verify zero em dashes or en dashes across all modified files before completion.

---

### Task 1: Audit & Align SEO, Metadata, and Public Configuration

**Files:**
- Modify: `Landing_Page-main/artifacts/proquoment-labs/index.html:20-170`
- Modify: `Landing_Page-main/artifacts/proquoment-labs/public/llms.txt:1-23`
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/components/SEO.tsx:12-16`
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/App.tsx:57-170`
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/phase7-verify.ts:14-71`
- Test: `Landing_Page-main/artifacts/proquoment-labs/test/phase7.test.mjs`

**Interfaces:**
- Consumes: Canonical routes `/`, `/services`, `/work`, `/about`, `/contact`, `/blog`, `/privacy-policy`, `/terms-of-service`.
- Produces: Updated meta titles, descriptions, and JSON-LD OfferCatalog items reflecting the dual audience (startups and AI-ready businesses) and three primary pillars.

- [ ] **Step 1: Write test assertions in `test/phase7.test.mjs` for updated metadata**

Update `test/phase7.test.mjs` to check:
```javascript
assert.ok(appContent.includes("Build for the future. Become AI-ready today.") || appContent.includes("AI-powered products"));
assert.ok(appContent.includes("AI SaaS & Digital Product Engineering") || appContent.includes("AI Product Engineering"));
```

- [ ] **Step 2: Run test to verify failure**

Run: `cd "Landing_Page-main/artifacts/proquoment-labs"; node --test test/phase7.test.mjs`
Expected: FAIL due to outdated text in `App.tsx` and `phase7-verify.ts`.

- [ ] **Step 3: Update `index.html` with new branding and JSON-LD schema**

Replace title, description, and structured data `OfferCatalog` and `Service` entities with:
- Title: `Proquoment Labs | AI-Native Product & Engineering Studio`
- Meta Description: `Build for the future. Become AI-ready today. We help ambitious startups build AI-powered products and help businesses prepare for an AI-powered future through intelligent software, automation, and modern engineering.`
- OfferCatalog:
  1. `AI SaaS & Digital Product Engineering` (`#service-saas-product-engineering`)
  2. `Business Process Automation & Integrations` (`#service-automation-integrations`)
  3. `Web Applications & Digital Experiences` (`#service-digital-experiences`)

- [ ] **Step 4: Update `public/llms.txt`**

Reflect the dual audience and 3 core pillars verbatim:
1. `AI SaaS & Digital Product Engineering`: From concept to production-ready platforms, MVPs, dashboards, and APIs for startups and businesses.
2. `Business Process Automation & Integrations`: Connecting systems, workflow orchestration, and operational automation to make businesses AI-ready.
3. `Web Applications & Digital Experiences`: Modern web applications, customer portals, and intuitive digital interfaces.

- [ ] **Step 5: Update `src/components/SEO.tsx`, `src/App.tsx`, and `src/phase7-verify.ts`**

Update `DEFAULT_TITLE` and `DEFAULT_DESCRIPTION` in `SEO.tsx`. Update route-level SEO props in `App.tsx` and `CANONICAL_ROUTES` in `phase7-verify.ts` to balance startup product development with business AI-readiness.

- [ ] **Step 6: Run verification and commit**

Run: `cd "Landing_Page-main/artifacts/proquoment-labs"; node --test test/phase7.test.mjs`
Expected: PASS
Commit: `git add index.html public/llms.txt src/components/SEO.tsx src/App.tsx src/phase7-verify.ts test/phase7.test.mjs && git commit -m "chore(seo): align metadata and public contracts with dual-audience repositioning"`

---

### Task 2: Reposition Homepage Copy & Capability Datasets (Dual-Audience Integration)

**Files:**
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/pages/HomePage.tsx:42-412`
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/phase5-verify.ts:1-40`
- Test: `Landing_Page-main/artifacts/proquoment-labs/test/phase5.test.mjs`

**Interfaces:**
- Consumes: `CobaltToileLandingProps`, `AUDIENCE_PROFILES`, `PRODUCT_ENGINEERING_CAPABILITIES`, `TRANSFORMATION_CAPABILITIES`, `CORE_ENGINE_CAPABILITIES`.
- Produces: Dual-audience hero copy, 3 primary bookmark solutions, balanced audience profiles (3 startup + 3 existing business/operational), and updated services ledger.

- [ ] **Step 1: Update test expectations in `test/phase5.test.mjs`**

Update `test/phase5.test.mjs` assertions:
```javascript
assert.ok(homePageContent.includes("Build for the future. Become AI-ready today.") || homePageContent.includes("AI-powered products"));
assert.ok(homePageContent.includes("AI SaaS & Digital Product Engineering"));
assert.ok(homePageContent.includes("Business Process Automation & Integrations"));
assert.ok(homePageContent.includes("Web Applications & Digital Experiences"));
```

- [ ] **Step 2: Run test to verify failure**

Run: `cd "Landing_Page-main/artifacts/proquoment-labs"; node --test test/phase5.test.mjs`
Expected: FAIL due to existing copy.

- [ ] **Step 3: Update `HomePage.tsx`**

1. Hero:
   - title: `"Build for the Future.\nBecome AI-Ready Today."`
   - subtitle: `"We help ambitious startups build AI-powered products and help businesses prepare for an AI-powered future through intelligent software, automation and modern engineering."`
   - action: `{ label: "Start a Project", href: "/contact" }`
2. About Studio statement:
   - statement: `"We combine product thinking, modern engineering, and applied intelligence to build digital platforms and make businesses AI-ready."`
   - body: `"Proquoment Labs is an AI-native Product and Engineering Studio. Whether you are an ambitious founder launching a new AI SaaS product or an established business automating operations and integrating AI into existing software, we engineer practical solutions that run reliably in production."`
   - stats: keep quantitative indicators (100% IP ownership to client, etc.).
3. Solutions (Bookmarks):
   - Pillar 01: `AI SaaS & Digital Product Engineering` (art: typewriter, tone: paper) - "We turn product ideas into production-ready digital platforms."
   - Pillar 02: `Business Process Automation & Integrations` (art: steamer, tone: ink) - "We connect systems, automate repetitive operations and engineer intelligent workflows."
   - Pillar 03: `Web Applications & Digital Experiences` (art: monogram, tone: paper) - "We design and engineer modern digital experiences that make complex products easier to use."
4. Services Ledger (4 core offerings reflecting both audiences):
   - `AI SaaS & MVP Engineering` (for startups launching products)
   - `Business Process Automation` (for businesses streamlining operations)
   - `AI Integration & System Modernization` (for companies becoming AI-ready)
   - `Web Applications & Digital Experiences` (for high-impact interfaces and portals)
5. Capability datasets (`PRODUCT_ENGINEERING_CAPABILITIES`, `TRANSFORMATION_CAPABILITIES`, `CORE_ENGINE_CAPABILITIES`):
   - Maintain 6 items each to satisfy `phase5-verify.ts`.
   - Reframe capability descriptions to balance startup product builds and practical business AI readiness (opportunity discovery, workflow analysis, integrations).
6. Audience profiles (`AUDIENCE_PROFILES` - balanced 3 startup + 3 established business):
   - Audience 1: `Early-Stage Startups` (Speed to MVP, validation, seed-ready product engineering)
   - Audience 2: `SaaS Companies` (AI copilots, intelligent search, feature expansion)
   - Audience 3: `Founders Building New Products` (Technical execution partner, architecture to launch)
   - Audience 4: `Businesses Preparing for AI` (AI readiness, workflow analysis, connecting legacy tools)
   - Audience 5: `Growing Companies Automating Operations` (Eliminating manual friction across CRM, ERP, and documents)
   - Audience 6: `Established Teams Needing Engineering Muscle` (High-velocity engineering and specialist AI integrations)

- [ ] **Step 4: Run test and typecheck**

Run: `cd "Landing_Page-main/artifacts/proquoment-labs"; npm run typecheck; node --test test/phase5.test.mjs`
Expected: PASS with 0 errors.

- [ ] **Step 5: Commit**

```bash
git add src/pages/HomePage.tsx src/phase5-verify.ts test/phase5.test.mjs
git commit -m "feat(home): transform homepage positioning for dual audiences and three pillars"
```

---

### Task 3: Restructure Services Page Around Three Pillars & Practical AI Readiness

**Files:**
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/pages/ServicesPage.tsx:47-680`
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/phase6-verify.ts:1-47`
- Test: `Landing_Page-main/artifacts/proquoment-labs/test/phase6.test.mjs`

**Interfaces:**
- Consumes: `SERVICES_PRODUCT_ENGINEERING`, `SERVICES_AGENTS_AUTOMATION`, `SERVICES_TRANSFORMATION` (mapped to Web Applications & Digital Experiences), `ENGAGEMENT_MODELS`, `USE_CASE_SCENARIOS`.
- Produces: 3 deep-dive sections aligned to the 3 primary pillars, communicating practical AI readiness (opportunity discovery, workflow analysis, integrations, modern engineering) rather than theoretical consulting.

- [ ] **Step 1: Update test expectations in `test/phase6.test.mjs`**

Update `test/phase6.test.mjs` TASK 25 assertions:
```javascript
assert.ok(servicesContent.includes("AI SaaS & Digital Product Engineering") || servicesContent.includes("01. SaaS & Product Engineering"));
assert.ok(servicesContent.includes("Business Process Automation & Integrations") || servicesContent.includes("02. Automation & Integrations"));
assert.ok(servicesContent.includes("Web Applications & Digital Experiences") || servicesContent.includes("03. Web Apps & Experiences"));
```

- [ ] **Step 2: Run test to verify failure**

Run: `cd "Landing_Page-main/artifacts/proquoment-labs"; node --test test/phase6.test.mjs`
Expected: FAIL due to previous pillar names.

- [ ] **Step 3: Update `ServicesPage.tsx` content and subnav**

1. Section 1 (id="product-engineering"):
   - Title: `AI SaaS & Digital Product Engineering`
   - Kicker: `PILLAR · 01`
   - Subtitle: `From concept to production-ready platforms.`
   - Description: `"We turn product ideas into production-ready digital platforms. From architecture and engineering to deployment, we help founders move from concept to a working product."`
   - Capabilities: 9 technical capability cards covering MVP development, full-stack web/mobile, SaaS architecture, streaming APIs, DB schemas, auth/RBAC, dashboards, internal tools, CI/CD.
2. Section 2 (id="agents-automation"):
   - Title: `Business Process Automation & Integrations`
   - Kicker: `PILLAR · 02`
   - Subtitle: `Connected systems and intelligent workflows.`
   - Description: `"We connect systems, automate repetitive operations and engineer intelligent workflows that help businesses operate more efficiently."`
   - Capabilities: 9 technical cards covering workflow orchestration, CRM/ERP integrations, document extraction, event-driven webhooks, background sync, data normalization, monitoring, security, human-in-the-loop review.
3. Section 3 (id="transformation" with secondary anchor/alias id="web-applications"):
   - Title: `Web Applications & Digital Experiences`
   - Kicker: `PILLAR · 03`
   - Subtitle: `Intuitive interfaces for complex software.`
   - Description: `"We design and engineer modern digital experiences that make complex products and business operations easier to use."`
   - Capabilities: 9 technical cards covering customer portals, interactive dashboards, admin workspaces, UI/UX design systems, component libraries, responsive web experiences, data visualizations, performance optimization, maintenance and scaling.
4. Practical AI Readiness communication:
   - Emphasize tangible engineering deliverables: opportunity discovery, workflow analysis, AI integration into existing applications, custom copilots, API integrations, and modern infrastructure.
   - Remove theoretical consulting promises ("40-page audit report", "identifies 3.5x annual ROI in 10 days"). Replace with concrete technical deliverables (e.g. "detailed technical architecture blueprint and feasibility matrix", "direct engineering review and weekly sprint releases").
5. Engagement models (`ENGAGEMENT_MODELS`):
   - Model 1: `Project-Based Development` (primary model for both startups and businesses: Discovery -> Requirement Definition -> Architecture -> Design & Dev -> QA -> Launch).
   - Model 2: `Dedicated Engineering Retainer` (for scaling products and businesses continuously evolving AI systems).
   - Model 3: `4-Week MVP Sprint` (rapid validation for early-stage founders).
6. Use Case Scenarios:
   - Frame as real-world architectural solutions for startups and established business operations without unsupported commercial claims.

- [ ] **Step 4: Run test and typecheck**

Run: `cd "Landing_Page-main/artifacts/proquoment-labs"; npm run typecheck; node --test test/phase6.test.mjs`
Expected: PASS with 0 errors.

- [ ] **Step 5: Commit**

```bash
git add src/pages/ServicesPage.tsx src/phase6-verify.ts test/phase6.test.mjs
git commit -m "feat(services): realign services page and capabilities to the three primary pillars"
```

---

### Task 4: Audit & Sanitize Work/Portfolio Page Case Studies

**Files:**
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/pages/WorkPage.tsx:47-345`
- Test: `Landing_Page-main/artifacts/proquoment-labs/test/phase6.test.mjs`

**Interfaces:**
- Consumes: `CASE_STUDIES: CaseStudy[]`.
- Produces: Transparent, technically grounded case study plates. Do not label unvalidated benchmarks as verified. Flag unconfirmed claims for founder review.

- [ ] **Step 1: Inspect and sanitize the 3 case studies in `WorkPage.tsx`**

1. Case Study 1: `Autonomous AI Agent Swarms`
   - Re-badge: `Pillar 02 · Business Process Automation & Integrations`
   - Status: `Architectural Showcase & System Prototype`
   - Metrics: Reframe metrics around architectural facts rather than speculative claims: `{ value: "Sub-1.2s", label: "Task dispatch latency" }`, `{ value: "100%", label: "Audit trail logging" }`, `{ value: "Stateful", label: "Redis checkpoint persistence" }`.
2. Case Study 2: `SaaS MVP Acceleration`
   - Re-badge: `Pillar 01 · AI SaaS & Digital Product Engineering`
   - Status: `Production Implementation`
   - Metrics: Reframe metrics around tangible delivery milestones rather than unverified revenue: `{ value: "28 Days", label: "Concept to production deployment" }`, `{ value: "100%", label: "Type-safe TypeScript & Zod" }`, `{ value: "Full-Stack", label: "Next.js, pgvector & Stripe billing" }`.
3. Case Study 3: `Enterprise Workflow Automation`
   - Re-badge: `Pillar 02 / Pillar 03 · Operational Systems & Interfaces`
   - Status: `Technical Architecture Demonstration`
   - Metrics: Reframe metrics around system resilience: `{ value: "Asynchronous", label: "Worker queue with Celery & Redis" }`, `{ value: "Multi-Format", label: "PDF, JSON & tabular parsing" }`, `{ value: "Zero Downtime", label: "Containerized Docker release" }`.
4. Narrative tone:
   - "Why We Build in Public" emphasizes radical engineering honesty, founder-led oversight, transparent progress, and 100% IP transfer upon payment.

- [ ] **Step 2: Update `test/phase6.test.mjs` TASK 27 assertions**

Ensure tests verify the audited case study cards and clean metrics.

- [ ] **Step 3: Run test and typecheck**

Run: `cd "Landing_Page-main/artifacts/proquoment-labs"; npm run typecheck; node --test test/phase6.test.mjs`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/pages/WorkPage.tsx test/phase6.test.mjs
git commit -m "fix(work): audit case study claims and reframe unverified outcome metrics"
```

---

### Task 5: Update About Page (Dual Audience, Delivery Model, Ecosystem Clarification)

**Files:**
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/pages/AboutPage.tsx:39-375`
- Test: `Landing_Page-main/artifacts/proquoment-labs/test/phase6.test.mjs`

**Interfaces:**
- Consumes: About page layout and primitives.
- Produces: Clear studio story addressing both startups and existing businesses, founder-led delivery model, distinct brand relationship with Proquoment platform, and global customer positioning.

- [ ] **Step 1: Update `AboutPage.tsx` content**

1. Hero:
   - Title: `"Build for the Future."`
   - Italic highlight: `"Become AI-Ready Today."`
   - Subtitle: `"Proquoment Labs is an AI-native Product & Engineering Studio. We help ambitious startups build AI-powered products and help businesses prepare for an AI-powered future through intelligent software, automation, and modern engineering."`
2. Our Origin & Identity:
   - Clarify identity: Distinct client-services studio brand within the broader Proquoment ecosystem.
   - Purpose: Help founders turn product ideas into MVPs and SaaS platforms, and help existing businesses automate operations and become AI-ready.
   - Global delivery: Serve clients internationally across the US, UK, Europe, UAE, India, and Southeast Asia. (No invented foreign offices; remote global delivery).
3. Delivery Model (replace agency hype):
   - Emphasize founder-led product and engineering oversight.
   - AI-assisted modern development workflows for speed and precision.
   - Specialist engineering collaboration where required.
   - Rigorous human review, testing, and quality assurance on every commit.
4. Ecosystem cross-link:
   - Clearly delineate Proquoment Labs (client product engineering and AI services) from Proquoment (procurement SaaS platform at proquoment.in).
   - Ensure visitors understand Labs builds client software and does not sell procurement subscriptions.

- [ ] **Step 2: Update `test/phase6.test.mjs` TASK 28 assertions**

Ensure tests assert the updated About Page text and principles.

- [ ] **Step 3: Run test and typecheck**

Run: `cd "Landing_Page-main/artifacts/proquoment-labs"; npm run typecheck; node --test test/phase6.test.mjs`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**

```bash
git add src/pages/AboutPage.tsx test/phase6.test.mjs
git commit -m "feat(about): clarify studio identity, dual audience, and delivery model"
```

---

### Task 6: Align Contact Page, Service Selection & Budget Ranges

**Files:**
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/pages/ContactPage.tsx:39-55, 66-75, 450-520`
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/phase6-verify.ts:26-31`
- Test: `Landing_Page-main/artifacts/proquoment-labs/test/phase6.test.mjs`

**Interfaces:**
- Consumes: `SERVICE_TYPE_OPTIONS`, `BUDGET_RANGE_OPTIONS`, `ContactFormData`.
- Produces: Contact dropdown options reflecting the three pillars and secondary capabilities, commercial budget ranges ($3k-$10k, $10k-$50k+), and founder/operator project description prompts.

- [ ] **Step 1: Update options in `ContactPage.tsx`**

```typescript
export const SERVICE_TYPE_OPTIONS = [
  "AI SaaS & Digital Product Engineering",
  "Business Process Automation & Integrations",
  "Web Applications & Digital Experiences",
  "Custom AI Agents & Specialist AI Systems",
  "Other Custom Software Requirements",
];

export const BUDGET_RANGE_OPTIONS = [
  "$3,000 - $5,000 (Scoping & Prototyping)",
  "$5,000 - $10,000 (MVP & Early Stage Development)",
  "$10,000 - $25,000 (Full Product & System Engineering)",
  "$25,000 - $50,000+ (Scale & Advanced Engineering)",
  "Flexible / To Be Discussed",
];
```

- [ ] **Step 2: Update form description guidance**

Enhance textarea placeholder and helper text to prompt:
`"Tell us about your idea or business problem, what you want to build, current product stage, desired outcome, and approximate budget and timeline."`

- [ ] **Step 3: Verify Supabase submission and field mapping**

Ensure `serviceType` and `budgetRange` string values map seamlessly to `labs_enquiries` without schema breakage.

- [ ] **Step 4: Update `test/phase6.test.mjs` TASK 26 assertions**

Verify test checks for new `SERVICE_TYPE_OPTIONS` and budget options.

- [ ] **Step 5: Run test and typecheck**

Run: `cd "Landing_Page-main/artifacts/proquoment-labs"; npm run typecheck; node --test test/phase6.test.mjs`
Expected: PASS with 0 errors.

- [ ] **Step 6: Commit**

```bash
git add src/pages/ContactPage.tsx src/phase6-verify.ts test/phase6.test.mjs
git commit -m "feat(contact): update service options and commercial budget ranges"
```

---

### Task 7: Align Shared Layout, Navigation, Footer, and Secondary Files

**Files:**
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/components/Layout.tsx:441-518`
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/pages/TermsOfServicePage.tsx:71-78`
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/components/PlaceholderShell.tsx:32-54`
- Modify: `Landing_Page-main/artifacts/proquoment-labs/src/data/blogs.ts:48-52, 109-113, 161-165, 213-217, 259-263, 305-309`
- Test: `Landing_Page-main/artifacts/proquoment-labs/test/phase3.test.mjs`
- Test: `Landing_Page-main/artifacts/proquoment-labs/test/blog-system.test.mjs`

**Interfaces:**
- Consumes: Navbar and Footer components.
- Produces: Consistent footer branding, pillar links, Terms of Service pillar definitions, and blog author attribution handling.

- [ ] **Step 1: Update `Layout.tsx` Footer**

- Update tagline: `"Build for the future. Become AI-ready today."`
- Update description: `"AI-native Product & Engineering Studio. We help ambitious startups build AI-powered products and help businesses prepare for an AI-powered future through intelligent software, automation and modern engineering."`
- Update Column 2 service links:
  - `AI SaaS & Digital Product Engineering` (`/services#product-engineering`)
  - `Business Process Automation & Integrations` (`/services#agents-automation`)
  - `Web Applications & Digital Experiences` (`/services#transformation` or `/services#web-applications`)
  - `View all services` (`/services`)

- [ ] **Step 2: Update `TermsOfServicePage.tsx` Section 2**

Update the three pillars in Section 2 to:
1. `AI SaaS & Digital Product Engineering`: SaaS MVP development, full-stack web and mobile platforms, API development, and product architecture.
2. `Business Process Automation & Integrations`: Workflow orchestration, CRM/ERP integrations, automated document processing, and event-driven automation.
3. `Web Applications & Digital Experiences`: Business websites, web portals, interactive dashboards, admin panels, and responsive UI/UX engineering.

- [ ] **Step 3: Update `PlaceholderShell.tsx`**

Align `PILLARS` constant to the three new pillars.

- [ ] **Step 4: Review and handle `src/data/blogs.ts` author names and claims**

Review author names. If uncertain of origin, attribute neutrally to `"Proquoment Labs Engineering"` (or retain as flagged in the confirmation table). Ensure zero em dashes or en dashes remain.

- [ ] **Step 5: Update `test/phase3.test.mjs` and `test/blog-system.test.mjs`**

Ensure test expectations match the updated text while retaining 100% test pass.

- [ ] **Step 6: Run test suite and typecheck**

Run: `cd "Landing_Page-main/artifacts/proquoment-labs"; npm run typecheck; node --test test/phase3.test.mjs test/blog-system.test.mjs`
Expected: PASS with 0 errors.

- [ ] **Step 7: Commit**

```bash
git add src/components/Layout.tsx src/pages/TermsOfServicePage.tsx src/components/PlaceholderShell.tsx src/data/blogs.ts test/phase3.test.mjs test/blog-system.test.mjs
git commit -m "chore(layout): synchronize footer, terms, and blog entries with dual-audience positioning"
```

---

### Task 8: Repository-Wide Audit, Invariant Verification, and Final Quality Assurance

**Files:**
- Audit: All `.ts`, `.tsx`, `.html`, `.txt`, `.json` files in `Landing_Page-main/artifacts/proquoment-labs/`
- Test: All tests in `Landing_Page-main/artifacts/proquoment-labs/test/*.test.mjs`

**Interfaces:**
- Consumes: Complete project codebase.
- Produces: Clean typecheck, passing test suite, successful production build, and confirmed absence of em dashes or conflicting legacy positioning.

- [ ] **Step 1: Check for remaining conflicting keywords or outdated claims**

Run search commands for:
- "Autonomous AI Systems Built for Tomorrow"
- "AI Transformation Partnership" (outside intentional backwards-compatibility anchors)
- "40-page technical audit report"
- Em dashes (`[U+2014]`) and En dashes (`[U+2013]`)

- [ ] **Step 2: Run complete TypeScript typecheck**

Run: `cd "Landing_Page-main/artifacts/proquoment-labs"; npm run typecheck`
Expected: Clean exit code 0.

- [ ] **Step 3: Run complete unit and contract test suite**

Run: `cd "Landing_Page-main/artifacts/proquoment-labs"; node --test test/blog-system.test.mjs test/phase3.test.mjs test/phase4.test.mjs test/phase5.test.mjs test/phase6.test.mjs test/phase7.test.mjs test/smooth-transitions.test.mjs`
Expected: All 166+ tests PASS with 0 failures.

- [ ] **Step 4: Run production build**

Run: `cd "Landing_Page-main/artifacts/proquoment-labs"; npm run build`
Expected: Clean build in `dist/public` with 0 warnings or errors.

- [ ] **Step 5: Visual and layout invariance check**

Verify no CSS class names, tailwind configuration, DOM element hierarchies, typography sizes, colors, or animations were modified.

- [ ] **Step 6: Final commit**

```bash
git add .
git commit -m "chore(release): complete strategic repositioning and website content transformation"
```
