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
// PILLAR 01: AI SAAS & DIGITAL PRODUCT ENGINEERING
// ==========================================

export const SERVICES_PRODUCT_ENGINEERING: CapabilityItem[] = [
  {
    icon: Layers,
    title: "SaaS MVP & Product Development",
    description: "Transforming product concepts into working software platforms with production-ready architectures, secure authentication, multi-tenant databases, and billing workflows.",
    tag: "MVP & SaaS",
    deliverable: "Turnkey software codebase, relational database schemas, payment integration, and foundational application infrastructure.",
    benchmark: "Rapid concept-to-launch cycle with production code quality and zero vendor lock-in.",
  },
  {
    icon: Bot,
    title: "AI-Powered Application Development",
    description: "Engineering bespoke web applications with native artificial intelligence capabilities, model routing, prompt pipelines, and structured output parsing.",
    tag: "AI Applications",
    deliverable: "Production-ready AI applications integrating frontier language models, visual understanding, and domain-specific reasoning.",
    benchmark: "Reliable structured model outputs with graceful fallbacks and cost-optimized token usage.",
  },
  {
    icon: Sparkles,
    title: "Custom AI Features, Copilots & Assistants",
    description: "Integrating conversational copilots, multimodal inputs, canvas-style interfaces, and token-streaming UI directly into new or existing software applications.",
    tag: "Copilots & UX",
    deliverable: "Embedded AI assistants with context retrieval, streaming responses, user feedback loops, and intuitive control mechanisms.",
    benchmark: "Fluid interactive user experience with low-latency streaming and clear human oversight.",
  },
  {
    icon: Code,
    title: "Full-Stack Web & Mobile Applications",
    description: "End-to-end frontend and backend engineering using modern TypeScript, React, Next.js, and mobile frameworks with responsive design systems.",
    tag: "Full-Stack",
    deliverable: "Clean, maintainable application architecture with strict type safety, modular component libraries, and automated testing suites.",
    benchmark: "Fast load times, responsive behavior across devices, and clear maintainable code standards.",
  },
  {
    icon: Server,
    title: "Product Architecture & Backend Engineering",
    description: "Scalable backend services, RESTful and streaming APIs, event-driven message architectures, and secure database designs engineered for resilience.",
    tag: "Backend & APIs",
    deliverable: "Robust backend services with OpenAPI specifications, schema validation, database migrations, and caching layers.",
    benchmark: "Stable throughput under production load with comprehensive audit logging and predictable response times.",
  },
  {
    icon: Database,
    title: "AI Knowledge Systems, RAG & Intelligent Search",
    description: "Unifying corporate documentation and knowledge bases into searchable semantic indices using hybrid vector search, keyword matching, and reranking.",
    tag: "Knowledge & RAG",
    deliverable: "Complete document indexing pipelines, hybrid retrieval systems, and conversational query interfaces with source citations.",
    benchmark: "Accurate, grounded retrieval from internal company data with strict privacy controls.",
  },
  {
    icon: RefreshCw,
    title: "Legacy Application Modernization",
    description: "Re-architecting existing monolithic or aging software applications into modern, modular web architectures with clean APIs and AI integration readiness.",
    tag: "Modernization",
    deliverable: "Phased architectural migration plan, decoupled frontend components, modern API endpoints, and regression test suites.",
    benchmark: "Systematic modernization that preserves existing business logic without operational interruption.",
  },
  {
    icon: Lock,
    title: "Product Scaling, Security & Infrastructure",
    description: "Role-based access control, encryption, secure cloud infrastructure, CI/CD automated deployments, and continuous system observability.",
    tag: "Infrastructure & Security",
    deliverable: "Automated cloud deployment pipelines, environment isolation, role-based permissions, and OpenTelemetry monitoring.",
    benchmark: "High operational reliability, robust data boundaries, and smooth zero-downtime releases.",
  },
];

// ==========================================
// PILLAR 02: BUSINESS PROCESS AUTOMATION & INTEGRATIONS
// ==========================================

