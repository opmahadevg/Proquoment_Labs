import * as React from "react";
import { useState } from "react";
import { Link } from "wouter";
import {
  CobaltToileLanding,
  type CobaltToileProps,
  DEFAULT_SOLUTIONS,
} from "@/components/ui/cobalt-toile-landing";
import { CapabilityGrid, type CapabilityItem } from "@/components/ui/capability-grid";
import {
  PlateHeader,
  PlateKicker,
  EtchedCard,
  CopperplateButton,
  HatchDivider,
} from "@/components/ui/copperplate-primitives";
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
    description: "Custom copilots, dynamic contextual search, automated content intelligence, and fine-tuned domain-specific agent graphs.",
    tag: "AI Integration",
  },
  {
    icon: Plug,
    title: "API Development",
    description: "High-throughput REST and streaming endpoints engineered with OpenAPI standards, rate limiting, and zero-trust authentication.",
    tag: "APIs & Auth",
  },
  {
    icon: LinkIcon,
    title: "Third-party Integrations",
    description: "Seamless connectivity with CRM, ERP, payment gateways, vector databases, and cloud service ecosystems.",
    tag: "Integrations",
  },
];

export const AGENTS_AUTOMATION_CAPABILITIES: CapabilityItem[] = [
  {
    icon: Database,
    title: "Document Processing",
    description: "Automated extraction, classification, and validation of invoices, legal contracts, and unstructured business documents.",
    tag: "Doc Intelligence",
  },
  {
    icon: Bot,
    title: "Customer Support Agents",
    description: "Tier-1 and Tier-2 autonomous triage, support resolution, and human-in-the-loop escalation workflows with CRM sync.",
    tag: "Support Agents",
  },
  {
    icon: Settings2,
    title: "Internal Tooling",
    description: "Tailored operational consoles, approval workspaces, and automated reconciliation systems to accelerate back-office velocity.",
    tag: "Internal Tools",
  },
  {
    icon: Workflow,
    title: "Workflow Integration",
    description: "Event-driven automation connecting isolated cloud services, webhooks, database queues, and enterprise message buses.",
    tag: "Event-Driven",
  },
  {
    icon: Cpu,
    title: "Multi-Agent Systems",
    description: "Stateful agent graphs collaborating to validate intermediate reasoning steps, route exceptions, and handle complex operational tasks.",
    tag: "Agent Swarms",
  },
  {
    icon: Server,
    title: "Data Pipeline Automation",
    description: "Continuous ETL pipelines, embeddings synchronization, and relational database migrations with complete audit logs.",
    tag: "Data Pipelines",
  },
];

export const TRANSFORMATION_CAPABILITIES: CapabilityItem[] = [
  {
    icon: Search,
    title: "Opportunity Discovery",
    description: "Detailed operational audit to identify bottleneck workflows where intelligent software and automation deliver clear ROI.",
    tag: "Audit & Scoping",
  },
  {
    icon: Map,
    title: "AI Roadmap Design",
    description: "Architectural blueprints, technology stack selection, and milestone roadmaps for production-grade AI adoption.",
    tag: "System Design",
  },
  {
    icon: RefreshCw,
    title: "Workflow Analysis",
    description: "Deep examination of human-in-the-loop processes to engineer deterministic fallbacks and high-accuracy automation pipelines.",
    tag: "Workflow Audit",
  },
  {
    icon: Rocket,
    title: "AI Infrastructure Build",
    description: "Configuring production vector stores, serverless compute, containerized services, and automated CI/CD deployment pipelines.",
    tag: "Cloud & Devops",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Replacing error-prone manual touchpoints with fault-tolerant background microservices and real-time observability telemetry.",
    tag: "Automation",
  },
  {
    icon: Handshake,
    title: "Ongoing AI Partnership",
    description: "Dedicated founder-led technical capacity, bi-weekly delivery sprints, and continuous improvements to keep your software ahead.",
    tag: "Retainer Sprints",
  },
];

// ==========================================
// TARGET AUDIENCES (TWO DISTINCT PROFILES)
// ==========================================

export interface AudienceProfile {
  id: "startups" | "businesses";
  label: string;
  tagline: string;
  description: string;
  needs: string[];
  engagement: string;
  ctaText: string;
}

