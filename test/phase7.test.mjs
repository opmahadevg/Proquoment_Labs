import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appFile = path.resolve(__dirname, "../src/App.tsx");
const publicDir = path.resolve(__dirname, "../public");
const phase7VerifyFile = path.resolve(__dirname, "../src/phase7-verify.ts");

const appContent = fs.readFileSync(appFile, "utf8");
const phase7VerifyContent = fs.readFileSync(phase7VerifyFile, "utf8");

describe("Phase 7 - Task 32: Wire Full Router in App.tsx & Finalize Public Assets", () => {
  describe("Router Cleanliness & Production Hardening in src/App.tsx", () => {
    test("wires all dedicated routes and not-found route in Wouter Switch (without work)", () => {
      assert.ok(appContent.includes('<Route path="/" component={HomePageRoute} />'));
      assert.ok(appContent.includes('<Route path="/services" component={ServicesPageRoute} />'));
      assert.strictEqual(appContent.includes('<Route path="/work"'), false);
      assert.ok(appContent.includes('<Route path="/about" component={AboutPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/contact" component={ContactPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/privacy-policy" component={PrivacyPolicyPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/terms-of-service" component={TermsOfServicePageRoute} />'));
      assert.ok(appContent.includes('<Route component={NotFoundRoute} />'));
    });

    test("implements clean idiomatic React.lazy code-splitting for all dedicated routes + 404", () => {
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/HomePage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/ServicesPage\"))"));
      assert.strictEqual(appContent.includes("React.lazy(() => import(\"@/pages/WorkPage\"))"), false);
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/AboutPage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/ContactPage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/PrivacyPolicyPage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/TermsOfServicePage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/not-found\"))"));
    });

    test("wraps all dedicated routes + 404 in React.Suspense with PageFallback", () => {
      const occurrences = (appContent.match(/<React\.Suspense fallback={<PageFallback \/>}>/g) || []).length;
      assert.ok(occurrences >= 7, `Expected at least 7 Suspense boundaries, got ${occurrences}`);
    });

    test("wraps every route in Layout with route-level canonical SEO metadata", () => {
      assert.ok(appContent.includes("https://labs.proquoment.in/"));
      assert.ok(appContent.includes("https://labs.proquoment.in/services"));
      assert.strictEqual(appContent.includes("https://labs.proquoment.in/work"), false);
      assert.ok(appContent.includes("https://labs.proquoment.in/about"));
      assert.ok(appContent.includes("https://labs.proquoment.in/contact"));
      assert.ok(appContent.includes("https://labs.proquoment.in/privacy-policy"));
      assert.ok(appContent.includes("https://labs.proquoment.in/terms-of-service"));
    });

    test("includes ScrollToTop component before Switch", () => {
      assert.ok(appContent.includes("<ScrollToTop />"));
      assert.ok(appContent.indexOf("<ScrollToTop />") < appContent.indexOf("<Switch>"));
    });

    test("removes bloated atom imports and placeholders from App.tsx", () => {
      assert.ok(!appContent.includes("import { HeroVisual }"));
      assert.ok(!appContent.includes("import { AgentWorkflowVisual }"));
      assert.ok(!appContent.includes("import { TechMarquee }"));
      assert.ok(!appContent.includes("import { ProcessStep }"));
      assert.ok(!appContent.includes("import { DifferentiatorCard }"));
      assert.ok(!appContent.includes("import { CapabilityGrid }"));
    });

    test("retains verification helpers in development mode including phase7", () => {
      assert.ok(appContent.includes("verifyPhase2Exports()"));
      assert.ok(appContent.includes("verifyPhase3Exports()"));
      assert.ok(appContent.includes("verifyPhase4Exports()"));
      assert.ok(appContent.includes("verifyPhase5Exports()"));
      assert.ok(appContent.includes("verifyPhase6Exports()"));
      assert.ok(appContent.includes("verifyPhase7Exports()"));
    });

    test("implements RouteErrorBoundary to catch lazy chunk and runtime errors gracefully", () => {
      assert.ok(appContent.includes("import RouteErrorBoundary from"));
      const errorBoundaryCount = (appContent.match(/<RouteErrorBoundary>/g) || []).length;
      assert.ok(errorBoundaryCount >= 8, `Expected at least 8 RouteErrorBoundary boundaries, got ${errorBoundaryCount}`);
    });

    test("exports prefetchRoute and wires prefetching for instant route transitions", () => {
      assert.ok(appContent.includes("export { prefetchRoute }"));
      const prefetchFile = path.resolve(__dirname, "../src/lib/prefetch.ts");
      assert.ok(fs.existsSync(prefetchFile), "src/lib/prefetch.ts must exist");
      const prefetchContent = fs.readFileSync(prefetchFile, "utf8");
      assert.ok(prefetchContent.includes("routePrefetchMap"));
      assert.ok(prefetchContent.includes("export function prefetchRoute"));
    });
  });

  describe("Public Assets Audit & Finalization (public/ directory)", () => {
    const requiredAssets = [
      "logo.png",
      "favicon.ico",
      "favicon-16x16.png",
      "favicon-32x32.png",
      "favicon.svg",
      "apple-touch-icon.png",
      "android-chrome-192x192.png",
      "android-chrome-512x512.png",
      "site.webmanifest",
      "robots.txt",
      "sitemap.xml",
      "llms.txt",
      "opengraph.jpg",
    ];

    for (const assetName of requiredAssets) {
      test(`asset ${assetName} exists and is non-empty`, () => {
        const filePath = path.join(publicDir, assetName);
        assert.ok(fs.existsSync(filePath), `Missing asset: ${assetName}`);
        const stat = fs.statSync(filePath);
        assert.ok(stat.size > 0, `Asset ${assetName} is empty (0 bytes)`);
      });
    }

    test("site.webmanifest contains correct name and branding colors", () => {
      const manifestPath = path.join(publicDir, "site.webmanifest");
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      assert.strictEqual(manifest.name, "Proquoment Labs");
      assert.strictEqual(manifest.short_name, "Proquoment Labs");
      assert.strictEqual(manifest.theme_color, "#000EEF");
      assert.strictEqual(manifest.background_color, "#040614");
      assert.ok(manifest.icons.length >= 2);
    });

    test("robots.txt references sitemap.xml on labs.proquoment.in", () => {
      const robotsPath = path.join(publicDir, "robots.txt");
      const content = fs.readFileSync(robotsPath, "utf8");
      assert.ok(content.includes("Allow: /"));
      assert.ok(content.includes("Sitemap: https://labs.proquoment.in/sitemap.xml"));
    });

    test("sitemap.xml lists canonical public routes (without work)", () => {
      const sitemapPath = path.join(publicDir, "sitemap.xml");
      const content = fs.readFileSync(sitemapPath, "utf8");
      assert.ok(content.includes("<loc>https://labs.proquoment.in/</loc>"));
      assert.ok(content.includes("<loc>https://labs.proquoment.in/services</loc>"));
      assert.strictEqual(content.includes("<loc>https://labs.proquoment.in/work</loc>"), false);
      assert.ok(content.includes("<loc>https://labs.proquoment.in/about</loc>"));
      assert.ok(content.includes("<loc>https://labs.proquoment.in/contact</loc>"));
      assert.ok(content.includes("<loc>https://labs.proquoment.in/privacy-policy</loc>"));
      assert.ok(content.includes("<loc>https://labs.proquoment.in/terms-of-service</loc>"));
    });

    test("llms.txt documents public canonical pages and core pillars (without work)", () => {
      const llmsPath = path.join(publicDir, "llms.txt");
      const content = fs.readFileSync(llmsPath, "utf8");
      assert.ok(content.includes("https://labs.proquoment.in/"));
      assert.ok(content.includes("https://labs.proquoment.in/services"));
      assert.strictEqual(content.includes("https://labs.proquoment.in/work"), false);
      assert.ok(content.includes("https://labs.proquoment.in/about"));
      assert.ok(content.includes("https://labs.proquoment.in/contact"));
      assert.ok(content.includes("https://labs.proquoment.in/privacy-policy"));
      assert.ok(content.includes("https://labs.proquoment.in/terms-of-service"));
      assert.ok(content.includes("AI SaaS & Digital Product Engineering"));
      assert.ok(content.includes("Business Process Automation & Integrations"));
      assert.ok(content.includes("Web Applications & Digital Experiences"));
    });

    test("App.tsx route SEO reflects dual audience and core pillars", () => {
      const freshAppContent = fs.readFileSync(appFile, "utf8");
      assert.ok(
        freshAppContent.includes("Build for the Future. Become AI-Ready Today.") ||
        freshAppContent.includes("AI-powered products")
      );
      assert.ok(
        freshAppContent.includes("AI SaaS & Digital Product Engineering") ||
        freshAppContent.includes("AI SaaS")
      );
    });

    test("opengraph.jpg is a high quality preview asset (> 30KB)", () => {
      const ogPath = path.join(publicDir, "opengraph.jpg");
      const stat = fs.statSync(ogPath);
      assert.ok(stat.size > 30000, `Expected opengraph.jpg to be > 30KB, was ${stat.size}`);
    });
  });

  describe("Phase 7 Verification Helper (src/phase7-verify.ts)", () => {
    test("defines CANONICAL_ROUTES and REQUIRED_PUBLIC_ASSETS contracts", () => {
      assert.ok(phase7VerifyContent.includes("CANONICAL_ROUTES"));
      assert.ok(phase7VerifyContent.includes("REQUIRED_PUBLIC_ASSETS"));
      assert.ok(phase7VerifyContent.includes("verifyPhase7Exports"));
      assert.ok(phase7VerifyContent.includes("export default verifyPhase7Exports"));
    });
  });
});
