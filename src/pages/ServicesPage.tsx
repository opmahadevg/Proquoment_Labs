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
    icon: Bot,
    title: "Generative AI & Copilot Interfaces",
    description: "Custom conversational copilots, multimodal inputs, canvas-style interfaces, and token-streaming UI with resilient client-side state machines.",
    tag: "Generative UX",
    deliverable: "Interactive canvas workspaces and token-buffered chat widgets with optimistic UI updates and Markdown/LaTeX rendering.",
    benchmark: "<250ms time-to-first-token streaming latency on Claude 3.5 Sonnet and GPT-4o.",
  },
  {
    icon: Layers,
    title: "SaaS MVP Sprint Acceleration",
    description: "From concept to live production software in 4 to 6 weeks. Complete with authentication, Stripe billing, telemetry, and scalable DB schemas.",
    tag: "MVP Sprint",
    deliverable: "Complete greenfield SaaS codebase, multi-tenant Postgres schemas, Stripe customer portal integration, and PostHog product analytics.",
    benchmark: "Production launch within 28 calendar days with 100% test passing rate.",
  },
  {
    icon: Database,
    title: "Hybrid Vector Search & RAG Architecture",
    description: "Sub-second hybrid search combining dense vector embeddings (pgvector, Pinecone) with BM25 keyword matching and cross-encoder rerankers.",
    tag: "Vector & RAG",
    deliverable: "Deterministic document indexing pipeline with semantic chunking, metadata filters, and Cohere/BGE cross-encoder reranking.",
    benchmark: "98.4% retrieval recall with sub-400ms end-to-end query turnaround.",
  },
  {
    icon: Server,
    title: "High-Throughput Streaming APIs",
    description: "Node.js (Fastify) and Python (FastAPI) backend services engineered for Server-Sent Events (SSE), WebSockets, and strict schema validation.",
    tag: "Backend APIs",
    deliverable: "Distributed backend microservices with automatic OpenAPI/Swagger specs, Pydantic/Zod runtime validation, and Redis Pub/Sub.",
    benchmark: "Handles 12,000 concurrent streaming connections with zero dropped frames.",
  },
  {
    icon: Lock,
    title: "Enterprise Auth, RBAC & Multi-Tenancy",
    description: "Bank-grade authentication, row-level security (RLS), team permission hierarchies, audit logging, and single sign-on (SAML/OAuth).",
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
    benchmark: "Consolidates 6 fragmented internal tools into one console, saving 18 hours weekly per operator.",
  },
  {
    icon: Activity,
    title: "LLM Observability & Cost Optimization",
    description: "End-to-end tracing with OpenTelemetry, prompt caching, token spend analytics, hallucination detection, and automated eval suites.",
    tag: "Observability",
    deliverable: "Helicone/Langfuse observability cluster with prompt versioning, semantic caching, and regression evaluation harnesses.",
    benchmark: "42% average reduction in monthly LLM token expenditures through prompt optimization.",
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
    title: "Autonomous Multi-Agent Swarms",
    description: "Stateful agent graphs powered by LangGraph and CrewAI. Multiple specialized agents collaborate, challenge outputs, and execute multi-step plans.",
    tag: "Agent Swarms",
    deliverable: "Multi-agent coordination graph with cyclic decision loops, supervisor validation agents, and state persistence in Postgres.",
    benchmark: "Executes 50+ step business processes with 99.4% task completion accuracy.",
  },
  {
    icon: FileText,
    title: "Intelligent Document Extraction",
    description: "Automated extraction and classification of complex unstructured PDFs, scanned contracts, invoices, and financial records into validated JSON schemas.",
    tag: "Doc Intelligence",
    deliverable: "Multi-modal OCR parsing pipeline combining vision models with strict Zod schema validation and confidence scoring.",
    benchmark: "99.2% field accuracy across 15+ invoice layouts with automated anomaly flagging.",
  },
  {
    icon: Zap,
    title: "Event-Driven Webhook Pipelines",
    description: "Instant event processing via distributed message queues (Kafka, Redis, Celery), transforming inbound webhooks into executed agent workflows.",
    tag: "Event Streams",
    deliverable: "Fault-tolerant webhook ingester with exponential backoff retries, dead-letter queues, and idempotency guarantees.",
    benchmark: "Sub-50ms ingestion latency with 100% audit logging of inbound payloads.",
  },
  {
    icon: Boxes,
    title: "CRM, ERP & Database Bidirectional Sync",
    description: "Continuous bidirectional synchronization between Salesforce, HubSpot, SAP, NetSuite, and internal databases with automatic conflict resolution.",
    tag: "Enterprise Sync",
    deliverable: "Real-time bidirectional connectors with schema transformation, field mapping consoles, and transactional consistency checks.",
    benchmark: "Eliminates duplicate records and cuts data drift between ERP and CRM to 0%.",
  },
  {
    icon: Search,
    title: "Autonomous Research & Enrichment Agents",
    description: "Self-directed background agents that scrape web data, analyze competitor filings, verify contact details, and enrich leads autonomously.",
    tag: "Research Agents",
    deliverable: "Scheduled browser automation agents with headless Playwright, SERP API integrations, and structured LLM synthesizers.",
    benchmark: "Enriches 5,000+ prospective accounts daily with verified executive contacts and recent filing signals.",
  },
  {
    icon: Users,
    title: "Tier-1/Tier-2 Support & Escalation Agents",
    description: "Context-aware conversational agents resolving 60-80% of routine inquiries with automated API actions and seamless human escalation gates.",
    tag: "Support Agents",
    deliverable: "Omnichannel customer support copilot integrated into Zendesk, Intercom, and Slack with customer profile context injection.",
    benchmark: "74% first-contact resolution rate with average customer response time under 15 seconds.",
  },
  {
    icon: RefreshCw,
    title: "Self-Healing Recovery & Error Fallbacks",
    description: "Robust error interception that automatically switches model backends, retries flaky API calls, and flags unresolvable tasks for review.",
    tag: "Fault Tolerance",
    deliverable: "Resilience middleware with circuit breakers, model provider fallback chains (Anthropic to OpenAI to local models), and alert webhooks.",
    benchmark: "100% graceful degradation during major cloud provider outages.",
  },
  {
    icon: Shield,
    title: "Security, PII Masking & Prompt Firewalls",
    description: "Real-time sanitization of sensitive personal data, regex/embedding-based prompt-injection filters, and strict output boundaries.",
    tag: "Guardrails",
    deliverable: "In-line security proxy masking Aadhaar, PAN, SSN, and credit card numbers prior to LLM submission, compliant with DPDP.",
    benchmark: "Zero PII leaks across 10M+ analyzed tokens with <8ms interception latency.",
  },
  {
    icon: Sliders,
    title: "Human-in-the-Loop Review Interfaces",
    description: "Lightweight approval workspaces allowing domain specialists to inspect, approve, or correct high-value agent actions before execution.",
    tag: "Human-in-Loop",
    deliverable: "Tailored review dashboard with visual diffing, one-click authorization, and feedback loops that fine-tune agent prompts.",
    benchmark: "Reduces human review overhead by 82% while maintaining 100% executive sign-off on transactions.",
  },
];