export const AUDIENCE_PROFILES: AudienceProfile[] = [
  {
    id: "startups",
    label: "For Startups Building the Future",
    tagline: "Turn ambitious product ideas into production AI SaaS.",
    description:
      "For venture-backed and bootstrapped founders who need an agile engineering partner to architect, prototype, and ship new AI-powered products in weeks.",
    needs: [
      "Rapid concept-to-working-software delivery",
      "Full-stack web and mobile application engineering",
      "Native AI model integration, prompt pipelines, and structured outputs",
      "Production-ready auth, billing, multi-tenancy, and cloud infrastructure",
      "100% intellectual property ownership from day one",
    ],
    engagement: "Fixed-Scope MVP Sprints (4-6 weeks) & Founder-Led Product Pods",
    ctaText: "Build Your Startup",
  },
  {
    id: "businesses",
    label: "For Existing Businesses Becoming AI-Ready",
    tagline: "Prepare your business for the AI era through practical automation.",
    description:
      "For growing and established companies looking to eliminate repetitive workflows, integrate intelligent capabilities into existing software, and modernize systems.",
    needs: [
      "AI opportunity identification and workflow discovery",
      "Automating repetitive back-office and operational bottlenecks",
      "Integrating AI copilots and document intelligence into existing tools",
      "Connecting disconnected CRM, ERP, and database systems",
      "Modernizing legacy software and engineering reliable infrastructure",
    ],
    engagement: "System Modernization Projects & Ongoing Engineering Retainers",
    ctaText: "Get AI-Ready",
  },
];

// ==========================================
// CLIENT MARQUEE / TECH STACK LOGOS
// ==========================================

export const TECH_STACK = [
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
          title: "Become AI-Ready Today.",
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
          {
            kicker: "Pillar 01",
            title: "AI SaaS & Digital Product Engineering",
            quote: "Turn product ideas into production-ready digital platforms.",
            body: "We turn product ideas into production-ready digital platforms. From architecture and engineering to deployment, we help founders move from concept to a working product.",
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
            kicker: "Pillar 02",
            title: "Business Process Automation & Integrations",
            quote: "Connect systems, automate repetitive operations and engineer intelligent workflows.",
            body: "We connect systems, automate repetitive operations and engineer intelligent workflows that help businesses operate more efficiently. Event-driven pipelines, document processing, and ERP/CRM sync.",
            points: [
              "Document Processing",
              "Customer Support Agents",
              "Internal Tooling",
              "Workflow Integration",
              "Multi-Agent Systems",
              "Data Pipeline Automation",
            ],
            art: "steamer",
            tone: "ink",
          },
          {
            kicker: "Pillar 03",
            title: "Web Applications & Digital Experiences",
            quote: "Design and engineer modern digital experiences that make complex products easier to use.",
            body: "We design and engineer modern digital experiences that make complex products and business operations easier to use. Fast, responsive web applications, customer portals, and intuitive dashboards.",
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
        ]}
        servicesCopy={{
          kicker: "Service Catalog",
          title: "Engineered for speed, built for scale",
          action: { label: "Explore full service breakdown", href: "/services" },
        }}
        pressCopy={{
          kicker: "Strategic Principles",
          title: "How we engineer intelligent systems",
        }}
        contactBand={{
          title: "Ready to build your *AI-native future*?",
          body:
            "Tell us what you're building or what operations you need to automate. We'll outline how we'd architect the solution and deliver a working prototype.",
          actions: [
            { label: "Start a Project", href: "/contact", primary: true },
            { label: "Book a Call", href: "https://calendly.com/proquoment" },
          ],
        }}
      />

      {/* ============================================================
          SECTION: TWO DISTINCT AUDIENCE PATHWAYS
          ============================================================ */}
      <section className="py-24 border-t border-[var(--ctl-line)] bg-[var(--ctl-paper)]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <PlateHeader
            kicker="WHO WE SERVE"
            title="Engineered for Founders &amp; Business Operators"
            italicWord="Two pathways to transformation."
            description="Whether launching a venture-scale AI product or making an established business AI-ready, we tailor our engineering engagement to your operational reality."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {AUDIENCE_PROFILES.map((profile, idx) => (
              <EtchedCard
                key={profile.id}
                className="flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="border-b border-[var(--ctl-line)] pb-3 flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--ctl-ink)]">
                      {idx === 0 ? "STARTUP COHORT" : "ENTERPRISE COHORT"}
                    </span>
                    <span className="text-xs font-serif text-[var(--ctl-soft)]">
                      Pathway 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[var(--ctl-text)]">
                    {profile.label}
                  </h3>

                  <p className="font-serif italic text-sm text-[var(--ctl-ink)]">
                    &ldquo;{profile.tagline}&rdquo;
                  </p>

                  <p className="text-sm text-[var(--ctl-soft)] leading-relaxed">
                    {profile.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ctl-ink)] block">
                      Core Needs Addressed:
                    </span>
                    <ul className="space-y-2 text-sm text-[var(--ctl-text)]">
                      {profile.needs.map((need, nIdx) => (
                        <li key={nIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[var(--ctl-ink)] shrink-0 mt-0.5" />
                          <span>{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--ctl-line)] flex items-center justify-between">
                  <span className="text-xs text-[var(--ctl-soft)] font-serif">
                    {profile.engagement}
                  </span>
                  <Link href="/contact">
                    <CopperplateButton variant="deep" className="h-9 text-xs px-4">
                      <span>{profile.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </CopperplateButton>
                  </Link>
                </div>
              </EtchedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
