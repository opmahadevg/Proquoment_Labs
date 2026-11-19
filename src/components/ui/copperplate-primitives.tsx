import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/** Section kicker with etched left rule */
export function PlateKicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 font-semibold text-[11px] leading-tight tracking-[0.24em] uppercase text-[var(--ctl-ink)]",
        className
      )}
    >
      <span className="w-8 h-[1px] bg-current" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

/** Engraved page or section header */
export function PlateHeader({
  kicker,
  title,
  italicWord,
  description,
  className,
}: {
  kicker?: string;
  title: string;
  italicWord?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-4 max-w-3xl", className)}>
      {kicker && <PlateKicker>{kicker}</PlateKicker>}
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[var(--ctl-text)] tracking-tight leading-[1.05]">
        {title}{" "}
        {italicWord && (
          <em className="italic text-[var(--ctl-ink)] font-normal">
            {italicWord}
          </em>
        )}
      </h1>
      {description && (
        <p className="text-[16px] leading-relaxed text-[var(--ctl-soft)] max-w-2xl font-sans">
          {description}
        </p>
      )}
    </div>
  );
}

/** Card with etched copperplate borders and corner ticks */
export function EtchedCard({
  children,
  className,
  as: Component = "div",
  hoverLift = true,
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  hoverLift?: boolean;
}) {
  return (
    <Component
      className={cn(
        "relative bg-[var(--ctl-paper)] border border-[var(--ctl-line)] p-6 sm:p-8 rounded-[2px]",
        "transition-all duration-300",
        hoverLift &&
          "hover:-translate-y-1 hover:shadow-[0_12px_28px_-12px_rgba(34,56,196,0.18)] hover:border-[var(--ctl-ink)]",
        className
      )}
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
      {children}
    </Component>
  );
}

/** Button with deep cobalt ink fill, paper text, and diagonal hatch sweep */
export function CopperplateButton({
  children,
  href,
  onClick,
  variant = "deep",
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "deep" | "paper" | "ghost";
  className?: string;
}) {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-2.5 h-11 px-6 font-sans font-semibold text-[13px] tracking-[0.05em] uppercase rounded-[2px] overflow-hidden transition-all duration-300 group";

  const variantClasses =
    variant === "deep"
      ? "bg-[var(--ctl-deep)] text-[var(--ctl-ondeep)] hover:shadow-[0_10px_24px_-10px_rgba(34,56,196,0.35)]"
      : variant === "paper"
      ? "bg-[var(--ctl-paper)] text-[var(--ctl-deep)] border border-[var(--ctl-line)] hover:border-[var(--ctl-deep)]"
      : "bg-transparent text-[var(--ctl-ink)] border border-[var(--ctl-line)] hover:border-[var(--ctl-ink)]";

  const content = (
    <>
      {/* Hatch sweep effect */}
      <span
        className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent_0_3px,rgba(247,244,236,0.18)_3px_4px)] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
        aria-hidden="true"
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(baseClasses, variantClasses, className)}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(baseClasses, variantClasses, className)}
    >
      {content}
    </button>
  );
}

/** Procedural SVG turning wax seal */
export function WaxSealBadge({
  text = "PROQUOMENT LABS · AUTONOMOUS INTELLIGENCE · EST. MMXXIV · ",
  monogram = "P",
  size = 140,
  className,
}: {
  text?: string;
  monogram?: string;
  size?: number;
  className?: string;
}) {
  const uid = React.useId().replace(/:/g, "");
  const id = uid + "-seal";
  const ring = text.repeat(Math.max(1, Math.round(56 / Math.max(1, text.length))));

  return (
    <div
      className={cn(
        "relative flex items-center justify-center select-none text-[var(--ctl-ink)]",
        className
      )}
      style={{ width: size, height: size }}
    >
      <svg
        className="w-full h-full animate-[spin_40s_linear_infinite]"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          id={id}
          d="M100 100 m-78 0 a78 78 0 1 1 156 0 a78 78 0 1 1 -156 0"
          fill="none"
        />
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="1 3"
        />
        <circle
          cx="100"
          cy="100"
          r="62"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <text
          fill="currentColor"
          style={{
            font: "600 11.5px ui-sans-serif, system-ui",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          <textPath href={"#" + id} textLength="482" lengthAdjust="spacing">
            {ring}
          </textPath>
        </text>
      </svg>
      {/* Monogram in center */}
      <span className="absolute font-serif text-3xl font-semibold text-[var(--ctl-ink)] tracking-wider">
        {monogram}
      </span>
    </div>
  );
}

/** Etched divider line with center diamond */
export function HatchDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center my-12 w-full",
        className
      )}
    >
      <span className="w-full h-[1px] bg-[var(--ctl-line)]" />
      <span className="absolute px-3 bg-[var(--ctl-paper)] text-[var(--ctl-ink)]">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <polygon
            points="7,1 13,7 7,13 1,7"
            stroke="currentColor"
            strokeWidth="1"
            fill="var(--ctl-paper)"
          />
          <circle cx="7" cy="7" r="2" fill="currentColor" />
        </svg>
      </span>
    </div>
  );
}

/** Engraved ledger row with expandable scope */
export function LedgerRowItem({
  romanIndex,
  title,
  summary,
  details,
  deliverables,
  duration,
  defaultOpen = false,
}: {
  romanIndex: string;
  title: string;
  summary: string;
  details?: string;
  deliverables?: string[];
  duration?: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--ctl-line)] transition-colors">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-baseline justify-between gap-4 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-baseline gap-4 sm:gap-6 flex-1">
          <span className="font-serif text-lg text-[var(--ctl-ink)] w-8 flex-none opacity-80">
            {romanIndex}.
          </span>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-[var(--ctl-text)] group-hover:text-[var(--ctl-ink)] transition-colors">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-[var(--ctl-soft)] mt-1 font-sans">
              {summary}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-none">
          {duration && (
            <span className="hidden sm:inline-block text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 border border-[var(--ctl-line)] text-[var(--ctl-ink)] rounded-[2px]">
              {duration}
            </span>
          )}
          <span
            className={cn(
              "w-7 h-7 flex items-center justify-center border border-[var(--ctl-line)] text-[var(--ctl-ink)] rounded-[2px] transition-transform duration-300",
              open && "rotate-180 bg-[var(--ctl-wash)]"
            )}
          >
            <ChevronDown size={14} />
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-12 sm:pl-14 pb-8 space-y-4">
              {details && (
                <p className="text-sm leading-relaxed text-[var(--ctl-text)] max-w-2xl">
                  {details}
                </p>
              )}
              {deliverables && deliverables.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-semibold tracking-widest uppercase text-[var(--ctl-ink)] mb-2">
                    Scope Deliverables:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[var(--ctl-soft)]">
                    {deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--ctl-ink)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
