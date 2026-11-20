/**
 * Route prefetching utility for proactive lazy chunk loading on hover/focus.
 */
export const routePrefetchMap: Record<string, () => Promise<unknown>> = {
  "/": () => import("@/pages/HomePage"),
  "/services": () => import("@/pages/ServicesPage"),
  "/about": () => import("@/pages/AboutPage"),
  "/contact": () => import("@/pages/ContactPage"),
  "/privacy-policy": () => import("@/pages/PrivacyPolicyPage"),
  "/terms-of-service": () => import("@/pages/TermsOfServicePage"),
};

const prefetchedPaths = new Set<string>();

export function prefetchRoute(path: string): void {
  if (typeof window === "undefined") return;
  // Normalize path (strip query params and hashes)
  const cleanPath = path.split("?")[0].split("#")[0];
  if (!cleanPath || prefetchedPaths.has(cleanPath)) return;

  const loader = routePrefetchMap[cleanPath];
  if (loader) {
    prefetchedPaths.add(cleanPath);
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => {
        loader().catch(() => {
          prefetchedPaths.delete(cleanPath);
        });
      });
    } else {
      setTimeout(() => {
        loader().catch(() => {
          prefetchedPaths.delete(cleanPath);
        });
      }, 50);
    }
  }
}

export default prefetchRoute;
