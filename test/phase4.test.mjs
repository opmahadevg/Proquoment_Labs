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
  describe("TASK 10 - HeroVisual (src/components/ui/hero-visual.tsx)", () => {
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
  describe("TASK 11 - AgentWorkflowVisual (src/components/ui/agent-workflow-visual.tsx)", () => {
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
  describe("TASK 12 - TechMarquee (src/components/ui/tech-marquee.tsx)", () => {
    test("exports TechMarquee (named and default), ALL_TECH_ITEMS, and row constants", () => {
      assert.match(techMarqueeContent, /export\s+function\s+TechMarquee\b/);
      assert.match(techMarqueeContent, /export\s+default\s+TechMarquee\b/);
      assert.match(techMarqueeContent, /export\s+const\s+ALL_TECH_ITEMS\b/);
      assert.match(techMarqueeContent, /export\s+const\s+TECH_STACK_ROW_1\b/);\n      assert.match(techMarqueeContent, /export\\s+const\\s+TECH_STACK_ROW_2\\b/);\n    });\n\n    test(\"contains all 25 required tools and platforms without omission\", () => {\n      const requiredTools = [\n        \"OpenAI\", \"Anthropic\", \"Claude\", \"Gemini\", \"LangChain\",\n        \"LangGraph\", \"Supabase\", \"PostgreSQL\", \"Vercel\", \"Next.js\",\n        \"React\", \"Python\", \"FastAPI\", \"n8n\", \"Make\",\n        \"Zapier\", \"HubSpot\", \"Slack\", \"Notion\", \"Airtable\",\n        \"Redis\", \"Pinecone\", \"Weaviate\", \"Stripe\", \"Twilio\"\n      ];\n\n      for (const tool of requiredTools) {\n        assert.ok(\n          techMarqueeContent.includes(`\"${tool}\"`),\n          `Expected tool \"${tool}\" to be present in TechMarquee`\n        );\n      }\n    });\n\n    test(\"renders two rows with forward (animate-marquee) and reverse (animate-marquee-reverse)\", () => {\n      assert.ok(techMarqueeContent.includes(\"animate-marquee\"));\n      assert.ok(techMarqueeContent.includes(\"animate-marquee-reverse\"));\n      assert.ok(indexCssContent.includes(\"@keyframes marquee-reverse\"));\n      assert.ok(indexCssContent.includes(\".animate-marquee-reverse\"));\n    });\n\n    test(\"edge fading uses .scroller-mask and respects prefers-reduced-motion\", () => {\n      assert.ok(techMarqueeContent.includes(\"scroller-mask\"));\n      assert.ok(indexCssContent.includes(\".scroller-mask\"));\n      assert.ok(indexCssContent.includes(\"prefers-reduced-motion\"));\n    });\n\n    test(\"marks loop duplicate items with aria-hidden for screen reader accessibility\", () => {\n      assert.ok(techMarqueeContent.includes(\"aria-hidden\"));\n      assert.ok(techMarqueeContent.includes(\"focus-within\"));\n    });\n  });\n\n  // TASK 13: ProcessStep\n  describe(\"TASK 13 - ProcessStep (src/components/ui/process-step.tsx)\", () => {\n    test(\"exports ProcessStep (named and default)\", () => {\n      assert.match(processStepContent, /export\\s+function\\s+ProcessStep\\b/);\n      assert.match(processStepContent, /export\\s+default\\s+ProcessStep\\b/);\n    });\n\n    test(\"supports required props: number, title, description, isLast, highlight\", () => {\n      assert.match(processStepContent, /number:\\s*number/);\n      assert.match(processStepContent, /title:\\s*string/);\n      assert.match(processStepContent, /description:\\s*string/);\n      assert.match(processStepContent, /isLast\\?:?\\s*boolean/);\n      assert.match(processStepContent, /highlight\\?:?\\s*string/);\n    });\n\n    test(\"features blue number badge (bg-primary text-white) and dark card styling\", () => {\n      assert.ok(processStepContent.includes(\"bg-primary text-white\"));\n      assert.ok(processStepContent.includes(\"bg-card/75\"));\n      assert.ok(processStepContent.includes(\"border border-white/5\"));\n    });\n\n    test(\"renders connecting arrow or visual indicator between steps when isLast is false\", () => {\n      assert.ok(processStepContent.includes(\"!isLast\"));\n      assert.ok(processStepContent.includes(\"ArrowRight\"));\n      assert.ok(processStepContent.includes(\"ArrowDown\"));\n    });\n  });\n\n  // TASK 14: DifferentiatorCard\n  describe(\"TASK 14 - DifferentiatorCard (src/components/ui/differentiator-card.tsx)\", () => {\n    test(\"exports DifferentiatorCard (named and default)\", () => {\n      assert.match(differentiatorCardContent, /export\\s+function\\s+DifferentiatorCard\\b/);\n      assert.match(differentiatorCardContent, /export\\s+default\\s+DifferentiatorCard\\b/);\n    });\n\n    test(\"supports required props: icon, title, description, className, badge\", () => {\n      assert.match(differentiatorCardContent, /icon:\\s*LucideIcon/);\n      assert.match(differentiatorCardContent, /title:\\s*string/);\n      assert.match(differentiatorCardContent, /description:\\s*string/);\n      assert.match(differentiatorCardContent, /badge\\?:?\\s*string/);\n      assert.match(differentiatorCardContent, /className\\?:?\\s*string/);\n    });\n\n    test(\"features dark glass styling (bg-card/80 border border-white/5), hover glow (--glow-blue), scale on hover\", () => {\n      assert.ok(differentiatorCardContent.includes(\"bg-card/80 border border-white/5\"));\n      assert.ok(differentiatorCardContent.includes(\"var(--glow-blue)\"));\n      assert.ok(differentiatorCardContent.includes(\"hover:scale-[1.02]\"));\n    });\n  });\n\n  // TASK 15: CapabilityGrid\n  describe(\"TASK 15 - CapabilityGrid (src/components/ui/capability-grid.tsx)\", () => {\n    test(\"exports CapabilityGrid (named and default)\", () => {\n      assert.match(capabilityGridContent, /export\\s+function\\s+CapabilityGrid\\b/);\n      assert.match(capabilityGridContent, /export\\s+default\\s+CapabilityGrid\\b/);\n    });\n\n    test(\"supports required props: capabilities, columns (2 | 3), className\", () => {\n      assert.match(capabilityGridContent, /capabilities:\\s*CapabilityItem\\[\\]/);\n      assert.match(capabilityGridContent, /columns\\?:?\\s*2\\s*\\|\\s*3/);\n      assert.match(capabilityGridContent, /className\\?:?\\s*string/);\n    });\n\n    test(\"supports responsive grid classes for 2 and 3 columns\", () => {\n      assert.ok(capabilityGridContent.includes(\"grid-cols-1 md:grid-cols-2\"));\n      assert.ok(capabilityGridContent.includes(\"grid-cols-1 md:grid-cols-2 lg:grid-cols-3\"));\n    });\n\n    test(\"cards have dark glass styling and hover micro-interactions\", () => {\n      assert.ok(capabilityGridContent.includes(\"bg-card/75 border border-white/5\"));\n      assert.ok(capabilityGridContent.includes(\"hover:border-primary/40\"));\n      assert.ok(capabilityGridContent.includes(\"hover:-translate-y-1\"));\n    });\n  });\n\n  // Verification helper test\n  describe(\"Verification Helper (src/phase4-verify.ts)\", () => {\n    test(\"phase4-verify.ts exists and checks all 6 atoms\", () => {\n      const verifyFile = path.resolve(__dirname, \"../src/phase4-verify.ts\");\n      const verifyContent = fs.readFileSync(verifyFile, \"utf8\");\n      assert.ok(verifyContent.includes(\"hasHeroVisual\"));\n      assert.ok(verifyContent.includes(\"hasAgentWorkflowVisual\"));\n      assert.ok(verifyContent.includes(\"hasTechMarquee\"));\n      assert.ok(verifyContent.includes(\"hasProcessStep\"));\n      assert.ok(verifyContent.includes(\"hasDifferentiatorCard\"));\n      assert.ok(verifyContent.includes(\"hasCapabilityGrid\"));\n      assert.ok(verifyContent.includes(\"all25TechPresent\"));\n    });\n  });\n});\n