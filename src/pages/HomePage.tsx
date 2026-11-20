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
    badge: "Technical Partner",
    description: "Your product engineering partner. We handle architecture, system integration, AI features, and cloud deployment from napkin sketch to scale.",
    focus: "Full-stack builds • AI SaaS architecture • Scalable cloud infrastructure",
  },
  {
    title: "Businesses Preparing for AI",
    badge: "AI Readiness",
    description: "Understand practical operational AI opportunities, evaluate feasibility, and modernize existing software and digital infrastructure.",
    focus: "AI opportunity discovery • System modernization • Strategic engineering",
  },
  {
    title: "Growing Companies Automating Operations",
    badge: "Operational Leverage",
    description: "Eliminate repetitive manual toil across support, sales outreach, customer billing, and back-office document pipelines.",
    focus: "Workflow automation • Document extraction • Back-office pipeline streamlining",
  },
  {
    title: "Established Teams Needing Engineering Muscle",
    badge: "Specialist Squad",
    description: "Augment your existing technical team with deep specialized expertise in agent orchestration, API integrations, and production scaling.",
    focus: "Workflow integrations • Custom tool development • Production scaling",
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
          title: "Build for the Future.\nBecome AI-Ready Today.",
          subtitle:
            "We help ambitious startups build AI-powered products and help businesses prepare for an AI-powered future through intelligent software, automation and modern engineering.",
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
            "We combine product thinking, modern engineering, and applied intelligence to build digital platforms and make businesses AI-ready.",
          body: "We are an AI-native Product & Engineering Studio. Whether you are an ambitious founder launching a new AI SaaS product or an established business automating operations and integrating AI into existing software, we engineer practical solutions that run reliably in production.",
          stats: [
            { value: 100, suffix: "%", label: "IP Ownership to Client" },
            { value: 99.9, suffix: "%", label: "Production Uptime SLA" },
            { value: 10, suffix: "x", label: "Operational Velocity" },
          ],
          seal: "Proquoment Labs · Est. MMXXVI · ",
        }}
        solutionsCopy={{
          kicker: "Core Pillars",
          title: "Three core pillars, *one standard of engineering*",
          intro:
            "Pull a bookmark from the shelf. Each is an engineering discipline we maintain to turn product ideas and operational workflows into production software.",
        }}
        solutions={[
          {\n            kicker: \"Pillar 01\",\n            title: \"AI SaaS & Digital Product Engineering\",\n            quote: \"Turn product ideas into production-ready digital platforms.\",\n            body: \"We turn product ideas into production-ready digital platforms. From architecture and engineering to deployment, we help founders move from concept to a working product.\",\n            points: [\n              \"Website & Web Apps\",\n              \"SaaS MVP Development\",\n              \"Custom Dashboards\",\n              \"AI-Powered Features\",\n              \"API Development\",\n              \"Third-party Integrations\",\n            ],\n            art: \"typewriter\",\n            tone: \"paper\",\n          },\n          {\n            kicker: \"Pillar 02\",\n            title: \"Business Process Automation & Integrations\",\n            quote: \"Connect systems, automate repetitive operations and engineer intelligent workflows.\",\n            body: \"We connect systems, automate repetitive operations and engineer intelligent workflows that help businesses operate more efficiently. Event-driven pipelines, document processing, and ERP/CRM sync.\",\n            points: [\n              \"Document Processing\",\n              \"Customer Support Agents\",\n              \"Internal Tooling\",\n              \"Workflow Integration\",\n              \"Multi-Agent Systems\",\n              \"Data Pipeline Automation\",\n            ],\n            art: \"steamer\",\n            tone: \"ink\",\n          },\n          {\n            kicker: \"Pillar 03\",\n            title: \"Web Applications & Digital Experiences\",\n            quote: \"Design and engineer modern digital experiences that make complex products easier to use.\",\n            body: \"We design and engineer modern digital experiences that make complex products and business operations easier to use. Fast, responsive web applications, customer portals, and intuitive dashboards.\",\n            points: [\n              \"Opportunity Discovery\",\n              \"AI Roadmap Design\",\n              \"Workflow Analysis\",\n              \"AI Infrastructure Build\",\n              \"Process Automation\",\n              \"Ongoing AI Partnership\",\n            ],\n            art: \"monogram\",\n            tone: \"paper\",\n          },\n        ]}\n        servicesCopy={{\n          kicker: \"The Ledger\",\n          title: \"A ledger of *what we do*\",\n          intro:\n            \"Engagements are fixed in scope, transparent in pricing, and led by senior architects from first specification to production deployment.\",\n        }}\n        services={[\n          {\n            title: \"AI SaaS & MVP Engineering\",\n            summary: \"Production SaaS applications and MVP platforms engineered from concept to launch.\",\n            details:\n              \"We take your product from napkin sketch to market-ready release in weeks, not months. Complete UI/UX design, frontend engineering, streaming LLM backends, and deployment automation.\",\n            deliverables: [\"Full-Stack App\", \"API Suite\", \"Production CI/CD\"],\n            duration: \"4 to 8 weeks\",\n          },\n          {\n            title: \"Business Process Automation & Integrations\",\n            summary: \"Intelligent workflow automation connecting CRM, ERP, databases, and APIs.\",\n            details:\n              \"We connect systems, map operational bottlenecks, and deploy automated pipelines that execute complex multi-step workflows with human-in-the-loop verification.\",\n            deliverables: [\"Workflow Orchestrator\", \"Integration Webhooks\", \"Monitoring Suite\"],\n            duration: \"4 to 8 weeks\",\n          },\n          {\n            title: \"AI Integration & System Modernization\",\n            summary: \"Integrating AI capabilities, copilots, and modern infrastructure into existing business software.\",\n            details:\n              \"A practical engineering partnership: we evaluate technical feasibility, integrate custom AI copilots, connect disparate systems, and modernize digital infrastructure.\",\n            deliverables: [\"AI Opportunity Audit\", \"Architecture Blueprint\", \"System Integrations\"],\n            duration: \"Ongoing Retainer\",\n          },\n          {\n            title: \"Web Applications & Digital Experiences\",\n            summary: \"Responsive web portals, interactive dashboards, and intuitive software interfaces.\",\n            details:\n              \"Customer portals, administrative control rooms, and interactive dashboards engineered with modern reactive frameworks and accessible design systems.\",\n            deliverables: [\"Customer Portals\", \"Admin Workspaces\", \"Design Systems\"],\n            duration: \"4 to 8 weeks\",\n          },\n        ]}\n        notes={[\n          {\n            title: \"Architecture\",\n            body: \"Modular microservices and event-driven backends designed for sub-second agent tool execution and high concurrency.\",\n          },\n          {\n            title: \"Governance & Safety\",\n            body: \"Deterministic guardrails, prompt injection sanitization, PII redaction, and strict data sovereignty compliance.\",\n          },\n          {\n            title: \"Observability & Evals\",\n            body: \"Real-time trace logs, latency budgets, token cost accounting, and automated synthetic evaluation pipelines.\",\n          },\n          {\n            title: \"Resilient Infrastructure\",\n            body: \"Fault-tolerant agent loops, self-healing queues, vector stores, and automated failover guarantees.\",\n          },\n        ]}\n        pressCopy={{\n          kicker: \"Insights\",\n          title: \"Latest Press\",\n          intro: \"Real-world engineering case studies, architecture blueprints, and quantifiable business outcomes.\",\n        }}\n        press={BLOG_POSTS.map((p) => ({\n          title: p.title,\n          source: p.source,\n          date: p.publishedDate,\n          category: p.category,\n          href: `/blog/${p.slug}`,\n        }))}\n        contactBand={{\n          title: \"Ready to build your *AI-native future*?\",\n          body:\n            \"Let's build something extraordinary. Tell us about the challenge. A partner replies within two working days.\",\n          action: { label: \"Start a Project\", href: \"/contact\" },\n          secondary: { label: \"Book a Call\", href: \"https://calendly.com/proquoment\" },\n        }}\n      />\n    </div>\n  );\n}\n\nexport default HomePage;\n