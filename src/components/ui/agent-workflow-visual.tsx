import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Webhook,
  Bot,
  Database,
  Send,
  MessageSquare,
  ArrowRight,
  ArrowDown,
  Sparkles,
  CheckCircle2,
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  Terminal,
  Activity,
  Layers,
  ShieldCheck,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface AgentWorkflowVisualProps {
  className?: string;
  activeFlow?: boolean;
}

interface ProjectScenario {
  id: string;
  name: string;
  client: string;
  tag: string;
  triggerEvent: {
    inboxPayload: string;
    webhookPayload: string;
  };
  reasoningSteps: string[];
  classifierStats: {
    routing: string;
    accuracy: string;
    latency: string;
    tokens: string;
    cost: string;
  };
  outcomes: {
    crm: string;
    responder: string;
    slackChannel: string;
    slackAlert: string;
  };
}

const PROJECT_SCENARIOS: ProjectScenario[] = [
  {
    id: "procurement",
    name: "Autonomous Invoice Reconciliation",
    client: "Mid-Market B2B Distributor",
    tag: "Supply Chain",
    triggerEvent: {
      inboxPayload: "PDF Invoice #INV-88219 (Apex Industrial, $48,250.00)",
      webhookPayload: "SAP Inbound Goods Receipt #GR-9941 Webhook",
    },
    reasoningSteps: [
      "Extracting 14 invoice line items via Vision Parser (99.8% confidence)...",
      "Cross-referencing SAP ERP Purchase Order #PO-9941 unit costs...",
      "Validating 0.00% freight variance and verified state tax rules...",
      "Generating cryptographic audit signature and authorization payload...",
    ],
    classifierStats: {
      routing: "Multi-Agent LangGraph Swarm",
      accuracy: "99.8% F1 Score",
      latency: "142ms",
      tokens: "1,420 tokens",
      cost: "$0.0028",
    },
    outcomes: {
      crm: "SAP ERP & HubSpot: Invoice matched and queued for ACH payment (#TX-9041).",
      responder: "Payment schedule draft sent to vendor accounting with zero human delay.",
      slackChannel: "#finance-ops",
      slackAlert: "3-Way Match Verified: Invoice #INV-88219 ($48,250) approved automatically.",
    },
  },
  {
    id: "underwriting",
    name: "Algorithmic Underwriting Copilot",
    client: "FinTech Credit SaaS",
    tag: "FinTech",
    triggerEvent: {
      inboxPayload: "SEC 10-K Annual Filing + Audited Balance Sheet (PDF 4.2MB)",
      webhookPayload: "Plaid Financial Accounts & Cashflow Event Stream",
    },
    reasoningSteps: [
      "Parsing debt-to-equity ratio and 12-month EBITDA trajectory...",
      "Evaluating loan covenants against risk criteria in pgvector...",
      "Synthesizing preliminary underwriting memo and confidence scores...",
      "Authorizing credit line recommendation for automated review...",
    ],
    classifierStats: {
      routing: "Claude 3.5 Sonnet Tool Calling",
      accuracy: "99.4% F1 Score",
      latency: "185ms",
      tokens: "2,840 tokens",
      cost: "$0.0042",
    },
    outcomes: {
      crm: "Salesforce Financial Cloud: Risk score 84/100 and credit term sheet logged.",
      responder: "Preliminary term sheet and covenants draft generated for borrower.",
      slackChannel: "#credit-committee",
      slackAlert: "Fast-Track Approval: Borrower qualified for $1.5M facility.",
    },
  },
  {
    id: "healthcare",
    name: "Clinical Intake & HIPAA Triage",
    client: "Telehealth Specialty Provider",
    tag: "Healthcare",
    triggerEvent: {
      inboxPayload: "Patient Digital Intake Form + Lab Blood Panel (PDF 1.8MB)",
      webhookPayload: "EHR Patient Portal Appointment Booking Webhook",
    },
    reasoningSteps: [
      "De-identifying PII data with in-line cryptographic proxy...",
      "Classifying symptom urgency and matching specialty physician guidelines...",
      "Extracting ICD-10 clinical diagnostic codes from lab indicators...",
      "Formatting structured FHIR JSON payload for medical records...",
    ],
    classifierStats: {
      routing: "Private Medical LLM (Fine-Tuned)",
      accuracy: "99.9% F1 Score",
      latency: "128ms",
      tokens: "1,960 tokens",
      cost: "$0.0031",
    },
    outcomes: {
      crm: "Epic EHR: Patient profile synced with diagnostic tags and lab results.",
      responder: "Automated pre-consultation medical briefing delivered to patient.",
      slackChannel: "#clinical-triage",
      slackAlert: "High-Priority Intake: Cardiology patient scheduled for review.",
    },
  },
];

