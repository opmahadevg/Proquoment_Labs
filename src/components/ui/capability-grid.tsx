import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { EtchedCard } from "@/components/ui/copperplate-primitives";

export interface CapabilityItem {
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
  deliverable?: string;
  benchmark?: string;
}

export interface CapabilityGridProps {
  capabilities: CapabilityItem[];
  items?: CapabilityItem[];
  // Required prop for test contract: capabilities: CapabilityItem[]
  columns?: 2 | 3;
  className?: string;
  "aria-label"?: string;
  ariaLabel?: string;
  variant?: "etched" | "dark" | "default";
}

export function CapabilityGrid({
  capabilities,
  items,
  columns = 3,
  className,
  ariaLabel,
  "aria-label": customAriaLabel,
  variant = "etched",
}: CapabilityGridProps) {
  const columnClasses =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  const list = Array.isArray(capabilities)
    ? capabilities
    : Array.isArray(items)
    ? items
    : [];

  const isLegacyDark = variant === "dark";

  return (
    <div
      className={cn("grid gap-8", columnClasses, className)}
      role="list"
      aria-label={ariaLabel || customAriaLabel || "Capabilities and Features Grid"}
    >
      {list.map((item, index) => {
        const Icon = item.icon;

        if (isLegacyDark) {
          return (
            <div
              key={`${item.title}-${index}`}
              role="listitem"
              className="group rounded-xl p-5 sm:p-6 flex flex-col justify-between h-full relative overflow-hidden bg-card/75 border border-white/5 hover:border-primary/40 transition-all duration-200 hover:-translate-y-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all shadow-sm">
                    {Icon && (
                      <Icon
                        className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>

                  {item.tag && (
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-medium text-zinc-400 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 group-hover:text-blue-300 transition-colors">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h4 className="text-base font-semibold text-zinc-100 tracking-tight mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h4>

                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                <span>Capability {String(index + 1).padStart(2, "0")}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-primary transition-colors" />
              </div>
            </div>
          );
        }

        return (
          <EtchedCard
            as="div"
            role="listitem"
            key={`${item.title}-${index}`}
            className="flex flex-col justify-between space-y-6 h-full"
          >
            <div className="space-y-4">
              {/* Card Header: Tag & Capability Index */}
              <div className="border-b border-[var(--ctl-line)] pb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {Icon && (
                    <div className="w-6 h-6 rounded-[2px] bg-[var(--ctl-wash)] border border-[var(--ctl-line)] flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[var(--ctl-ink)]" strokeWidth={1.5} />
                    </div>
                  )}
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--ctl-ink)]">
                    {item.tag || "CAPABILITY"}
                  </span>
                </div>
                <span className="text-xs font-serif text-[var(--ctl-soft)]">
                  Capability {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title: high-contrast copperplate serif typography */}
              <h3 className="font-serif text-2xl text-[var(--ctl-text)] leading-snug">
                {item.title}
              </h3>

              {/* Structured subsections matching Real-World Engagements */}
              <div className="space-y-3 text-sm text-[var(--ctl-soft)]">
                <div>
                  <strong className="text-[var(--ctl-ink)] font-semibold block text-xs uppercase tracking-wider mb-1">
                    System Architecture:
                  </strong>
                  <p className="leading-relaxed">{item.description}</p>
                </div>

                {item.deliverable && (
                  <div>
                    <strong className="text-[var(--ctl-ink)] font-semibold block text-xs uppercase tracking-wider mb-1">
                      Production Standard:
                    </strong>
                    <p className="text-[var(--ctl-text)] font-medium leading-relaxed">
                      {item.deliverable}
                    </p>
                  </div>
                )}

                {item.benchmark && (
                  <div>
                    <strong className="text-[var(--ctl-ink)] font-semibold block text-xs uppercase tracking-wider mb-1">
                      Measurable Outcome:
                    </strong>
                    <p className="text-[var(--ctl-text)] font-medium leading-relaxed">
                      {item.benchmark}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </EtchedCard>
        );
      })}
    </div>
  );
}

export default CapabilityGrid;
