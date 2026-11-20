import * as React from "react";
import { useState } from "react";
import { Link } from "wouter";
import { CobaltToileLanding } from "@/components/ui/cobalt-toile-landing";
import { BLOG_POSTS } from "@/data/blogs";
import { PlateHeader, PlateKicker, EtchedCard, CopperplateButton, WaxSealBadge, HatchDivider } from "@/components/ui/copperplate-primitives";
import { HeroVisual } from "@/components/ui/hero-visual";
import { AgentWorkflowVisual } from "@/components/ui/agent-workflow-visual";
import { TechMarquee } from "@/components/ui/tech-marquee";
import { ProcessStep } from "@/components/ui/process-step";
import { DifferentiatorCard } from "@/components/ui/differentiator-card";
import { CapabilityGrid, type CapabilityItem } from "@/components/ui/capability-grid";
import {
  Monitor,
  Layers,
  BarChart3,
  Bot,
  Link as LinkIcon,
  Plug,
  Search,
  Map,
  Settings2,
  Server,
  RefreshCw,
  Handshake,
  Database,
  Workflow,
  Rocket,
  Code,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Zap,
  Globe,
  Cpu,
} from "lucide-react";

// ==========================================
// CAPABILITY LISTS
// ==========================================

export const PRODUCT_ENGINEERING_CAPABILITIES: CapabilityItem[] = [
  {
    icon: Monitor,
    title: "Website & Web Apps",
    description: "Modern, ultra-fast web applications designed with responsive layouts, fluid micro-interactions, and AI-assisted UX.",
    tag: "Web & Mobile",
  },
  {
    icon: Layers,
    title: "SaaS MVP Development",
    description: "Rapid end-to-end prototyping and software engineering to launch production-ready AI software in weeks, not months.",
    tag: "MVP Sprint",
  },
  {
    icon: BarChart3,
    title: "Custom Dashboards",
    description: "Real-time analytics interfaces, monitoring control panels, and interactive data visualizations powered by live APIs.",
    tag: "Dashboards",
  },
  {
    icon: Bot,
    title: "AI-Powered Features",
    description: "Conversational copilots, intelligent search, automated summarization, and generative user interfaces embedded natively.",
    tag: "AI Features",
  },
  {
    icon: LinkIcon,
    title: "API Development",
    description: "High-throughput REST and streaming backends engineered for resilience, sub-second latency, and strict schema validation.",
    tag: "Backend APIs",
  },
  {
    icon: Plug,
    title: "Third-party Integrations",
    description: "Seamless synchronization with enterprise CRMs, payment gateways, messaging tools, databases, and custom webhooks.",
    tag: "Integrations",
  },
];

export const TRANSFORMATION_CAPABILITIES: CapabilityItem[] = [
  {
    icon: Search,
    title: "Opportunity Discovery",
    description: "Comprehensive operational audits to identify manual friction points and pinpoint highest-ROI AI interventions.",
    tag: "Discovery",
  },
  {
    icon: Map,
    title: "AI Roadmap Design",
    description: "Phased architecture blueprints, technology stack selection, and milestone roadmaps aligned to measurable business outcomes.",
    tag: "Strategy",
  },
  {
    icon: Settings2,
    title: "Workflow Analysis",
    description: "Detailed mapping of operational data flows, manual handoffs, and bottlenecks to engineer autonomous automation pipelines.",
    tag: "Analysis",
  },
  {
    icon: Server,
    title: "AI Infrastructure Build",
    description: "Enterprise vector stores, private model deployments, evaluation harness pipelines, and secure cloud environments.",
    tag: "Infrastructure",
  },
  {
    icon: RefreshCw,
    title: "Process Automation",
    description: "Replacing brittle manual processes with self-healing, monitored agent loops that operate reliably around the clock.",
    tag: "Automation",
  },
  {
    icon: Handshake,
    title: "Ongoing AI Partnership",
    description: "Embedded fractional AI leadership, continuous system optimization, model evaluation monitoring, and team upskilling.",
    tag: "Partnership",
  },
];

export const CORE_ENGINE_CAPABILITIES: CapabilityItem[] = [
  {
    icon: Bot,
    title: "Autonomous Agents",
    description: "Self-correcting agent swarms executing multi-step business logic across databases and APIs.",
    tag: "Agents",
  },
  {
    icon: Database,
    title: "Intelligent Document RAG",
    description: "Sub-second hybrid vector search with reranking across millions of internal enterprise documents.",
    tag: "RAG",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Event-driven pipelines connecting CRM, ERP, Slack, and cloud storage without manual friction.",
    tag: "Automation",
  },
  {
    icon: Rocket,
    title: "AI Product Engineering",
    description: "Production web and mobile applications with bespoke generative AI and conversational UX.",
    tag: "Full-Stack",
  },
  {
    icon: Search,
    title: "Evals & Observability",
    description: "Comprehensive LLM observability, trace latency, cost tracking, and hallucination safeguards.",
    tag: "Observability",
  },
  {
    icon: Code,
    title: "Fractional AI CTO",
    description: "Strategic guidance, architectural reviews, team upskilling, and vendor evaluation for founders.",
    tag: "Advisory",
  },
];

