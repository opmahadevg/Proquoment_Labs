import * as React from "react";
import { cn } from "@/lib/utils";

export interface TechItem {
  name: string;
  category: "LLMs & AI" | "Frameworks" | "Data & Cloud" | "Automation & APIs";
}

export const TECH_STACK_ROW_1: TechItem[] = [
  { name: "OpenAI", category: "LLMs & AI" },
  { name: "Anthropic", category: "LLMs & AI" },
  { name: "Claude", category: "LLMs & AI" },
  { name: "Gemini", category: "LLMs & AI" },
  { name: "LangChain", category: "Frameworks" },
  { name: "LangGraph", category: "Frameworks" },
  { name: "Supabase", category: "Data & Cloud" },
  { name: "PostgreSQL", category: "Data & Cloud" },
  { name: "Vercel", category: "Data & Cloud" },
  { name: "Next.js", category: "Frameworks" },
  { name: "React", category: "Frameworks" },
  { name: "Python", category: "Frameworks" },
  { name: "FastAPI", category: "Frameworks" },
];

export const TECH_STACK_ROW_2: TechItem[] = [
  { name: "n8n", category: "Automation & APIs" },
  { name: "Make", category: "Automation & APIs" },
  { name: "Zapier", category: "Automation & APIs" },
  { name: "HubSpot", category: "Automation & APIs" },
  { name: "Slack", category: "Automation & APIs" },
  { name: "Notion", category: "Automation & APIs" },
  { name: "Airtable", category: "Automation & APIs" },
  { name: "Redis", category: "Data & Cloud" },
  { name: "Pinecone", category: "Data & Cloud" },
  { name: "Weaviate", category: "Data & Cloud" },
  { name: "Stripe", category: "Automation & APIs" },
  { name: "Twilio", category: "Automation & APIs" },
];

export const ALL_TECH_ITEMS: TechItem[] = [...TECH_STACK_ROW_1, ...TECH_STACK_ROW_2];

export interface TechMarqueeProps {
  className?: string;
  pauseOnHover?: boolean;
}

function MarqueeRow({
  items,
  reverse = false,
  pauseOnHover = true,
}: {
  items: TechItem[];
  reverse?: boolean;
  pauseOnHover?: boolean;
}) {
  // Duplicate 4 times to ensure perfectly smooth non-terminating infinite loop on any screen width
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn(
        "flex w-full overflow-hidden select-none py-1 group",
        pauseOnHover && "hover:[&_*]:[animation-play-state:paused] focus-within:[&_*]:[animation-play-state:paused]"
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-3 sm:gap-4 items-center whitespace-nowrap",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {duplicated.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            aria-hidden={idx >= items.length ? "true" : undefined}
            className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-card/70 border border-white/5 hover:border-primary/40 hover:bg-card/90 transition-all duration-200 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white shadow-sm hover:shadow-primary/10 hover:shadow-md cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
            <span className="tracking-tight">{tech.name}</span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase px-1.5 py-0.5 rounded bg-white/5 border border-white/5 hidden sm:inline-block">
              {tech.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechMarquee({
  className,
  pauseOnHover = true,
}: TechMarqueeProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-6 space-y-4 scroller-mask",
        className
      )}
      role="region"
      aria-label="Technologies and Platforms Integration Marquee"
    >
      {/* Row 1: Forward Direction */}
      <MarqueeRow items={TECH_STACK_ROW_1} reverse={false} pauseOnHover={pauseOnHover} />

      {/* Row 2: Reverse Direction */}
      <MarqueeRow items={TECH_STACK_ROW_2} reverse={true} pauseOnHover={pauseOnHover} />
    </div>
  );
}

export default TechMarquee;
