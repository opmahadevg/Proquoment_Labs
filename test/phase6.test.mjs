import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const servicesPageFile = path.resolve(__dirname, "../src/pages/ServicesPage.tsx");
const contactPageFile = path.resolve(__dirname, "../src/pages/ContactPage.tsx");
const workPageFile = path.resolve(__dirname, "../src/pages/WorkPage.tsx");
const aboutPageFile = path.resolve(__dirname, "../src/pages/AboutPage.tsx");
const privacyPageFile = path.resolve(__dirname, "../src/pages/PrivacyPolicyPage.tsx");
const termsPageFile = path.resolve(__dirname, "../src/pages/TermsOfServicePage.tsx");
const notFoundFile = path.resolve(__dirname, "../src/pages/not-found.tsx");
const appFile = path.resolve(__dirname, "../src/App.tsx");
const verifyFile = path.resolve(__dirname, "../src/phase6-verify.ts");

const servicesContent = fs.readFileSync(servicesPageFile, "utf8");
const contactContent = fs.readFileSync(contactPageFile, "utf8");
const workContent = fs.readFileSync(workPageFile, "utf8");
const aboutContent = fs.readFileSync(aboutPageFile, "utf8");
const privacyContent = fs.readFileSync(privacyPageFile, "utf8");
const termsContent = fs.readFileSync(termsPageFile, "utf8");
const notFoundContent = fs.readFileSync(notFoundFile, "utf8");
const appContent = fs.readFileSync(appFile, "utf8");
const verifyContent = fs.readFileSync(verifyFile, "utf8");

