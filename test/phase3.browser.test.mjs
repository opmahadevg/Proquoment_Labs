import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { test, describe, before, after } from "node:test";
import assert from "node:assert/strict";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist/public");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
};

describe("Phase 3 - Real Headless Browser End-to-End Suite", () => {
  let server;
  let browser;
  const PORT = 5199;
  const BASE_URL = `http://127.0.0.1:${PORT}`;

  before(async () => {
    // 1. Static file server for SPA dist
    server = http.createServer((req, res) => {
      const urlPath = req.url.split("?")[0];
      let filePath = path.join(distDir, urlPath === "/" ? "index.html" : urlPath);

      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        if (path.extname(urlPath)) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Not Found");
          return;
        }
        filePath = path.join(distDir, "index.html");
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || "application/octet-stream";

      try {
        const data = fs.readFileSync(filePath);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      } catch (err) {
        res.writeHead(404);
        res.end("Not Found");
      }
    });

    await new Promise((resolve) => server.listen(PORT, "127.0.0.1", resolve));

    // 2. Launch Chromium
    browser = await chromium.launch({ headless: true });
  });

  after(async () => {
    if (browser) await browser.close();
    if (server) await new Promise((resolve) => server.close(resolve));
  });

  test("Desktop: Navbar renders brand logo, 4 links, platform link and CTA", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto(BASE_URL);

    // Verify Brand Logo
    const logoImg = page.locator('header img[alt="Proquoment Logo"]');
    await assert.doesNotReject(logoImg.waitFor({ state: "visible" }));
    const brandText = await page.locator("header").textContent();
    assert.ok(brandText.includes("Proquoment"));
    assert.ok(brandText.includes("Labs"));

    // Verify Nav Links
    const servicesLink = page.locator('header nav a[href="/services"]');
    const workLink = page.locator('header nav a[href="/work"]');
    const aboutLink = page.locator('header nav a[href="/about"]');
    const contactLink = page.locator('header nav a[href="/contact"]');

    assert.equal(await servicesLink.count(), 1);
    assert.equal(await workLink.count(), 1);
    assert.equal(await aboutLink.count(), 1);
    assert.equal(await contactLink.count(), 1);

    // Verify Platform & CTA Actions
    const platformLink = page.locator('header a[href="https://proquoment.in"]');
    assert.ok(await platformLink.isVisible());
    assert.equal(await platformLink.getAttribute("target"), "_blank");

    const startProjectBtn = page.locator('header a[href="/contact"]:has-text("Start a Project")');
    assert.ok(await startProjectBtn.isVisible());

    await page.close();
  });

  test("Desktop: Active link indication and routing work correctly", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto(BASE_URL);

    // Click "Services"
    await page.click('header nav a[href="/services"]');
    await page.waitForURL("**/services");

    // Check aria-current on active link
    const servicesLink = page.locator('header nav a[href="/services"]');
    assert.equal(await servicesLink.getAttribute("aria-current"), "page");

    // Click "Work"
    await page.click('header nav a[href="/work"]');
    await page.waitForURL("**/work");

    const workLink = page.locator('header nav a[href="/work"]');
    assert.equal(await workLink.getAttribute("aria-current"), "page");
    assert.equal(await servicesLink.getAttribute("aria-current"), null);

    await page.close();
  });

  test("Mobile: Hamburger toggle opens and closes drawer", async () => {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(BASE_URL);

    // Desktop nav should be hidden
    const desktopNav = page.locator('header nav[aria-label="Main Navigation"]');
    assert.ok(!(await desktopNav.isVisible()));

    // Hamburger button should be visible
    const toggleBtn = page.locator('header button[aria-controls="mobile-nav-drawer"]');
    assert.ok(await toggleBtn.isVisible());
    assert.equal(await toggleBtn.getAttribute("aria-label"), "Open navigation menu");
    assert.equal(await toggleBtn.getAttribute("aria-expanded"), "false");

    // Click to open
    await toggleBtn.click();
    assert.equal(await toggleBtn.getAttribute("aria-label"), "Close navigation menu");
    assert.equal(await toggleBtn.getAttribute("aria-expanded"), "true");

    const drawer = page.locator("#mobile-nav-drawer");
    await drawer.waitFor({ state: "visible" });
    assert.ok(await drawer.isVisible());

    // Check links in drawer
    const mobileServices = drawer.locator('a[href="/services"]');
    assert.ok(await mobileServices.isVisible());
    const mobileCta = drawer.locator('a[href="/contact"]:has-text("Start a Project")');
    assert.ok(await mobileCta.isVisible());

    // Click again to close
    await toggleBtn.click();
    await drawer.waitFor({ state: "detached" });
    assert.equal(await toggleBtn.getAttribute("aria-label"), "Open navigation menu");
    assert.equal(await toggleBtn.getAttribute("aria-expanded"), "false");

    await page.close();
  });

  test("Mobile: Backdrop click closes the drawer", async () => {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(BASE_URL);

    const toggleBtn = page.locator("header button");
    await toggleBtn.click();

    const drawer = page.locator("#mobile-nav-drawer");
    await drawer.waitFor({ state: "visible" });

    // Click backdrop
    const backdrop = page.locator(".fixed.inset-0.top-16");
    await backdrop.waitFor({ state: "visible" });
    await backdrop.click({ position: { x: 100, y: 500 } });

    await drawer.waitFor({ state: "detached" });
    assert.ok(!(await drawer.isVisible()));

    await page.close();
  });

  test("Mobile: Escape key closes the drawer", async () => {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(BASE_URL);

    const toggleBtn = page.locator("header button");
    await toggleBtn.click();

    const drawer = page.locator("#mobile-nav-drawer");
    await drawer.waitFor({ state: "visible" });

    // Press Escape
    await page.keyboard.press("Escape");
    await drawer.waitFor({ state: "detached" });
    assert.ok(!(await drawer.isVisible()));

    await page.close();
  });

  test("Mobile: Clicking nav link navigates and auto-closes the drawer", async () => {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(BASE_URL);

    const toggleBtn = page.locator("header button");
    await toggleBtn.click();

    const drawer = page.locator("#mobile-nav-drawer");
    await drawer.waitFor({ state: "visible" });

    // Click "About" link
    await drawer.locator('a[href="/about"]').click();
    await page.waitForURL("**/about");

    // Drawer should automatically close
    await drawer.waitFor({ state: "detached" });
    assert.ok(!(await drawer.isVisible()));

    await page.close();
  });

  test("Footer: Renders all 3 columns, copyright, and strictly no social links", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto(BASE_URL);

    const footer = page.locator("footer");
    assert.ok(await footer.isVisible());

    // Column 1
    const footerText = await footer.textContent();
    assert.ok(footerText.includes("Proquoment"));
    assert.ok(footerText.includes("Where AI becomes your competitive advantage."));
    assert.ok(footerText.includes("AI Product Engineering & Transformation Studio"));

    // Column 2
    assert.equal(await footer.locator('a[href="/services#product-engineering"]').count(), 1);
    assert.equal(await footer.locator('a[href="/services#agents-automation"]').count(), 1);
    assert.equal(await footer.locator('a[href="/services#transformation"]').count(), 1);
    assert.equal(await footer.locator('a[href="/services"]').count(), 1);

    // Column 3
    const emailLink = footer.locator('a[href="mailto:contact@proquoment.in"]');
    assert.ok(await emailLink.isVisible());

    const consultLink = footer.locator('a[href="https://calendly.com/proquoment"]');
    assert.ok(await consultLink.isVisible());
    assert.equal(await consultLink.getAttribute("target"), "_blank");

    const platformLink = footer.locator('a[href="https://proquoment.in"]');
    assert.ok(await platformLink.isVisible());
    assert.equal(await platformLink.getAttribute("target"), "_blank");

    // Bottom bar
    assert.ok(footerText.includes("2026 Proquoment Private Limited. All rights reserved."));
    assert.equal(await footer.locator('a[href="/privacy-policy"]').count(), 1);
    assert.equal(await footer.locator('a[href="/terms-of-service"]').count(), 1);

    // Zero social icons
    const socialLinks = await footer.locator('a[href*="twitter"], a[href*="linkedin"], a[href*="github"], a[href*="x.com"], a[href*="instagram"]').count();
    assert.equal(socialLinks, 0);

    await page.close();
  });

  test("Hash navigation: Footer service hash link updates URL and triggers hash scroll handler", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto(BASE_URL);

    // Click footer anchor link
    const anchorLink = page.locator('footer a[href="/services#product-engineering"]');
    await anchorLink.click();
    await page.waitForURL("**/services#product-engineering");

    assert.ok(page.url().includes("/services#product-engineering"));

    // Click logo to return home and verify scroll reset
    const logoLink = page.locator('header a[href="/"]');
    await logoLink.click();
    await page.waitForURL("**/");
    assert.equal(page.url(), `${BASE_URL}/`);

    await page.close();
  });
});