export const SERVICES_TRANSFORMATION: CapabilityItem[] = [
  {
    icon: Compass,
    title: "AI Readiness & Operational Audit",
    description: "Deep dive into your organization's data architecture, repetitive labor costs, and workflow bottlenecks to identify the highest ROI AI opportunities.",
    tag: "Audit & Strategy",
    deliverable: "Comprehensive 40-page technical audit report, prioritized feasibility matrix, ROI projections, and 12-month engineering roadmap.",
    benchmark: "Identifies minimum 3.5x annual operational ROI opportunities within 10 business days.",
  },
  {
    icon: Briefcase,
    title: "Fractional AI CTO & Technical Advisory",
    description: "Executive-level engineering leadership guiding architecture decisions, evaluating vendor solutions, and defining technical AI milestones.",
    tag: "Fractional CTO",
    deliverable: "Dedicated weekly architecture reviews, vendor procurement assessments, sprint roadmapping, and board-level technology briefings.",
    benchmark: "Aligns engineering execution with investor milestones and saves $180k+ compared to full-time executive hiring.",
  },
  {
    icon: Server,
    title: "Private Cloud AI Infrastructure Build",
    description: "Secure deployment of self-hosted open models (Llama 3, Mistral) within your isolated VPC or on-premise clusters for complete data sovereignty.",
    tag: "Private AI",
    deliverable: "vLLM and Ollama inference clusters on private AWS/GCP GPU instances with autoscaling, private API gateways, and TLS encryption.",
    benchmark: "100% on-premise data sovereignty with zero external API dependencies.",
  },
  {
    icon: Database,
    title: "Domain-Specific Data Curation & Fine-Tuning",
    description: "Extracting, structuring, and synthetic-augmenting your company's proprietary data to fine-tune specialized models tailored to your industry.",
    tag: "Fine-Tuning",
    deliverable: "Curated dataset pipelines, LoRA/QLoRA parameter-efficient fine-tuning runs, and automated evaluation benchmark comparisons.",
    benchmark: "Achieves domain accuracy matching GPT-4o on proprietary jargon at 1/10th the inference cost.",
  },
  {
    icon: Building,
    title: "Legacy Monolith Modernization",
    description: "Strangler pattern re-architecting of aging legacy monoliths into modern micro-services and event-driven architectures with AI integrations.",
    tag: "Modernization",
    deliverable: "Incremental strangler proxy layer, modular REST/gRPC microservices, decoupled relational databases, and automated regression suites.",
    benchmark: "Eliminates legacy tech debt without system downtime or commercial operational disruption.",
  },
  {
    icon: Shield,
    title: "Enterprise Governance & Regulatory Compliance",
    description: "Comprehensive adherence to India's DPDP Act, GDPR, and enterprise security policies. Strict zero-data-retention model agreements.",
    tag: "Governance",
    deliverable: "Data lineage maps, SOC2/ISO27001 AI governance documentation, zero-data-retention vendor agreements, and audit logging.",
    benchmark: "Full compliance verification with statutory Indian IT and DPDP Act provisions.",
  },
  {
    icon: Search,
    title: "Enterprise Knowledge Hub & Semantic Graph",
    description: "Unifying corporate knowledge across Slack, Google Drive, Notion, and Confluence into a single queryable real-time intelligence hub.",
    tag: "Knowledge Base",
    deliverable: "Knowledge graph architecture connecting enterprise documents with entity extraction, automated indexing, and permission synchronization.",
    benchmark: "Reduces internal employee knowledge search time from 45 minutes to under 8 seconds.",
  },
  {
    icon: Users,
    title: "Co-Engineering & Internal Team Upskilling",
    description: "Embedded pair-programming sprints, architectural workshops, and hands-on knowledge transfer so your internal team can operate systems confidently.",
    tag: "Upskilling",
    deliverable: "Structured live coding bootcamps, internal documentation wikis, architecture runbooks, and graduated operational handoffs.",
    benchmark: "Enables internal engineering teams to take full operational ownership within 60 days.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Evaluation & SLA Maintenance",
    description: "Long-term monitoring for model drift, automated synthetic benchmark regressions, security patches, and 99.9% uptime operational SLAs.",
    tag: "SLA & Support",
    deliverable: "Automated weekly regression testing suites, model latency alerts, dependency vulnerability patching, and 4-hour response SLAs.",
    benchmark: "Guaranteed 99.9% platform availability with proactive drift mitigation before user impact.",
  },
];

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
    title: "Project-Based Engagement",
    badge: "Fixed Scope",
    duration: "4 to 12 Weeks",
    description: "A clearly scoped, milestone-driven engagement with predictable costs and fixed deliverables. Ideal for defined products or specific workflow automations.",
    idealFor: "Startups or teams with defined specs who need a turnkey, production-ready system engineered from zero.",
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
    description: "An embedded, dedicated AI engineering pod acting as an extension of your internal team. High-velocity iterative building and continuous scaling.",
    idealFor: "Scaling companies requiring ongoing AI engineering capacity, architectural leadership, and continuous system evolution.",
    deliverables: [
      "Dedicated Senior AI Engineers & Full-Stack Builders",
      "Fractional AI CTO strategic guidance & planning",
      "Bi-weekly sprint planning & continuous deployment",
      "Direct Slack/Discord real-time engineering channel",
      "Model fine-tuning, evals, and prompt optimization",
      "Guaranteed priority response times & uptime monitoring",
    ],
    ctaText: "Explore Retainer",
  },
  {
    title: "4-Week MVP Sprint",
    badge: "Maximum Velocity",
    duration: "4 Weeks Flat",
    description: "A battle-tested rapid innovation sprint that takes you from an initial concept or wireframe to a live, monetizable AI product in 28 calendar days.",
    idealFor: "Founders testing new AI product hypotheses who cannot afford months of bloated agency development.",
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
    pillar: "Product Engineering",
    title: "Generative Financial Modeling SaaS",
    clientType: "FinTech Startup",
    problem: "Financial analysts were spending 14+ hours per client manually building DCF models and parsing SEC 10-K filings.",
    architecture: "Next.js 15 + Fastify backend with pgvector hybrid search, Claude 3.5 Sonnet tool-calling engine, and streaming spreadsheet canvas UI.",
    impact: "Model generation dropped from 14 hours to 45 seconds. The startup raised a $2.5M Seed round on the back of the MVP.",
  },
  {
    pillar: "Agents & Automation",
    title: "Autonomous Procurement & Invoice Reconciliation",
    clientType: "Mid-Market B2B Distributor",
    problem: "Processing 8,000 monthly multi-currency invoices across 12 ERP formats caused payment delays and costly manual data entry errors.",
    architecture: "Event-driven LangGraph agent swarm with OCR extraction, automated 3-way matching against purchase orders, and human-in-the-loop exception approvals.",
    impact: "94.2% of invoices processed touchless. Error rate dropped from 6.8% to 0.05%, saving $24,000 monthly in labor costs.",
  },
  {
    pillar: "Transformation",
    title: "Enterprise Knowledge Brain & Fractional CTO",
    clientType: "Global Logistics Advisory",
    problem: "Critical operational knowledge was trapped in 40,000 siloed PDFs, Slack channels, and SharePoint libraries, paralyzing junior consultants.",
    architecture: "Private VPC deployment of custom-embedded Llama 3 with real-time Slackbot integration, strict citation tracking, and automated doc ingestion.",
    impact: "Information retrieval time reduced by 82%. Team onboarded new consultants in 2 weeks instead of 3 months.",
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
            description="We partner with founders and enterprise leaders to design, build, and deploy production-grade AI systems with master craftsman precision and deterministic reliability."
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
              01. Product Engineering
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
              02. Agents &amp; Automation
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
              03. Transformation
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
          SECTION 1: AI PRODUCT ENGINEERING
          ============================================================ */}
      <section id="product-engineering" className="py-24 border-b border-[var(--ctl-line)]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <PlateHeader
            kicker="PRACTICE · 01"
            title="AI Product Engineering"
            italicWord="From concept to scale."
            description="We build full-stack web and mobile applications with bespoke generative AI and conversational UX, backed by resilient streaming APIs and sub-second retrieval pipelines."
          />
          <CapabilityGrid
            capabilities={SERVICES_PRODUCT_ENGINEERING}
            items={SERVICES_PRODUCT_ENGINEERING}
            columns={3}
          />
        </div>
      </section>

      {/* ============================================================
          SECTION 2: AI AGENTS & AUTOMATION
          ============================================================ */}
      <section id="agents-automation" className="py-24 border-b border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <PlateHeader
            kicker="PRACTICE · 02"
            title="AI Agents &amp; Automation"
            italicWord="Deterministic execution."
            description="Autonomous multi-agent swarms and event-driven pipelines designed to eliminate back-office friction, extract structured intelligence, and synchronize enterprise systems."
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
          SECTION 3: AI TRANSFORMATION
          ============================================================ */}
      <section id="transformation" className="py-24 border-b border-[var(--ctl-line)]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <PlateHeader
            kicker="PRACTICE · 03"
            title="AI Transformation"
            italicWord="Strategic advisory &amp; upskilling."
            description="Long-term partnership with your leadership team: technical audits, private cloud infrastructure builds, enterprise compliance, and team co-engineering."
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
