import * as React from "react";
import { useState } from "react";
import { Link } from "wouter";
import {
  PlateHeader,
  PlateKicker,
  EtchedCard,
  CopperplateButton,
  HatchDivider,
  LedgerRowItem,
} from "@/components/ui/copperplate-primitives";
import { CapabilityGrid, type CapabilityItem } from "@/components/ui/capability-grid";
import { AgentWorkflowVisual } from "@/components/ui/agent-workflow-visual";
import {
  Code,
  Layers,
  Sparkles,
  Bot,
  Zap,
  Shield,
  Workflow,
  Cpu,
  Database,
  Search,
  Server,
  Activity,
  CheckCircle2,
  ArrowRight,
  GitBranch,
  FileText,
  Boxes,
  Lock,
  Compass,
  Building,
  TrendingUp,
  RefreshCw,
  Users,
  Briefcase,
  Sliders,
  Check,
} from "lucide-react";

// ==========================================
// DETAILED CAPABILITY DATASETS
// ==========================================

export const SERVICES_PRODUCT_ENGINEERING: CapabilityItem[] = [
  {
    icon: Code,
    title: "Full-Stack Web & Mobile Applications",
    description: "Production-grade interfaces built with Next.js 15, React 19, TypeScript, and React Native. Engineered for sub-100ms first paint and fluid reactivity.",
    tag: "Full-Stack",
    deliverable: "Turnkey web and iOS/Android applications with strict TypeScript type safety, automated CI/CD releases, and responsive design systems.",
    benchmark: "<100ms First Contentful Paint and 99.9% uptime across production clusters.",
  },
  {
    icon: Layers,
    title: "SaaS MVP Development",
    description: "From concept to live production software in 4 to 6 weeks. Complete with authentication, multi-tenant DB, Stripe billing, and telemetry.",
    tag: "MVP Sprint",
    deliverable: "Complete greenfield SaaS codebase, multi-tenant Postgres schemas, Stripe customer portal integration, and product analytics.",
    benchmark: "Production launch within 28 calendar days with 100% test passing rate.",
  },
  {
    icon: Bot,
    title: "Generative AI & Copilot Interfaces",
    description: "Custom conversational copilots, multimodal inputs, canvas-style interfaces, and token-streaming UI with resilient client-side state machines.",
    tag: "Generative UX",
    deliverable: "Interactive canvas workspaces and token-buffered chat widgets with optimistic UI updates and Markdown/LaTeX rendering.",
    benchmark: "<250ms time-to-first-token streaming latency on Claude 3.5 Sonnet and GPT-4o.",
  },
  {
    icon: Database,
    title: "Hybrid Vector Search & RAG Architecture",
    description: "Sub-second hybrid search combining dense vector embeddings (pgvector, Pinecone) with BM25 keyword matching and cross-encoder rerankers.",
    tag: "Vector & RAG",
    deliverable: "Deterministic document indexing pipeline with semantic chunking, metadata filters, and Cohere/BGE cross-encoder reranking.",
    benchmark: "High retrieval recall with sub-400ms end-to-end query turnaround.",
  },
  {
    icon: Server,
    title: "High-Throughput Streaming APIs",
    description: "Node.js (Fastify) and Python (FastAPI) backend services engineered for Server-Sent Events (SSE), WebSockets, and strict schema validation.",
    tag: "Backend APIs",
    deliverable: "Distributed backend microservices with automatic OpenAPI/Swagger specs, Pydantic/Zod runtime validation, and Redis Pub/Sub.",
    benchmark: "Engineered for high concurrent streaming connections with zero dropped frames.",
  },
  {
    icon: Lock,
    title: "Enterprise Auth, RBAC & Multi-Tenancy",
    description: "Robust authentication, row-level security (RLS), team permission hierarchies, audit logging, and single sign-on (SAML/OAuth).",
    tag: "Security & Auth",
    deliverable: "Enterprise SSO integration (Okta, Azure AD, Google Workspace), cryptographically signed JWT sessions, and granular RBAC policies.",
    benchmark: "Zero data leakage between tenant schemas, verified by automated penetration tests.",
  },
  {
    icon: Boxes,
    title: "Bespoke Internal Tools & Portals",
    description: "Tailored operational dashboards, admin workspaces, and data moderation consoles connecting multiple fragmented backend databases.",
    tag: "Internal Tools",
    deliverable: "Role-specific operational control panels with live database editors, audit trails, and bulk CSV export/import workflows.",
    benchmark: "Consolidates fragmented internal tools into one console, cutting manual operator turnaround.",
  },
  {
    icon: Activity,
    title: "LLM Observability & Cost Optimization",
    description: "End-to-end tracing with OpenTelemetry, prompt caching, token spend analytics, hallucination detection, and automated eval suites.",
    tag: "Observability",
    deliverable: "Helicone/Langfuse observability cluster with prompt versioning, semantic caching, and regression evaluation harnesses.",
    benchmark: "Substantial reduction in monthly LLM token expenditures through prompt optimization.",
  },
  {
    icon: GitBranch,
    title: "Cloud Infrastructure & CI/CD Pipelines",
    description: "Automated infrastructure-as-code (Terraform/Pulumi), Docker containerization, edge CDN routing, and automated zero-downtime releases.",
    tag: "DevOps & Cloud",
    deliverable: "Modular Terraform configurations for AWS/GCP, multi-stage Dockerfiles, GitHub Actions deployment workflows, and Cloudflare CDN caching.",
    benchmark: "Zero-downtime blue-green deployments with automated rollback on health check failure.",
  },
];

