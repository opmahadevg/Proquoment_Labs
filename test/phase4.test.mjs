import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const heroVisualFile = path.resolve(__dirname, "../src/components/ui/hero-visual.tsx");
const workflowVisualFile = path.resolve(__dirname, "../src/components/ui/agent-workflow-visual.tsx");
const techMarqueeFile = path.resolve(__dirname, "../src/components/ui/tech-marquee.tsx");
const processStepFile = path.resolve(__dirname, "../src/components/ui/process-step.tsx");
const differentiatorCardFile = path.resolve(__dirname, "../src/components/ui/differentiator-card.tsx");
const capabilityGridFile = path.resolve(__dirname, "../src/components/ui/capability-grid.tsx");
const indexCssFile = path.resolve(__dirname, "../src/index.css");

const heroVisualContent = fs.readFileSync(heroVisualFile, "utf8");
const workflowVisualContent = fs.readFileSync(workflowVisualFile, "utf8");
const techMarqueeContent = fs.readFileSync(techMarqueeFile, "utf8");
const processStepContent = fs.readFileSync(processStepFile, "utf8");
const differentiatorCardContent = fs.readFileSync(differentiatorCardFile, "utf8");
const capabilityGridContent = fs.readFileSync(capabilityGridFile, "utf8");
const indexCssContent = fs.readFileSync(indexCssFile, "utf8");

