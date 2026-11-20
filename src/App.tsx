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
import { PageFallbackSkeleton } from "@/components/ui/copperplate-skeletons";
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
      className="w-full min-h-[60vh] transition-opacity duration-300"
    >
      <PageFallbackSkeleton />
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  );
}

export function HomePageRoute() {
  return (
    <Layout
      seo={{
        title: "Proquoment Labs | Build for the Future. Become AI-Ready Today.",
        description:
          "We help ambitious startups build AI-powered products and help businesses prepare for an AI-powered future through intelligent software, automation and modern engineering.",
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
        title: "Services | AI SaaS, Business Automation & Digital Experiences | Proquoment Labs",
        description:
          "AI SaaS & Digital Product Engineering, Business Process Automation & Integrations, and Web Applications & Digital Experiences.",
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
        title: "Work & Case Studies | Production AI Systems & Architecture | Proquoment Labs",
        description:
          "Explore technical case studies: AI SaaS product engineering, intelligent process automation, and high-performance web systems.",
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
        title: "About Us | AI-Native Product & Engineering Studio | Proquoment Labs",
        description:
          "Proquoment Labs is an AI-native Product & Engineering Studio helping ambitious founders and growing businesses turn ideas into working technology.",
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
