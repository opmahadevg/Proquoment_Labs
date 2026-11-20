import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const servicesPageFile = path.resolve(__dirname, "../src/pages/ServicesPage.tsx");
const contactPageFile = path.resolve(__dirname, "../src/pages/ContactPage.tsx");
const aboutPageFile = path.resolve(__dirname, "../src/pages/AboutPage.tsx");
const privacyPageFile = path.resolve(__dirname, "../src/pages/PrivacyPolicyPage.tsx");
const termsPageFile = path.resolve(__dirname, "../src/pages/TermsOfServicePage.tsx");
const notFoundFile = path.resolve(__dirname, "../src/pages/not-found.tsx");
const appFile = path.resolve(__dirname, "../src/App.tsx");
const verifyFile = path.resolve(__dirname, "../src/phase6-verify.ts");

const servicesContent = fs.readFileSync(servicesPageFile, "utf8");
const contactContent = fs.readFileSync(contactPageFile, "utf8");
const aboutContent = fs.readFileSync(aboutPageFile, "utf8");
const privacyContent = fs.readFileSync(privacyPageFile, "utf8");
const termsContent = fs.readFileSync(termsPageFile, "utf8");
const notFoundContent = fs.readFileSync(notFoundFile, "utf8");
const appContent = fs.readFileSync(appFile, "utf8");
const verifyContent = fs.readFileSync(verifyFile, "utf8");

