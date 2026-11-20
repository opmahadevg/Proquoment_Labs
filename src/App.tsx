import * as React from "react";
import { Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageFallbackSkeleton } from "@/components/ui/copperplate-skeletons";
import { verifyPhase2Exports } from "@/phase2-verify";
import { verifyPhase3Exports } from "@/phase3-verify";
import { verifyPhase4Exports } from "@/phase4-verify";
import { verifyPhase5Exports } from "@/phase5-verify";
import { verifyPhase6Exports } from "@/phase6-verify";
import { verifyPhase7Exports } from "@/phase7-verify";

// Static import for instant first-paint performance on root landing
// (Vite automatically chunks lazy imports below for remaining routes)
// import { HomePage } from "@/pages/HomePage";

// Lazy-loaded route components for code splitting & optimal runtime performance
const HomePage = React.lazy(() => import("@/pages/HomePage"));
const ServicesPage = React.lazy(() => import("@/pages/ServicesPage"));
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
        title: "Proquoment Labs | Become AI-Ready Today.",
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
        title: "AI Engineering Dispatch | Proquoment Labs",
        description:
          "In-depth analysis of AI system architecture, implementation patterns, and enterprise impact.",
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
          "Privacy and data protection policy for Proquoment Labs in accordance with DPDP and IT Acts.",
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
          "Commercial engagement terms and code ownership deliverables for Proquoment Labs.",
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

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class RouteErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("RouteErrorBoundary caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center min-h-[40vh] flex flex-col items-center justify-center space-y-4">
          <h2 className="text-xl font-serif text-[var(--ctl-text)]">
            Something went wrong loading this plate.
          </h2>
          <p className="text-xs text-[var(--ctl-soft)] max-w-md">
            {this.state.error?.message || "An unexpected error occurred while rendering this route."}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-4 py-2 border border-[var(--ctl-line)] text-xs uppercase tracking-wider text-[var(--ctl-ink)] hover:bg-[var(--ctl-wash)] transition-colors"
          >
            Reload Route
          </button>
        </div>
      );
    }
    return this.props.children;
  }
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
      <Router />
    </QueryClientProvider>
  );
}

export default App;