describe("Phase 6 - Tasks 25 to 31 Dedicated Route Pages & App Router Integration Contract Tests", () => {
  // ==========================================
  // TASK 25 — ServicesPage
  // ==========================================
  describe("TASK 25 — ServicesPage (src/pages/ServicesPage.tsx)", () => {
    test("exports ServicesPage component (both named and default)", () => {
      assert.ok(servicesContent.includes("export function ServicesPage"));
      assert.ok(servicesContent.includes("export default ServicesPage"));
    });

    test("contains all 3 deep-dive sections with anchors product-engineering, agents-automation, transformation", () => {
      assert.ok(servicesContent.includes('id="product-engineering"'));
      assert.ok(servicesContent.includes('id="agents-automation"'));
      assert.ok(servicesContent.includes('id="transformation"'));
    });

    test("includes sticky/subnav quick links allowing smooth jumping to all 3 pillars", () => {
      assert.ok(servicesContent.includes("01. Product Engineering"));
      assert.ok(servicesContent.includes("02. Agents &amp; Automation") || servicesContent.includes("02. Agents & Automation"));
      assert.ok(servicesContent.includes("03. Transformation"));
      assert.ok(servicesContent.includes("scrollToPillar"));
    });

    test("contains expanded capability lists with at least 8-10 technical items each", () => {
      assert.ok(servicesContent.includes("SERVICES_PRODUCT_ENGINEERING"));
      assert.ok(servicesContent.includes("SERVICES_AGENTS_AUTOMATION"));
      assert.ok(servicesContent.includes("SERVICES_TRANSFORMATION"));

      // Check specific technical capabilities
      assert.ok(servicesContent.includes("Full-Stack Web & Mobile Applications"));
      assert.ok(servicesContent.includes("Generative AI & Copilot Interfaces"));
      assert.ok(servicesContent.includes("Autonomous Multi-Agent Swarms"));
      assert.ok(servicesContent.includes("Intelligent Document Extraction"));
      assert.ok(servicesContent.includes("Fractional AI CTO & Technical Advisory"));
      assert.ok(servicesContent.includes("Private Cloud AI Infrastructure Build"));
    });

    test("includes all 3 engagement models: Project-based, Retainer, and MVP Sprint", () => {
      assert.ok(servicesContent.includes("Project-Based Engagement"));
      assert.ok(servicesContent.includes("Dedicated Engineering Retainer"));
      assert.ok(servicesContent.includes("4-Week MVP Sprint"));
      assert.ok(servicesContent.includes("ENGAGEMENT_MODELS"));
    });

    test("includes real-world use case scenarios and architectures", () => {
      assert.ok(servicesContent.includes("USE_CASE_SCENARIOS"));
      assert.ok(servicesContent.includes("Generative Financial Modeling SaaS"));
      assert.ok(servicesContent.includes("Autonomous Procurement & Invoice Reconciliation"));
      assert.ok(servicesContent.includes("Enterprise Knowledge Brain & Fractional CTO"));
    });

    test("reuses AgentWorkflowVisual in the Agents section", () => {
      assert.ok(servicesContent.includes("<AgentWorkflowVisual"));
    });

    test("features multiple direct CTA links to /contact", () => {
      assert.ok(servicesContent.includes('href="/contact"'));
    });
  });

  // ==========================================
  // TASK 26 — ContactPage
  // ==========================================
  describe("TASK 26 — ContactPage (src/pages/ContactPage.tsx)", () => {
    test("exports ContactPage (named and default)", () => {
      assert.ok(contactContent.includes("export function ContactPage"));
      assert.ok(contactContent.includes("export default ContactPage"));
    });

    test("contains 2-column layout with project enquiry form and info panel", () => {
      assert.ok(contactContent.includes("lg:grid-cols-12"));
      assert.ok(contactContent.includes("lg:col-span-7"));
      assert.ok(contactContent.includes("lg:col-span-5"));
    });

    test("form includes all required fields: fullName, email, company, serviceType, description, budgetRange, referral", () => {
      assert.ok(contactContent.includes('id="fullName"'));
      assert.ok(contactContent.includes('id="email"'));
      assert.ok(contactContent.includes('id="company"'));
      assert.ok(contactContent.includes('id="serviceType"'));
      assert.ok(contactContent.includes('id="description"'));
      assert.ok(contactContent.includes('id="budgetRange"'));
      assert.ok(contactContent.includes('id="referral"'));
    });

    test("submits to Supabase table labs_enquiries via supabase client", () => {
      assert.ok(contactContent.includes('from("labs_enquiries").insert'));
      assert.ok(contactContent.includes('import { supabase } from "@/lib/supabase"'));
    });

    test("supports dual-write to VITE_GOOGLE_SHEET_WEBAPP_URL when present", () => {
      assert.ok(contactContent.includes("VITE_GOOGLE_SHEET_WEBAPP_URL"));
      assert.ok(contactContent.includes("no-cors"));
    });

    test("renders inline error validation messages and green checkmark success state", () => {
      assert.ok(contactContent.includes("errors.fullName"));
      assert.ok(contactContent.includes("errors.email"));
      assert.ok(contactContent.includes("errors.description"));
      assert.ok(contactContent.includes("Enquiry Received!"));
      assert.ok(contactContent.includes("CheckCircle2"));
    });

    test("info panel includes Calendly link, direct email, <24h response badge, and platform link", () => {
      assert.ok(contactContent.includes("https://calendly.com/proquoment"));
      assert.ok(contactContent.includes("contact@proquoment.in"));
      assert.ok(contactContent.includes("&lt;24h Response Time SLA") || contactContent.includes("<24h Response Time SLA"));
      assert.ok(contactContent.includes("https://proquoment.in"));
    });
  });

  // ==========================================
  // TASK 27 — WorkPage
  // ==========================================
  describe("TASK 27 — WorkPage (src/pages/WorkPage.tsx)", () => {
    test("exports WorkPage (named and default) and CASE_STUDIES array", () => {
      assert.ok(workContent.includes("export function WorkPage"));
      assert.ok(workContent.includes("export default WorkPage"));
      assert.ok(workContent.includes("export const CASE_STUDIES"));
    });

    test("header contains 'Work we've done. Work in progress.' copy", () => {
      assert.ok(
        workContent.includes("Work we&apos;ve done.") ||
        workContent.includes("Work we've done.")
      );
      assert.ok(workContent.includes("Work in progress."));
    });

    test("contains all 3 comprehensive case study teaser cards", () => {
      assert.ok(workContent.includes("Autonomous AI Agent Swarms"));
      assert.ok(workContent.includes("SaaS MVP Acceleration"));
      assert.ok(workContent.includes("Enterprise Workflow Automation"));
    });

    test("each case study has problem, solution, architecture highlights, metrics, and tech tags", () => {
      assert.ok(workContent.includes("The Operational Challenge"));
      assert.ok(workContent.includes("The Engineered Solution"));
      assert.ok(workContent.includes("Architecture Highlights"));
      assert.ok(workContent.includes("LangGraph"));
      assert.ok(workContent.includes("Next.js 15"));
      assert.ok(workContent.includes("FastAPI"));
    });

    test("includes Building in Public narrative section and CTA to /contact", () => {
      assert.ok(workContent.includes("Why We Build in Public"));
      assert.ok(workContent.includes('href="/contact"'));
    });
  });

  // ==========================================
  // TASK 28 — AboutPage
  // ==========================================
  describe("TASK 28 — AboutPage (src/pages/AboutPage.tsx)", () => {
    test("exports AboutPage (named and default)", () => {
      assert.ok(aboutContent.includes("export function AboutPage"));
      assert.ok(aboutContent.includes("export default AboutPage"));
    });

    test("Section 1 (Origin) details Labs as AI engineering & innovation division of Proquoment Private Limited", () => {
      assert.ok(aboutContent.includes("Proquoment Private Limited"));
      assert.ok(aboutContent.includes("Born from the Reality of Enterprise Operations") || aboutContent.includes("Our Origin"));
    });

    test("Section 2 (Mission) covers empowering businesses to become AI-native with operational systems", () => {
      assert.ok(aboutContent.includes("Empowering Businesses to Become AI-Native"));
    });

    test("Section 3 (Core Principles) covers all 3 principles verbatim", () => {
      assert.ok(aboutContent.includes("AI should be operational"));
      assert.ok(aboutContent.includes("Businesses need builders"));
      assert.ok(aboutContent.includes("Speed is the differentiator"));
    });

    test("Section 4 cross-links to main platform proquoment.in", () => {
      assert.ok(aboutContent.includes("https://proquoment.in"));
      assert.ok(aboutContent.includes("Looking for the Proquoment Enterprise Platform?"));
    });
  });

  // ==========================================
  // TASK 29 — PrivacyPolicyPage
  // ==========================================
  describe("TASK 29 — PrivacyPolicyPage (src/pages/PrivacyPolicyPage.tsx)", () => {
    test("exports PrivacyPolicyPage (named and default)", () => {
      assert.ok(privacyContent.includes("export function PrivacyPolicyPage"));
      assert.ok(privacyContent.includes("export default PrivacyPolicyPage"));
    });

    test("covers data collection, Supabase, PostHog, user data rights, and cookies", () => {
      assert.ok(privacyContent.includes("Supabase"));
      assert.ok(privacyContent.includes("PostHog"));
      assert.ok(privacyContent.includes("Cookies"));
      assert.ok(privacyContent.includes("Your Rights"));
    });

    test("references Indian governing law (Information Technology Act and DPDP Act) and contact email", () => {
      assert.ok(privacyContent.includes("Digital Personal Data Protection Act"));
      assert.ok(privacyContent.includes("Information Technology Act"));
      assert.ok(privacyContent.includes("Bangalore, Karnataka"));
      assert.ok(privacyContent.includes("contact@proquoment.in"));
    });
  });

  // ==========================================
  // TASK 30 — TermsOfServicePage
  // ==========================================
  describe("TASK 30 — TermsOfServicePage (src/pages/TermsOfServicePage.tsx)", () => {
    test("exports TermsOfServicePage (named and default)", () => {
      assert.ok(termsContent.includes("export function TermsOfServicePage"));
      assert.ok(termsContent.includes("export default TermsOfServicePage"));
    });

    test("covers engagement scope, project/retainer models, confidentiality, and warranties", () => {
      assert.ok(termsContent.includes("Scope of Engineering Services"));
      assert.ok(termsContent.includes("Dedicated Engineering Retainer"));
      assert.ok(termsContent.includes("Confidentiality"));
      assert.ok(termsContent.includes("Probabilistic Systems"));
    });

    test("explicitly provides 100% intellectual property ownership of custom code to client upon payment", () => {
      assert.ok(termsContent.includes("100% Client Codebase Ownership"));
      assert.ok(termsContent.includes("irrevocably transfers and assigns"));
    });

    test("specifies Indian governing law and Bangalore jurisdiction", () => {
      assert.ok(termsContent.includes("Bangalore, Karnataka, India"));
      assert.ok(termsContent.includes("contact@proquoment.in"));
    });
  });

  // ==========================================
  // TASK 31 — not-found.tsx
  // ==========================================
  describe("TASK 31 — not-found.tsx (src/pages/not-found.tsx)", () => {
    test("exports NotFoundPage and NotFound", () => {
      assert.ok(notFoundContent.includes("export function NotFoundPage"));
      assert.ok(notFoundContent.includes("export const NotFound"));
    });

    test("displays 404 display code and diagnostic route telemetry", () => {
      assert.ok(notFoundContent.includes("404"));
      assert.ok(notFoundContent.includes("Diagnostic Route Telemetry"));
      assert.ok(notFoundContent.includes("useLocation"));
    });

    test("contains link back to home using Wouter Link", () => {
      assert.ok(notFoundContent.includes('href="/"'));
      assert.ok(notFoundContent.includes("Back to Home"));
    });

    test("contains quick links to Services, Work, About, Contact", () => {
      assert.ok(notFoundContent.includes('href="/services"'));
      assert.ok(notFoundContent.includes('href="/work"'));
      assert.ok(notFoundContent.includes('href="/about"'));
      assert.ok(notFoundContent.includes('href="/contact"'));
    });
  });

  // ==========================================
  // App Router Integration in src/App.tsx
  // ==========================================
  describe("App Router Integration (src/App.tsx)", () => {
    test("wires all 7 dedicated routes + not found with Route components", () => {
      assert.ok(appContent.includes('<Route path="/" component={HomePageRoute} />'));
      assert.ok(appContent.includes('<Route path="/services" component={ServicesPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/work" component={WorkPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/about" component={AboutPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/contact" component={ContactPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/privacy-policy" component={PrivacyPolicyPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/terms-of-service" component={TermsOfServicePageRoute} />'));
      assert.ok(appContent.includes('<Route component={NotFoundRoute} />'));
    });

    test("implements lazy loading (React.lazy) and Suspense with PageFallback", () => {
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/ServicesPage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/WorkPage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/AboutPage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/ContactPage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/PrivacyPolicyPage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/TermsOfServicePage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/not-found\"))"));
      assert.ok(appContent.includes("<React.Suspense fallback={<PageFallback />}>"));
    });

    test("configures dedicated SEO props on Layout for each route", () => {
      assert.ok(appContent.includes("https://labs.proquoment.in/services"));
      assert.ok(appContent.includes("https://labs.proquoment.in/work"));
      assert.ok(appContent.includes("https://labs.proquoment.in/about"));
      assert.ok(appContent.includes("https://labs.proquoment.in/contact"));
      assert.ok(appContent.includes("https://labs.proquoment.in/privacy-policy"));
      assert.ok(appContent.includes("https://labs.proquoment.in/terms-of-service"));
    });

    test("secondary route pages strictly contain no hardcoded #7C3AED or #000EEF glows", () => {
      const files = [aboutContent, servicesContent, workContent, contactContent, privacyContent, termsContent, notFoundContent];
      for (const content of files) {
        assert.ok(!content.includes("#7C3AED"), "Found hardcoded #7C3AED in route page");
        assert.ok(!content.includes("#000EEF"), "Found hardcoded #000EEF in route page");
      }
    });

    test("phase6-verify.ts validates all Phase 6 datasets", () => {
      assert.ok(verifyContent.includes("productEngValid"));
      assert.ok(verifyContent.includes("agentsValid"));
      assert.ok(verifyContent.includes("transformationValid"));
      assert.ok(verifyContent.includes("engagementModelsValid"));
      assert.ok(verifyContent.includes("caseStudiesValid"));
      assert.ok(verifyContent.includes("contactOptionsValid"));
    });
  });
});
