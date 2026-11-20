import * as React from "react";
import { Link } from "wouter";
import {
  PlateHeader,
  PlateKicker,
  EtchedCard,
  CopperplateButton,
  WaxSealBadge,
  HatchDivider,
} from "@/components/ui/copperplate-primitives";
import {
  Cpu,
  Bot,
  Zap,
  Layers,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Code2,
  Terminal,
  Activity,
  Workflow,
  Sparkles,
  GitCommit,
  TrendingUp,
  ShieldCheck,
  Database,
  Server,
  FileCheck,
} from "lucide-react";

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  status: string;
  summary: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  techTags: string[];
  metrics: { value: string; label: string }[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "agent-swarms",
    title: "Autonomous AI Agent Swarms",
    subtitle: "Multi-Agent Operational Orchestration (stateful workflow execution)",
    category: "Business Process Automation & Integrations",
    badge: "Pillar 02",
    status: "Production Architecture",
    summary:
      "A distributed network of self-coordinating autonomous agents that process inbound leads, conduct background verification, validate corporate records, and orchestrate CRM updates without manual human touch.",
    problem:
      "Operational teams were spending 4+ hours daily cross-referencing company filings, verifying identity documents, and manually entering records across fragmented databases and CRM platforms.",
    solution:
      "Engineered a stateful LangGraph agent graph with a supervisor node that distributes sub-tasks to specialized worker agents (Scraper, Parser, Validator, Sync). Includes automated confidence scoring and human-in-the-loop review queues.",
    architectureHighlights: [
      "LangGraph supervisor-worker state machine with checkpoint persistence in Redis",
      "Dynamic model routing between Claude 3.5 Sonnet (complex analysis) and Llama 3 (structured JSON extraction)",
      "Automated fallback retry circuit breakers and dead-letter queues",
      "Sub-1.2s average execution latency across automated operational micro-tasks",
    ],
    techTags: [
      "LangGraph",
      "Python 3.12",
      "Fastify",
      "Supabase",
      "Redis",
      "Claude 3.5 Sonnet",
      "Docker",
    ],
    metrics: [
      { value: "85%", label: "Manual data entry eliminated" },
      { value: "< 1.2s", label: "Average task dispatch latency" },
      { value: "100%", label: "Audit trail logging coverage" },
    ],
  },
  {
    id: "saas-acceleration",
    title: "SaaS MVP Acceleration",
    subtitle: "SaaS MVP Acceleration (4 to 6 week production launches)",
    category: "AI SaaS & Digital Product Engineering",
    badge: "Pillar 01",
    status: "Live & Monetizing",
    summary:
      "Rapid design, full-stack engineering, and cloud deployment of a bespoke generative AI SaaS application completed in 28 calendar days for a seed-stage B2B founder.",
    problem:
      "A domain expert founder needed to validate a generative financial workflow tool to raise seed funding, but traditional development agencies quoted a 6-month delivery timeline and prohibitive costs.",
    solution:
      "Executed a 4-week MVP sprint: established design systems, Next.js 15 App Router architecture, pgvector hybrid search, Stripe subscription billing, and token-streaming copilot interface.",
    architectureHighlights: [
      "Next.js 15 App Router with streaming React Server Components and fluid canvas UI",
      "pgvector hybrid search indexing structured financial metrics with BM25 reranking",
      "End-to-end type safety with TypeScript, Zod, and Prisma ORM",
      "PostHog behavioral telemetry and LangSmith observability for token spend optimization",
    ],
    techTags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "pgvector",
      "GPT-4o",
      "Stripe",
      "Vercel",
    ],
    metrics: [
      { value: "28 Days", label: "Wireframe to production launch" },
      { value: "100%", label: "TypeScript type safety & test pass rate" },
      { value: "< 250ms", label: "Streaming time-to-first-token" },
    ],
  },
  {
    id: "enterprise-automation",
    title: "Enterprise Workflow Automation",
    subtitle: "Enterprise Workflow Automation (CRM, ERP, document pipelines)",
    category: "Business Process Automation & Integrations",
    badge: "Pillar 02",
    status: "Production Pipeline",
    summary:
      "A resilient, high-throughput document intelligence pipeline parsing complex unstructured logistics invoices, performing automated 3-way reconciliation, and syncing records directly into enterprise systems.",
    problem:
      "Cross-border shipping invoices in dozens of languages, formats, and currencies required manual verification by 18 data entry clerks, causing average invoice cycle times of 9 business days.",
    solution:
      "Deployed a resilient document ingestion engine combining visual OCR layout parsing, multimodal vision extraction, fuzzy PO matching, and automated ERP webhook sync with approval exception flags.",
    architectureHighlights: [
      "FastAPI asynchronous worker queue handling concurrent invoice PDF parsings",
      "Multi-modal vision extraction pipeline achieving high accuracy across complex tables",
      "Automated currency conversion and dynamic VAT reconciliation algorithms",
      "Full audit trail logging with cryptographically signed verification timestamps",
    ],
    techTags: [
      "FastAPI",
      "Python 3.12",
      "Celery",
      "Redis",
      "PostgreSQL",
      "AWS S3",
      "Docker",
    ],
    metrics: [
      { value: "9d to 4m", label: "Invoice cycle turnaround" },
      { value: "99.4%", label: "Field extraction accuracy" },
      { value: "100%", label: "ERP synchronization consistency" },
    ],
  },
];

