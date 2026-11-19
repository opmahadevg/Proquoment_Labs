import * as React from "react";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ArrowDown, Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
  highlight?: string;
  className?: string;
  icon?: LucideIcon;
  deliverables?: string[];
}

const PREMIUM_EASE = [0.32, 0.72, 0, 1] as const;

export function ProcessStep({
  number,
  title,
  description,
  isLast = false,
  highlight,
  className,
  icon: Icon,
  deliverables,
}: ProcessStepProps) {
  const formattedNumber = String(number).padStart(2, "0");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={cn("relative flex flex-col items-stretch w-full", className)}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{
          duration: 0.5,
          delay: (number - 1) * 0.08,
          ease: PREMIUM_EASE,
        }}
        className="group rounded-xl p-6 flex flex-col justify-between h-full relative overflow-hidden bg-card/75 border border-white/5 hover:border-white/15 transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
      >
        <div>
          {/* Top Header: Badge + Highlight */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              {/* Blue number badge */}
              <div className="w-9 h-9 rounded-lg bg-primary text-white font-bold font-mono text-sm flex items-center justify-center shadow-md shadow-primary/25 shrink-0 border border-primary/40">
                {formattedNumber}
              </div>

              {Icon && (
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-400 group-hover:text-primary transition-colors">
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
              )}
            </div>

            {highlight && (
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-medium px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-blue-300">
                {highlight}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-2 group-hover:text-white transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-zinc-400 leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Optional deliverables */}
        {deliverables && deliverables.length > 0 && (
          <div className="mt-5 pt-4 border-t border-white/5 space-y-1.5 relative z-10">
            <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
              Deliverables:
            </span>
            <ul className="space-y-1 text-xs text-zinc-400">
              {deliverables.map((d, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>

      {/* Step connection arrow for non-last steps */}
      {!isLast && (
        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#0D0F14] border border-white/10 items-center justify-center text-zinc-400 shadow-sm pointer-events-none">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      )}

      {/* Mobile step connection indicator */}
      {!isLast && (
        <div className="lg:hidden flex items-center justify-center py-2 text-zinc-600">
          <ArrowDown className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}

export default ProcessStep;
