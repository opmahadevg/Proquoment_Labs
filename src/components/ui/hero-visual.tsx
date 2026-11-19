import * as React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  CheckCircle2,
  Loader2,
  Clock,
  TrendingUp,
  ShieldCheck,
  Bot,
  Activity,
  Terminal,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface AgentTask {
  id: string;
  title: string;
  system: string;
  duration?: string;
}

export const DEFAULT_AGENT_TASKS: AgentTask[] = [
  {
    id: "crm-analysis",
    title: "Analysing CRM data",
    system: "PostgreSQL / Sales CRM",
    duration: "1.2s",
  },
  {
    id: "email-drafting",
    title: "Drafting email sequences",
    system: "Claude 3.5 Sonnet",
    duration: "2.4s",
  },
  {
    id: "lead-scoring",
    title: "Scoring 847 leads",
    system: "HubSpot • ML Pipeline",
    duration: "In progress",
  },
  {
    id: "hubspot-sync",
    title: "Syncing to HubSpot",
    system: "REST API Webhook",
    duration: "Queued",
  },
  {
    id: "outreach-campaign",
    title: "Triggering outreach campaign",
    system: "Smart Delivery Engine",
    duration: "Queued",
  },
];

export interface HeroVisualProps {
  className?: string;
  autoCycle?: boolean;
  initialStep?: number;
  tasks?: AgentTask[];
}

export function HeroVisual({
  className,
  autoCycle = true,
  initialStep = 2,
  tasks = DEFAULT_AGENT_TASKS,
}: HeroVisualProps) {
  // Step represents index of currently active task (0 to tasks.length)
  const safeInitial = tasks.length > 0 ? Math.max(0, Math.min(initialStep, tasks.length)) : 0;
  const [currentStep, setCurrentStep] = React.useState<number>(safeInitial);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (!autoCycle || isPaused || tasks.length === 0) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= tasks.length) {
          return 0;
        }
        return prev + 1;
      });
    }, 3200);

    return () => clearInterval(interval);
  }, [autoCycle, isPaused, tasks.length]);

  const completedCount = tasks.length > 0 ? Math.min(currentStep, tasks.length) : 0;
  const progressPercent = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  return (
    <div
      className={cn("relative w-full max-w-xl mx-auto select-none outline-none", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
      role="region"
      aria-label="Proquoment Labs Agent Live Task Monitor"
    >
      {/* Subtle directional light sheen behind card */}
      <div className="absolute -inset-1 rounded-3xl bg-primary/10 blur-xl opacity-50 pointer-events-none" />

      {/* Floating Metric Badge 1: Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute -top-4 -right-2 sm:-right-4 z-30 animate-float"
      >
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0F14]/95 border border-white/10 shadow-xl backdrop-blur-md text-xs font-mono text-zinc-200">
          <div className="p-1 rounded-full bg-blue-500/10 text-blue-400">
            <TrendingUp className="w-3.5 h-3.5" />
          </div>
          <span>12 hrs saved today</span>
        </div>
      </motion.div>

      {/* Floating Metric Badge 2: Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute -bottom-4 -left-2 sm:-left-4 z-30 animate-float"
        style={{ animationDelay: "1.8s" }}
      >
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0F14]/95 border border-emerald-500/20 shadow-xl backdrop-blur-md text-xs font-mono text-zinc-200">
          <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <span>98% task completion</span>
        </div>
      </motion.div>

      {/* Floating Metric Badge 3: Top Left subtle badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="hidden sm:flex absolute -top-4 -left-4 z-30 items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D0F14]/95 border border-white/10 shadow-lg backdrop-blur-md text-[11px] font-mono text-zinc-300 animate-float"
        style={{ animationDelay: "3.2s" }}
      >
        <Bot className="w-3.5 h-3.5 text-primary" />
        <span>3 agents running</span>
      </motion.div>

      {/* Main Machined Terminal Card */}
      <div className="relative rounded-2xl border border-primary/20 bg-[#0A0C10]/95 backdrop-blur-xl shadow-2xl shadow-primary/20 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            {/* Window Controls */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            </div>

            {/* Title */}
            <div className="flex items-center gap-1.5 font-semibold text-xs sm:text-sm text-zinc-100 tracking-tight">
              <Zap className="w-4 h-4 text-primary fill-primary" />
              <span>⚡ Proquoment Labs Agent</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Spec/Action analysis mode */}
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/10 text-[11px] font-mono text-zinc-400">
              <Terminal className="w-3 h-3 text-primary" />
              <span>Spec / Action Mode</span>
            </span>

            {/* Live Indicator */}
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>● Live</span>
            </div>
          </div>
        </div>

        {/* Task List Body */}
        <div className="p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-mono mb-1">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-primary" />
              <span>Pipeline Queue ({completedCount}/{tasks.length} Completed)</span>
            </span>
            <span className="tabular-nums font-semibold text-zinc-300">{progressPercent}% Complete</span>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Tasks Container */}
          <div className="pt-2 space-y-2">
            {tasks.map((task, index) => {
              const isDone = index < currentStep;
              const isActive = index === currentStep;
              const isQueued = index > currentStep;

              return (
                <motion.div
                  key={task.id}
                  layout
                  initial={{ opacity: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: isActive ? 1.008 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "flex items-center justify-between gap-3 p-3 rounded-xl border transition-all duration-200",
                    isDone && "bg-white/[0.02] border-white/5 text-zinc-400",
                    isActive &&
                      "bg-primary/10 border-primary/30 shadow-md shadow-primary/10 text-white",
                    isQueued && "bg-white/[0.01] border-white/5 text-zinc-500"
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Status Icon */}
                    <div className="shrink-0 flex items-center justify-center">
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : isActive ? (
                        <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                      ) : (
                        <Clock className="w-4 h-4 text-zinc-600" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <p
                        className={cn(
                          "text-xs sm:text-sm font-medium truncate",
                          isDone && "text-zinc-400 line-through decoration-zinc-600",
                          isActive && "text-zinc-100 font-semibold",
                          isQueued && "text-zinc-500"
                        )}
                      >
                        {task.title}
                      </p>
                      <p className="text-[11px] font-mono text-zinc-500 truncate">
                        {task.system}
                      </p>
                    </div>
                  </div>

                  {/* Status Pill */}
                  <div className="shrink-0 font-mono text-[11px]">
                    {isDone && (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Done
                      </span>
                    )}
                    {isActive && (
                      <span className="px-2 py-0.5 rounded-md bg-primary/20 text-blue-300 border border-primary/30 animate-pulse">
                        Active
                      </span>
                    )}
                    {isQueued && (
                      <span className="px-2 py-0.5 rounded-md bg-white/5 text-zinc-500 border border-white/5">
                        Queued
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer Status Bar */}
        <div className="border-t border-white/10 px-4 py-2.5 bg-white/[0.02] flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-zinc-400">Throughput:</span>
            <span className="text-blue-400 font-semibold">48.2 ops/s</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-500">Latency: 140ms</span>
            <span className="text-zinc-600">•</span>
            <span className="text-emerald-400">SLA 99.98%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;
