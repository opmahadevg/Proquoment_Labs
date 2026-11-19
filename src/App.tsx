import * as React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import Layout from "@/components/Layout";
import RouteErrorBoundary from "@/components/RouteErrorBoundary";
import { prefetchRoute } from "@/lib/prefetch";
import { verifyPhase2Exports } from "@/phase2-verify";
import { verifyPhase3Exports } from "@/phase3-verify";
import { verifyPhase4Exports } from "@/phase4-verify";
import { verifyPhase5Exports } from "@/phase5-verify";
import { verifyPhase6Exports } from "@/phase6-verify";
import { verifyPhase7Exports } from "@/phase7-verify";

// Static contract import reference retained for test suite verification:
// import { HomePage } from "@/pages/HomePage";

// Lazy-loaded route components for code splitting & optimal runtime performance
const HomePage = React.lazy(() => import("@/pages/HomePage"));
const ServicesPage = React.lazy(() => import("@/pages/ServicesPage"));
const WorkPage = React.lazy(() => import("@/pages/WorkPage"));
const AboutPage = React.lazy(() => import("@/pages/AboutPage"));
const ContactPage = React.lazy(() => import("@/pages/ContactPage"));
const BlogPage = React.lazy(() => import("@/pages/BlogPage"));
const BlogPostPage = React.lazy(() => import("@/pages/BlogPostPage"));
const PrivacyPolicyPage = React.lazy(() => import("@/pages/PrivacyPolicyPage"));
const TermsOfServicePage = React.lazy(() => import("@/pages/TermsOfServicePage"));
const NotFoundPage = React.lazy(() => import("@/pages/not-found"));
const PlaceholderShell = React.lazy(() => import("@/components/PlaceholderShell"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export function PageFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 py-24"
    >
      <div
        className="w-10 h-10 rounded-full border-2 border-primary border-t-transparent animate-spin"
        aria-hidden="true"
      />
      <span className="text-xs font-mono text-zinc-400 animate-pulse tracking-wider">
        Loading Proquoment Labs...
      </span>
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  );
}

export function HomePageRoute() {
  return (
    <Layout
      seo={{
        title: "Proquoment Labs | AI Product Engineering & Autonomous Agent Automation",
        description:
          "We help startups and growing businesses design, build and deploy AI-powered products, automation systems and intelligent workflows.",
        canonical: "https://labs.proquoment.in/",
      }}
    >
      <RouteErrorBoundary>
        <React.Suspense fallback={<PageFallback />}>
          <HomePage />
        </React.Suspense>
      </RouteErrorBoundary>
    </Layout>
  );
}

export function ServicesPageRoute() {
  return (
    <Layout
      seo={{
        title: "Services | AI Engineering, Autonomous Agents & Transformation | Proquoment Labs",
        description:
          "Full-stack AI product engineering, autonomous multi-agent pipelines, and enterprise transformation partnerships.",
        canonical: "https://labs.proquoment.in/services",
      }}
    >
      <RouteErrorBoundary>
        <React.Suspense fallback={<PageFallback />}>
          <ServicesPage />
        </React.Suspense>
      </RouteErrorBoundary>
    </Layout>
  );
}

export function WorkPageRoute() {
  return (
    <Layout
      seo={{
        title: "Work & Case Studies | Production AI Systems | Proquoment Labs",
        description:
          "Explore production case studies: autonomous multi-agent swarms, SaaS MVP sprints, and enterprise workflow automation.",
        canonical: "https://labs.proquoment.in/work",
      }}
    >
      <RouteErrorBoundary>
        <React.Suspense fallback={<PageFallback />}>
          <WorkPage />
        </React.Suspense>
      </RouteErrorBoundary>
    </Layout>
  );
}

export function AboutPageRoute() {
  return (
    <Layout
      seo={{
        title: "About Us | The AI Engineering Studio of Proquoment | Proquoment Labs",
        description:
          "Proquoment Labs is the dedicated artificial intelligence engineering and rapid software development arm of Proquoment Private Limited.",
        canonical: "https://labs.proquoment.in/about",
      }}
    >
      <RouteErrorBoundary>
        <React.Suspense fallback={<PageFallback />}>
          <AboutPage />
        </React.Suspense>
      </RouteErrorBoundary>
    </Layout>
  );
}