export const SERVICES_AGENTS_AUTOMATION: CapabilityItem[] = [
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Automating repetitive operational workflows, manual data entry, order reconciliation, and multi-step back-office procedures.",
    tag: "Automation",
    deliverable: "End-to-end process automation engine connecting operational touchpoints with retry logic and audit trails.",
    benchmark: "Cuts manual processing time from hours to seconds with audit logging.",
  },
  {
    icon: Bot,
    title: "Autonomous Multi-Agent Swarms",
    description: "Stateful agent graphs powered by LangGraph and CrewAI. Multiple specialized agents collaborate, challenge outputs, and execute multi-step plans.",
    tag: "Agent Swarms",
    deliverable: "Multi-agent coordination graph with cyclic decision loops, supervisor validation agents, and state persistence in Postgres.",
    benchmark: "Executes complex multi-step business processes with deterministic verification.",
  },
  {
    icon: FileText,
    title: "Intelligent Document Extraction",
    description: "Automated extraction and classification of complex unstructured PDFs, scanned contracts, invoices, and financial records into validated JSON schemas.",
    tag: "Doc Intelligence",
    deliverable: "Multi-modal OCR parsing pipeline combining vision models with strict Zod schema validation and confidence scoring.",
    benchmark: "High field accuracy across diverse document layouts with automated anomaly flagging.",
  },
  {
    icon: Zap,
    title: "Event-Driven Webhook Pipelines",
    description: "Instant event processing via distributed message queues (Kafka, Redis, Celery), transforming inbound webhooks into executed agent workflows.",
    tag: "Event Streams",
    deliverable: "Fault-tolerant webhook ingester with exponential backoff retries, dead-letter queues, and idempotency guarantees.",
    benchmark: "Sub-50ms ingestion latency with complete audit logging of inbound payloads.",
  },
  {
    icon: Boxes,
    title: "CRM, ERP & Database Bidirectional Sync",
    description: "Continuous bidirectional synchronization between Salesforce, HubSpot, SAP, NetSuite, and internal databases with automatic conflict resolution.",
    tag: "Enterprise Sync",
    deliverable: "Real-time bidirectional connectors with schema transformation, field mapping consoles, and transactional consistency checks.",
    benchmark: "Eliminates duplicate records and minimizes data drift across enterprise systems.",
  },
  {
    icon: Search,
    title: "Autonomous Research & Enrichment Agents",
    description: "Self-directed background agents that scrape web data, analyze competitor filings, verify contact details, and enrich leads autonomously.",
    tag: "Research Agents",
    deliverable: "Scheduled browser automation agents with headless Playwright, SERP API integrations, and structured LLM synthesizers.",
    benchmark: "Enriches thousands of prospective records with verified contacts and structured signals.",
  },
  {
    icon: Users,
    title: "Tier-1/Tier-2 Support & Escalation Agents",
    description: "Context-aware conversational agents resolving routine inquiries with automated API actions and seamless human escalation gates.",
    tag: "Support Agents",
    deliverable: "Omnichannel customer support copilot integrated into Zendesk, Intercom, and Slack with customer profile context injection.",
    benchmark: "High first-contact resolution rate with rapid automated triage.",
  },
  {
    icon: RefreshCw,
    title: "Self-Healing Recovery & Error Fallbacks",
    description: "Robust error interception that automatically switches model backends, retries flaky API calls, and flags unresolvable tasks for review.",
    tag: "Fault Tolerance",
    deliverable: "Resilience middleware with circuit breakers, model provider fallback chains (Anthropic to OpenAI to local models), and alert webhooks.",
    benchmark: "100% graceful degradation during upstream API disruptions.",
  },
  {
    icon: Sliders,
    title: "Human-in-the-Loop Review Interfaces",
    description: "Lightweight approval workspaces allowing domain specialists to inspect, approve, or correct high-value agent actions before execution.",
    tag: "Human-in-Loop",
    deliverable: "Tailored review dashboard with visual diffing, one-click authorization, and feedback loops that fine-tune agent prompts.",
    benchmark: "Significantly reduces human review overhead while retaining executive sign-off on transactions.",
  },
];

