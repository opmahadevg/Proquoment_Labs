import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const layoutFile = path.resolve(__dirname, "../src/components/Layout.tsx");
const appFile = path.resolve(__dirname, "../src/App.tsx");
const scrollToTopFile = path.resolve(__dirname, "../src/components/ScrollToTop.tsx");
const layoutContent = fs.readFileSync(layoutFile, "utf8");
const appContent = fs.readFileSync(appFile, "utf8");
const scrollToTopContent = fs.readFileSync(scrollToTopFile, "utf8");

describe("Phase 3 - Task 08 & 09 Contract Tests", () => {
  test("Layout.tsx exports Navbar, Footer, and Layout (both named and default)", () => {
    assert.match(layoutContent, /export\s+function\s+Navbar\b/);
    assert.match(layoutContent, /export\s+function\s+Footer\b/);
    assert.match(layoutContent, /export\s+function\s+Layout\b/);
    assert.match(layoutContent, /export\s+default\s+Layout\b/);
    assert.match(layoutContent, /export\s+const\s+NAV_ITEMS\b/);
  });

  test("Navbar has sticky copperplate styling", () => {
    assert.ok(layoutContent.includes("sticky top-0 z-50"));
    assert.ok(layoutContent.includes("bg-[var(--ctl-paper)]/95"));
    assert.ok(layoutContent.includes("backdrop-blur-md"));
    assert.ok(layoutContent.includes("border-b border-[var(--ctl-line)]"));
  });

  test("Navbar brand logo has logo.png (32px, rounded-xl) and Proquoment Labs in unified serif font", () => {
    assert.ok(layoutContent.includes('src=\"/logo.png\"'));
    assert.ok(layoutContent.includes("w-8 h-8 rounded-xl"));
    assert.ok(layoutContent.includes("Proquoment Labs"));
    assert.ok(layoutContent.includes("font-serif font-bold tracking-tight text-[var(--ctl-text)] text-lg"));
  });

  test("Navbar navigation links include Services, Work, About, Contact with correct routes", () => {
    assert.ok(layoutContent.includes('/services'));
    assert.ok(layoutContent.includes('/work'));
    assert.ok(layoutContent.includes('/about'));
    assert.ok(layoutContent.includes('/contact'));
    assert.ok(layoutContent.includes("text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)]"));
  });

  test("Navbar active link indicator uses useLocation and 2px blue bottom indicator", () => {
    assert.ok(layoutContent.includes("useLocation"));
    assert.ok(layoutContent.includes("text-[var(--ctl-ink)] font-bold"));
    assert.ok(layoutContent.includes("h-[2px] bg-primary"));
  });

  test("Navbar right actions include Platform link and Start a Project CTA button", () => {
    assert.ok(layoutContent.includes("https://proquoment.in"));
    assert.ok(layoutContent.includes("Platform"));
    assert.ok(layoutContent.includes("Start a Project"));
    assert.ok(layoutContent.includes("bg-primary hover:bg-primary/90 text-white rounded-lg px-4 h-9 font-semibold text-sm shadow-lg shadow-primary/25"));
  });

  test("Navbar mobile view includes hamburger toggle and Framer Motion drawer", () => {
    assert.ok(layoutContent.includes("AnimatePresence"));
    assert.ok(layoutContent.includes("motion.div"));
    assert.ok(layoutContent.includes("<Menu"));
    assert.ok(layoutContent.includes("<X"));
    assert.ok(layoutContent.includes("setMobileOpen(false)"));
  });

  test("Footer has copperplate styling: border-t border-[var(--ctl-line)] bg-[var(--ctl-paper)] py-16 text-[var(--ctl-soft)]", () => {
    assert.ok(layoutContent.includes("border-t border-[var(--ctl-line)] bg-[var(--ctl-paper)] py-16 text-[var(--ctl-soft)]"));
  });

  test("Footer Column 1 contains Brand logo, Proquoment Labs, Tagline, and Description", () => {
    const freshLayout = fs.readFileSync(layoutFile, "utf8");
    assert.ok(
      freshLayout.includes("Build for the future. Become AI-ready today.") ||
      freshLayout.includes("Where AI becomes your competitive advantage.")
    );
    assert.ok(
      freshLayout.includes("AI-native Product &amp; Engineering Studio") ||
      freshLayout.includes("AI Product Engineering")
    );
  });

  test("Footer Column 2 contains Services links with hashes and view all", () => {
    const freshLayout = fs.readFileSync(layoutFile, "utf8");
    assert.ok(freshLayout.includes("/services#product-engineering"));
    assert.ok(freshLayout.includes("/services#agents-automation"));
    assert.ok(freshLayout.includes("/services#transformation"));
    assert.ok(freshLayout.includes("/services"));
    assert.ok(freshLayout.includes("View all services"));
  });

  test("Footer Column 3 contains Get in Touch email, Consultation link, and Platform link", () => {
    assert.ok(layoutContent.includes("contact@proquoment.in"));
    assert.ok(layoutContent.includes("mailto:contact@proquoment.in"));
    assert.ok(layoutContent.includes("https://calendly.com/proquoment"));
    assert.ok(layoutContent.includes("Book a Consultation"));
    assert.ok(layoutContent.includes("https://proquoment.in"));
    assert.ok(layoutContent.includes("Visit Proquoment Platform"));
  });

  test("Footer STRICTLY contains NO social media icons", () => {
    // Assert no twitter, linkedin, github, instagram icons or links in footer
    assert.strictEqual(layoutContent.includes("twitter.com"), false);
    assert.strictEqual(layoutContent.includes("x.com"), false);
    assert.strictEqual(layoutContent.includes("linkedin.com"), false);
    assert.strictEqual(layoutContent.includes("github.com"), false);
    assert.strictEqual(layoutContent.includes("instagram.com"), false);
    assert.strictEqual(layoutContent.includes("lucide-react") && (layoutContent.includes("Twitter") || layoutContent.includes("Linkedin") || layoutContent.includes("Github") || layoutContent.includes("Instagram")), false);
  });

  test("Footer Bottom bar contains 2026 copyright, Privacy Policy and Terms of Service", () => {
    assert.ok(layoutContent.includes("2026 Proquoment Private Limited. All rights reserved."));
    assert.ok(layoutContent.includes("/privacy-policy"));
    assert.ok(layoutContent.includes("/terms-of-service"));
    assert.ok(layoutContent.includes("Privacy Policy"));
    assert.ok(layoutContent.includes("Terms of Service"));
  });

  test("Layout component stitches together SEO, Navbar, main with min-h, and Footer", () => {
    assert.ok(layoutContent.includes("<SEO"));
    assert.ok(layoutContent.includes("<Navbar"));
    assert.ok(layoutContent.includes("min-h-[calc(100vh-4rem)] flex-1"));
    assert.ok(layoutContent.includes("<Footer"));
  });

  test("App.tsx uses Layout", () => {
    assert.ok(appContent.includes("import Layout from"));
    assert.ok(appContent.includes("<Layout>"));
  });

  test("Navbar has WCAG 2.2 accessibility attributes", () => {
    assert.ok(layoutContent.includes('aria-label="Main Navigation"'));
    assert.ok(layoutContent.includes('aria-label="Mobile Navigation"'));
    assert.ok(layoutContent.includes('aria-controls="mobile-nav-drawer"'));
    assert.ok(layoutContent.includes('id="mobile-nav-drawer"'));
    assert.ok(layoutContent.includes('aria-current={active ? "page" : undefined}'));
  });

  test("Navbar mobile drawer has backdrop dismissal, Escape key handler, resize handler, and body lock", () => {
    assert.ok(layoutContent.includes('key="mobile-nav-backdrop"'));
    assert.ok(layoutContent.includes('e.key === "Escape"'));
    assert.ok(layoutContent.includes('window.innerWidth >= 768'));
    assert.ok(layoutContent.includes('document.body.style.overflow = "hidden"'));
  });

  test("ScrollToTop handles anchor hash links and scroll-into-view smoothly", () => {
    assert.ok(scrollToTopContent.includes("window.location.hash"));
    assert.ok(scrollToTopContent.includes("scrollIntoView"));
    assert.ok(scrollToTopContent.includes("hashchange"));
    assert.ok(scrollToTopContent.includes("pushState"));
  });
});