export const SERVICES_AGENTS_AUTOMATION: CapabilityItem[] = [
  {
    icon: Compass,
    title: "AI Readiness & Opportunity Assessment",
    description: "Auditing operational workflows, software systems, and data infrastructure to identify high-impact automation opportunities and engineer a pragmatic implementation roadmap.",
    tag: "AI Readiness",
    deliverable: "Actionable technical feasibility roadmap, system integration blueprint, and initial proof-of-concept specifications leading directly to technical delivery.",
    benchmark: "Clear, practical engineering roadmap that transitions seamlessly from scoping to live implementation.",
  },
  {
    icon: Workflow,
    title: "Business Workflow Automation",
    description: "Engineering automated operational pipelines that eliminate repetitive back-office tasks, route approvals, and orchestrate complex multi-step procedures.",
    tag: "Workflow Automation",
    deliverable: "Automated business workflows connecting operational touchpoints with retry logic, error handling, and complete audit trails.",
    benchmark: "Substantial reduction in manual coordination overhead and operational bottlenecks.",
  },
  {
    icon: Bot,
    title: "Custom AI Agents & Multi-Agent Systems",
    description: "Deploying stateful autonomous agent graphs where specialized software agents collaborate, validate intermediate outputs, and execute multi-step operational tasks.",
    tag: "AI Agents",
    deliverable: "Agent orchestration graphs with supervisor review nodes, state persistence, structured tool-calling, and custom use case execution.",
    benchmark: "Reliable execution of multi-step business procedures with deterministic validation.",
  },
  {
    icon: FileText,
    title: "Intelligent Document Processing",
    description: "Extracting, structuring, and verifying complex data from invoices, contracts, statements, and unstructured documents into validated schemas.",
    tag: "Doc Intelligence",
    deliverable: "Automated document ingestion pipeline combining vision parsing, schema validation, and exception-flagging workflows.",
    benchmark: "Accelerated document turnaround with automated exception routing for human review.",
  },
  {
    icon: Boxes,
    title: "CRM, ERP & Business Software Integrations",
    description: "Connecting disconnected business applications including Salesforce, HubSpot, SAP, NetSuite, and internal databases into cohesive operational systems.",
    tag: "System Integration",
    deliverable: "Reliable bidirectional data connectors, field mapping consoles, schema transformations, and transactional consistency checks.",
    benchmark: "Consistent data flow across commercial and operational software platforms with zero manual re-entry.",
  },
  {
    icon: Users,
    title: "AI Customer Support & Sales Assistants",
    description: "Context-aware conversational assistants resolving routine customer inquiries, qualifying inbound leads, and escalating complex issues to human teams.",
    tag: "Assistants & Support",
    deliverable: "Omnichannel customer support copilot integrated into helpdesks and chat systems with customer profile context injection.",
    benchmark: "Faster response times on routine inquiries with seamless escalation gates for human representatives.",
  },
  {
    icon: Zap,
    title: "Data Synchronization & API Integrations",
    description: "Building event-driven pipelines, webhook listeners, and third-party API integrations that keep databases and business applications continuously synchronized.",
    tag: "Data Sync & APIs",
    deliverable: "Resilient data ingestion services with exponential backoff retries, dead-letter queues, and idempotency guarantees.",
    benchmark: "Near-real-time synchronization between disparate systems with comprehensive error alerting.",
  },
  {
    icon: Sliders,
    title: "Human-in-the-Loop Automation Systems",
    description: "Engineering intuitive approval workspaces and review queues allowing domain experts to inspect, approve, or adjust automated actions before final execution.",
    tag: "Human-in-Loop",
    deliverable: "Tailored review interfaces with visual comparisons, one-click approvals, audit trails, and feedback capture.",
    benchmark: "Maintains full human authority over critical business decisions while automating routine execution.",
  },
];

// ==========================================
// PILLAR 03: WEBSITES & DIGITAL EXPERIENCES
// ==========================================

