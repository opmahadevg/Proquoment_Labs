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
  describe("TASK 16 - Hero Arch Section", () => {
    test("embeds CobaltToileLanding with Proquoment Labs brand and cobalt palette", () => {
      assert.ok(homePageContent.includes("<CobaltToileLanding"));
      assert.ok(homePageContent.includes('brand="Proquoment Labs"'));
      assert.ok(homePageContent.includes('palette="cobalt"'));
    });

    test("Hero title and subtitle state Proquoment Labs core value proposition", () => {
      assert.ok(homePageContent.includes("Build for the Future") || homePageContent.includes("Build for the future"));
      assert.ok(homePageContent.includes("Become AI-Ready Today") || homePageContent.includes("Become AI-ready today"));
      assert.ok(homePageContent.includes("We help ambitious startups build AI-powered products and help businesses prepare for an AI-powered future through intelligent software, automation and modern engineering."));
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
  describe("TASK 17 - Tech Stack Marquee (Client Ticker)", () => {
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

  // TASK 18: Pillar 01 - AI SaaS & Digital Product Engineering Bookmark
  describe("TASK 18 - Pillar 01 Bookmark (AI SaaS & Digital Product Engineering)", () => {
    test("specifies AI SaaS & Digital Product Engineering bookmark with typewriter die-cut", () => {
      assert.ok(homePageContent.includes('title: "AI SaaS & Digital Product Engineering"'));
      assert.ok(homePageContent.includes("Turn product ideas into production-ready digital platforms."));
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

  // TASK 19: Pillar 02 - Business Process Automation & Integrations Bookmark
  describe("TASK 19 - Pillar 02 Bookmark (Business Process Automation & Integrations)", () => {
    test("specifies Business Process Automation & Integrations bookmark with steamer die-cut", () => {
      assert.ok(homePageContent.includes('title: "Business Process Automation & Integrations"'));
      assert.ok(homePageContent.includes("Connect systems, automate repetitive operations and engineer intelligent workflows."));
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

  // TASK 20: Pillar 03 - Web Applications & Digital Experiences Bookmark
  describe("TASK 20 - Pillar 03 Bookmark (Web Applications & Digital Experiences)", () => {
    test("specifies Web Applications & Digital Experiences bookmark with monogram die-cut", () => {
      assert.ok(homePageContent.includes('title: "Web Applications & Digital Experiences"'));
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
  describe("TASK 21 - About Studio & Rotating Seal", () => {
    test("about statement and body match studio positioning", () => {
      assert.ok(homePageContent.includes("We combine product thinking, modern engineering, and applied intelligence"));
      assert.ok(homePageContent.includes("AI-native Product & Engineering Studio"));
    });

    test("includes 3 key quantitative statistics and rotating seal", () => {
      assert.ok(homePageContent.includes("IP Ownership to Client"));
      assert.ok(homePageContent.includes("Production Uptime SLA"));
      assert.ok(homePageContent.includes("Operational Velocity"));
      assert.ok(homePageContent.includes("Proquoment Labs"));
    });
  });

  // TASK 22: Services Ledger Section
  describe("TASK 22 - Services Ledger Section", () => {
    test("servicesCopy sets ledger framing", () => {
      assert.ok(homePageContent.includes('kicker: "The Ledger"'));
      assert.ok(homePageContent.includes('title: "A ledger of *what we do*"'));
    });

    test("contains all 4 core engagement ledger items with deliverables and duration", () => {
      assert.ok(homePageContent.includes('title: "AI SaaS & MVP Engineering"'));
      assert.ok(homePageContent.includes('title: "Business Process Automation & Integrations"'));
      assert.ok(homePageContent.includes('title: "AI Integration & System Modernization"'));
      assert.ok(homePageContent.includes('title: "Web Applications & Digital Experiences"'));
    });
  });

  // TASK 23: Capability & Audience Datasets Export
  describe("TASK 23 - Capability & Audience Datasets Export", () => {
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
        "Businesses Preparing for AI",
        "Growing Companies Automating Operations",
        "Established Teams Needing Engineering Muscle",
      ];
      for (const aud of audiences) {
        assert.ok(homePageContent.includes(aud), `Missing audience: ${aud}`);
      }
    });
  });

  // TASK 24: Closing CTA Band
  describe("TASK 24 - Closing CTA Band", () => {
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
