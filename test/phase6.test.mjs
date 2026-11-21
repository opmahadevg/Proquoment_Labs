import { test, describe } from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contactPageFile = path.resolve(__dirname, "../src/pages/ContactPage.tsx");
const aboutPageFile = path.resolve(__dirname, "../src/pages/AboutPage.tsx");
const privacyPageFile = path.resolve(__dirname, "../src/pages/PrivacyPolicyPage.tsx");
const termsPageFile = path.resolve(__dirname, "../src/pages/TermsOfServicePage.tsx");
const appFile = path.resolve(__dirname, "../src/App.tsx");
const verifyPhase6File = path.resolve(__dirname, "../src/phase6-verify.ts");

const contactContent = fs.readFileSync(contactPageFile, "utf8");
const aboutContent = fs.readFileSync(aboutPageFile, "utf8");
const privacyContent = fs.readFileSync(privacyPageFile, "utf8");
const termsContent = fs.readFileSync(termsPageFile, "utf8");
const appContent = fs.readFileSync(appFile, "utf8");
const verifyPhase6Content = fs.readFileSync(verifyPhase6File, "utf8");

describe("Phase 6 - Tasks 25 to 31 Dedicated Route Pages & App Router Integration Contract Tests", () => {
  // TASK 26 - ContactPage
  describe("TASK 26 - ContactPage (src/pages/ContactPage.tsx)", () => {
    test("exports ContactPage (named and default)", () => {
      const freshContact = fs.readFileSync(contactPageFile, "utf8");
      assert.ok(freshContact.includes("export function ContactPage"));
      assert.ok(freshContact.includes("export default ContactPage"));
    });

    test("contains PlateHeader with direct inquiry title and description", () => {
      const freshContact = fs.readFileSync(contactPageFile, "utf8");
      assert.ok(freshContact.includes("PlateHeader"));
      assert.ok(freshContact.includes('kicker="DIRECT INQUIRY"'));
      assert.ok(freshContact.includes('title="Let Us Build Something"'));
      assert.ok(freshContact.includes('italicWord="Lasting."'));
    });

    test("contains all required form inputs and selects", () => {
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
      assert.ok(freshContact.includes('type="submit"'), "Contact submit button must have type='submit'");
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

    test("reflects dual-audience studio positioning in copy", () => {
      const freshAbout = fs.readFileSync(aboutPageFile, "utf8");
      assert.ok(freshAbout.includes("AI-native Product & Engineering Studio"));
      assert.ok(freshAbout.includes("founders") || freshAbout.includes("Founders"));
      assert.ok(freshAbout.includes("businesses") || freshAbout.includes("Businesses"));
    });

    test("features PlateHeader and structured section hierarchy", () => {
      const freshAbout = fs.readFileSync(aboutPageFile, "utf8");
      assert.ok(freshAbout.includes("PlateHeader"));
      assert.ok(freshAbout.includes('kicker="STUDIO PROFILE"'));
    });

    test("displays 4 core studio principles", () => {
      const freshAbout = fs.readFileSync(aboutPageFile, "utf8");
      assert.ok(freshAbout.includes("Production-Grade or Nothing"));
      assert.ok(freshAbout.includes("Speed with Deep Rigor"));
      assert.ok(freshAbout.includes("Practical AI, Zero Fluff"));
      assert.ok(freshAbout.includes("Transparent, High-Agency Partnership"));
    });

    test("displays three core pillars aligned with studio repositioning", () => {
      const freshAbout = fs.readFileSync(aboutPageFile, "utf8");
      assert.ok(freshAbout.includes("AI SaaS & Digital Product Engineering"));
      assert.ok(freshAbout.includes("Business Process Automation & Integrations"));
      assert.ok(freshAbout.includes("Web Applications & Digital Experiences"));
    });

    test("displays founding year numeral MMXXVI and Gurgaon headquarters", () => {
      const freshAbout = fs.readFileSync(aboutPageFile, "utf8");
      assert.ok(freshAbout.includes("MMXXVI"));
      assert.ok(freshAbout.includes("Gurgaon, Haryana, India"));
    });

    test("displays technology stack badges across categories", () => {
      const freshAbout = fs.readFileSync(aboutPageFile, "utf8");
      assert.ok(freshAbout.includes("TECH_STACK_CATEGORIES"));
    });
  });

  // ==========================================
  // TASK 29 - PrivacyPolicyPage
  // ==========================================
  describe("TASK 29 - PrivacyPolicyPage (src/pages/PrivacyPolicyPage.tsx)", () => {
    test("exports PrivacyPolicyPage (named and default)", () => {
      const freshPrivacy = fs.readFileSync(privacyPageFile, "utf8");
      assert.ok(freshPrivacy.includes("export function PrivacyPolicyPage"));
      assert.ok(freshPrivacy.includes("export default PrivacyPolicyPage"));
    });

    test("contains all 10 required privacy sections with plain-English summaries", () => {
      const freshPrivacy = fs.readFileSync(privacyPageFile, "utf8");
      assert.ok(freshPrivacy.includes("PRIVACY_SECTIONS"));
      assert.ok(freshPrivacy.includes("1. Information We Collect"));
      assert.ok(freshPrivacy.includes("10. Contact Information"));
    });

    test("mentions third-party sub-processors Supabase, PostHog, Vercel", () => {
      const freshPrivacy = fs.readFileSync(privacyPageFile, "utf8");
      assert.ok(freshPrivacy.includes("Supabase"));
      assert.ok(freshPrivacy.includes("PostHog"));
      assert.ok(freshPrivacy.includes("Vercel"));
    });

    test("specifies legal contact email contact@proquoment.in and Gurgaon jurisdiction", () => {
      const freshPrivacy = fs.readFileSync(privacyPageFile, "utf8");
      assert.ok(freshPrivacy.includes("contact@proquoment.in"));
      assert.ok(freshPrivacy.includes("Gurgaon, Haryana, India"));
    });
  });

  // ==========================================
  // TASK 30 - TermsOfServicePage
  // ==========================================
  describe("TASK 30 - TermsOfServicePage (src/pages/TermsOfServicePage.tsx)", () => {
    test("exports TermsOfServicePage (named and default)", () => {
      const freshTerms = fs.readFileSync(termsPageFile, "utf8");
      assert.ok(freshTerms.includes("export function TermsOfServicePage"));
      assert.ok(freshTerms.includes("export default TermsOfServicePage"));
    });

    test("contains all 10 required terms sections with summaries", () => {
      const freshTerms = fs.readFileSync(termsPageFile, "utf8");
      assert.ok(freshTerms.includes("TERMS_SECTIONS"));
      assert.ok(freshTerms.includes("1. Scope of Services & Engagements"));
      assert.ok(freshTerms.includes("10. Entire Agreement & Governing Law"));
    });

    test("stipulates 100% client IP assignment upon payment", () => {
      const freshTerms = fs.readFileSync(termsPageFile, "utf8");
      assert.ok(freshTerms.includes("Client Intellectual Property"));
      assert.ok(freshTerms.includes("100% of custom software") || freshTerms.includes("100% client ownership"));
    });

    test("specifies Indian governing law and Gurgaon jurisdiction", () => {
      const freshTerms = fs.readFileSync(termsPageFile, "utf8");
      assert.ok(freshTerms.includes("laws of India"));
      assert.ok(freshTerms.includes("Gurgaon, Haryana, India"));
    });
  });

  // ==========================================
  // TASK 31 - not-found.tsx
  // ==========================================
  describe("TASK 31 - not-found.tsx (src/pages/not-found.tsx)", () => {
    test("exports NotFoundPage and NotFound", () => {
      const freshNotFound = fs.readFileSync(path.resolve(__dirname, "../src/pages/not-found.tsx"), "utf8");
      assert.ok(freshNotFound.includes("export function NotFoundPage"));
      assert.ok(freshNotFound.includes("export default NotFoundPage"));
    });

    test("displays 404 display code and diagnostic route telemetry", () => {
      const freshNotFound = fs.readFileSync(path.resolve(__dirname, "../src/pages/not-found.tsx"), "utf8");
      assert.ok(freshNotFound.includes("404"));
      assert.ok(freshNotFound.includes("Page Not Found"));
    });

    test("contains link back to home using Wouter Link", () => {
      const freshNotFound = fs.readFileSync(path.resolve(__dirname, "../src/pages/not-found.tsx"), "utf8");
      assert.ok(freshNotFound.includes('href="/"'));
      assert.ok(freshNotFound.includes("Return to Overview"));
    });

    test("contains quick links to Services, About, Contact (no work link)", () => {
      const freshNotFound = fs.readFileSync(path.resolve(__dirname, "../src/pages/not-found.tsx"), "utf8");
      assert.ok(freshNotFound.includes('href="/services"'));
      assert.ok(freshNotFound.includes('href="/about"'));
      assert.ok(freshNotFound.includes('href="/contact"'));
      assert.ok(!freshNotFound.includes('href="/work"'));
    });
  });

  // ==========================================
  // Full App Router Integration
  // ==========================================
  describe("App Router Integration (src/App.tsx)", () => {
    test("wires all dedicated routes + not found with Route components (work removed)", () => {
      assert.ok(appContent.includes('<Route path="/" component={HomePageRoute} />'));
      assert.ok(appContent.includes('<Route path="/services" component={ServicesPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/about" component={AboutPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/contact" component={ContactPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/privacy-policy" component={PrivacyPolicyPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/terms-of-service" component={TermsOfServicePageRoute} />'));
      assert.ok(appContent.includes('<Route component={NotFoundPageRoute} />'));
      assert.ok(!appContent.includes('<Route path="/work"'));
    });

    test("implements lazy loading (React.lazy) and Suspense with PageFallback", () => {
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/HomePage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/ServicesPage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/AboutPage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/ContactPage\"))"));
      assert.ok(appContent.includes("<React.Suspense fallback={<PageFallback />}>"));
    });

    test("configures dedicated SEO props on Layout for each route", () => {
      assert.ok(appContent.includes("Proquoment Labs | Become AI-Ready Today."));
      assert.ok(appContent.includes("Services | AI SaaS, Business Automation & Digital Experiences | Proquoment Labs"));
      assert.ok(appContent.includes("About Us | AI-Native Product & Engineering Studio | Proquoment Labs"));
      assert.ok(appContent.includes("Direct Inquiry & Architecture Consultation | Proquoment Labs"));
    });

    test("secondary route pages strictly contain no hardcoded #7C3AED or #000EEF glows", () => {
      assert.ok(!contactContent.includes("#7C3AED") && !contactContent.includes("#000EEF"));
      assert.ok(!aboutContent.includes("#7C3AED") && !aboutContent.includes("#000EEF"));
      assert.ok(!privacyContent.includes("#7C3AED") && !privacyContent.includes("#000EEF"));
      assert.ok(!termsContent.includes("#7C3AED") && !termsContent.includes("#000EEF"));
    });

    test("phase6-verify.ts validates all Phase 6 datasets", () => {
      assert.ok(verifyPhase6Content.includes("verifyPhase6Exports"));
    });
  });
});