describe("Phase 6 - Tasks 25 to 31 Dedicated Route Pages & App Router Integration Contract Tests", () => {
  // ==========================================
  // TASK 25 - ServicesPage
  // ==========================================
  describe("TASK 25 - ServicesPage (src/pages/ServicesPage.tsx)", () => {
    test("exports ServicesPage component (both named and default)", () => {
      const freshServices = fs.readFileSync(servicesPageFile, "utf8");
      assert.ok(freshServices.includes("export function ServicesPage"));
      assert.ok(freshServices.includes("export default ServicesPage"));
    });

    test("contains all 3 deep-dive sections with anchors product-engineering, agents-automation, transformation", () => {
      const freshServices = fs.readFileSync(servicesPageFile, "utf8");
      assert.ok(freshServices.includes('id="product-engineering"'));
      assert.ok(freshServices.includes('id="agents-automation"'));
      assert.ok(freshServices.includes('id="transformation"'));
    });

    test("includes sticky/subnav quick links allowing smooth jumping to all 3 pillars", () => {
      const freshServices = fs.readFileSync(servicesPageFile, "utf8");
      assert.ok(
        freshServices.includes("01. AI SaaS &amp; Product Engineering") ||
        freshServices.includes("01. AI SaaS & Product Engineering") ||
        freshServices.includes("01. SaaS &amp; Product Engineering") ||
        freshServices.includes("01. SaaS & Product Engineering") ||
        freshServices.includes("01. Product Engineering")
      );
      assert.ok(
        freshServices.includes("02. Automation &amp; Integrations") ||
        freshServices.includes("02. Automation & Integrations") ||
        freshServices.includes("02. Agents & Automation")
      );
      assert.ok(
        freshServices.includes("03. Websites &amp; Digital Experiences") ||
        freshServices.includes("03. Websites & Digital Experiences") ||
        freshServices.includes("03. Web Apps &amp; Experiences") ||
        freshServices.includes("03. Web Apps & Experiences") ||
        freshServices.includes("03. Transformation")
      );
      assert.ok(freshServices.includes("scrollToPillar"));
    });

    test("contains 3 primary service pillar headings matching strategic repositioning", () => {
      const freshServices = fs.readFileSync(servicesPageFile, "utf8");
      assert.ok(freshServices.includes("AI SaaS & Digital Product Engineering") || freshServices.includes("AI SaaS &amp; Digital Product Engineering"));
      assert.ok(freshServices.includes("Business Process Automation & Integrations") || freshServices.includes("Business Process Automation &amp; Integrations"));
      assert.ok(
        freshServices.includes("Websites & Digital Experiences") ||
        freshServices.includes("Websites &amp; Digital Experiences") ||
        freshServices.includes("Web Applications & Digital Experiences") ||
        freshServices.includes("Web Applications &amp; Digital Experiences")
      );
    });

    test("contains expanded capability lists with at least 7-8 technical items each", () => {
      const freshServices = fs.readFileSync(servicesPageFile, "utf8");
      assert.ok(freshServices.includes("SERVICES_PRODUCT_ENGINEERING"));
      assert.ok(freshServices.includes("SERVICES_AGENTS_AUTOMATION"));
      assert.ok(freshServices.includes("SERVICES_TRANSFORMATION"));

      // Check specific technical capabilities
      assert.ok(freshServices.includes("SaaS MVP & Product Development") || freshServices.includes("SaaS MVP Development") || freshServices.includes("Full-Stack Web & Mobile Applications"));
      assert.ok(freshServices.includes("Business Workflow Automation") || freshServices.includes("Business Process Automation") || freshServices.includes("Custom AI Agents & Multi-Agent Systems"));
      assert.ok(freshServices.includes("Interactive Dashboards & Admin Panels") || freshServices.includes("Business Websites & Digital Presence"));
    });

    test("includes all 3 commercial engagement models", () => {
      const freshServices = fs.readFileSync(servicesPageFile, "utf8");
      assert.ok(
        freshServices.includes("Product & System Development") ||
        freshServices.includes("Project-Based Development") ||
        freshServices.includes("Project-Based Engagement")
      );
      assert.ok(
        freshServices.includes("Ongoing Engineering Partnership") ||
        freshServices.includes("Dedicated Engineering Retainer")
      );
      assert.ok(
        freshServices.includes("MVP Development Sprint") ||
        freshServices.includes("4-Week MVP Sprint")
      );
      assert.ok(freshServices.includes("ENGAGEMENT_MODELS"));
    });

    test("includes real-world use case scenarios and architectures", () => {
      const freshServices = fs.readFileSync(servicesPageFile, "utf8");
      assert.ok(freshServices.includes("USE_CASE_SCENARIOS"));
      assert.ok(freshServices.includes("Financial Modeling") || freshServices.includes("Generative Financial Modeling SaaS"));
      assert.ok(freshServices.includes("Invoice") || freshServices.includes("Procurement & Invoice Reconciliation"));
    });

    test("reuses AgentWorkflowVisual in the Agents section", () => {
      const freshServices = fs.readFileSync(servicesPageFile, "utf8");
      assert.ok(freshServices.includes("<AgentWorkflowVisual"));
    });

    test("features multiple direct CTA links to /contact", () => {
      const freshServices = fs.readFileSync(servicesPageFile, "utf8");
      assert.ok(freshServices.includes('href="/contact"'));
    });
  });

  // ==========================================
  // TASK 26 - ContactPage
  // ==========================================
  describe("TASK 26 - ContactPage (src/pages/ContactPage.tsx)", () => {
    test("exports ContactPage (named and default)", () => {
      const freshContact = fs.readFileSync(contactPageFile, "utf8");
      assert.ok(freshContact.includes("export function ContactPage"));
      assert.ok(freshContact.includes("export default ContactPage"));
    });

    test("contains 2-column layout with project enquiry form and info panel", () => {
      const freshContact = fs.readFileSync(contactPageFile, "utf8");
      assert.ok(freshContact.includes("lg:grid-cols-12"));
      assert.ok(freshContact.includes("lg:col-span-7"));
      assert.ok(freshContact.includes("lg:col-span-5"));
    });

    test("form includes all required fields: fullName, email, company, serviceType, description, budgetRange, referral", () => {
      const freshContact = fs.readFileSync(contactPageFile, "utf8");
      assert.ok(freshContact.includes('id="fullName"'));
      assert.ok(freshContact.includes('id="email"'));
      assert.ok(freshContact.includes('id="company"'));
      assert.ok(freshContact.includes('id="serviceType"'));
      assert.ok(freshContact.includes('id="description"'));
      assert.ok(freshContact.includes('id="budgetRange"'));
      assert.ok(freshContact.includes('id="referral"'));
    });

    test("options reflect three core pillars and studio budget ranges", () => {
      const freshContact = fs.readFileSync(contactPageFile, "utf8");
      assert.ok(freshContact.includes("AI SaaS & Digital Product Engineering"));
      assert.ok(freshContact.includes("Business Process Automation & Integrations"));
      assert.ok(freshContact.includes("Web Applications & Digital Experiences"));
      assert.ok(freshContact.includes("$3,000 - $5,000 (Scoping & Prototyping)"));
      assert.ok(freshContact.includes("$10,000 - $25,000 (Full Product & System Engineering)"));
    });

    test("submits to Supabase table labs_enquiries via supabase client", () => {
      const freshContact = fs.readFileSync(contactPageFile, "utf8");
      assert.ok(freshContact.includes('from("labs_enquiries").insert'));
      assert.ok(freshContact.includes('import { supabase } from "@/lib/supabase"'));
    });

    test("supports dual-write to VITE_GOOGLE_SHEET_WEBAPP_URL when present", () => {
      const freshContact = fs.readFileSync(contactPageFile, "utf8");
      assert.ok(freshContact.includes("VITE_GOOGLE_SHEET_WEBAPP_URL"));
      assert.ok(freshContact.includes("no-cors"));
    });

    test("renders inline error validation messages and green checkmark success state", () => {
      const freshContact = fs.readFileSync(contactPageFile, "utf8");
      assert.ok(freshContact.includes("errors.fullName"));
      assert.ok(freshContact.includes("errors.email"));
      assert.ok(freshContact.includes("errors.description"));
      assert.ok(freshContact.includes("Enquiry Received!"));
      assert.ok(freshContact.includes("CheckCircle2"));
    });

    test("info panel includes Calendly link, direct email, <24h response badge, and Gurgaon HQ", () => {
      const freshContact = fs.readFileSync(contactPageFile, "utf8");
      assert.ok(freshContact.includes("https://calendly.com/proquoment"));
      assert.ok(freshContact.includes("contact@proquoment.in"));
      assert.ok(freshContact.includes("&lt;24h Response Time SLA") || freshContact.includes("<24h Response Time SLA"));
      assert.ok(freshContact.includes("Gurgaon, Haryana, India"));
    });
  });

  // ==========================================
  // TASK 27 - WorkPage Removed
  // ==========================================
  describe("TASK 27 - WorkPage Removed", () => {
    test("WorkPage route and file are removed from branch", () => {
      const workFile = path.resolve(__dirname, "../src/pages/WorkPage.tsx");
      assert.strictEqual(fs.existsSync(workFile), false);
    });
  });

  // ==========================================
  // TASK 28 - AboutPage
  // ==========================================
  describe("TASK 28 - AboutPage (src/pages/AboutPage.tsx)", () => {
    test("exports AboutPage (named and default)", () => {
      const freshAbout = fs.readFileSync(aboutPageFile, "utf8");
      assert.ok(freshAbout.includes("export function AboutPage"));
      assert.ok(freshAbout.includes("export default AboutPage"));
    });

    test("Section 1 (Origin) details Labs as AI engineering & innovation division of Proquoment Private Limited", () => {
      const freshAbout = fs.readFileSync(aboutPageFile, "utf8");
      assert.ok(freshAbout.includes("Proquoment Private Limited"));
      assert.ok(freshAbout.includes("Born from the Reality of Enterprise Operations") || freshAbout.includes("Our Origin"));
    });

    test("Section 2 (Mission) covers empowering businesses to become AI-native with operational systems", () => {
      const freshAbout = fs.readFileSync(aboutPageFile, "utf8");
      assert.ok(freshAbout.includes("Empowering Businesses to Become AI-Native"));
    });

    test("Section 3 (Core Principles) covers all 3 principles verbatim", () => {
      const freshAbout = fs.readFileSync(aboutPageFile, "utf8");
      assert.ok(freshAbout.includes("AI should be operational"));
      assert.ok(freshAbout.includes("Businesses need builders"));
      assert.ok(freshAbout.includes("Speed is the differentiator"));
    });

    test("Section 4 presents ecosystem context and Contact Labs action", () => {
      const freshAbout = fs.readFileSync(aboutPageFile, "utf8");
      assert.ok(freshAbout.includes("Looking for the Proquoment Enterprise Platform?"));
      assert.ok(freshAbout.includes("Contact Labs Team"));
    });
  });

  // ==========================================
  // TASK 29 - PrivacyPolicyPage
  // ==========================================
  describe("TASK 29 - PrivacyPolicyPage (src/pages/PrivacyPolicyPage.tsx)", () => {
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
      assert.ok(privacyContent.includes("Gurgaon, Haryana"));
      assert.ok(privacyContent.includes("contact@proquoment.in"));
    });
  });

  // ==========================================
  // TASK 30 - TermsOfServicePage
  // ==========================================
  describe("TASK 30 - TermsOfServicePage (src/pages/TermsOfServicePage.tsx)", () => {
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

    test("specifies Indian governing law and Gurgaon jurisdiction", () => {
      assert.ok(termsContent.includes("Gurgaon, Haryana, India"));
      assert.ok(termsContent.includes("contact@proquoment.in"));
    });
  });

  // ==========================================
  // TASK 31 - not-found.tsx
  // ==========================================
  describe("TASK 31 - not-found.tsx (src/pages/not-found.tsx)", () => {
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

    test("contains quick links to Services, About, Contact (no work link)", () => {
      assert.ok(notFoundContent.includes('href="/services"'));
      assert.strictEqual(notFoundContent.includes('href="/work"'), false);
      assert.ok(notFoundContent.includes('href="/about"'));
      assert.ok(notFoundContent.includes('href="/contact"'));
    });
  });

  // ==========================================
  // App Router Integration in src/App.tsx
  // ==========================================
  describe("App Router Integration (src/App.tsx)", () => {
    test("wires all dedicated routes + not found with Route components (work removed)", () => {
      assert.ok(appContent.includes('<Route path="/" component={HomePageRoute} />'));
      assert.ok(appContent.includes('<Route path="/services" component={ServicesPageRoute} />'));
      assert.strictEqual(appContent.includes('<Route path="/work"'), false);
      assert.ok(appContent.includes('<Route path="/about" component={AboutPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/contact" component={ContactPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/privacy-policy" component={PrivacyPolicyPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/terms-of-service" component={TermsOfServicePageRoute} />'));
      assert.ok(appContent.includes('<Route component={NotFoundRoute} />'));
    });

    test("implements lazy loading (React.lazy) and Suspense with PageFallback", () => {
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/ServicesPage\"))"));
      assert.strictEqual(appContent.includes("React.lazy(() => import(\"@/pages/WorkPage\"))"), false);
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/AboutPage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/ContactPage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/PrivacyPolicyPage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/TermsOfServicePage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/not-found\"))"));
      assert.ok(appContent.includes("<React.Suspense fallback={<PageFallback />}>"));
    });

    test("configures dedicated SEO props on Layout for each route", () => {
      assert.ok(appContent.includes("https://labs.proquoment.in/services"));
      assert.ok(appContent.includes("https://labs.proquoment.in/about"));
      assert.ok(appContent.includes("https://labs.proquoment.in/contact"));
      assert.ok(appContent.includes("https://labs.proquoment.in/privacy-policy"));
      assert.ok(appContent.includes("https://labs.proquoment.in/terms-of-service"));
    });

    test("secondary route pages strictly contain no hardcoded #7C3AED or #000EEF glows", () => {
      const files = [aboutContent, servicesContent, contactContent, privacyContent, termsContent, notFoundContent];
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
      assert.ok(verifyContent.includes("contactOptionsValid"));
    });
  });
});