export const SERVICES_TRANSFORMATION: CapabilityItem[] = [
  {
    icon: Building,
    title: "Modern Business Websites & Portals",
    description: "High-performance digital flagships and customer web portals engineered with Next.js, TypeScript, and responsive design systems.",
    tag: "Web Experience",
    deliverable: "Turnkey responsive web experiences, dynamic CMS integrations, fast global CDN delivery, and conversion-focused architecture.",
    benchmark: "Sub-100ms First Contentful Paint with 100/100 Lighthouse performance scores.",
  },
  {
    icon: Boxes,
    title: "Interactive Dashboards & Admin Panels",
    description: "Data-dense analytics interfaces, real-time operational control consoles, and complex admin dashboards with granular permission controls.",
    tag: "Dashboards",
    deliverable: "Custom data tables, interactive charting modules, export pipelines, and responsive role-based access consoles.",
    benchmark: "Fluid 60fps rendering across heavy data tables and interactive charts.",
  },
  {
    icon: Code,
    title: "SaaS Web Applications & Portals",
    description: "Rich, highly responsive browser-based applications with complex client-side state management, keyboard shortcuts, and offline tolerance.",
    tag: "SaaS Web Apps",
    deliverable: "Complete frontend architecture, modular component systems, client state synchronization, and reactive UI patterns.",
    benchmark: "Fast, reliable web application workflows with zero layout shifts.",
  },
  {
    icon: Compass,
    title: "Practical AI Readiness & Workflow Discovery",
    description: "Auditing operational workflows and existing software to identify high-leverage automation opportunities and plan realistic AI integration.",
    tag: "AI Readiness",
    deliverable: "Actionable technical feasibility blueprint, architecture recommendations, and prioritized engineering roadmap.",
    benchmark: "Delivers an actionable implementation roadmap within 10 business days.",
  },
  {
    icon: Server,
    title: "Legacy Application Modernization",
    description: "Re-architecting legacy web applications into modern, modular architectures with clean API interfaces and AI readiness.",
    tag: "Modernization",
    deliverable: "Incremental modernization roadmap, modular REST/GraphQL endpoints, decoupled frontend components, and regression suites.",
    benchmark: "Smooth transition without service interruption or operational downtime.",
  },
  {
    icon: Search,
    title: "Enterprise Knowledge Hub & Semantic Graph",
    description: "Unifying corporate documentation and scattered information across systems into a single, queryable real-time intelligence hub.",
    tag: "Knowledge Base",
    deliverable: "Knowledge search architecture connecting internal documentation with semantic search and permission synchronization.",
    benchmark: "Reduces internal document lookup turnaround from minutes to seconds.",
  },
  {
    icon: Shield,
    title: "Enterprise Governance & Security Integration",
    description: "Ensuring adherence to data protection standards, strict access controls, zero-data-retention agreements, and robust audit trails.",
    tag: "Governance",
    deliverable: "Data governance documentation, audit logging architecture, and compliance-ready data handling pipelines.",
    benchmark: "Full alignment with statutory data protection and security standards.",
  },
  {
    icon: Briefcase,
    title: "Fractional AI CTO & Technical Advisory",
    description: "Hands-on engineering leadership guiding architecture decisions, evaluating vendor solutions, and defining technical delivery milestones.",
    tag: "Technical Advisory",
    deliverable: "Dedicated architecture reviews, system evaluations, sprint roadmapping, and pragmatic technical guidance.",
    benchmark: "Pragmatic, milestone-driven technical leadership focused on shipping working software.",
  },
  {
    icon: TrendingUp,
    title: "Continuous System Improvement & SLAs",
    description: "Ongoing platform monitoring, performance tuning, security patches, regression tests, and guaranteed operational response windows.",
    tag: "SLA & Support",
    deliverable: "Automated test suites, latency monitoring, scheduled maintenance, and dedicated engineering support windows.",
    benchmark: "Guaranteed platform availability with proactive system maintenance.",
  },
];