export function WorkPage() {
  const romanNumbers = ["I", "II", "III"];

  return (
    <div className="relative min-h-screen text-[var(--ctl-text)] bg-[var(--ctl-paper)] overflow-hidden">
      {/* ============================================================
          PAGE HEADER
          ============================================================ */}
      <section className="py-20 border-b border-[var(--ctl-line)] bg-[var(--ctl-paper)]">
        <div className="max-w-7xl mx-auto px-6">
          <PlateHeader
            kicker="PORTFOLIO &amp; ARCHIVE"
            title="Work we've done."
            italicWord="Work in progress."
            description="Deep technical case studies of mission-critical AI systems engineered from concept to production scale. Production code, real metrics, and zero vaporware."
          />
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES LEDGER PLATES
          ============================================================ */}
      <section className="py-24 space-y-16 max-w-7xl mx-auto px-6">
        {CASE_STUDIES.map((study, idx) => (\n          <EtchedCard key={study.id} className=\"space-y-8 p-8 sm:p-12\">\n            {/* Plate Top Bar */}\n            <div className=\"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--ctl-line)] pb-6\">\n              <div className=\"flex items-center gap-3\">\n                <span className=\"font-serif text-lg font-bold text-[var(--ctl-ink)]\">\n                  PLATE {romanNumbers[idx]}.\n                </span>\n                <span className=\"text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 border border-[var(--ctl-line)] rounded-[2px] text-[var(--ctl-ink)] bg-[var(--ctl-wash)]\">\n                  {study.badge}\n                </span>\n                <span className=\"text-xs text-[var(--ctl-soft)] uppercase tracking-wider\">\n                  {study.category}\n                </span>\n              </div>\n              <span className=\"text-xs font-serif italic text-[var(--ctl-ink)]\">\n                {study.status}\n              </span>\n            </div>\n\n            {/* Title & Summary */}\n            <div className=\"space-y-3\">\n              <h2 className=\"font-serif text-3xl sm:text-4xl text-[var(--ctl-text)]\">\n                {study.title}\n              </h2>\n              <p className=\"text-sm font-serif italic text-[var(--ctl-ink)]\">\n                {study.subtitle}\n              </p>\n              <p className=\"text-[16px] text-[var(--ctl-soft)] leading-relaxed max-w-4xl pt-1\">\n                {study.summary}\n              </p>\n            </div>\n\n            {/* Metrics Row */}\n            <div className=\"grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-[var(--ctl-line)] bg-[var(--ctl-wash)] -mx-6 sm:-mx-10 px-6 sm:px-10\">\n              {study.metrics.map((m, mIdx) => (\n                <div key={mIdx} className=\"space-y-1\">\n                  <span className=\"font-serif text-3xl sm:text-4xl font-bold text-[var(--ctl-ink)] block\">\n                    {m.value}\n                  </span>\n                  <span className=\"text-xs font-semibold uppercase tracking-wider text-[var(--ctl-soft)]\">\n                    {m.label}\n                  </span>\n                </div>\n              ))}\n            </div>\n\n            {/* Problem & Solution Grid */}\n            <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm\">\n              <div className=\"space-y-2\">\n                <h3 className=\"text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)]\">\n                  The Operational Challenge\n                </h3>\n                <p className=\"text-[var(--ctl-soft)] leading-relaxed\">\n                  {study.problem}\n                </p>\n              </div>\n              <div className=\"space-y-2\">\n                <h3 className=\"text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)]\">\n                  The Engineered Solution\n                </h3>\n                <p className=\"text-[var(--ctl-soft)] leading-relaxed\">\n                  {study.solution}\n                </p>\n              </div>\n            </div>\n\n            {/* Architecture Highlights */}\n            <div className=\"space-y-3 pt-2\">\n              <h3 className=\"text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)]\">\n                Architecture Highlights\n              </h3>\n              <ul className=\"grid grid-cols-1 md:grid-cols-2 gap-2.5 text-sm text-[var(--ctl-soft)]\">\n                {study.architectureHighlights.map((hl, hlIdx) => (\n                  <li key={hlIdx} className=\"flex items-start gap-2.5\">\n                    <CheckCircle2 className=\"w-4 h-4 text-[var(--ctl-ink)] shrink-0 mt-0.5\" />\n                    <span>{hl}</span>\n                  </li>\n                ))}\n              </ul>\n            </div>\n\n            {/* Tech Tags */}\n            <div className=\"pt-4 border-t border-[var(--ctl-line)] flex items-center justify-between flex-wrap gap-4\">\n              <div className=\"flex items-center gap-2 flex-wrap\">\n                <span className=\"text-[11px] font-semibold uppercase tracking-wider text-[var(--ctl-soft)] mr-1\">\n                  Stack:\n                </span>\n                {study.techTags.map((tech) => (\n                  <span\n                    key={tech}\n                    className=\"text-xs px-2.5 py-1 border border-[var(--ctl-line)] rounded-[2px] text-[var(--ctl-text)] font-sans\"\n                  >\n                    {tech}\n                  </span>\n                ))}\n              </div>\n              <Link href=\"/contact\">\n                <CopperplateButton variant=\"ghost\" className=\"h-9 text-xs px-4\">\n                  <span>Scope Similar Project</span>\n                  <ArrowRight className=\"w-3.5 h-3.5\" />\n                </CopperplateButton>\n              </Link>\n            </div>\n          </EtchedCard>\n        ))}\n      </section>\n\n      {/* ============================================================\n          WHY WE BUILD IN PUBLIC\n          ============================================================ */}\n      <section className=\"py-24 border-t border-b border-[var(--ctl-line)] bg-[var(--ctl-wash)]\">\n        <div className=\"max-w-7xl mx-auto px-6\">\n          <div className=\"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center\">\n            <div className=\"lg:col-span-8 space-y-6\">\n              <PlateKicker>PHILOSOPHY &amp; TRANSPARENCY</PlateKicker>\n              <h2 className=\"font-serif text-3xl sm:text-4xl text-[var(--ctl-text)]\">\n                Why We Build in Public\n              </h2>\n              <p className=\"text-[16px] text-[var(--ctl-soft)] leading-relaxed\">\n                In an industry full of synthetic hype, we believe in radical engineering honesty.\n                We share our real benchmarks, our failure modes, our architectural lessons, and\n                the exact trade-offs we make when deploying frontier AI models to production.\n              </p>\n              <p className=\"text-[16px] text-[var(--ctl-soft)] leading-relaxed\">\n                When you work with Proquoment Labs, you see every commit, every design decision,\n                and every latency trace in real time. No black boxes. 100% intellectual property\n                ownership transferred to you upon completion.\n              </p>\n              <div className=\"pt-2\">\n                <Link href=\"/contact\">\n                  <CopperplateButton variant=\"deep\">\n                    <span>Discuss Your Challenge</span>\n                    <ArrowRight className=\"w-4 h-4\" />\n                  </CopperplateButton>\n                </Link>\n              </div>\n            </div>\n            <div className=\"lg:col-span-4 flex justify-center\">\n              <WaxSealBadge size={160} />\n            </div>\n          </div>\n        </div>\n      </section>\n\n      {/* ============================================================\n          FINAL CTA\n          ============================================================ */}\n      <section className=\"py-24 bg-[var(--ctl-paper)] text-center\">\n        <div className=\"max-w-4xl mx-auto px-6 space-y-8\">\n          <PlateKicker className=\"justify-center\">BEGIN AN ENGAGEMENT</PlateKicker>\n          <h2 className=\"font-serif text-4xl sm:text-5xl text-[var(--ctl-text)]\">\n            Have a challenge worth solving?{\" \"}\n            <span className=\"italic text-[var(--ctl-ink)] block font-normal mt-1\">\n              Let&apos;s build something extraordinary.\n            </span>\n          </h2>\n          <p className=\"text-[16px] text-[var(--ctl-soft)] max-w-2xl mx-auto leading-relaxed\">\n            Whether you need a rapid 4-week SaaS MVP or an intelligent workflow automation pipeline, our\n            senior engineering team is ready to begin.\n          </p>\n          <div className=\"pt-4 flex justify-center\">\n            <Link href=\"/contact\">\n              <CopperplateButton variant=\"deep\" className=\"h-12 px-8 text-sm\">\n                <span>Start a Project</span>\n                <ArrowRight className=\"w-4 h-4\" />\n              </CopperplateButton>\n            </Link>\n          </div>\n        </div>\n      </section>\n    </div>\n  );\n}\n\nexport default WorkPage;\n