describe("Phase 4 - Tasks 10 to 15 Contract & Implementation Tests", () => {
  // TASK 10: HeroVisual
  describe("TASK 10 — HeroVisual (src/components/ui/hero-visual.tsx)", () => {
    test("exports HeroVisual (named and default) and DEFAULT_AGENT_TASKS", () => {
      assert.match(heroVisualContent, /export\s+function\s+HeroVisual\b/);
      assert.match(heroVisualContent, /export\s+default\s+HeroVisual\b/);
      assert.match(heroVisualContent, /export\s+const\s+DEFAULT_AGENT_TASKS\b/);
    });

    test("header includes Proquoment Labs Agent title, live pulsing indicator, and Spec/Action analysis mode", () => {
      assert.ok(heroVisualContent.includes("⚡ Proquoment Labs Agent"));
      assert.ok(heroVisualContent.includes("● Live"));
      assert.ok(heroVisualContent.includes("Spec / Action Mode"));
      assert.ok(heroVisualContent.includes("animate-ping"));
    });

    test("cycling tasks contain all 5 required tasks with default states", () => {
      assert.ok(heroVisualContent.includes("Analysing CRM data"));
      assert.ok(heroVisualContent.includes("Drafting email sequences"));
      assert.ok(heroVisualContent.includes("Scoring 847 leads"));
      assert.ok(heroVisualContent.includes("Syncing to HubSpot"));
      assert.ok(heroVisualContent.includes("Triggering outreach campaign"));
    });

    test("has state-driven interval loop cycling through tasks with Framer Motion", () => {
      assert.ok(heroVisualContent.includes("useState<number>"));
      assert.ok(heroVisualContent.includes("setInterval"));
      assert.ok(heroVisualContent.includes("currentStep"));
      assert.ok(heroVisualContent.includes("framer-motion"));
      assert.ok(heroVisualContent.includes("motion.div"));
      assert.ok(heroVisualContent.includes("animate-spin"));
    });

    test("floating metric badges include required metrics and animate-float", () => {
      assert.ok(heroVisualContent.includes("12 hrs saved today"));
      assert.ok(heroVisualContent.includes("98% task completion"));
      assert.ok(heroVisualContent.includes("3 agents running"));
      assert.ok(heroVisualContent.includes("animate-float"));
      // Ensure all 3 floating badges have float animation
      const floatOccurrences = (heroVisualContent.match(/animate-float/g) || []).length;
      assert.ok(floatOccurrences >= 3, `Expected at least 3 animate-float usages, found ${floatOccurrences}`);
    });

    test("HeroVisual handles empty tasks safely without NaN division and includes focus pause", () => {
      assert.ok(heroVisualContent.includes("tasks.length > 0"));
      assert.ok(heroVisualContent.includes("onFocus"));
      assert.ok(heroVisualContent.includes("onBlur"));
    });

    test("has glowing border and shadow: shadow-2xl shadow-primary/20 and primary tint border", () => {
      assert.ok(heroVisualContent.includes("shadow-2xl shadow-primary/20"));
      assert.ok(heroVisualContent.includes("border-primary/25") || heroVisualContent.includes("border-primary/30"));
    });
  });

  // TASK 11: AgentWorkflowVisual
  describe("TASK 11 — AgentWorkflowVisual (src/components/ui/agent-workflow-visual.tsx)", () => {
    test("exports AgentWorkflowVisual (named and default)", () => {
      assert.match(workflowVisualContent, /export\s+function\s+AgentWorkflowVisual\b/);
      assert.match(workflowVisualContent, /export\s+default\s+AgentWorkflowVisual\b/);
    });

    test("contains all required nodes: Trigger/Input, Classifier, Outcomes", () => {
      assert.ok(workflowVisualContent.includes("Email Inbox"));
      assert.ok(workflowVisualContent.includes("Webhook"));
      assert.ok(workflowVisualContent.includes("AI Classifier"));
      assert.ok(workflowVisualContent.includes("CRM Update"));
      assert.ok(workflowVisualContent.includes("Auto-Responder"));
      assert.ok(workflowVisualContent.includes("Slack Alert"));
    });

    test("has animated connecting paths and pulsing glowing node cards", () => {
      assert.ok(workflowVisualContent.includes("<svg"));
      assert.ok(workflowVisualContent.includes("strokeDasharray"));
      assert.ok(workflowVisualContent.includes("animate-pulse"));
      assert.ok(workflowVisualContent.includes("boxShadow"));
    });

    test("is responsive with desktop grid and mobile pipeline layouts", () => {
      assert.ok(workflowVisualContent.includes("hidden lg:grid"));
      assert.ok(workflowVisualContent.includes("lg:hidden"));
    });

    test("uses React.useId for unique SVG gradient IDs and supports mobile stage pulsing", () => {
      assert.ok(workflowVisualContent.includes("useId()"));
      assert.ok(workflowVisualContent.includes("gradId1"));
      assert.ok(workflowVisualContent.includes("gradId2"));
    });
  });

  // TASK 12: TechMarquee
  describe("TASK 12 — TechMarquee (src/components/ui/tech-marquee.tsx)", () => {
    test("exports TechMarquee (named and default), ALL_TECH_ITEMS, and row constants", () => {
      assert.match(techMarqueeContent, /export\s+function\s+TechMarquee\b/);
      assert.match(techMarqueeContent, /export\s+default\s+TechMarquee\b/);
      assert.match(techMarqueeContent, /export\s+const\s+ALL_TECH_ITEMS\b/);
      assert.match(techMarqueeContent, /export\s+const\s+TECH_STACK_ROW_1\b/);
      assert.match(techMarqueeContent, /export\s+const\s+TECH_STACK_ROW_2\b/);
    });

    test("contains all 25 required tools and platforms without omission", () => {
      const requiredTools = [
        "OpenAI", "Anthropic", "Claude", "Gemini", "LangChain",
        "LangGraph", "Supabase", "PostgreSQL", "Vercel", "Next.js",
        "React", "Python", "FastAPI", "n8n", "Make",
        "Zapier", "HubSpot", "Slack", "Notion", "Airtable",
        "Redis", "Pinecone", "Weaviate", "Stripe", "Twilio"
      ];

      for (const tool of requiredTools) {
        assert.ok(
          techMarqueeContent.includes(`"${tool}"`),
          `Expected tool "${tool}" to be present in TechMarquee`
        );
      }
    });

    test("renders two rows with forward (animate-marquee) and reverse (animate-marquee-reverse)", () => {
      assert.ok(techMarqueeContent.includes("animate-marquee"));
      assert.ok(techMarqueeContent.includes("animate-marquee-reverse"));
      assert.ok(indexCssContent.includes("@keyframes marquee-reverse"));
      assert.ok(indexCssContent.includes(".animate-marquee-reverse"));
    });

    test("edge fading uses .scroller-mask and respects prefers-reduced-motion", () => {
      assert.ok(techMarqueeContent.includes("scroller-mask"));
      assert.ok(indexCssContent.includes(".scroller-mask"));
      assert.ok(indexCssContent.includes("prefers-reduced-motion"));
    });

    test("marks loop duplicate items with aria-hidden for screen reader accessibility", () => {
      assert.ok(techMarqueeContent.includes("aria-hidden"));
      assert.ok(techMarqueeContent.includes("focus-within"));
    });
  });

  // TASK 13: ProcessStep
  describe("TASK 13 — ProcessStep (src/components/ui/process-step.tsx)", () => {
    test("exports ProcessStep (named and default)", () => {
      assert.match(processStepContent, /export\s+function\s+ProcessStep\b/);
      assert.match(processStepContent, /export\s+default\s+ProcessStep\b/);
    });

    test("supports required props: number, title, description, isLast, highlight", () => {
      assert.match(processStepContent, /number:\s*number/);
      assert.match(processStepContent, /title:\s*string/);
      assert.match(processStepContent, /description:\s*string/);
      assert.match(processStepContent, /isLast\?:?\s*boolean/);
      assert.match(processStepContent, /highlight\?:?\s*string/);
    });

    test("features blue number badge (bg-primary text-white) and dark card styling", () => {
      assert.ok(processStepContent.includes("bg-primary text-white"));
      assert.ok(processStepContent.includes("bg-card/75"));
      assert.ok(processStepContent.includes("border border-white/5"));
    });

    test("renders connecting arrow or visual indicator between steps when isLast is false", () => {
      assert.ok(processStepContent.includes("!isLast"));
      assert.ok(processStepContent.includes("ArrowRight"));
      assert.ok(processStepContent.includes("ArrowDown"));
    });
  });

  // TASK 14: DifferentiatorCard
  describe("TASK 14 — DifferentiatorCard (src/components/ui/differentiator-card.tsx)", () => {
    test("exports DifferentiatorCard (named and default)", () => {
      assert.match(differentiatorCardContent, /export\s+function\s+DifferentiatorCard\b/);
      assert.match(differentiatorCardContent, /export\s+default\s+DifferentiatorCard\b/);
    });

    test("supports required props: icon, title, description, className, badge", () => {
      assert.match(differentiatorCardContent, /icon:\s*LucideIcon/);
      assert.match(differentiatorCardContent, /title:\s*string/);
      assert.match(differentiatorCardContent, /description:\s*string/);
      assert.match(differentiatorCardContent, /badge\?:?\s*string/);
      assert.match(differentiatorCardContent, /className\?:?\s*string/);
    });

    test("features dark glass styling (bg-card/80 border border-white/5), hover glow (--glow-blue), scale on hover", () => {
      assert.ok(differentiatorCardContent.includes("bg-card/80 border border-white/5"));
      assert.ok(differentiatorCardContent.includes("var(--glow-blue)"));
      assert.ok(differentiatorCardContent.includes("hover:scale-[1.02]"));
    });
  });

  // TASK 15: CapabilityGrid
  describe("TASK 15 — CapabilityGrid (src/components/ui/capability-grid.tsx)", () => {
    test("exports CapabilityGrid (named and default)", () => {
      assert.match(capabilityGridContent, /export\s+function\s+CapabilityGrid\b/);
      assert.match(capabilityGridContent, /export\s+default\s+CapabilityGrid\b/);
    });

    test("supports required props: capabilities, columns (2 | 3), className", () => {
      assert.match(capabilityGridContent, /capabilities:\s*CapabilityItem\[\]/);
      assert.match(capabilityGridContent, /columns\?:?\s*2\s*\|\s*3/);
      assert.match(capabilityGridContent, /className\?:?\s*string/);
    });

    test("supports responsive grid classes for 2 and 3 columns", () => {
      assert.ok(capabilityGridContent.includes("grid-cols-1 md:grid-cols-2"));
      assert.ok(capabilityGridContent.includes("grid-cols-1 md:grid-cols-2 lg:grid-cols-3"));
    });

    test("cards have dark glass styling and hover micro-interactions", () => {
      assert.ok(capabilityGridContent.includes("bg-card/75 border border-white/5"));
      assert.ok(capabilityGridContent.includes("hover:border-primary/40"));
      assert.ok(capabilityGridContent.includes("hover:-translate-y-1"));
    });
  });

  // Verification helper test
  describe("Verification Helper (src/phase4-verify.ts)", () => {
    test("phase4-verify.ts exists and checks all 6 atoms", () => {
      const verifyFile = path.resolve(__dirname, "../src/phase4-verify.ts");
      const verifyContent = fs.readFileSync(verifyFile, "utf8");
      assert.ok(verifyContent.includes("hasHeroVisual"));
      assert.ok(verifyContent.includes("hasAgentWorkflowVisual"));
      assert.ok(verifyContent.includes("hasTechMarquee"));
      assert.ok(verifyContent.includes("hasProcessStep"));
      assert.ok(verifyContent.includes("hasDifferentiatorCard"));
      assert.ok(verifyContent.includes("hasCapabilityGrid"));
      assert.ok(verifyContent.includes("all25TechPresent"));
    });
  });
});