// Alias for semantic clarity
export const SERVICES_WEB_APPLICATIONS = SERVICES_TRANSFORMATION;

// ==========================================
// ENGAGEMENT MODELS
// ==========================================

export interface EngagementModel {
  title: string;
  badge: string;
  duration: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  ctaText: string;
}

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    title: "Project-Based Development",
    badge: "Fixed Scope",
    duration: "4 to 12 Weeks",
    description: "A clearly scoped, milestone-driven engagement with predictable costs and fixed deliverables. Ideal for defined products, SaaS MVPs, or specific workflow automations.",
    idealFor: "Founders and businesses with defined requirements who need a production-ready system engineered from zero.",
    deliverables: [
      "Technical architecture & schema blueprint",
      "Full source code ownership & Git repository",
      "Production deployment in your cloud environment",
      "Automated unit & integration test coverage",
      "Comprehensive API documentation & handoff session",
      "30-day post-launch warranty & bug-fix window",
    ],
    ctaText: "Discuss a Project",
  },
  {
    title: "Dedicated Engineering Retainer",
    badge: "Continuous Velocity",
    duration: "Monthly / Quarterly",
    description: "An embedded engineering pod acting as an extension of your internal team. High-velocity iterative building, AI integrations, and continuous scaling.",
    idealFor: "Scaling companies requiring ongoing product engineering capacity, architectural leadership, and continuous system evolution.",
    deliverables: [
      "Dedicated Senior AI Engineers & Full-Stack Builders",
      "Lead architect guidance & roadmap planning",
      "Bi-weekly sprint planning & continuous deployment",
      "Direct Slack/Discord real-time engineering channel",
      "Model integrations, evals, and prompt optimization",
      "Guaranteed priority response times & uptime monitoring",
    ],
    ctaText: "Explore Retainer",
  },
  {
    title: "4-Week MVP Sprint",
    badge: "Maximum Velocity",
    duration: "4 Weeks Flat",
    description: "A rapid product sprint that takes you from an initial concept or wireframe to a live, monetizable digital product in 28 calendar days.",
    idealFor: "Early-stage founders validating new product hypotheses who need rapid, high-quality execution without bloated agency timelines.",
    deliverables: [
      "Week 1: Architecture, database schema & wireframe lock",
      "Week 2: Core AI integrations & functional prototype",
      "Week 3: Auth, billing, dashboard & UI polish",
      "Week 4: Evals, production hardening & public launch",
      "Full production deployment with analytics instrumentation",
      "Zero vendor lock-in with clean, extensible TypeScript code",
    ],
    ctaText: "Start an MVP Sprint",
  },
];

