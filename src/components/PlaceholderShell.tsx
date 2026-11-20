import * as React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroVisual } from "@/components/ui/hero-visual";
import { AgentWorkflowVisual } from "@/components/ui/agent-workflow-visual";
import { TechMarquee } from "@/components/ui/tech-marquee";
import { ProcessStep } from "@/components/ui/process-step";
import { DifferentiatorCard } from "@/components/ui/differentiator-card";
import { CapabilityGrid, type CapabilityItem } from "@/components/ui/capability-grid";
import {
  Zap,
  ShieldCheck,
  Cpu,
  Bot,
  Database,
  Workflow,
  Rocket,
  Search,
  Code,
  ArrowRight,
} from "lucide-react";

interface Pillar {
  title: string;
  tag: string;
  description: string;
  highlight: string;
}

const PILLARS: readonly Pillar[] = [
  {
    title: "AI SaaS & Digital Product Engineering",
    tag: "Pillar 01",
    description:
      "End-to-end design, rapid MVP prototyping, and production engineering of custom AI-native applications and digital platforms.",
    highlight: "SaaS MVPs • Custom Platforms • Full-Stack Product Engineering",
  },
  {
    title: "Business Process Automation & Integrations",
    tag: "Pillar 02",
    description:
      "Autonomous agent workflows, operational pipelines, document intelligence, and multi-system integrations that eliminate repetitive toil.",
    highlight: "Workflow Automation • System Integrations • Custom AI Agents",
  },
  {
    title: "Web Applications & Digital Experiences",
    tag: "Pillar 03",
    description:
      "Modern business websites, customer portals, interactive dashboards, design systems, and practical AI readiness.",
    highlight: "Business Websites • Portals & Dashboards • AI Readiness",
  },
];

const CAPABILITIES: CapabilityItem[] = [
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

export function PlaceholderShell() {
  return (
    <div className="relative">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden bg-mesh opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-20 sm:space-y-28">
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-xs text-[#93c5fd] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Proquoment Labs • AI Innovation &amp; Engineering</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Build AI-Native Products &amp; Automate Operations
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Proquoment Labs helps startups and growing businesses design, build, and deploy
              AI-powered products, autonomous agents, and intelligent workflows.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <Button className="h-11 px-6 rounded-xl bg-primary text-white hover:bg-primary/90 font-medium shadow-lg shadow-primary/25 cursor-pointer">
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="h-11 px-6 rounded-xl border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 cursor-pointer">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Visual Card (Task 10) */}
          <div className="lg:col-span-6">
            <HeroVisual />
          </div>
        </section>

        {/* TECH MARQUEE (Task 12) */}
        <section className="space-y-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Battle-Tested Technologies &amp; Platforms
            </span>
          </div>
          <TechMarquee />
        </section>

        {/* 3 PILLARS PREVIEW */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-2 bg-primary/15 text-blue-300 border-primary/20">
              Core Pillars
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              End-to-End Artificial Intelligence Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => (
              <Card
                key={pillar.title}
                className="group relative border-border bg-card/60 hover:bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
              >
                <CardHeader className="pb-3">
                  <Badge
                    variant="secondary"
                    className="w-fit text-[11px] font-mono uppercase tracking-wider text-blue-300 bg-primary/15 border border-primary/20 mb-3"
                  >
                    {pillar.tag}
                  </Badge>
                  <CardTitle className="text-lg font-semibold text-white">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="text-xs font-mono text-zinc-500 pt-3 border-t border-border/60 w-full">
                    {pillar.highlight}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* WORKFLOW VISUAL SECTION (Task 11) */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="secondary" className="bg-primary/15 text-blue-300 border-primary/20 font-mono">
              Visual Architecture
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              How Autonomous Agents Orchestrate In Real Time
            </h2>
            <p className="text-sm text-muted-foreground">
              From raw inbound webhooks to multi-channel execution in milliseconds.
            </p>
          </div>

          <AgentWorkflowVisual />
        </section>

        {/* WHY LABS / DIFFERENTIATORS (Task 14) */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-2 bg-primary/15 text-blue-300 border-primary/20">
              Why Proquoment Labs
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Engineered for Speed, Reliability &amp; Control
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DifferentiatorCard
              icon={Zap}
              title="Sub-Second Latency"
              description="Engineered for streaming token delivery, instant inference, and high-throughput pipelines with zero bloat."
              badge="High Performance"
              metric="< 160ms"
              metricLabel="p95 execution"
            />
            <DifferentiatorCard
              icon={ShieldCheck}
              title="Enterprise Grade Security"
              description="Zero data leakage, end-to-end encryption, strict role-based access, and automated compliance auditing."
              badge="Security First"
              metric="99.98%"
              metricLabel="SLA uptime"
            />
            <DifferentiatorCard
              icon={Cpu}
              title="Model Agnostic Routing"
              description="Seamlessly route requests across Claude 3.5, OpenAI, Gemini, and open-source models with automatic fallback."
              badge="Resilience"
              metric="25+ Models"
              metricLabel="orchestrated"
            />
          </div>
        </section>

        {/* HOW WE WORK / PROCESS STEPS (Task 13) */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-2 bg-primary/15 text-blue-300 border-primary/20">
              How We Work
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              From Concept to Production in 4 Sprints
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <ProcessStep
              number={1}
              title="Discovery & Architecture"
              description="Define agent boundaries, data pipelines, schema contracts, and measurable success criteria."
              highlight="Week 01"
            />
            <ProcessStep
              number={2}
              title="Rapid Prototype Sprint"
              description="Deploy functional staging MVP with live model connections and human-in-the-loop validation."
              highlight="Week 02"
            />
            <ProcessStep
              number={3}
              title="Production Hardening"
              description="Stress testing, automated evals, observability instrumentation, and enterprise integrations."
              highlight="Week 03-04"
            />
            <ProcessStep
              number={4}
              title="Scale & Co-Engineering"
              description="Ongoing fractional CTO guidance, model fine-tuning, and operational performance tuning."
              isLast={true}
              highlight="Ongoing"
            />
          </div>
        </section>

        {/* CAPABILITIES GRID (Task 15) */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-2 bg-primary/15 text-blue-300 border-primary/20">
              Full Stack Capabilities
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Comprehensive AI Engineering Services
            </h2>
          </div>

          <CapabilityGrid capabilities={CAPABILITIES} columns={3} />
        </section>
      </div>
    </div>
  );
}

export default PlaceholderShell;