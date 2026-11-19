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

describe("Phase 6 - Headless Browser E2E Suite for Dedicated Route Pages", () => {
  let server;
  let browser;
  const PORT = 5206;
  const BASE_URL = `http://127.0.0.1:${PORT}`;

  before(async () => {
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

    browser = await chromium.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  });

  after(async () => {
    if (browser) await browser.close();
    if (server) await new Promise((resolve) => server.close(resolve));
  });

  test("Renders HomePage at '/' without uncaught browser runtime errors", async () => {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle" });
    const h1 = await page.locator("h1").first().textContent();
    assert.ok(h1?.includes("Build AI-native products") || h1?.includes("Build AI-Native Products"));
    assert.equal(errors.length, 0, `Runtime errors: ${errors.join(", ")}`);
    await page.close();
  });

  test("Renders ServicesPage at '/services' with all 3 pillars, sticky subnav, and capabilities", async () => {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto(`${BASE_URL}/services`, { waitUntil: "networkidle" });

    // Verify Title
    const title = await page.title();
    assert.ok(title.includes("Services"));

    // Verify 3 anchor IDs exist
    assert.ok(await page.$("#product-engineering"));
    assert.ok(await page.$("#agents-automation"));
    assert.ok(await page.$("#transformation"));

    // Verify subnav buttons
    const navText = await page.locator('nav[aria-label="Services Pillar Navigation"]').textContent();
    assert.ok(navText?.includes("01. Product Engineering"));
    assert.ok(navText?.includes("02. Agents"));
    assert.ok(navText?.includes("03. Transformation"));

    // Verify engagement models exist
    const pageContent = await page.content();
    assert.ok(pageContent.includes("Project-Based Engagement"));
    assert.ok(pageContent.includes("Dedicated Engineering Retainer"));
    assert.ok(pageContent.includes("4-Week MVP Sprint"));

    // Verify AgentWorkflowVisual rendered in pillar 2
    assert.ok(await page.$("#agents-automation svg"));

    assert.equal(errors.length, 0, `Runtime errors on /services: ${errors.join(", ")}`);
    await page.close();
  });

  test("Renders WorkPage at '/work' with all 3 case studies and tech tags", async () => {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto(`${BASE_URL}/work`, { waitUntil: "networkidle" });

    const title = await page.title();
    assert.ok(title.includes("Work & Case Studies") || title.includes("Work"));

    const content = await page.content();
    assert.ok(content.includes("Autonomous AI Agent Swarms"));
    assert.ok(content.includes("SaaS MVP Acceleration"));
    assert.ok(content.includes("Enterprise Workflow Automation"));
    assert.ok(content.includes("Why We Build in Public"));

    assert.equal(errors.length, 0, `Runtime errors on /work: ${errors.join(", ")}`);
    await page.close();
  });

  test("Renders AboutPage at '/about' with 4 narrative sections and platform link", async () => {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto(`${BASE_URL}/about`, { waitUntil: "networkidle" });

    const title = await page.title();
    assert.ok(title.includes("About Us") || title.includes("About"));

    const content = await page.content();
    assert.ok(content.includes("Proquoment Private Limited"));
    assert.ok(content.includes("Empowering Businesses to Become AI-Native"));
    assert.ok(content.includes("AI should be operational"));
    assert.ok(content.includes("Businesses need builders"));
    assert.ok(content.includes("Speed is the differentiator"));
    assert.ok(content.includes("proquoment.in"));

    assert.equal(errors.length, 0, `Runtime errors on /about: ${errors.join(", ")}`);
    await page.close();
  });

  test("Renders ContactPage at '/contact' with interactive form, options, and info panel", async () => {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto(`${BASE_URL}/contact`, { waitUntil: "networkidle" });

    const title = await page.title();
    assert.ok(title.includes("Contact") || title.includes("Start a Project"));

    // Verify form fields
    assert.ok(await page.$("#fullName"));
    assert.ok(await page.$("#email"));
    assert.ok(await page.$("#serviceType"));
    assert.ok(await page.$("#description"));

    // Verify info panel
    const content = await page.content();
    assert.ok(content.includes("calendly.com/proquoment"));
    assert.ok(content.includes("contact@proquoment.in"));
    assert.ok(content.includes("<24h") || content.includes("&lt;24h"));

    // Test form inline validation: trigger submit without input
    await page.click('button[type="submit"]');
    const formErrors = await page.content();
    assert.ok(formErrors.includes("Full name is required."));
    assert.ok(formErrors.includes("Email address is required."));

    assert.equal(errors.length, 0, `Runtime errors on /contact: ${errors.join(", ")}`);
    await page.close();
  });

  test("Renders PrivacyPolicyPage at '/privacy-policy' with compliance standards", async () => {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto(`${BASE_URL}/privacy-policy`, { waitUntil: "networkidle" });

    const title = await page.title();
    assert.ok(title.includes("Privacy Policy"));

    const content = await page.content();
    assert.ok(content.includes("Digital Personal Data Protection Act"));
    assert.ok(content.includes("Supabase"));
    assert.ok(content.includes("contact@proquoment.in"));

    assert.equal(errors.length, 0, `Runtime errors on /privacy-policy: ${errors.join(", ")}`);
    await page.close();
  });

  test("Renders TermsOfServicePage at '/terms-of-service' with commercial terms", async () => {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto(`${BASE_URL}/terms-of-service`, { waitUntil: "networkidle" });

    const title = await page.title();
    assert.ok(title.includes("Terms of Service"));

    const content = await page.content();
    assert.ok(content.includes("100% Client Codebase Ownership"));
    assert.ok(content.includes("Bangalore, Karnataka, India"));
    assert.ok(content.includes("contact@proquoment.in"));

    assert.equal(errors.length, 0, `Runtime errors on /terms-of-service: ${errors.join(", ")}`);
    await page.close();
  });

  test("Renders NotFoundPage on unknown route with 404 code and diagnostic telemetry", async () => {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto(`${BASE_URL}/unknown-deep-route-test-404`, { waitUntil: "networkidle" });

    const title = await page.title();
    assert.ok(title.includes("404"));

    const content = await page.content();
    assert.ok(content.includes("404"));
    assert.ok(content.includes("Page Does Not Exist"));
    assert.ok(content.includes("/unknown-deep-route-test-404"));
    assert.ok(content.includes("Back to Home"));

    assert.equal(errors.length, 0, `Runtime errors on 404: ${errors.join(", ")}`);
    await page.close();
  });
});
