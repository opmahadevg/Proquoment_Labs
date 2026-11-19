import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DifferentiatorCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  badge?: string;
  metric?: string;
  metricLabel?: string;
  children?: React.ReactNode;
}

export function DifferentiatorCard({
  icon: Icon,
  title,
  description,
  className,
  badge,
  metric,
  metricLabel,
  children,
}: DifferentiatorCardProps) {
  return (
    <div
      className={cn(
        "group rounded-xl p-6 sm:p-7 flex flex-col justify-between h-full relative overflow-hidden bg-card/80 border border-white/5 hover:border-white/15 transition-all duration-300 hover:scale-[1.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className
      )}
      style={{
        transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)",
        boxShadow: "0 0 24px -6px var(--glow-blue)",
      }}
    >
      <div>
        {/* Header: Icon + Badge */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div
            className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-blue-400 group-hover:text-white group-hover:bg-primary/25 transition-all shadow-sm"
          >
            <Icon className="w-5 h-5" strokeWidth={1.5} />
          </div>

          {badge && (
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-medium px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 group-hover:border-primary/30 group-hover:text-blue-300 transition-colors">
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-zinc-100 tracking-tight mb-2.5 group-hover:text-white transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed font-normal">
          {description}
        </p>

        {children && <div className="mt-4">{children}</div>}
      </div>

      {/* Optional Metric Stat */}
      {metric && (
        <div className="mt-6 pt-4 border-t border-white/5 flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
            {metric}
          </span>
          {metricLabel && (
            <span className="text-xs font-mono text-zinc-400">
              {metricLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default DifferentiatorCard;
