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

describe("Phase 4 - Headless Browser End-to-End Suite for UI Atoms", () => {
  let server;
  let browser;
  const PORT = 5202;
  const BASE_URL = `http://127.0.0.1:${PORT}`;
  const TARGET_URL = `${BASE_URL}/placeholder`;

  before(async () => {
    // 1. Static file server for built SPA
    server = http.createServer((req, res) => {
      const urlPath = req.url.split("?")[0];
      let filePath = path.join(distDir, urlPath === "/" ? "index.html" : urlPath);

      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        if (path.extname(urlPath)) {
          // Missing static assets or third-party scripts (e.g. Vercel analytics) return 404, not HTML
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

    await page.goto(TARGET_URL, { waitUntil: "networkidle" });
    assert.equal(consoleErrors.length, 0, `Encountered console errors: ${consoleErrors.join("; ")}`);

    await page.close();
  });

  test("Task 10 (HeroVisual): Renders title, live indicator, floating badges, and active agent task", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(TARGET_URL, { waitUntil: "networkidle" });

    // Region aria-label check
    const heroVisual = page.locator('div[aria-label="Proquoment Labs Agent Live Task Monitor"]');
    await assert.doesNotReject(heroVisual.waitFor({ state: "visible" }));

    // Header title and live indicator
    const textContent = await heroVisual.textContent();
    assert.ok(textContent.includes("Proquoment Labs Agent"));
    assert.ok(textContent.includes("Live"));
    assert.ok(textContent.includes("Spec / Action Mode"));

    // Floating badges
    assert.ok(textContent.includes("12 hrs saved today"));
    assert.ok(textContent.includes("98% task completion"));

    // Tasks check
    assert.ok(textContent.includes("Analysing CRM data"));
    assert.ok(textContent.includes("Scoring 847 leads"));
    assert.ok(textContent.includes("Syncing to HubSpot"));

    await page.close();
  });

  test("Task 11 (AgentWorkflowVisual): Renders trigger nodes, classifier, and outcomes in DOM", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(TARGET_URL, { waitUntil: "networkidle" });

    const workflowSection = page.locator('div[aria-label="Agent Workflow Pipeline Diagram"]');
    await assert.doesNotReject(workflowSection.waitFor({ state: "visible" }));

    const text = await workflowSection.textContent();
    assert.ok(text.includes("Email Inbox"));
    assert.ok(text.includes("Webhook"));
    assert.ok(text.includes("AI Classifier"));
    assert.ok(text.includes("CRM Update"));
    assert.ok(text.includes("Auto-Responder"));
    assert.ok(text.includes("Slack Alert"));

    // SVG paths should exist
    const svgCount = await workflowSection.locator("svg").count();
    assert.ok(svgCount >= 2, `Expected at least 2 connector SVGs, found ${svgCount}`);

    await page.close();
  });

  test("Task 12 (TechMarquee): Renders infinite marquee with edge scroller-mask and technologies", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(TARGET_URL, { waitUntil: "networkidle" });

    const marquee = page.locator('div[aria-label="Technologies and Platforms Integration Marquee"]');
    await assert.doesNotReject(marquee.waitFor({ state: "visible" }));
    assert.ok((await marquee.getAttribute("class")).includes("scroller-mask"));

    const text = await marquee.textContent();
    // Verify tools present
    assert.ok(text.includes("OpenAI"));
    assert.ok(text.includes("Claude"));
    assert.ok(text.includes("LangGraph"));
    assert.ok(text.includes("Supabase"));
    assert.ok(text.includes("n8n"));
    assert.ok(text.includes("FastAPI"));

    await page.close();
  });

  test("Task 13 (ProcessStep): Renders numbered 01-04 steps with arrows and highlights", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(TARGET_URL, { waitUntil: "networkidle" });

    const pageContent = await page.textContent("body");
    assert.ok(pageContent.includes("01"));
    assert.ok(pageContent.includes("02"));
    assert.ok(pageContent.includes("03"));
    assert.ok(pageContent.includes("04"));
    assert.ok(pageContent.includes("Discovery & Architecture"));
    assert.ok(pageContent.includes("Rapid Prototype Sprint"));
    assert.ok(pageContent.includes("Production Hardening"));
    assert.ok(pageContent.includes("Scale & Co-Engineering"));
    assert.ok(pageContent.includes("Week 01"));

    await page.close();
  });

  test("Task 14 (DifferentiatorCard): Renders bento cards with metrics and badges", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(TARGET_URL, { waitUntil: "networkidle" });

    const pageContent = await page.textContent("body");
    assert.ok(pageContent.includes("Sub-Second Latency"));
    assert.ok(pageContent.includes("< 160ms"));
    assert.ok(pageContent.includes("Enterprise Grade Security"));
    assert.ok(pageContent.includes("99.98%"));
    assert.ok(pageContent.includes("Model Agnostic Routing"));
    assert.ok(pageContent.includes("25+ Models"));

    await page.close();
  });

  test("Task 15 (CapabilityGrid): Renders capability cards grid with icons and tags", async () => {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await page.goto(TARGET_URL, { waitUntil: "networkidle" });

    const grid = page.locator('div[aria-label="Capabilities and Features Grid"]');
    await assert.doesNotReject(grid.waitFor({ state: "visible" }));

    const text = await grid.textContent();
    assert.ok(text.includes("Autonomous Agents"));
    assert.ok(text.includes("Intelligent Document RAG"));
    assert.ok(text.includes("Workflow Automation"));
    assert.ok(text.includes("AI Product Engineering"));
    assert.ok(text.includes("Evals & Observability"));
    assert.ok(text.includes("Fractional AI CTO"));

    const items = await grid.locator('div[role="listitem"]').count();
    assert.equal(items, 6);

    await page.close();
  });
});
