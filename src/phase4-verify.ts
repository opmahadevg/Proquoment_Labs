import { HeroVisual, DEFAULT_AGENT_TASKS } from "@/components/ui/hero-visual";
import { AgentWorkflowVisual } from "@/components/ui/agent-workflow-visual";
import {
  TechMarquee,
  ALL_TECH_ITEMS,
  TECH_STACK_ROW_1,
  TECH_STACK_ROW_2,
} from "@/components/ui/tech-marquee";
import { ProcessStep } from "@/components/ui/process-step";
import { DifferentiatorCard } from "@/components/ui/differentiator-card";
import { CapabilityGrid, type CapabilityItem } from "@/components/ui/capability-grid";
import { Zap, Bot, Database } from "lucide-react";

export function verifyPhase4Exports() {
  const hasHeroVisual = typeof HeroVisual === "function";
  const hasAgentWorkflowVisual = typeof AgentWorkflowVisual === "function";
  const hasTechMarquee = typeof TechMarquee === "function";
  const hasProcessStep = typeof ProcessStep === "function";
  const hasDifferentiatorCard = typeof DifferentiatorCard === "function";
  const hasCapabilityGrid = typeof CapabilityGrid === "function";

  const requiredTech = [
    "OpenAI",
    "Anthropic",
    "Claude",
    "Gemini",
    "LangChain",
    "LangGraph",
    "Supabase",
    "PostgreSQL",
    "Vercel",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "n8n",
    "Make",
    "Zapier",
    "HubSpot",
    "Slack",
    "Notion",
    "Airtable",
    "Redis",
    "Pinecone",
    "Weaviate",
    "Stripe",
    "Twilio",
  ];

  const presentTechNames = ALL_TECH_ITEMS.map((item) => item.name);
  const all25TechPresent = requiredTech.every((tech) =>
    presentTechNames.includes(tech)
  );

  const testCapabilities: CapabilityItem[] = [
    {
      icon: Zap,
      title: "Real-Time AI Agents",
      description: "Sub-second autonomous execution engines",
      tag: "Autonomous",
    },
    {
      icon: Database,
      title: "Enterprise Knowledge Base",
      description: "Vector search over private corporate databases",
      tag: "RAG",
    },
  ];

  return {
    hasHeroVisual,
    hasAgentWorkflowVisual,
    hasTechMarquee,
    hasProcessStep,
    hasDifferentiatorCard,
    hasCapabilityGrid,
    defaultAgentTasksCount: DEFAULT_AGENT_TASKS.length,
    all25TechPresent,
    techRowCount: TECH_STACK_ROW_1.length + TECH_STACK_ROW_2.length,
    testCapabilitiesCount: testCapabilities.length,
  };
}
