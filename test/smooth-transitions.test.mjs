import test, { describe } from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const indexCssPath = path.resolve(__dirname, "../src/index.css");
const cobaltToilePath = path.resolve(__dirname, "../src/components/ui/cobalt-toile-landing.tsx");
const skeletonsPath = path.resolve(__dirname, "../src/components/ui/copperplate-skeletons.tsx");
const pageTransitionPath = path.resolve(__dirname, "../src/components/PageTransition.tsx");
const layoutPath = path.resolve(__dirname, "../src/components/Layout.tsx");
const appPath = path.resolve(__dirname, "../src/App.tsx");
const scrollToTopPath = path.resolve(__dirname, "../src/components/ScrollToTop.tsx");

describe("Smooth Transitions & Skeleton Loading Invariants", () => {
  const indexCss = fs.readFileSync(indexCssPath, "utf8");
  const cobaltToile = fs.readFileSync(cobaltToilePath, "utf8");
  const skeletons = fs.readFileSync(skeletonsPath, "utf8");
  const pageTransition = fs.readFileSync(pageTransitionPath, "utf8");
  const layout = fs.readFileSync(layoutPath, "utf8");
  const app = fs.readFileSync(appPath, "utf8");
  const scrollToTop = fs.readFileSync(scrollToTopPath, "utf8");

  test("src/index.css registers CSS @property --ctl-r for GPU hardware acceleration", () => {
    assert.ok(indexCss.includes("@property --ctl-r"));
    assert.ok(indexCss.includes("syntax: \"<percentage>\""));
  });

  test("src/index.css declares .ctl-skeleton with copperplate shimmer", () => {
    assert.ok(indexCss.includes(".ctl-skeleton"));
    assert.ok(indexCss.includes("ctl-shimmer"));
  });

  test("cobalt-toile-landing.tsx applies smooth fadein animation on stage mount", () => {
    assert.ok(cobaltToile.includes("animation:ctl-fadein"));
    assert.ok(cobaltToile.includes("@keyframes ctl-fadein"));
  });

  test("PageTransition exports motion wrapper with custom cubic bezier", () => {
    assert.ok(pageTransition.includes("export function PageTransition"));
    assert.ok(pageTransition.includes("motion.div"));
    assert.ok(pageTransition.includes("0.22, 1, 0.36, 1"));
  });

  test("copperplate-skeletons.tsx exports complete copperplate skeleton family", () => {
    assert.ok(skeletons.includes("export function HeroSkeleton"));
    assert.ok(skeletons.includes("export function CardSkeleton"));
    assert.ok(skeletons.includes("export function CardGridSkeleton"));
    assert.ok(skeletons.includes("export function ArticleSkeleton"));
    assert.ok(skeletons.includes("export function PageFallbackSkeleton"));
  });

  test("Layout.tsx wraps main content in AnimatePresence and PageTransition keyed by route", () => {
    assert.ok(layout.includes("<AnimatePresence mode=\"wait\" initial={false}>"));
    assert.ok(layout.includes("<PageTransition key={location}>"));
  });

  test("App.tsx integrates PageFallbackSkeleton within Suspense boundaries", () => {
    assert.ok(app.includes("import { PageFallbackSkeleton } from \"@/components/ui/copperplate-skeletons\""));
    assert.ok(app.includes("<PageFallbackSkeleton />"));
  });

  test("ScrollToTop handles smooth scroll behavior on route transitions", () => {
    assert.ok(scrollToTop.includes("behavior: \"smooth\""));
  });

  test("Zero em dashes or en dashes exist in newly touched files", () => {
    const files = [skeletons, pageTransition, indexCss];
    for (const f of files) {
      assert.strictEqual(f.includes("\u2014"), false, "Must not contain em dash");
      assert.strictEqual(f.includes("\u2013"), false, "Must not contain en dash");
    }
  });
});