// ==========================================
// REAL-WORLD USE CASES
// ==========================================

export interface UseCaseScenario {
  pillar: string;
  title: string;
  clientType: string;
  problem: string;
  architecture: string;
  impact: string;
}

export const USE_CASE_SCENARIOS: UseCaseScenario[] = [
  {
    pillar: "AI SaaS & Digital Product Engineering",
    title: "Generative Financial Modeling SaaS",
    clientType: "FinTech Startup",
    problem: "Financial analysts were spending 14+ hours per client manually building DCF models and parsing SEC 10-K filings.",
    architecture: "Next.js 15 + Fastify backend with pgvector hybrid search, Claude 3.5 Sonnet tool-calling engine, and streaming spreadsheet canvas UI.",
    impact: "Model generation turnaround dropped from 14 hours to 45 seconds with deterministic spreadsheet export fidelity.",
  },
  {
    pillar: "Business Process Automation & Integrations",
    title: "Procurement & Invoice Reconciliation",
    clientType: "Mid-Market B2B Distributor",
    problem: "Processing thousands of monthly multi-currency invoices across diverse ERP formats caused payment delays and manual data entry overhead.",
    architecture: "Event-driven LangGraph pipeline with OCR extraction, automated 3-way matching against purchase orders, and human-in-the-loop exception approvals.",
    impact: "Over 94% touchless reconciliation rate with exception review queue, eliminating hundreds of hours of manual entry each month.",
  },
  {
    pillar: "Web Applications & Digital Experiences",
    title: "High-Performance SaaS Portal & Analytics Dashboard",
    clientType: "Growing B2B Software Company",
    problem: "Fragmented legacy portal with slow page loads and confusing navigation caused high support volume and low self-service user adoption.",
    architecture: "Next.js App Router, Tailwind CSS design system, server-rendered analytics tables, and responsive mobile-first navigation.",
    impact: "First Contentful Paint dropped to under 120ms with a 40% increase in self-service portal engagement.",
  },
];