export const SERVICES_TRANSFORMATION: CapabilityItem[] = [
  {
    icon: Building,
    title: "Business Websites & Digital Presence",
    description: "High-performance company websites and digital flagships engineered with Next.js, modern typography, responsive design, and fast global delivery.",
    tag: "Websites",
    deliverable: "Turnkey responsive website, dynamic CMS integrations, search optimization, and craft-driven visual identity.",
    benchmark: "Clean visual presentation that represents your business with speed, craft, and engineering rigor.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Focused Landing Pages",
    description: "High-impact landing pages engineered for product launches, marketing campaigns, and venture-backed startup announcements.",
    tag: "Landing Pages",
    deliverable: "Polished landing pages with responsive layouts, persuasive copywriting integration, fast asset delivery, and analytics tracking.",
    benchmark: "Optimized user experience designed to turn visitors into active qualified inquiries and users.",
  },
  {
    icon: Code,
    title: "Custom Web Applications & Portals",
    description: "Interactive web applications, customer account hubs, and custom digital portals engineered with responsive frontend frameworks and secure APIs.",
    tag: "Web Applications",
    deliverable: "Modular frontend architecture, client-side state management, responsive UI patterns, and secure authenticated endpoints.",
    benchmark: "Smooth interactive performance, intuitive navigation, and reliable cross-browser behavior.",
  },
  {
    icon: Boxes,
    title: "Interactive Dashboards & Admin Panels",
    description: "Data-dense analytics interfaces, operational control panels, and custom administrative workspaces tailored to your business metrics.",
    tag: "Dashboards",
    deliverable: "Custom data tables, interactive charting modules, CSV/PDF export pipelines, and role-based access consoles.",
    benchmark: "Clear visibility into critical metrics with fast rendering across large datasets.",
  },
  {
    icon: Users,
    title: "Customer & Partner Portals",
    description: "Secure self-service portals for customers, partners, and vendors to access resources, submit documentation, and track project status.",
    tag: "Client Portals",
    deliverable: "Dedicated external portal with role-based authentication, document upload hubs, and real-time activity views.",
    benchmark: "Streamlined external communication and reduced administrative back-and-forth.",
  },
  {
    icon: Compass,
    title: "UI/UX & Interface Engineering",
    description: "User interface design and frontend implementation creating design systems, interactive component libraries, and accessible web experiences.",
    tag: "UI/UX Design",
    deliverable: "Comprehensive design tokens, reusable component systems, responsive layouts, and accessibility compliance.",
    benchmark: "Cohesive, polished user experience that makes complex functionality feel straightforward.",
  },
  {
    icon: Zap,
    title: "Website Modernization & Performance Optimization",
    description: "Upgrading existing websites and digital interfaces to improve page speed, mobile responsiveness, accessibility standards, and SEO rankings.",
    tag: "Optimization",
    deliverable: "Asset optimization, code-splitting audits, responsive refactoring, modern caching setup, and Core Web Vitals improvements.",
    benchmark: "Noticeably faster load times, improved search discoverability, and enhanced user retention.",
  },
];

// Alias for semantic clarity
export const SERVICES_WEB_APPLICATIONS = SERVICES_TRANSFORMATION;

// ==========================================
// COMMERCIAL ENGAGEMENT MODELS
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
    title: "Product & System Development",
    badge: "Fixed Scope",
    duration: "4 to 12 Weeks",
    description: "A clearly scoped, milestone-driven engagement with predictable costs and defined deliverables. Ideal for new products, SaaS platforms, custom web applications, or business automation systems.",
    idealFor: "Founders and businesses with defined requirements who need a production-ready system engineered from concept to launch.",
    deliverables: [
      "Technical architecture and system specification",
      "Full source code ownership and Git repository transfer",
      "Production cloud deployment in your environment",
      "Automated unit and integration test coverage",
      "API documentation and comprehensive handoff walkthrough",
      "Post-launch warranty and bug-fix support window",
    ],
    ctaText: "Discuss a Project",
  },
  {
    title: "MVP Development Sprint",
    badge: "Rapid Execution",
    duration: "4 to 6 Weeks",
    description: "A structured, rapid development sprint designed to move from concept, wireframes, and requirements to a working, testable product without bloated timelines.",
    idealFor: "Early-stage founders validating new product hypotheses who need working software delivered quickly with solid engineering foundations.",
    deliverables: [
      "Architecture, database schema, and scope definition",
      "Core product workflows and functional prototype",
      "User authentication, billing, and dashboard interface",
      "Production deployment with monitoring and telemetry",
      "100% intellectual property and code ownership",
      "Clean, extensible TypeScript codebase ready to scale",
    ],
    ctaText: "Start an MVP Sprint",
  },
  {
    title: "Ongoing Engineering Partnership",
    badge: "Flexible Capacity",
    duration: "Monthly / Quarterly Retainer",
    description: "An ongoing technical partnership providing agile engineering capacity for feature development, system integrations, and continuous improvements. Founder-led and AI-enabled, bringing in specialist capabilities as required.",
    idealFor: "Growing businesses and startups requiring continuous engineering support, architectural guidance, and ongoing system evolution without permanent agency bloat.",
    deliverables: [
      "Continuous feature engineering and system development",
      "Technical architecture reviews and delivery planning",
      "Bi-weekly sprint planning and regular deployment cycles",
      "Direct asynchronous and scheduled engineering coordination",
      "AI integrations, prompt refinement, and system tuning",
      "System monitoring, performance updates, and ongoing improvements",
    ],
    ctaText: "Explore Partnership",
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
    title: "Financial Modeling & Analysis Platform",
    clientType: "FinTech Workflow",
    problem: "Analysts spent hours manually extracting data from regulatory filings and consolidating metrics into complex spreadsheets.",
    architecture: "Next.js web application with structured hybrid search, automated model extraction pipelines, and interactive spreadsheet interface.",
    impact: "Delivered automated analysis and extraction pipelines that accelerated model generation from hours to seconds with structured spreadsheet export.",
  },
  {
    pillar: "Business Process Automation & Integrations",
    title: "Automated Invoice & Document Reconciliation",
    clientType: "B2B Operations",
    problem: "Manual invoice entry across varied supplier formats created processing backlogs, entry mistakes, and delayed payment cycles.",
    architecture: "Event-driven document extraction pipeline with schema validation, automated matching against purchase records, and human-in-the-loop review queues.",
    impact: "Automated routine document processing and reconciliation, routing only exceptions to operators and dramatically reducing manual data entry.",
  },
  {
    pillar: "Websites & Digital Experiences",
    title: "Customer Operations Portal & Analytics Dashboard",
    clientType: "Growing B2B Software",
    problem: "Legacy interfaces with fragmented navigation created high customer support overhead and low self-service adoption.",
    architecture: "Modern Next.js application, responsive design system, server-rendered data tables, and intuitive role-based navigation.",
    impact: "Fast, responsive web experience with unified account controls that simplified self-service workflows for customers and administrators.",
  },
];