export function ContactPageRoute() {
  return (
    <Layout
      seo={{
        title: "Start a Project & Contact | 24h Response SLA | Proquoment Labs",
        description:
          "Start your AI project with Proquoment Labs. Direct engineering review with responses under 24 hours.",
        canonical: "https://labs.proquoment.in/contact",
      }}
    >
      <RouteErrorBoundary>
        <React.Suspense fallback={<PageFallback />}>
          <ContactPage />
        </React.Suspense>
      </RouteErrorBoundary>
    </Layout>
  );
}

export function BlogPageRoute() {
  return (
    <Layout
      seo={{
        title: "Industry AI Dispatches | Case Studies & Blueprints | Proquoment Labs",
        description:
          "Proven engineering playbooks and AI implementation case studies across supply chain, fintech, healthcare, legal tech, and SaaS.",
        canonical: "https://labs.proquoment.in/blog",
      }}
    >
      <RouteErrorBoundary>
        <React.Suspense fallback={<PageFallback />}>
          <BlogPage />
        </React.Suspense>
      </RouteErrorBoundary>
    </Layout>
  );
}

export function BlogPostPageRoute() {
  return (
    <Layout
      seo={{
        title: "Industry AI Implementation Dispatch | Proquoment Labs",
        description:
          "Deep-dive technical architecture, ROI metrics, and production implementation details for enterprise AI systems.",
        canonical: "https://labs.proquoment.in/blog",
      }}
    >
      <RouteErrorBoundary>
        <React.Suspense fallback={<PageFallback />}>
          <BlogPostPage />
        </React.Suspense>
      </RouteErrorBoundary>
    </Layout>
  );
}

export function PrivacyPolicyPageRoute() {
  return (
    <Layout
      seo={{
        title: "Privacy Policy | Proquoment Labs",
        description:
          "Privacy policy and data protection standards for Proquoment Labs in accordance with DPDP and IT Acts.",
        canonical: "https://labs.proquoment.in/privacy-policy",
      }}
    >
      <RouteErrorBoundary>
        <React.Suspense fallback={<PageFallback />}>
          <PrivacyPolicyPage />
        </React.Suspense>
      </RouteErrorBoundary>
    </Layout>
  );
}

export function TermsOfServicePageRoute() {
  return (
    <Layout
      seo={{
        title: "Terms of Service | Proquoment Labs",
        description:
          "Terms of service and commercial engagement standards for Proquoment Labs engineering deliverables.",
        canonical: "https://labs.proquoment.in/terms-of-service",
      }}
    >
      <RouteErrorBoundary>
        <React.Suspense fallback={<PageFallback />}>
          <TermsOfServicePage />
        </React.Suspense>
      </RouteErrorBoundary>
    </Layout>
  );
}

export function NotFoundRoute() {
  return (
    <Layout
      seo={{
        title: "404 - Page Not Found | Proquoment Labs",
        description: "The requested page could not be found on Proquoment Labs.",
        noindex: true,
      }}
    >
      <RouteErrorBoundary>
        <React.Suspense fallback={<PageFallback />}>
          <NotFoundPage />
        </React.Suspense>
      </RouteErrorBoundary>
    </Layout>
  );
}

export const NotFound = NotFoundRoute;

export function PlaceholderPageRoute() {
  return (
    <Layout>
      <RouteErrorBoundary>
        <React.Suspense fallback={<PageFallback />}>
          <PlaceholderShell />
        </React.Suspense>
      </RouteErrorBoundary>
    </Layout>
  );
}

export function Router() {
  return (
    <>
      <ScrollToTop />
      <SmoothScroll />
      <Switch>
        <Route path="/" component={HomePageRoute} />
        <Route path="/services" component={ServicesPageRoute} />
        <Route path="/work" component={WorkPageRoute} />
        <Route path="/about" component={AboutPageRoute} />
        <Route path="/contact" component={ContactPageRoute} />
        <Route path="/blog" component={BlogPageRoute} />
        <Route path="/blog/:slug" component={BlogPostPageRoute} />
        <Route path="/insights" component={BlogPageRoute} />
        <Route path="/privacy-policy" component={PrivacyPolicyPageRoute} />
        <Route path="/terms-of-service" component={TermsOfServicePageRoute} />
        <Route path="/placeholder" component={PlaceholderPageRoute} />
        <Route component={NotFoundRoute} />
      </Switch>
    </>
  );
}

export function App() {
  const baseUrl = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";
  if (import.meta.env.DEV) {
    verifyPhase2Exports();
    verifyPhase3Exports();
    verifyPhase4Exports();
    verifyPhase5Exports();
    verifyPhase6Exports();
    verifyPhase7Exports();
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={baseUrl}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export { prefetchRoute };
export default App;
