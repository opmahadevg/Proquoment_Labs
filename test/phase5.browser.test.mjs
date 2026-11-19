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

describe("Phase 5 - Headless Browser End-to-End Suite for HomePage Assembly", () => {
  let server;
  let browser;
  const PORT = 5205;
  const BASE_URL = `http://127.0.0.1:${PORT}`;

  before(async () => {
    // 1. Static file server for built SPA
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

    // 2. Launch Chromium with sandbox flags
    browser = await chromium.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  });

  after(async () => {
    if (browser) await browser.close();
    if (server) await new Promise((resolve) => server.close(resolve));
  });

  test("Browser: Page loads without runtime console errors", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    const consoleErrors = [];
    page.on("pageerror", (err) => consoleErrors.push(err.message));

    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    assert.equal(consoleErrors.length, 0, `Encountered console errors: ${consoleErrors.join("; ")}`);

    await page.close();
  });

  test("Task 16 (Hero Section): Renders eyebrow badge, H1 headline, subtitle, CTAs and HeroVisual", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });

    const heroSection = page.locator('section[aria-labelledby="hero-heading"]');
    await assert.doesNotReject(heroSection.waitFor({ state: "visible" }));

    const text = await heroSection.textContent();
    assert.ok(text.includes("Where AI becomes your competitive advantage."));
    assert.ok(text.includes("Build AI-native products."));
    assert.ok(text.includes("Automate what slows you down."));
    assert.ok(text.includes("We help startups and growing businesses"));

    // Check CTAs
    const startProjectBtn = heroSection.locator('a[href="/contact"]:has-text("Start a Project")');
    assert.ok(await startProjectBtn.isVisible());

    const bookCallBtn = heroSection.locator('a[href="https://calendly.com/proquoment"]:has-text("Book a Call")');
    assert.ok(await bookCallBtn.isVisible());

    // Check HeroVisual is rendered
    const heroVisual = page.locator('div[aria-label="Proquoment Labs Agent Live Task Monitor"]');
    assert.ok(await heroVisual.isVisible());

    await page.close();
  });

  test("Task 17 (Tech Marquee): Renders centered label and marquee tracks", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });

    const marqueeSection = page.locator('section[aria-label="Tools and Platforms"]');
    await assert.doesNotReject(marqueeSection.waitFor({ state: "visible" }));

    const text = await marqueeSection.textContent();
    assert.ok(text.includes("TOOLS & PLATFORMS WE WORK WITH"));
    assert.ok(text.includes("OpenAI"));
    assert.ok(text.includes("Anthropic"));
    assert.ok(text.includes("LangGraph"));

    await page.close();
  });

  test("Task 18 (AI Product Engineering): Renders anchor, badge, copy, pills, link, and 6 capabilities", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });

    const section = page.locator("#product-engineering");
    await assert.doesNotReject(section.waitFor({ state: "visible" }));

    const text = await section.textContent();
    assert.ok(text.includes("AI Product Engineering"));
    assert.ok(text.includes("Build products that work and scale."));
    assert.ok(text.includes("From fast MVPs to production-grade SaaS platforms"));
    assert.ok(text.includes("Project"));
    assert.ok(text.includes("Retainer"));
    assert.ok(text.includes("MVP Sprint"));

    // CTA Link
    const ctaLink = section.locator('a[href="/services#product-engineering"]');
    assert.ok(await ctaLink.isVisible());

    // 6 Capabilities in grid
    const capGrid = section.locator('div[aria-label="AI Product Engineering Capabilities"]');
    await assert.doesNotReject(capGrid.waitFor({ state: "visible" }));
    const gridText = await capGrid.textContent();
    assert.ok(gridText.includes("Website & Web Apps"));
    assert.ok(gridText.includes("SaaS MVP Development"));
    assert.ok(gridText.includes("Custom Dashboards"));
    assert.ok(gridText.includes("AI-Powered Features"));
    assert.ok(gridText.includes("API Development"));
    assert.ok(gridText.includes("Third-party Integrations"));

    const items = await capGrid.locator('div[role="listitem"]').count();
    assert.equal(items, 6);

    await page.close();
  });

  test("Task 19 (AI Agents & Automation): Renders alternating visual, text, pills, and 8 capability tags", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });

    const section = page.locator("#agents-automation");
    await assert.doesNotReject(section.waitFor({ state: "visible" }));

    const text = await section.textContent();
    assert.ok(text.includes("AI Agents & Automation"));
    assert.ok(text.includes("Automate the work that drains your team."));
    assert.ok(text.includes("Pilot Sprint"));

    // Agent workflow visual
    const workflowVisual = section.locator('div[aria-label="Agent Workflow Pipeline Diagram"]');
    assert.ok(await workflowVisual.isVisible());

    // CTA Link
    const ctaLink = section.locator('a[href="/services#agents-automation"]');
    assert.ok(await ctaLink.isVisible());

    // 8 tags row
    assert.ok(text.includes("Custom AI Agents"));
    assert.ok(text.includes("Multi-Agent Systems"));
    assert.ok(text.includes("Sales Automation"));
    assert.ok(text.includes("Support Automation"));
    assert.ok(text.includes("Research Agents"));
    assert.ok(text.includes("Business Process Automation"));
    assert.ok(text.includes("Workflow Integration"));
    assert.ok(text.includes("Knowledge Bases"));

    await page.close();
  });

  test("Task 20 (AI Transformation): Renders anchor, badge, copy, pills, link, and 6 capabilities", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });

    const section = page.locator("#transformation");
    await assert.doesNotReject(section.waitFor({ state: "visible" }));

    const text = await section.textContent();
    assert.ok(text.includes("AI Transformation Partnership"));
    assert.ok(text.includes("Become an AI-native organisation."));
    assert.ok(text.includes("Advisory"));
    assert.ok(text.includes("Roadmap"));

    // CTA Link
    const ctaLink = section.locator('a[href="/services#transformation"]');
    assert.ok(await ctaLink.isVisible());

    // 6 Capabilities in grid
    const capGrid = section.locator('div[aria-label="AI Transformation Partnership Capabilities"]');
    await assert.doesNotReject(capGrid.waitFor({ state: "visible" }));
    const gridText = await capGrid.textContent();
    assert.ok(gridText.includes("Opportunity Discovery"));
    assert.ok(gridText.includes("AI Roadmap Design"));
    assert.ok(gridText.includes("Workflow Analysis"));
    assert.ok(gridText.includes("AI Infrastructure Build"));
    assert.ok(gridText.includes("Process Automation"));
    assert.ok(gridText.includes("Ongoing AI Partnership"));

    const items = await capGrid.locator('div[role="listitem"]').count();
    assert.equal(items, 6);

    await page.close();
  });

  test("Task 21 (Why Labs Bento Grid): Renders 6 differentiators with headings and metrics", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });

    const section = page.locator('section[aria-labelledby="why-labs-heading"]');
    await assert.doesNotReject(section.waitFor({ state: "visible" }));

    const text = await section.textContent();
    assert.ok(text.includes("We're not a typical agency."));
    assert.ok(text.includes("Full-stack AI + Product"));
    assert.ok(text.includes("AI-native first"));
    assert.ok(text.includes("Startup velocity"));
    assert.ok(text.includes("Ongoing partner"));
    assert.ok(text.includes("Global delivery"));
    assert.ok(text.includes("Deep integration"));

    await page.close();
  });

  test("Task 22 (How We Work): Renders 5 process steps with step numbers and details", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });

    const section = page.locator('section[aria-labelledby="how-we-work-heading"]');
    await assert.doesNotReject(section.waitFor({ state: "visible" }));

    const text = await section.textContent();
    assert.ok(text.includes("From idea to operational AI — in weeks, not months."));
    assert.ok(text.includes("Discover"));
    assert.ok(text.includes("Design"));
    assert.ok(text.includes("Build"));
    assert.ok(text.includes("Deploy"));
    assert.ok(text.includes("Evolve"));
    assert.ok(text.includes("01"));
    assert.ok(text.includes("05"));

    await page.close();
  });

  test("Task 23 (Who We Work With): Renders interactive audience pills with switching details", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });

    const section = page.locator('section[aria-labelledby="who-we-work-with-heading"]');
    await assert.doesNotReject(section.waitFor({ state: "visible" }));

    const text = await section.textContent();
    assert.ok(text.includes("Built for founders and teams who move fast."));
    assert.ok(text.includes("If you're building something new, automating something old"));

    // Click on "SaaS Companies" pill
    const saasBtn = section.locator('button:has-text("SaaS Companies")');
    await saasBtn.click();
    const updatedText = await section.textContent();
    assert.ok(updatedText.includes("AI Product Features"));
    assert.ok(updatedText.includes("Supercharge your existing platform"));

    // Click on "Growing SMBs" pill
    const smbBtn = section.locator('button:has-text("Growing SMBs")');
    await smbBtn.click();
    const smbText = await section.textContent();
    assert.ok(smbText.includes("Operational Leverage"));
    assert.ok(smbText.includes("Eliminate repetitive operational toil"));

    await page.close();
  });

  test("Task 24 (Closing CTA): Renders dark full-width CTA with headline, subtitle and buttons", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(BASE_URL, { waitUntil: "networkidle" });

    const section = page.locator('section[aria-labelledby="closing-cta-heading"]');
    await assert.doesNotReject(section.waitFor({ state: "visible" }));

    const text = await section.textContent();
    assert.ok(text.includes("Ready to build your AI-native future?"));
    assert.ok(text.includes("Let's build something extraordinary."));
    assert.ok(text.includes("No commitment. Tell us what you're building"));

    const startProjectBtn = section.locator('a[href="/contact"]:has-text("Start a Project")');
    assert.ok(await startProjectBtn.isVisible());

    const bookCallBtn = section.locator('a[href="https://calendly.com/proquoment"]:has-text("Book a Call")');
    assert.ok(await bookCallBtn.isVisible());

    await page.close();
  });
});