export function ServicesPage() {
  const [activePillarTab, setActivePillarTab] = useState<string>("product-engineering");

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const currentHash = window.location.hash.replace(/^#/, "");
      if (["product-engineering", "agents-automation", "transformation", "web-applications"].includes(currentHash)) {
        setActivePillarTab(currentHash === "web-applications" ? "transformation" : currentHash);
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
            description="We help ambitious startups build AI-powered products and help businesses prepare for an AI-powered future through intelligent software, automation, and modern engineering."
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
              01. AI SaaS &amp; Product Engineering
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
                activePillarTab === "transformation" || activePillarTab === "web-applications"
                  ? "border-[var(--ctl-ink)] text-[var(--ctl-ink)]"
                  : "border-transparent text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)]"
              }`}
            >
              03. Websites &amp; Digital Experiences
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
            description="We help startups and founders build production-ready digital products and AI-powered SaaS platforms. From initial architecture and engineering to deployment, we turn product ideas into working technology."
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
            description="We help businesses become AI-ready by automating repetitive operations, connecting disconnected software systems, and engineering intelligent workflows."
          />
          <div className="py-4">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[var(--ctl-soft)] border-b border-[var(--ctl-line)] pb-2">
              <span className="font-semibold uppercase tracking-wider text-[var(--ctl-ink)]">
                Interactive Demonstration · Simulated Workflow Architecture
              </span>
              <span className="italic">
                Interactive preview of agent state transitions and tool-execution logging
              </span>
            </div>
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
          SECTION 3: WEBSITES & DIGITAL EXPERIENCES
          ============================================================ */}
      <section id="transformation" className="py-24 border-b border-[var(--ctl-line)]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <PlateHeader
            kicker="PILLAR · 03"
            title="Websites &amp; Digital Experiences"
            italicWord="Craft, speed and engineering quality."
            description="We design and engineer business websites, web applications and digital interfaces that represent your company with craft, speed, and engineering quality."
          />
          <CapabilityGrid
            capabilities={SERVICES_TRANSFORMATION}
            items={SERVICES_TRANSFORMATION}
            columns={3}
          />
        </div>
      </section>

      {/* ============================================================
          COMMERCIAL ENGAGEMENT MODELS
          ============================================================ */}
      <section className="py-24 border-b border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <PlateHeader
            kicker="COMMERCIAL STRUCTURES"
            title="Commercial Engagement Models"
            italicWord="Transparent terms, founder-led execution."
            description="Choose an engagement structure tailored to your product stage, timeline, and operational requirements."
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
            italicWord="Architectures &amp; Business Value"
            description="Explore how our engineering studio deploys practical digital products and operational automations."
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
                      Business Value:
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