export function AgentWorkflowVisual({
  className,
  activeFlow = true,
}: AgentWorkflowVisualProps) {
  const [pulseStage, setPulseStage] = React.useState<number>(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = React.useState<number>(0);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(activeFlow);
  const [speedMultiplier, setSpeedMultiplier] = React.useState<number>(1);
  const [showTerminal, setShowTerminal] = React.useState<boolean>(true);
  const [executionCount, setExecutionCount] = React.useState<number>(842);

  const rawId = React.useId();
  const cleanId = rawId.replace(/[^a-zA-Z0-9]/g, "");
  const gradId1 = `flowGrad1-${cleanId}`;
  const gradId2 = `flowGrad2-${cleanId}`;

  const currentProject = PROJECT_SCENARIOS[selectedProjectIndex];

  // Stage cycling timer (0: Triggers, 1: Intelligence Core, 2: CRM/ERP, 3: Dispatch & Alert)
  React.useEffect(() => {
    if (!isPlaying) return;
    const intervalDuration = Math.round(2400 / speedMultiplier);
    const interval = setInterval(() => {
      setPulseStage((prev) => {
        const next = (prev + 1) % 4;
        if (next === 0) {
          setExecutionCount((c) => c + 1);
        }
        return next;
      });
    }, intervalDuration);
    return () => clearInterval(interval);
  }, [isPlaying, speedMultiplier]);

  const handleManualStep = () => {
    setPulseStage((prev) => (prev + 1) % 4);
  };

  const handleTriggerSample = () => {
    setPulseStage(0);
    setExecutionCount((c) => c + 1);
    setIsPlaying(true);
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-5xl mx-auto rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] p-6 sm:p-8 transition-all duration-300 shadow-[0_16px_40px_-16px_rgba(16,42,69,0.08)] overflow-hidden",
        className
      )}
      role="region"
      aria-label="Agent Workflow Pipeline Diagram"
    >
      {/* Engraved corner tick marks */}
      <span
        className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-[var(--ctl-line)] pointer-events-none"
        aria-hidden="true"
      />
      <span
        className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-[var(--ctl-line)] pointer-events-none"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-[var(--ctl-line)] pointer-events-none"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-[var(--ctl-line)] pointer-events-none"
        aria-hidden="true"
      />

      {/* ============================================================
          TOP HEADER: Brand Plate & Telemetry Pills
          ============================================================ */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[var(--ctl-line)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[2px] bg-[var(--ctl-wash)] border border-[var(--ctl-line)] flex items-center justify-center text-[var(--ctl-ink)] shrink-0 shadow-sm">
            <Bot className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-serif text-xl sm:text-2xl text-[var(--ctl-text)] font-normal leading-tight">
                Autonomous Workflow Pipeline
              </h3>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-[var(--ctl-wash)] border border-[var(--ctl-line)] text-[var(--ctl-ink)]">
                Pillar 02
              </span>
            </div>
            <p className="text-xs text-[var(--ctl-soft)] mt-0.5">
              Event Trigger to Neural Classifier to Multi-Channel Dispatch
            </p>
          </div>
        </div>

        {/* Live Status Indicator & Telemetry */}
        <div className="flex items-center gap-3 text-xs flex-wrap">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-wash)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="font-semibold text-[var(--ctl-ink)]">Pipeline Active</span>
            <span className="text-[var(--ctl-line)]">|</span>
            <span className="font-mono text-[var(--ctl-soft)]">
              Latency: {currentProject.classifierStats.latency}
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[var(--ctl-soft)] font-mono text-[11px]">
            <span>Runs: #{executionCount}</span>
            <span className="text-[var(--ctl-line)]">|</span>
            <span className="text-emerald-700 font-semibold">99.8% Verified</span>
          </div>
        </div>
      </div>

      {/* ============================================================
          INTERACTIVE CONTROLS BAR: Project Switcher & Simulation Controls
          ============================================================ */}
      <div className="mb-8 p-3 rounded-[2px] bg-[var(--ctl-wash)] border border-[var(--ctl-line)] flex flex-wrap items-center justify-between gap-4">
        {/* Project Selector Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ctl-soft)] mr-1">
            Live Scenario:
          </span>
          {PROJECT_SCENARIOS.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => {
                setSelectedProjectIndex(idx);
                setPulseStage(0);
              }}
              className={cn(
                "px-3 py-1 text-xs rounded-[2px] border transition-all flex items-center gap-1.5 font-medium",
                selectedProjectIndex === idx
                  ? "bg-[var(--ctl-paper)] border-[var(--ctl-ink)] text-[var(--ctl-ink)] shadow-sm font-semibold"
                  : "bg-transparent border-transparent text-[var(--ctl-soft)] hover:text-[var(--ctl-text)] hover:border-[var(--ctl-line)]"
              )}
            >
              <span>{proj.name}</span>
              <span className="text-[10px] text-[var(--ctl-soft)] font-mono">
                ({proj.tag})
              </span>
            </button>
          ))}
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
            className="h-8 px-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] hover:border-[var(--ctl-ink)] text-[var(--ctl-ink)] text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Play</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleManualStep}
            aria-label="Step forward one stage"
            className="h-8 px-2.5 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] hover:border-[var(--ctl-ink)] text-[var(--ctl-text)] text-xs inline-flex items-center gap-1 transition-colors"
          >
            <SkipForward className="w-3.5 h-3.5 text-[var(--ctl-ink)]" />
            <span>Step</span>
          </button>

          <button
            type="button"
            onClick={handleTriggerSample}
            aria-label="Simulate inbound event"
            className="h-8 px-3 rounded-[2px] border border-[var(--ctl-ink)] bg-[var(--ctl-ink)] text-[var(--ctl-paper)] hover:opacity-90 text-xs font-semibold inline-flex items-center gap-1.5 transition-opacity"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trigger Event</span>
          </button>

          <button
            type="button"
            onClick={() => setSpeedMultiplier((s) => (s === 1 ? 2 : 1))}
            className="h-8 px-2 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)] text-[11px] font-mono text-[var(--ctl-soft)] hover:text-[var(--ctl-text)]"
            title="Toggle playback speed"
          >
            {speedMultiplier}x
          </button>

          <button
            type="button"
            onClick={() => setShowTerminal(!showTerminal)}
            className={cn(
              "h-8 px-2 rounded-[2px] border text-xs inline-flex items-center gap-1 transition-colors",
              showTerminal
                ? "border-[var(--ctl-ink)] text-[var(--ctl-ink)] bg-[var(--ctl-paper)]"
                : "border-[var(--ctl-line)] text-[var(--ctl-soft)] hover:text-[var(--ctl-text)]"
            )}
            title="Toggle live execution log"
          >
            <Terminal className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ============================================================
          DESKTOP 3-COLUMN PIPELINE (hidden lg:grid)
          ============================================================ */}
      <div className="hidden lg:grid grid-cols-12 gap-4 items-center relative z-10">
        {/* COLUMN 1: Triggers & Inputs (Cols 1 to 3) */}
        <div className="col-span-3 space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--ctl-ink)] font-semibold flex items-center justify-between border-b border-[var(--ctl-line)] pb-1.5">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--ctl-ink)]" />
              <span>01. Trigger / Input</span>
            </span>
            <span className="text-[10px] text-[var(--ctl-soft)] font-serif">Ingestion</span>
          </div>

          {/* Node 1A: Email Inbox */}
          <motion.div
            animate={{
              borderColor:
                pulseStage === 0 ? "var(--ctl-ink)" : "var(--ctl-line)",
              boxShadow:
                pulseStage === 0
                  ? "0 4px 18px -4px rgba(34, 56, 196, 0.2)"
                  : "none",
            }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-[2px] bg-[var(--ctl-paper)] border transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2 font-serif text-base text-[var(--ctl-text)]">
                <Mail className="w-4 h-4 text-[var(--ctl-ink)]" strokeWidth={1.5} />
                <span>Email Inbox</span>
              </div>
              <span
                className={cn(
                  "text-[10px] font-mono px-2 py-0.5 rounded-[2px] border transition-colors",
                  pulseStage === 0
                    ? "bg-[var(--ctl-ink)] text-[var(--ctl-paper)] border-[var(--ctl-ink)]"
                    : "bg-[var(--ctl-wash)] text-[var(--ctl-ink)] border-[var(--ctl-line)]"
                )}
              >
                {pulseStage === 0 ? "Active Ingestion" : "Listening"}
              </span>
            </div>
            <p className="text-xs text-[var(--ctl-soft)] leading-relaxed">
              {currentProject.triggerEvent.inboxPayload}
            </p>
          </motion.div>

          {/* Node 1B: Webhook */}
          <motion.div
            animate={{
              borderColor:
                pulseStage === 0 ? "var(--ctl-ink)" : "var(--ctl-line)",
              boxShadow:
                pulseStage === 0
                  ? "0 4px 18px -4px rgba(34, 56, 196, 0.2)"
                  : "none",
            }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-[2px] bg-[var(--ctl-paper)] border transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2 font-serif text-base text-[var(--ctl-text)]">
                <Webhook className="w-4 h-4 text-[var(--ctl-ink)]" strokeWidth={1.5} />
                <span>Webhook</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-[2px] bg-[var(--ctl-wash)] text-[var(--ctl-soft)] border border-[var(--ctl-line)]">
                Event API
              </span>
            </div>
            <p className="text-xs text-[var(--ctl-soft)] leading-relaxed">
              {currentProject.triggerEvent.webhookPayload}
            </p>
          </motion.div>
        </div>

        {/* CONNECTOR 1: Inputs to Classifier (Col 4) */}
        <div className="col-span-1 flex flex-col items-center justify-center">
          <svg className="w-full h-36 overflow-visible" viewBox="0 0 60 120">
            <defs>
              <linearGradient id={gradId1} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#102a45" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#2238c4" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {/* Top branch line */}
            <path
              d="M 5,28 C 35,28 25,60 55,60"
              fill="none"
              stroke={`url(#${gradId1})`}
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-pulse"
            />
            {/* Bottom branch line */}
            <path
              d="M 5,92 C 35,92 25,60 55,60"
              fill="none"
              stroke={`url(#${gradId1})`}
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-pulse"
            />
            {/* Moving pulse dot */}
            <circle
              cx={pulseStage === 0 ? "10" : pulseStage === 1 ? "52" : "32"}
              cy="60"
              r="4"
              fill="var(--ctl-ink)"
              className="transition-all duration-500 shadow-sm"
            />
          </svg>
        </div>

        {/* COLUMN 2: Neural Classifier & Intelligence Core (Cols 5 to 8) */}
        <div className="col-span-4">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--ctl-ink)] font-semibold flex items-center justify-between border-b border-[var(--ctl-line)] pb-1.5 mb-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--ctl-ink)]" />
              <span>02. Intelligence Core</span>
            </span>
            <span className="text-[10px] text-[var(--ctl-soft)] font-serif">Reasoning</span>
          </div>

          <motion.div
            animate={{
              borderColor:
                pulseStage === 1 ? "var(--ctl-ink)" : "var(--ctl-line)",
              boxShadow:
                pulseStage === 1
                  ? "0 6px 24px -6px rgba(34, 56, 196, 0.28)"
                  : "none",
              scale: pulseStage === 1 ? 1.01 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="p-5 rounded-[2px] bg-[var(--ctl-paper)] border border-[var(--ctl-line)] relative space-y-4"
          >
            {/* Header of Intelligence Core */}
            <div className="flex items-center justify-between border-b border-[var(--ctl-line)] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-[2px] bg-[var(--ctl-wash)] border border-[var(--ctl-line)] flex items-center justify-center text-[var(--ctl-ink)]">
                  <Bot className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[var(--ctl-text)] font-semibold">
                    AI Classifier
                  </h4>
                  <span className="text-[11px] text-[var(--ctl-soft)]">
                    {currentProject.client}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 px-2.5 py-1 rounded-[2px] bg-[var(--ctl-wash)] text-[var(--ctl-ink)] border border-[var(--ctl-line)] text-[10px] font-mono">
                <Sparkles className="w-3 h-3 text-[var(--ctl-ink)]" />
                <span>Inference &lt; 200ms</span>
              </div>
            </div>

            {/* Live Reasoning Step Display */}
            <div className="p-3 rounded-[2px] bg-[var(--ctl-wash)] border border-[var(--ctl-line)] space-y-1.5">
              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--ctl-soft)] uppercase tracking-wider">
                <span>Active Execution Step:</span>
                <span className="text-[var(--ctl-ink)] font-semibold">
                  Step {pulseStage + 1} of 4
                </span>
              </div>
              <p className="text-xs text-[var(--ctl-text)] font-sans leading-relaxed min-h-[38px] flex items-center">
                {currentProject.reasoningSteps[pulseStage] ||
                  currentProject.reasoningSteps[0]}
              </p>
            </div>

            {/* Specifications & Metrics Grid */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="p-2.5 rounded-[2px] bg-[var(--ctl-wash)] border border-[var(--ctl-line)]">
                <span className="text-[9px] uppercase tracking-wider text-[var(--ctl-soft)] block">
                  Routing Framework
                </span>
                <span className="text-[var(--ctl-text)] font-semibold truncate block">
                  {currentProject.classifierStats.routing}
                </span>
              </div>
              <div className="p-2.5 rounded-[2px] bg-[var(--ctl-wash)] border border-[var(--ctl-line)]">
                <span className="text-[9px] uppercase tracking-wider text-[var(--ctl-soft)] block">
                  Benchmark Accuracy
                </span>
                <span className="text-[var(--ctl-ink)] font-semibold block">
                  {currentProject.classifierStats.accuracy}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CONNECTOR 2: Classifier to Outcomes (Col 9) */}
        <div className="col-span-1 flex flex-col items-center justify-center">
          <svg className="w-full h-44 overflow-visible" viewBox="0 0 60 160">
            <defs>
              <linearGradient id={gradId2} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2238c4" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#102a45" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {/* Top path to CRM Update */}
            <path
              d="M 5,80 C 30,80 30,28 55,28"
              fill="none"
              stroke={`url(#${gradId2})`}
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-pulse"
            />
            {/* Bottom path to Auto-Responder */}
            <path
              d="M 5,80 C 30,80 30,132 55,132"
              fill="none"
              stroke={`url(#${gradId2})`}
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-pulse"
            />
            {/* Moving pulse dot */}
            <circle
              cx={pulseStage === 1 ? "10" : pulseStage >= 2 ? "52" : "30"}
              cy="80"
              r="4"
              fill="var(--ctl-ink)"
              className="transition-all duration-500 shadow-sm"
            />
          </svg>
        </div>

        {/* COLUMN 3: Outcomes & Escalation (Cols 10 to 12) */}
        <div className="col-span-3 space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--ctl-ink)] font-semibold flex items-center justify-between border-b border-[var(--ctl-line)] pb-1.5">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>03. Outcomes &amp; Escalation</span>
            </span>
            <span className="text-[10px] text-[var(--ctl-soft)] font-serif">Execution</span>
          </div>

          {/* Outcome 1: CRM Update */}
          <motion.div
            animate={{
              borderColor:
                pulseStage === 2 ? "var(--ctl-ink)" : "var(--ctl-line)",
              boxShadow:
                pulseStage === 2
                  ? "0 4px 18px -4px rgba(34, 56, 196, 0.2)"
                  : "none",
            }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-[2px] bg-[var(--ctl-paper)] border transition-all"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2 font-serif text-base text-[var(--ctl-text)]">
                <Database className="w-4 h-4 text-[var(--ctl-ink)]" strokeWidth={1.5} />
                <span>CRM Update</span>
              </div>
              <CheckCircle2
                className={cn(
                  "w-4 h-4 transition-colors",
                  pulseStage >= 2 ? "text-emerald-600" : "text-[var(--ctl-soft)]"
                )}
              />
            </div>
            <p className="text-xs text-[var(--ctl-soft)] leading-relaxed">
              {currentProject.outcomes.crm}
            </p>
          </motion.div>

          {/* Outcome 2 & 3: Auto-Responder to Slack Alert */}
          <motion.div
            animate={{
              borderColor:
                pulseStage >= 2 ? "var(--ctl-ink)" : "var(--ctl-line)",
              boxShadow:
                pulseStage >= 2
                  ? "0 4px 20px -4px rgba(34, 56, 196, 0.22)"
                  : "none",
            }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-[2px] bg-[var(--ctl-paper)] border space-y-3 transition-all"
          >
            {/* Auto-Responder */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 font-serif text-base text-[var(--ctl-text)]">
                  <Send className="w-4 h-4 text-[var(--ctl-ink)]" strokeWidth={1.5} />
                  <span>Auto-Responder</span>
                </div>
                <span className="text-[10px] font-mono text-[var(--ctl-ink)]">
                  Personalized
                </span>
              </div>
              <p className="text-xs text-[var(--ctl-soft)] leading-relaxed">
                {currentProject.outcomes.responder}
              </p>
            </div>

            {/* Connecting line */}
            <div className="flex items-center justify-center text-[var(--ctl-soft)] gap-1 text-[10px] font-mono border-t border-[var(--ctl-line)] pt-2">
              <span className="w-2 h-0.5 bg-[var(--ctl-line)] rounded" />
              <ArrowDown className="w-3 h-3 text-[var(--ctl-ink)]" />
              <span>Verified threshold trigger</span>
              <span className="w-2 h-0.5 bg-[var(--ctl-line)] rounded" />
            </div>

            {/* Sub-node: Slack Alert */}
            <div
              className={cn(
                "p-2.5 rounded-[2px] border flex items-center justify-between transition-all duration-300",
                pulseStage === 3
                  ? "bg-[var(--ctl-wash)] border-[var(--ctl-ink)] shadow-sm"
                  : "bg-[var(--ctl-wash)] border-[var(--ctl-line)]"
              )}
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[var(--ctl-ink)]" />
                <span className="text-xs font-semibold text-[var(--ctl-text)]">
                  Slack Alert
                </span>
              </div>
              <span className="text-[10px] font-mono text-[var(--ctl-ink)] bg-[var(--ctl-paper)] px-2 py-0.5 rounded-[2px] border border-[var(--ctl-line)]">
                Pushed to {currentProject.outcomes.slackChannel}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================================
          MOBILE VERTICAL PIPELINE (lg:hidden)
          ============================================================ */}
      <div className="lg:hidden space-y-4 relative z-10">
        {/* Step 1: Input */}
        <div
          className={cn(
            "p-4 rounded-[2px] bg-[var(--ctl-paper)] border transition-all space-y-2",
            pulseStage === 0
              ? "border-[var(--ctl-ink)] shadow-sm"
              : "border-[var(--ctl-line)]"
          )}
        >
          <div className="text-[11px] font-mono uppercase text-[var(--ctl-ink)] font-semibold flex items-center justify-between">
            <span>01. Trigger / Input</span>
            <span className="text-[10px] text-[var(--ctl-soft)] font-serif">Ingestion</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-serif font-semibold text-[var(--ctl-text)] flex items-center gap-2">
              <Mail className="w-4 h-4 text-[var(--ctl-ink)]" />
              <span>Email Inbox / Webhook</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-[2px] bg-[var(--ctl-wash)] text-[var(--ctl-ink)] border border-[var(--ctl-line)]">
              {pulseStage === 0 ? "Ingesting" : "Listening"}
            </span>
          </div>
          <p className="text-xs text-[var(--ctl-soft)]">
            {currentProject.triggerEvent.inboxPayload}
          </p>
        </div>

        {/* Downward indicator */}
        <div className="flex justify-center">
          <ArrowDown className="w-4 h-4 text-[var(--ctl-ink)] animate-bounce" />
        </div>

        {/* Step 2: Classifier */}
        <div
          className={cn(
            "p-5 rounded-[2px] bg-[var(--ctl-paper)] border transition-all space-y-3",
            pulseStage === 1
              ? "border-[var(--ctl-ink)] shadow-sm"
              : "border-[var(--ctl-line)]"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase text-[var(--ctl-ink)] font-semibold">
              02. Intelligence Core
            </span>
            <span className="text-[10px] font-mono text-[var(--ctl-ink)] px-2 py-0.5 rounded-[2px] bg-[var(--ctl-wash)] border border-[var(--ctl-line)]">
              {currentProject.classifierStats.latency}
            </span>
          </div>
          <div className="text-base font-serif font-semibold text-[var(--ctl-text)] flex items-center gap-2">
            <Bot className="w-4 h-4 text-[var(--ctl-ink)]" />
            <span>AI Classifier ({currentProject.client})</span>
          </div>
          <div className="p-2.5 rounded-[2px] bg-[var(--ctl-wash)] border border-[var(--ctl-line)] text-xs text-[var(--ctl-text)]">
            {currentProject.reasoningSteps[pulseStage] || currentProject.reasoningSteps[0]}
          </div>
        </div>

        {/* Downward indicator */}
        <div className="flex justify-center">
          <ArrowDown className="w-4 h-4 text-[var(--ctl-ink)] animate-bounce" />
        </div>

        {/* Step 3: Outcomes */}
        <div className="space-y-3">
          <div
            className={cn(
              "p-4 rounded-[2px] bg-[var(--ctl-paper)] border transition-all flex items-center justify-between",
              pulseStage === 2
                ? "border-[var(--ctl-ink)] shadow-sm"
                : "border-[var(--ctl-line)]"
            )}
          >
            <div>
              <div className="text-sm font-serif font-semibold text-[var(--ctl-text)] flex items-center gap-2">
                <Database className="w-4 h-4 text-[var(--ctl-ink)]" />
                <span>CRM Update</span>
              </div>
              <p className="text-xs text-[var(--ctl-soft)] mt-0.5">
                {currentProject.outcomes.crm}
              </p>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          </div>

          <div
            className={cn(
              "p-4 rounded-[2px] bg-[var(--ctl-paper)] border transition-all space-y-3",
              pulseStage >= 2
                ? "border-[var(--ctl-ink)] shadow-sm"
                : "border-[var(--ctl-line)]"
            )}
          >
            <div>
              <div className="text-sm font-serif font-semibold text-[var(--ctl-text)] flex items-center gap-2">
                <Send className="w-4 h-4 text-[var(--ctl-ink)]" />
                <span>Auto-Responder</span>
              </div>
              <p className="text-xs text-[var(--ctl-soft)] mt-0.5">
                {currentProject.outcomes.responder}
              </p>
            </div>

            <div
              className={cn(
                "p-2.5 rounded-[2px] border transition-all flex items-center justify-between",
                pulseStage === 3
                  ? "bg-[var(--ctl-wash)] border-[var(--ctl-ink)]"
                  : "bg-[var(--ctl-wash)] border-[var(--ctl-line)]"
              )}
            >
              <span className="text-xs font-semibold text-[var(--ctl-text)] flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[var(--ctl-ink)]" />
                <span>Slack Alert</span>
              </span>
              <span className="text-[10px] font-mono text-[var(--ctl-ink)]">
                Pushed to {currentProject.outcomes.slackChannel}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          COLLAPSIBLE LIVE EXECUTION TERMINAL (JSON-RPC Telemetry)
          ============================================================ */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-8 pt-6 border-t border-[var(--ctl-line)]"
          >
            <div className="p-3.5 rounded-[2px] bg-[var(--ctl-wash)] border border-[var(--ctl-line)] font-mono text-xs space-y-2">
              <div className="flex items-center justify-between border-b border-[var(--ctl-line)] pb-2 text-[10px] text-[var(--ctl-soft)]">
                <span className="flex items-center gap-1.5 font-semibold text-[var(--ctl-ink)]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>LIVE EXECUTION STREAM (JSON-RPC)</span>
                </span>
                <span className="text-emerald-700 font-semibold">
                  SLA STATUS: DETERMINISTIC
                </span>
              </div>

              <div className="space-y-1 text-[11px] leading-relaxed text-[var(--ctl-text)]">
                <div className="flex items-start gap-2">
                  <span className="text-[var(--ctl-soft)]">[T+0ms]</span>
                  <span className="text-[var(--ctl-ink)] font-semibold">[TRIGGER]</span>
                  <span>{currentProject.triggerEvent.inboxPayload}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[var(--ctl-soft)]">[T+45ms]</span>
                  <span className="text-[var(--ctl-ink)] font-semibold">[TOOL_CALL]</span>
                  <span>
                    pgvector.hybrid_query(index=&quot;{currentProject.id}&quot;, limit=5)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[var(--ctl-soft)]">[T+110ms]</span>
                  <span className="text-[var(--ctl-ink)] font-semibold">[REASONING]</span>
                  <span>{currentProject.reasoningSteps[pulseStage]}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[var(--ctl-soft)]">[T+142ms]</span>
                  <span className="text-emerald-700 font-semibold">[DISPATCH]</span>
                  <span>{currentProject.outcomes.slackAlert}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AgentWorkflowVisual;