export function ServicesPage() {
  const [activePillarTab, setActivePillarTab] = useState<string>("product-engineering");

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const currentHash = window.location.hash.replace(/^#/, "");
      if (["product-engineering", "agents-automation", "transformation"].includes(currentHash)) {
        setActivePillarTab(currentHash);
      }
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const sectionIds = ["product-engineering", "agents-automation", "transformation"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePillarTab(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToPillar = (id: string) => {
    setActivePillarTab(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 130;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen text-[var(--ctl-text)] bg-[var(--ctl-paper)] overflow-hidden">
      {/* ============================================================
          PAGE HEADER (Plate Title)
          ============================================================ */}
      <section className="py-20 border-b border-[var(--ctl-line)] bg-[var(--ctl-paper)]">
        <div className="max-w-7xl mx-auto px-6">
          <PlateHeader
            kicker="PRACTICE &amp; CAPABILITIES"
            title="Engineered Services"
            italicWord="&amp; Execution Models"
            description="We help ambitious startups build AI-powered products and help businesses prepare for an AI-powered future through intelligent software, automation and modern engineering."
          />
        </div>
      </section>

      {/* ============================================================
          STICKY PILLAR QUICK LINKS (Subnav)
          ============================================================ */}
      <div className="sticky top-16 z-30 bg-[var(--ctl-paper)]/95 backdrop-blur-md border-b border-[var(--ctl-line)]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4 overflow-x-auto h-14">
          <div className="flex items-center gap-6 sm:gap-8 flex-nowrap">
            <button
              type="button"
              onClick={() => scrollToPillar("product-engineering")}
              className={`text-xs uppercase tracking-wider font-semibold whitespace-nowrap h-14 flex items-center border-b-2 transition-all ${
                activePillarTab === "product-engineering"
                  ? "border-[var(--ctl-ink)] text-[var(--ctl-ink)]"
                  : "border-transparent text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)]"
              }`}
            >
              01. SaaS &amp; Product Engineering
            </button>
            <button
              type="button"
              onClick={() => scrollToPillar("agents-automation")}
              className={`text-xs uppercase tracking-wider font-semibold whitespace-nowrap h-14 flex items-center border-b-2 transition-all ${
                activePillarTab === "agents-automation"
                  ? "border-[var(--ctl-ink)] text-[var(--ctl-ink)]"
                  : "border-transparent text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)]"
              }`}
            >
              02. Automation &amp; Integrations
            </button>
            <button
              type="button"
              onClick={() => scrollToPillar("transformation")}
              className={`text-xs uppercase tracking-wider font-semibold whitespace-nowrap h-14 flex items-center border-b-2 transition-all ${
                activePillarTab === "transformation"
                  ? "border-[var(--ctl-ink)] text-[var(--ctl-ink)]"
                  : "border-transparent text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)]"
              }`}
            >
              03. Web Apps &amp; Experiences
            </button>
          </div>
          <Link href="/contact" className="hidden sm:inline-flex">
            <CopperplateButton variant="deep" className="h-9 text-xs px-4">
              <span>Engage Studio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </CopperplateButton>
          </Link>
        </div>
      </div>

      {/* ============================================================
          SECTION 1: AI SAAS & DIGITAL PRODUCT ENGINEERING
          ============================================================ */}
      <section id="product-engineering" className="py-24 border-b border-[var(--ctl-line)]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <PlateHeader
            kicker="PILLAR · 01"
            title="AI SaaS &amp; Digital Product Engineering"
            italicWord="From concept to production."
            description="We turn product ideas into production-ready digital platforms. From architecture and engineering to deployment, we help founders move from concept to a working product."
          />
          <CapabilityGrid
            capabilities={SERVICES_PRODUCT_ENGINEERING}
            items={SERVICES_PRODUCT_ENGINEERING}
            columns={3}
          />
        </div>
      </section>

      {/* ============================================================
          SECTION 2: BUSINESS PROCESS AUTOMATION & INTEGRATIONS
          ============================================================ */}
      <section id="agents-automation" className="py-24 border-b border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <PlateHeader
            kicker="PILLAR · 02"
            title="Business Process Automation &amp; Integrations"
            italicWord="Intelligent operational workflows."
            description="We connect systems, automate repetitive operations and engineer intelligent workflows that help businesses operate more efficiently."
          />
          <div className="py-6">
            <AgentWorkflowVisual />
          </div>
          <CapabilityGrid
            capabilities={SERVICES_AGENTS_AUTOMATION}
            items={SERVICES_AGENTS_AUTOMATION}
            columns={3}
          />
        </div>
      </section>

      {/* ============================================================
          SECTION 3: WEB APPLICATIONS & DIGITAL EXPERIENCES
          ============================================================ */}
      <section id="transformation" className="py-24 border-b border-[var(--ctl-line)]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <PlateHeader
            kicker="PILLAR · 03"
            title="Web Applications &amp; Digital Experiences"
            italicWord="Modern, responsive interfaces."
            description="We design and engineer modern digital experiences that make complex products intuitive, accessible and performant across devices."
          />
          <CapabilityGrid
            capabilities={SERVICES_TRANSFORMATION}
            items={SERVICES_TRANSFORMATION}
            columns={3}
          />
        </div>
      </section>

      {/* ============================================================
          ENGAGEMENT MODELS SECTION
          ============================================================ */}
      <section className="py-24 border-b border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <PlateHeader
            kicker="COMMERCIAL STRUCTURES"
            title="Engagement Models"
            italicWord="Fixed in scope, transparent in terms."
            description="Choose the delivery model that best matches your runway, timeline, and organizational readiness."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ENGAGEMENT_MODELS.map((model) => (
              <EtchedCard key={model.title} className="flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[var(--ctl-line)] pb-3">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--ctl-ink)]">
                      {model.badge}
                    </span>
                    <span className="text-xs font-serif text-[var(--ctl-soft)]">
                      {model.duration}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[var(--ctl-text)]">
                    {model.title}
                  </h3>
                  <p className="text-sm text-[var(--ctl-soft)] leading-relaxed">
                    {model.description}
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block mb-2">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-2 text-sm text-[var(--ctl-text)]">
                      {model.deliverables.map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[var(--ctl-ink)] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pt-4 border-t border-[var(--ctl-line)]">
                  <Link href="/contact" className="w-full block">
                    <CopperplateButton variant="deep" className="w-full">
                      <span>{model.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </CopperplateButton>
                  </Link>
                </div>
              </EtchedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          REAL-WORLD USE CASE SCENARIOS
          ============================================================ */}
      <section className="py-24 border-b border-[var(--ctl-line)]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <PlateHeader
            kicker="PROVEN IMPACT"
            title="Real-World Engagements"
            italicWord="Architectures &amp; business outcomes."
            description="Explore how our engineering teams deployed mission-critical AI systems that delivered measurable return on investment."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {USE_CASE_SCENARIOS.map((scen) => (
              <EtchedCard key={scen.title} className="space-y-6">
                <div className="border-b border-[var(--ctl-line)] pb-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--ctl-ink)]">
                    {scen.pillar}
                  </span>
                  <span className="text-xs text-[var(--ctl-soft)]">{scen.clientType}</span>
                </div>
                <h3 className="font-serif text-2xl text-[var(--ctl-text)]">
                  {scen.title}
                </h3>
                <div className="space-y-3 text-sm text-[var(--ctl-soft)]">
                  <div>
                    <strong className="text-[var(--ctl-ink)] font-semibold block text-xs uppercase tracking-wider mb-1">
                      The Challenge:
                    </strong>
                    <p>{scen.problem}</p>
                  </div>
                  <div>
                    <strong className="text-[var(--ctl-ink)] font-semibold block text-xs uppercase tracking-wider mb-1">
                      System Architecture:
                    </strong>
                    <p>{scen.architecture}</p>
                  </div>
                  <div>
                    <strong className="text-[var(--ctl-ink)] font-semibold block text-xs uppercase tracking-wider mb-1">
                      Measurable Impact:
                    </strong>
                    <p className="text-[var(--ctl-text)] font-medium">{scen.impact}</p>
                  </div>
                </div>
              </EtchedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <section className="py-24 bg-[var(--ctl-paper)]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <PlateKicker className="justify-center">ENGAGEMENT SPECIFICATION</PlateKicker>
          <h2 className="font-serif text-4xl sm:text-5xl text-[var(--ctl-text)] leading-tight">
            Ready to scope your project?{" "}
            <span className="italic text-[var(--ctl-ink)] block font-normal mt-1">
              Let&apos;s build together.
            </span>
          </h2>
          <p className="text-[16px] text-[var(--ctl-soft)] max-w-2xl mx-auto leading-relaxed">
            Tell us about your technical specifications and timelines. We will prepare an
            architectural breakdown and preliminary estimate.
          </p>
          <div className="pt-4 flex justify-center">
            <Link href="/contact">
              <CopperplateButton variant="deep" className="h-12 px-8 text-sm">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </CopperplateButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
