import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsDataFile = path.resolve(__dirname, "../src/data/blogs.ts");
const blogPageFile = path.resolve(__dirname, "../src/pages/BlogPage.tsx");
const blogPostPageFile = path.resolve(__dirname, "../src/pages/BlogPostPage.tsx");
const appFile = path.resolve(__dirname, "../src/App.tsx");
const layoutFile = path.resolve(__dirname, "../src/components/Layout.tsx");
const landingFile = path.resolve(__dirname, "../src/components/ui/cobalt-toile-landing.tsx");
const homePageFile = path.resolve(__dirname, "../src/pages/HomePage.tsx");

const blogsDataContent = fs.readFileSync(blogsDataFile, "utf8");
const blogPageContent = fs.readFileSync(blogPageFile, "utf8");
const blogPostPageContent = fs.readFileSync(blogPostPageFile, "utf8");
const appContent = fs.readFileSync(appFile, "utf8");
const layoutContent = fs.readFileSync(layoutFile, "utf8");
const landingContent = fs.readFileSync(landingFile, "utf8");
const homePageContent = fs.readFileSync(homePageFile, "utf8");

describe("AI Industry Blog & Insights System Contract Tests", () => {
  describe("Dataset Integrity in src/data/blogs.ts", () => {
    test("exports BLOG_POSTS, helper utilities, and category arrays", () => {
      assert.ok(blogsDataContent.includes("export const BLOG_POSTS"));
      assert.ok(blogsDataContent.includes("export function getBlogPostBySlug"));
      assert.ok(blogsDataContent.includes("export function getFeaturedBlogPost"));
      assert.ok(blogsDataContent.includes("export function getRelatedBlogPosts"));
      assert.ok(blogsDataContent.includes("export const BLOG_INDUSTRIES"));
      assert.ok(blogsDataContent.includes("export const BLOG_CATEGORIES"));
    });

    test("contains at least 6 comprehensive industry-focused AI case studies", () => {
      const slugMatches = blogsDataContent.match(/slug:\s*"([^"]+)"/g) || [];
      assert.ok(slugMatches.length >= 6, `Expected >= 6 blog posts, found ${slugMatches.length}`);
      
      const expectedSlugs = [
        "autonomous-supply-chain-reconciliation",
        "algorithmic-underwriting-fintech-copilots",
        "four-week-ai-mvp-playbook-for-startups",
        "hipaa-compliant-clinical-intake-automation",
        "contract-intelligence-legal-tech-guardrails",
        "multimodal-search-dynamic-pricing-ecommerce",
      ];
      for (const slug of expectedSlugs) {
        assert.ok(blogsDataContent.includes(slug), `Missing expected slug: ${slug}`);
      }
    });

    test("covers core high-impact enterprise sectors", () => {
      const requiredIndustries = [
        "Supply Chain",
        "FinTech",
        "B2B SaaS",
        "Healthcare",
        "Legal Tech",
        "E-Commerce",
      ];
      for (const industry of requiredIndustries) {
        assert.ok(blogsDataContent.includes(`"${industry}"`), `Missing industry tag: ${industry}`);
      }
    });

    test("contains ZERO em dashes or en dashes", () => {
      assert.strictEqual(blogsDataContent.includes("—"), false, "Found em dash in blogs.ts");
      assert.strictEqual(blogsDataContent.includes("–"), false, "Found en dash in blogs.ts");
    });
  });

  describe("Blog Directory Page in src/pages/BlogPage.tsx", () => {
    test("exports BlogPage as named and default export", () => {
      assert.ok(blogPageContent.includes("export function BlogPage"));
      assert.ok(blogPageContent.includes("export default BlogPage"));
    });

    test("features PlateHeader and hero featured post card", () => {
      assert.ok(blogPageContent.includes("<PlateHeader"));
      assert.ok(blogPageContent.includes("getFeaturedBlogPost"));
      assert.ok(blogPageContent.includes("WaxSealBadge"));
    });

    test("includes interactive search and industry/category filter chips", () => {
      assert.ok(blogPageContent.includes("searchQuery"));
      assert.ok(blogPageContent.includes("selectedIndustry"));
      assert.ok(blogPageContent.includes("selectedCategory"));
      assert.ok(blogPageContent.includes("BLOG_INDUSTRIES.map"));
      assert.ok(blogPageContent.includes("BLOG_CATEGORIES.map"));
    });

    test("links each article card to /blog/:slug", () => {
      assert.ok(blogPageContent.includes("`/blog/${post.slug}`") || blogPageContent.includes("`/blog/${featuredPost.slug}`"));
    });

    test("contains ZERO em dashes or en dashes", () => {
      assert.strictEqual(blogPageContent.includes("—"), false, "Found em dash in BlogPage.tsx");
      assert.strictEqual(blogPageContent.includes("–"), false, "Found en dash in BlogPage.tsx");
    });
  });

  describe("Single Blog Reader Page in src/pages/BlogPostPage.tsx", () => {
    test("exports BlogPostPage as named and default export", () => {
      assert.ok(blogPostPageContent.includes("export function BlogPostPage"));
      assert.ok(blogPostPageContent.includes("export default BlogPostPage"));
    });

    test("uses Wouter route matching and resolves slug param", () => {
      assert.ok(blogPostPageContent.includes('useRoute("/blog/:slug")'));
      assert.ok(blogPostPageContent.includes("getBlogPostBySlug"));
    });

    test("renders executive summary, verified metrics, sections, and consultation CTA", () => {
      assert.ok(blogPostPageContent.includes("Executive Summary"));
      assert.ok(blogPostPageContent.includes("post.metrics"));
      assert.ok(blogPostPageContent.includes("post.sections.map"));
      assert.ok(blogPostPageContent.includes("Consult with Team"));
    });

    test("renders related dispatches grid", () => {
      assert.ok(blogPostPageContent.includes("getRelatedBlogPosts"));
      assert.ok(blogPostPageContent.includes("Related Industry Dispatches"));
    });

    test("contains ZERO em dashes or en dashes", () => {
      assert.strictEqual(blogPostPageContent.includes("—"), false, "Found em dash in BlogPostPage.tsx");
      assert.strictEqual(blogPostPageContent.includes("–"), false, "Found en dash in BlogPostPage.tsx");
    });
  });

  describe("Homepage Insights Integration & Layout Navigation", () => {
    test("Homepage passes real blog dispatches to CobaltToileLanding", () => {
      assert.ok(homePageContent.includes('import { BLOG_POSTS } from "@/data/blogs"'));
      assert.ok(homePageContent.includes("BLOG_POSTS.map") || homePageContent.includes("BLOG_POSTS.slice"));
    });

    test("CobaltToileLanding Insights component supports router navigation", () => {
      assert.ok(landingContent.includes("go?: Go"));
      assert.ok(landingContent.includes("go(p.href, e)"));
      assert.ok(landingContent.includes('href="/blog"'));
    });

    test("Layout navigation includes Insights route", () => {
      assert.ok(layoutContent.includes('href: "/blog"'));
      assert.ok(layoutContent.includes('"Insights"'));
    });

    test("App.tsx wires /blog, /blog/:slug, and /insights with lazy routes and SEO", () => {
      assert.ok(appContent.includes('<Route path="/blog" component={BlogPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/blog/:slug" component={BlogPostPageRoute} />'));
      assert.ok(appContent.includes('<Route path="/insights" component={BlogPageRoute} />'));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/BlogPage\"))"));
      assert.ok(appContent.includes("React.lazy(() => import(\"@/pages/BlogPostPage\"))"));
      assert.ok(appContent.includes("https://labs.proquoment.in/blog"));
    });
  });
});
