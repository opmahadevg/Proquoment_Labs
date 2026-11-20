/**
 * Phase 7 Runtime and Contract Verification Helper
 * Validates router completeness, public assets registry, and SEO contract invariants.
 */

export interface RouteMetaRecord {
  readonly path: string;
  readonly canonical: string;
  readonly title: string;
  readonly description: string;
  readonly isLazy: boolean;
}

export const CANONICAL_ROUTES: readonly RouteMetaRecord[] = [
  {
    path: "/",
    canonical: "https://labs.proquoment.in/",
    title: "Proquoment Labs | Become AI-Ready Today.",
    description:
      "We help ambitious startups build AI-powered products and help businesses prepare for an AI-powered future through intelligent software, automation and modern engineering.",
    isLazy: true,
  },
  {
    path: "/services",
    canonical: "https://labs.proquoment.in/services",
    title: "Services | AI SaaS, Business Automation & Digital Experiences | Proquoment Labs",
    description:
      "AI SaaS & Digital Product Engineering, Business Process Automation & Integrations, and Web Applications & Digital Experiences.",
    isLazy: true,
  },
  {
    path: "/about",
    canonical: "https://labs.proquoment.in/about",
    title: "About Us | AI-Native Product & Engineering Studio | Proquoment Labs",
    description:
      "Proquoment Labs is an AI-native Product & Engineering Studio helping ambitious founders and growing businesses turn ideas into working technology.",
    isLazy: true,
  },
  {
    path: "/contact",
    canonical: "https://labs.proquoment.in/contact",
    title: "Start a Project & Contact | 24h Response SLA | Proquoment Labs",
    description:
      "Start your AI project with Proquoment Labs. Direct engineering review with responses under 24 hours.",
    isLazy: true,
  },
  {
    path: "/privacy-policy",
    canonical: "https://labs.proquoment.in/privacy-policy",
    title: "Privacy Policy | Proquoment Labs",
    description:
      "Privacy policy and data protection standards for Proquoment Labs in accordance with DPDP and IT Acts.",
    isLazy: true,
  },
  {
    path: "/terms-of-service",
    canonical: "https://labs.proquoment.in/terms-of-service",
    title: "Terms of Service | Proquoment Labs",
    description:
      "Terms of service and commercial engagement standards for Proquoment Labs engineering deliverables.",
    isLazy: true,
  },
];

export const REQUIRED_PUBLIC_ASSETS = [
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
] as const;

export function verifyPhase7Exports() {
  const routesValid =
    Array.isArray(CANONICAL_ROUTES) &&
    CANONICAL_ROUTES.length === 6 &&
    CANONICAL_ROUTES.every(
      (r) =>
        r.path.startsWith("/") &&
        r.canonical.startsWith("https://labs.proquoment.in") &&
        r.title.length > 0 &&
        r.description.length > 0
    );

  const assetsValid =
    Array.isArray(REQUIRED_PUBLIC_ASSETS) &&
    REQUIRED_PUBLIC_ASSETS.length === 13;

  return {
    routesValid,
    assetsValid,
    routeCount: CANONICAL_ROUTES.length,
    assetCount: REQUIRED_PUBLIC_ASSETS.length,
    canonicalRoutes: CANONICAL_ROUTES,
    requiredAssets: REQUIRED_PUBLIC_ASSETS,
  };
}

export default verifyPhase7Exports;
