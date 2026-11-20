import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const homePageFile = path.resolve(__dirname, "../src/pages/HomePage.tsx");
const appFile = path.resolve(__dirname, "../src/App.tsx");
const verifyFile = path.resolve(__dirname, "../src/phase5-verify.ts");

const homePageContent = fs.readFileSync(homePageFile, "utf8");
const appContent = fs.readFileSync(appFile, "utf8");
const verifyContent = fs.readFileSync(verifyFile, "utf8");

describe("Phase 5 - Tasks 16 to 24 HomePage Assembly Contract Tests", () => {
  // TASK 16: Hero Arch Section (Cobalt Toile Masterpiece)
  describe("TASK 16 — Hero Arch Section", () => {
    test("embeds CobaltToileLanding with Proquoment Labs brand and cobalt palette", () => {
      assert.ok(homePageContent.includes("<CobaltToileLanding"));
      assert.ok(homePageContent.includes('brand="Proquoment Labs"'));
      assert.ok(homePageContent.includes('palette="cobalt"'));
    });

    test("Hero title and subtitle state Proquoment Labs core value proposition", () => {
      assert.ok(homePageContent.includes("Autonomous AI Systems"));
      assert.ok(homePageContent.includes("Built for Tomorrow"));
      assert.ok(homePageContent.includes("Where AI becomes your competitive advantage."));
      assert.ok(homePageContent.includes("Build AI-native products."));
      assert.ok(homePageContent.includes("Automate what slows you down."));
    });

    test("Hero includes edition and founding year", () => {
      assert.ok(homePageContent.includes("Est. MMXXVI"));
    });

    test("CTAs include Start a Project (/contact) and Book a Call (calendly.com)", () => {
      assert.ok(homePageContent.includes('href: "/contact"'));
      assert.ok(homePageContent.includes("Start a Project"));
      assert.ok(homePageContent.includes("https://calendly.com/proquoment"));
      assert.ok(homePageContent.includes("Book a Call"));
    });
  });

  // TASK 17: Tech Stack Marquee (Client Ticker)
  describe("TASK 17 — Tech Stack Marquee (Client Ticker)", () => {
    test("renders section label 'TOOLS & PLATFORMS WE WORK WITH'", () => {
      assert.ok(homePageContent.includes('clientsLabel="TOOLS & PLATFORMS WE WORK WITH"'));
    });

    test("clients list includes major AI and infrastructure platforms", () => {
      assert.ok(homePageContent.includes('"OpenAI"'));
      assert.ok(homePageContent.includes('"Anthropic"'));
      assert.ok(homePageContent.includes('"LangGraph"'));
      assert.ok(homePageContent.includes('"Supabase"'));
      assert.ok(homePageContent.includes('"Vercel"'));
      assert.ok(homePageContent.includes('"Python"'));
      assert.ok(homePageContent.includes('"PostgreSQL"'));
    });
  });

  // TASK 18: Pillar 01 — AI Product Engineering Bookmark
  describe("TASK 18 — Pillar 01 Bookmark (AI Product Engineering)", () => {
    test("specifies AI Product Engineering bookmark with typewriter die-cut", () => {
      assert.ok(homePageContent.includes('title: "AI Product Engineering"'));
      assert.ok(homePageContent.includes('quote: "Build products that work and scale."'));
      assert.ok(homePageContent.includes('art: "typewriter"'));
      assert.ok(homePageContent.includes('tone: "paper"'));
    });

    test("points include key deliverables", () => {
      assert.ok(homePageContent.includes("Website & Web Apps"));
      assert.ok(homePageContent.includes("SaaS MVP Development"));
      assert.ok(homePageContent.includes("Custom Dashboards"));
      assert.ok(homePageContent.includes("AI-Powered Features"));
      assert.ok(homePageContent.includes("API Development"));
      assert.ok(homePageContent.includes("Third-party Integrations"));
    });
  });

  // TASK 19: Pillar 02 — AI Agents & Automation Bookmark
  describe("TASK 19 — Pillar 02 Bookmark (AI Agents & Automation)", () => {
    test("specifies AI Agents & Automation bookmark with steamer die-cut", () => {
      assert.ok(homePageContent.includes('title: "AI Agents & Automation"'));
      assert.ok(homePageContent.includes('quote: "Automate what slows you down."'));
      assert.ok(homePageContent.includes('art: "steamer"'));
      assert.ok(homePageContent.includes('tone: "ink"'));
    });

    test("points include key autonomous capabilities", () => {
      assert.ok(homePageContent.includes("Document Processing") || homePageContent.includes("Custom AI Agents"));
      assert.ok(homePageContent.includes("Customer Support Agents") || homePageContent.includes("Multi-Agent Systems"));
      assert.ok(homePageContent.includes("Internal Tooling") || homePageContent.includes("Workflow Integration"));
      assert.ok(homePageContent.includes("Multi-Agent Systems"));
    });
  });

  // TASK 20: Pillar 03 — AI Transformation Partnership Bookmark
  describe("TASK 20 — Pillar 03 Bookmark (AI Transformation Partnership)", () => {
    test("specifies AI Transformation Partnership bookmark with monogram die-cut", () => {
      assert.ok(homePageContent.includes('title: "AI Transformation Partnership"'));
      assert.ok(homePageContent.includes('art: "monogram"'));
      assert.ok(homePageContent.includes('tone: "paper"'));
    });

    test("points include discovery, roadmap, and infrastructure", () => {
      assert.ok(homePageContent.includes("Opportunity Discovery"));
      assert.ok(homePageContent.includes("AI Roadmap Design"));
      assert.ok(homePageContent.includes("Workflow Analysis"));
      assert.ok(homePageContent.includes("AI Infrastructure Build"));
      assert.ok(homePageContent.includes("Process Automation"));
      assert.ok(homePageContent.includes("Ongoing AI Partnership"));
    });
  });

  // TASK 21: About Studio & Rotating Seal
  describe("TASK 21 — About Studio & Rotating Seal", () => {
    test("about statement and body match studio positioning", () => {
      assert.ok(homePageContent.includes("We bring the patience of the old masters to the *frontier of machine intelligence*"));
      assert.ok(homePageContent.includes("We're not a typical agency. We are an AI Product Engineering & Transformation Studio"));
    });

    test("includes 3 key quantitative statistics and rotating seal", () => {
      assert.ok(homePageContent.includes("IP Ownership to Client"));
      assert.ok(homePageContent.includes("Production Uptime SLA"));
      assert.ok(homePageContent.includes("Operational Velocity"));
      assert.ok(homePageContent.includes("Proquoment Labs · Autonomous Intelligence · Est. MMXXVI · "));
    });
  });

  // TASK 22: Services Ledger Section
  describe("TASK 22 — Services Ledger Section", () => {
    test("servicesCopy sets ledger framing", () => {
      assert.ok(homePageContent.includes('kicker: "The Ledger"'));
      assert.ok(homePageContent.includes('title: "A ledger of *what we do*"'));
    });

    test("contains all 4 core engagement ledger items with deliverables and duration", () => {
      assert.ok(homePageContent.includes('title: "AI Product Engineering"'));
      assert.ok(homePageContent.includes('title: "Autonomous Workflow Automation"'));
      assert.ok(homePageContent.includes('title: "AI Transformation Partnership"'));
      assert.ok(homePageContent.includes('title: "Custom Multi-Agent Deployments"'));
    });
  });

  // TASK 23: Capability & Audience Datasets Export
  describe("TASK 23 — Capability & Audience Datasets Export", () => {
    test("exports PRODUCT_ENGINEERING_CAPABILITIES with 6 items", () => {
      assert.ok(homePageContent.includes("export const PRODUCT_ENGINEERING_CAPABILITIES"));
      assert.ok(homePageContent.includes("Website & Web Apps"));
      assert.ok(homePageContent.includes("SaaS MVP Development"));
      assert.ok(homePageContent.includes("Custom Dashboards"));
      assert.ok(homePageContent.includes("AI-Powered Features"));
      assert.ok(homePageContent.includes("API Development"));
      assert.ok(homePageContent.includes("Third-party Integrations"));
    });

    test("exports TRANSFORMATION_CAPABILITIES with 6 items", () => {
      assert.ok(homePageContent.includes("export const TRANSFORMATION_CAPABILITIES"));
      assert.ok(homePageContent.includes("Opportunity Discovery"));
      assert.ok(homePageContent.includes("AI Roadmap Design"));
      assert.ok(homePageContent.includes("Workflow Analysis"));
      assert.ok(homePageContent.includes("AI Infrastructure Build"));
      assert.ok(homePageContent.includes("Process Automation"));
      assert.ok(homePageContent.includes("Ongoing AI Partnership"));
    });

    test("exports AUDIENCE_PROFILES with 6 items", () => {
      assert.ok(homePageContent.includes("export const AUDIENCE_PROFILES"));
      const audiences = [
        "Early-stage Startups",
        "SaaS Companies",
        "Founders Building New Products",
        "Growing SMBs",
        "Professional Services",
        "Tech Teams",
      ];
      for (const aud of audiences) {
        assert.ok(homePageContent.includes(aud), `Missing audience: ${aud}`);
      }
    });
  });

  // TASK 24: Closing CTA Band
  describe("TASK 24 — Closing CTA Band", () => {
    test("renders display headline and invitation", () => {
      assert.ok(homePageContent.includes("Ready to build your *AI-native future*?"));
      assert.ok(homePageContent.includes("Let's build something extraordinary."));
    });

    test("has dual CTAs: Start a Project and Book a Call", () => {
      assert.ok(homePageContent.includes("https://calendly.com/proquoment"));
      assert.ok(homePageContent.includes('href: "/contact"'));
    });
  });

  // Wiring & Verification
  describe("Route Wiring & Verification", () => {
    test("App.tsx wires Route path='/' to HomePage within Layout", () => {
      assert.ok(appContent.includes('import { HomePage } from "@/pages/HomePage"') || appContent.includes('const HomePage = React.lazy(() => import("@/pages/HomePage"))'));
      assert.ok(appContent.includes('<Route path="/" component={HomePageRoute} />'));
      assert.ok(appContent.includes("<Layout"));
    });

    test("phase5-verify.ts checks HomePage export and all capability datasets", () => {
      assert.ok(verifyContent.includes("hasHomePage"));
      assert.ok(verifyContent.includes("productEngValid"));
      assert.ok(verifyContent.includes("transformationValid"));
      assert.ok(verifyContent.includes("audienceProfilesValid"));
    });
  });
});