// ==========================================
// AUDIENCE TARGETS
// ==========================================

export interface AudienceProfile {
  title: string;
  badge: string;
  description: string;
  focus: string;
}

export const AUDIENCE_PROFILES: AudienceProfile[] = [
  {
    title: "Early-stage Startups",
    badge: "Speed to MVP",
    description: "Go from concept to production-ready MVP in weeks. We build your AI core from day one so you validate product-market fit fast.",
    focus: "Rapid prototyping • Venture-ready architectures • Lean MVP sprints",
  },
  {
    title: "SaaS Companies",
    badge: "AI Product Features",
    description: "Supercharge your existing platform with intelligent copilot features, automated summarization, and vector search that retain users.",
    focus: "In-app copilot layers • Intelligent RAG search • Automated retention features",
  },
  {
    title: "Founders Building New Products",
    badge: "Technical Co-Founder",
    description: "Your fractional AI engineering team. We handle architecture, system integration, prompt engineering, and cloud deployment.",
    focus: "Fractional AI engineering • Full-stack builds • Scalable cloud infrastructure",
  },
  {
    title: "Growing SMBs",
    badge: "Operational Leverage",
    description: "Eliminate repetitive operational toil across support, sales outreach, customer billing, and back-office pipelines.",
    focus: "Workflow automation • Customer support agents • Back-office pipeline streamlining",
  },
  {
    title: "Professional Services",
    badge: "Knowledge Automation",
    description: "Transform manual document reviews, report drafting, and contract processing into sub-second autonomous workflows.",
    focus: "Document intelligence • Research synthesis agents • Proposal automation",
  },
  {
    title: "Tech Teams",
    badge: "AI Squad Augmentation",
    description: "Augment your existing engineers with deep specialized expertise in agent orchestration, evals, and production LLM scaling.",
    focus: "Agent swarm design • Observability & evals • Custom tool integration",
  },
];

// ==========================================
// HOMEPAGE COMPONENT
// ==========================================

