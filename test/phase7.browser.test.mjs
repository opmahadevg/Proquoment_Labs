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
  ".webmanifest": "application/manifest+json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

describe("Phase 7 - Headless Browser E2E & Production Assets Verification", () => {
  let server;
  let browser;
  const PORT = 5207;
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

      const ext = path.extname(filePath);
      const contentType = MIME_TYPES[ext] || "application/octet-stream";

      try {
        const content = fs.readFileSync(filePath);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      } catch {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
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

  describe("Public Assets HTTP Endpoint Verification", () => {
    const assets = [
      { path: "/logo.png", expectedType: "image/png" },
      { path: "/favicon.ico", expectedType: "image/x-icon" },
      { path: "/favicon-16x16.png", expectedType: "image/png" },
      { path: "/favicon-32x32.png", expectedType: "image/png" },
      { path: "/favicon.svg", expectedType: "image/svg+xml" },
      { path: "/apple-touch-icon.png", expectedType: "image/png" },
      { path: "/android-chrome-192x192.png", expectedType: "image/png" },
      { path: "/android-chrome-512x512.png", expectedType: "image/png" },
      { path: "/site.webmanifest", expectedType: "application/manifest+json" },
      { path: "/robots.txt", expectedType: "text/plain" },
      { path: "/sitemap.xml", expectedType: "application/xml" },
      { path: "/llms.txt", expectedType: "text/plain" },
      { path: "/opengraph.jpg", expectedType: "image/jpeg" },
    ];

    for (const asset of assets) {
      test(`Serves ${asset.path} with status 200 and valid MIME type`, async () => {
        const res = await fetch(`${BASE_URL}${asset.path}`);
        assert.equal(res.status, 200, `Expected 200 for ${asset.path}, got ${res.status}`);
        const ctype = res.headers.get("content-type") || "";
        assert.ok(ctype.includes(asset.expectedType), `Expected ${asset.expectedType} in ${ctype}`);
        const buf = await res.arrayBuffer();
        assert.ok(buf.byteLength > 0, `Asset ${asset.path} returned empty body`);
      });
    }
  });

  describe("Browser Route Navigation & Code Splitting E2E", () => {
    const routes = [
      { path: "/", expectedText: "Build AI-native products" },
      { path: "/services", expectedText: "Project-Based Engagement" },
      { path: "/work", expectedText: "Work we've done. Work in progress." },
      { path: "/about", expectedText: "Empowering Businesses to Become AI-Native" },
      { path: "/contact", expectedText: "contact@proquoment.in" },
      { path: "/privacy-policy", expectedText: "Privacy Policy" },
      { path: "/terms-of-service", expectedText: "Terms of Service" },
      { path: "/placeholder", expectedText: "Proquoment Labs • AI Innovation & Engineering" },
      { path: "/unknown-deep-route-404", expectedText: "404" },
    ];

    for (const route of routes) {
      test(`Renders route ${route.path} without uncaught errors`, async () => {
        const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
        const consoleErrors = [];
        page.on("pageerror", (err) => consoleErrors.push(err.message));

        await page.goto(`${BASE_URL}${route.path}`, { waitUntil: "networkidle" });
        assert.equal(consoleErrors.length, 0, `Console errors on ${route.path}: ${consoleErrors.join("; ")}`);

        const bodyText = await page.locator("body").innerText();
        assert.ok(
          bodyText.includes(route.expectedText),
          `Expected route ${route.path} to contain "${route.expectedText}"`
        );

        await page.close();
      });
    }

    test("Hovering on navigation link triggers prefetch cleanly without errors", async () => {
      const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
      const consoleErrors = [];
      page.on("pageerror", (err) => consoleErrors.push(err.message));

      await page.goto(BASE_URL, { waitUntil: "networkidle" });
      const servicesLink = page.locator('nav[aria-label="Main Navigation"] a[href="/services"]');
      await servicesLink.hover();
      // Wait shortly for idle prefetch callback
      await page.waitForTimeout(300);

      assert.equal(consoleErrors.length, 0, `Console errors on hover prefetch: ${consoleErrors.join("; ")}`);
      await page.close();
    });

    test("Direct hash navigation /services#product-engineering scrolls section into viewport", async () => {
      const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
      const consoleErrors = [];
      page.on("pageerror", (err) => consoleErrors.push(err.message));

      await page.goto(`${BASE_URL}/services#product-engineering`, { waitUntil: "networkidle" });
      await page.waitForTimeout(600);

      assert.equal(consoleErrors.length, 0, `Console errors on hash navigation: ${consoleErrors.join("; ")}`);
      const targetSection = page.locator('#product-engineering');
      await assert.doesNotReject(targetSection.waitFor({ state: "visible" }));

      await page.close();
    });
  });
});