export function HomePage() {
  const [activeAudienceIndex, setActiveAudienceIndex] = useState<number>(0);
  const activeAudience = AUDIENCE_PROFILES[activeAudienceIndex];

  return (
    <div className="relative min-h-screen text-[var(--ctl-text)] bg-[var(--ctl-paper)] overflow-hidden">
      {/* ============================================================
          COBALT TOILE MASTER HERO & INTERACTIVE ENGRAVING CANVAS
          ============================================================ */}
      <CobaltToileLanding
        hideNav={true}
        hideFooter={true}
        brand="Proquoment Labs"
        monogram="P"
        palette="cobalt"
        paletteSwitcher={true}
        hero={{
          title: "Autonomous AI Systems\nBuilt for Tomorrow",
          subtitle:
            "Where AI becomes your competitive advantage. Build AI-native products. Automate what slows you down. We engineer intelligent systems with master craftsman precision.",
          action: { label: "Start a Project", href: "/contact" },
          est: "Est. MMXXVI",
          edition: "Vol. I · Nº 01",
        }}
        clients={[
          "OpenAI",
          "Anthropic",
          "LangGraph",
          "Supabase",
          "Neon",
          "Pinecone",
          "Vercel",
          "Docker",
          "Fastify",
          "Python",
          "React",
          "PostgreSQL",
        ]}
        clientsLabel="TOOLS & PLATFORMS WE WORK WITH"
        about={{
          kicker: "About the Studio",
          statement:
            "We bring the patience of the old masters to the *frontier of machine intelligence*, leaving every enterprise sturdier, faster, and fully autonomous.",
          body: "We're not a typical agency. We are an AI Product Engineering & Transformation Studio partnering with fast-moving founders and growing businesses. Designing, building, and scaling AI-native products, autonomous workflows, and intelligent software.",
          stats: [
            { value: 100, suffix: "%", label: "IP Ownership to Client" },
            { value: 99.9, suffix: "%", label: "Production Uptime SLA" },
            { value: 10, suffix: "x", label: "Operational Velocity" },
          ],
          seal: "Proquoment Labs · Autonomous Intelligence · Est. MMXXVI · ",
        }}
        solutionsCopy={{
          kicker: "Core Practices",
          title: "Four practices, *one long view*",
          intro:
            "Pull a bookmark from the shelf. Each is an engineering discipline we have honed for deterministic autonomous execution.",
        }}
        solutions={[
          {
            kicker: "Pillar I",
            title: "AI Product Engineering",
            quote: "Build products that work and scale.",
            body: "Designing and engineering AI-native applications from zero to scale. Custom dashboards, conversational copilots, SaaS MVPs, and resilient API architectures.",
            points: [
              "Website & Web Apps",
              "SaaS MVP Development",
              "Custom Dashboards",
              "AI-Powered Features",
              "API Development",
              "Third-party Integrations",
            ],
            art: "typewriter",
            tone: "paper",
          },
          {
            kicker: "Pillar II",
            title: "AI Agents & Automation",
            quote: "Automate what slows you down.",
            body: "Replacing brittle manual processes with self-correcting agent swarms, document intelligence, intelligent routing, and multi-system integrations.",
            points: [
              "Document Processing",
              "Customer Support Agents",
              "Data Pipeline Automation",
              "Internal Tooling",
              "Email & Ticket Routing",
              "Multi-Agent Systems",
            ],
            art: "steamer",
            tone: "ink",
          },
          {
            kicker: "Pillar III",
            title: "AI Transformation Partnership",
            quote: "The strategic blueprint that turns uncertainty into enterprise leverage.",
            body: "Collaborative advisory and technical leadership. We audit manual workflows, design phased AI roadmaps, train engineering squads, and ensure compliance.",
            points: [
              "Opportunity Discovery",
              "AI Roadmap Design",
              "Workflow Analysis",
              "AI Infrastructure Build",
              "Process Automation",
              "Ongoing AI Partnership",
            ],
            art: "monogram",
            tone: "paper",
          },
          {
            kicker: "Pillar IV",
            title: "Enterprise Systems",
            quote: "Build the foundations first. Every scale milestone after is cheaper.",
            body: "Enterprise vector databases, private model fine-tuning, latency optimization, SOC2-ready governance, and custom evaluation harnesses.",
            points: [
              "Vector DB Scaling",
              "Evaluation Harnesses",
              "Zero-Leakage Guardrails",
              "SOC2 Compliance",
            ],
            art: "tower",
            tone: "ink",
          },
        ]}
        servicesCopy={{
          kicker: "The Ledger",
          title: "A ledger of *what we do*",
          intro:
            "Engagements are fixed in scope, transparent in pricing, and led by senior architects from first specification to production deployment.",
        }}
        services={[
          {
            title: "AI Product Engineering",
            summary: "Production web and SaaS products built with AI-native architecture.",
            details:
              "We take your product from napkin sketch to market-ready release in weeks, not months. Complete UI/UX design, frontend engineering, streaming LLM backends, and deployment automation.",
            deliverables: ["Full-Stack App", "API Suite", "Production CI/CD"],
            duration: "4 to 8 weeks",
          },
          {
            title: "Autonomous Workflow Automation",
            summary: "Deterministic agentic pipelines connecting CRM, ERP, and databases.",
            details:
              "We map your operational bottlenecks and deploy autonomous agents that execute complex multi-step workflows with human-in-the-loop verification.",
            deliverables: ["Agent Orchestrator", "Integration Webhooks", "Monitoring Suite"],
            duration: "6 to 12 weeks",
          },
          {
            title: "AI Transformation Partnership",
            summary: "Embedded fractional AI leadership and strategic enablement.",
            details:
              "A standing partnership with your technical leadership: we sit in on architectural reviews, benchmark competing model providers, and audit security compliance.",
            deliverables: ["AI Opportunity Audit", "Architecture Roadmap", "Security Framework"],
            duration: "Ongoing Retainer",
          },
          {
            title: "Custom Multi-Agent Deployments",
            summary: "Specialized collaborative agent swarms for mission-critical tasks.",
            details:
              "LangGraph and native state-machine orchestrations with built-in retry mechanisms, state persistence, and real-time observability telemetry.",
            deliverables: ["Multi-Agent Mesh", "Failure Recovery", "Evaluation Harness"],
            duration: "8 to 16 weeks",
          },
        ]}
        notes={[
          {
            title: "Architecture",
            body: "Modular microservices and event-driven backends designed for sub-second agent tool execution and high concurrency.",
          },
          {
            title: "Governance & Safety",
            body: "Deterministic guardrails, prompt injection sanitization, PII redaction, and strict data sovereignty compliance.",
          },
          {
            title: "Observability & Evals",
            body: "Real-time trace logs, latency budgets, token cost accounting, and automated synthetic evaluation pipelines.",
          },
          {
            title: "Resilient Infrastructure",
            body: "Fault-tolerant agent loops, self-healing queues, vector stores, and automated failover guarantees.",
          },
        ]}
        pressCopy={{
          kicker: "Insights",
          title: "Latest Press",
          intro: "Real-world engineering case studies, architecture blueprints, and quantifiable business outcomes.",
        }}
        press={BLOG_POSTS.map((p) => ({
          title: p.title,
          source: p.source,
          date: p.publishedDate,
          category: p.category,
          href: `/blog/${p.slug}`,
        }))}
        contactBand={{
          title: "Ready to build your *AI-native future*?",
          body:
            "Let's build something extraordinary. Tell us about the challenge. A partner replies within two working days.",
          action: { label: "Start a Project", href: "/contact" },
          secondary: { label: "Book a Call", href: "https://calendly.com/proquoment" },
        }}
      />
    </div>
  );
}

export default HomePage;
