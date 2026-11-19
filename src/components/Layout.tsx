import * as React from "react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import SEO, { SEOProps } from "@/components/SEO";
import { prefetchRoute } from "@/lib/prefetch";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const PALETTE_CONFIGS: Record<string, { label: string; ink: string; paper: string }> = {
  cobalt: { label: "Cobalt", ink: "#2238c4", paper: "#f7f4ec" },
  indigo: { label: "Indigo", ink: "#2e2b72", paper: "#efe9de" },
  delft: { label: "Delft", ink: "#1b4d9e", paper: "#f3f4f5" },
  oxblood: { label: "Oxblood", ink: "#7a1d2b", paper: "#f4ede2" },
};

export function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load and apply saved theme preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("proquoment-theme") as "light" | "dark" | null;
      if (saved) {
        setTheme(saved);
        if (saved === "dark") {
          document.documentElement.classList.add("dark");
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.setAttribute("data-theme", "light");
        }
      } else if (document.documentElement.classList.contains("dark")) {
        setTheme("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof document !== "undefined") {
      if (next === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
      }
      localStorage.setItem("proquoment-theme", next);
    }
  };

  // Automatically close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Close mobile menu when viewport is resized to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  // Prevent background scrolling while mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/") return location === "/";
    return location === href || location.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--ctl-paper)]/95 backdrop-blur-md border-b border-[var(--ctl-line)] w-full transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          aria-label="Proquoment Labs Home"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
        >
          <img
            src="/logo.png"
            alt="Proquoment Logo"
            width={32}
            height={32}
            className="w-8 h-8 rounded-xl object-contain shrink-0"
          />
          <span className="font-serif font-bold tracking-tight text-[var(--ctl-text)] text-lg">
            Proquoment Labs
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 h-16">
          {NAV_ITEMS.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onMouseEnter={() => prefetchRoute(item.href)}
                onFocus={() => prefetchRoute(item.href)}
                className={cn(
                  "relative h-16 flex items-center text-xs font-semibold tracking-[0.18em] uppercase transition-colors",
                  active
                    ? "text-[var(--ctl-ink)] font-bold"
                    : "text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)]"
                )}
              >
                <span>{item.label}</span>
                {active && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full shadow-[0_0_6px_rgba(34,56,196,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Change Button (Black to White / White to Black) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to white parchment theme" : "Switch to black nocturnal theme"}
            title={theme === "dark" ? "White parchment theme" : "Black nocturnal theme"}
            className="p-2 rounded-[2px] border border-[var(--ctl-line)] text-[var(--ctl-ink)] hover:bg-[var(--ctl-wash)] transition-colors flex items-center justify-center cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--ctl-ink)]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </button>
          <a
            href="https://proquoment.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)] font-semibold tracking-wider uppercase transition-colors"
          >
            Platform &rarr;
          </a>
          <Link
            href="/contact"
            onMouseEnter={() => prefetchRoute("/contact")}
            onFocus={() => prefetchRoute("/contact")}
            className="bg-primary hover:bg-primary/90 text-white rounded-lg px-4 h-9 font-semibold text-sm shadow-lg shadow-primary/25 inline-flex items-center justify-center transition-all duration-300 uppercase tracking-wider text-xs"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Actions: Theme toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to white parchment theme" : "Switch to black nocturnal theme"}
            title={theme === "dark" ? "White parchment theme" : "Black nocturnal theme"}
            className="p-2 rounded-[2px] border border-[var(--ctl-line)] text-[var(--ctl-ink)] hover:bg-[var(--ctl-wash)] transition-colors flex items-center justify-center cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--ctl-ink)]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            className="p-2 rounded-[2px] text-[var(--ctl-ink)] hover:bg-[var(--ctl-wash)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ctl-ink)]/50"
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Open"} menu</span>
            {mobileOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Portal to document.body to avoid backdrop-filter trapping) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {typeof document !== "undefined" &&
              createPortal(
                <motion.div
                  key="mobile-nav-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
                  onClick={() => setMobileOpen(false)}
                  aria-hidden="true"
                />,
                document.body
              )}

            {typeof document !== "undefined" &&
              createPortal(
                <motion.div
                  key="mobile-nav-drawer"
                  id="mobile-nav-drawer"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Mobile Navigation Drawer"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 280 }}
                  className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-80 bg-[var(--ctl-paper)] border-l border-[var(--ctl-line)] p-6 flex flex-col justify-between shadow-2xl md:hidden overflow-y-auto"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-[var(--ctl-line)]">
                      <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2"
                      >
                        <img
                          src="/logo.png"
                          alt="Proquoment Logo"
                          width={28}
                          height={28}
                          className="w-7 h-7 rounded-lg object-contain"
                        />
                        <span className="font-serif font-bold text-[var(--ctl-text)] text-base">
                          Proquoment Labs
                        </span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close navigation menu"
                        className="p-2 rounded-[2px] text-[var(--ctl-ink)] hover:bg-[var(--ctl-wash)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ctl-ink)]/50"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <nav aria-label="Mobile Navigation" className="flex flex-col space-y-2">
                      {NAV_ITEMS.map((item, idx) => {
                        const roman = ["I", "II", "III", "IV"][idx];
                        const active = isLinkActive(item.href);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                              "px-3 py-2.5 rounded-[2px] text-sm font-serif transition-colors flex items-center justify-between",
                              active
                                ? "bg-[var(--ctl-wash)] text-[var(--ctl-ink)] font-semibold border-l-2 border-[var(--ctl-ink)]"
                                : "text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)] hover:bg-[var(--ctl-wash)]"
                            )}
                          >
                            <span className="flex items-center gap-3">
                              <small className="text-xs text-[var(--ctl-ink)] font-sans">
                                {roman}.
                              </small>
                              <span>{item.label}</span>
                            </span>
                            {active && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--ctl-ink)]" />
                            )}
                          </Link>
                        );
                      })}
                    </nav>
                  </div>

                  <div className="pt-6 border-t border-[var(--ctl-line)] space-y-3">
                    <button
                      type="button"
                      onClick={toggleTheme}
                      className="w-full flex items-center justify-between px-3 py-2 border border-[var(--ctl-line)] rounded-[2px] text-xs font-semibold uppercase tracking-wider text-[var(--ctl-text)] hover:text-[var(--ctl-ink)] transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        {theme === "dark" ? (
                          <Sun className="w-4 h-4 text-amber-300" />
                        ) : (
                          <Moon className="w-4 h-4 text-[var(--ctl-ink)]" />
                        )}
                        <span>Theme: {theme === "dark" ? "Black Nocturnal" : "White Parchment"}</span>
                      </span>
                      <span className="text-[10px] text-[var(--ctl-soft)]">Tap to switch</span>
                    </button>
                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg px-4 h-11 font-semibold text-sm shadow-lg shadow-primary/25 flex items-center justify-center transition-colors uppercase tracking-wider text-xs"
                    >
                      Start a Project
                    </Link>
                    <a
                      href="https://proquoment.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-xs text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)] font-semibold tracking-wider uppercase transition-colors py-2"
                    >
                      Visit Proquoment Platform &rarr;
                    </a>
                  </div>
                </motion.div>,
                document.body
              )}
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  const [currentPalette, setCurrentPalette] = useState("cobalt");

  const changePalette = (palKey: string) => {
    setCurrentPalette(palKey);
    const pal = PALETTE_CONFIGS[palKey];
    if (pal && typeof document !== "undefined") {
      document.documentElement.style.setProperty("--ctl-ib", pal.ink);
      document.documentElement.style.setProperty("--ctl-pb", pal.paper);
      document.documentElement.setAttribute("data-palette", palKey);
    }
  };

  return (
    <footer className="border-t border-[var(--ctl-line)] bg-[var(--ctl-paper)] py-16 text-[var(--ctl-soft)] relative overflow-hidden transition-colors duration-500">
      {/* Engraved chinoiserie landscape backdrop */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none opacity-20 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 160"
          className="w-full h-full text-[var(--ctl-ink)]"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,130 C200,110 350,150 500,125 C650,100 800,140 950,115 C1100,90 1250,135 1440,120 L1440,160 L0,160 Z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M0,145 C250,135 450,155 700,140 C950,125 1200,150 1440,135 L1440,160 L0,160 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <line
            x1="0"
            y1="158"
            x2="1440"
            y2="158"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand info */}
          <div className="md:col-span-5 lg:col-span-6 space-y-4">
            <Link
              href="/"
              onMouseEnter={() => prefetchRoute("/")}
              className="flex items-center gap-2 group transition-opacity hover:opacity-90 w-fit"
            >
              <img
                src="/logo.png"
                alt="Proquoment Logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-xl object-contain shrink-0"
              />
              <span className="font-serif font-bold tracking-tight text-[var(--ctl-text)] text-lg">
                Proquoment Labs
              </span>
            </Link>

            <p className="text-sm font-serif italic text-[var(--ctl-ink)]">
              Where AI becomes your competitive advantage.
            </p>

            <p className="text-xs text-[var(--ctl-soft)] leading-relaxed max-w-sm font-sans">
              AI Product Engineering &amp; Transformation Studio. Designing, building, and scaling AI-native products, autonomous workflows, and intelligent software.
            </p>

            {/* Interactive Palette Switcher */}
            <div className="pt-2">
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[var(--ctl-ink)] block mb-1.5">
                Printed in:
              </span>
              <div className="flex items-center gap-2" role="group" aria-label="Palette selection">
                {Object.entries(PALETTE_CONFIGS).map(([key, config]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => changePalette(key)}
                    className={cn(
                      "px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase border rounded-[2px] transition-all",
                      currentPalette === key
                        ? "border-[var(--ctl-ink)] bg-[var(--ctl-ink)] text-[var(--ctl-ondeep)]"
                        : "border-[var(--ctl-line)] text-[var(--ctl-soft)] hover:border-[var(--ctl-ink)]"
                    )}
                  >
                    {config.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Services Quick Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-text)] mb-4">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services#product-engineering"
                  onMouseEnter={() => prefetchRoute("/services")}
                  className="text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)] transition-colors"
                >
                  AI Product Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services#agents-automation"
                  onMouseEnter={() => prefetchRoute("/services")}
                  className="text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)] transition-colors"
                >
                  AI Agents &amp; Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#transformation"
                  onMouseEnter={() => prefetchRoute("/services")}
                  className="text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)] transition-colors"
                >
                  AI Transformation Partnership
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/services"
                  onMouseEnter={() => prefetchRoute("/services")}
                  className="inline-flex items-center gap-1 text-[var(--ctl-ink)] hover:underline font-medium transition-colors text-sm"
                >
                  <span>View all services</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get in Touch / Network */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--ctl-text)] mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contact@proquoment.in"
                  className="text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)] transition-colors flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 text-[var(--ctl-ink)] shrink-0 transition-transform group-hover:scale-110" />
                  <span>contact@proquoment.in</span>
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/proquoment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)] transition-colors flex items-center gap-1"
                >
                  <span>Book a Consultation</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </li>
              <li>
                <a
                  href="https://proquoment.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--ctl-soft)] hover:text-[var(--ctl-ink)] transition-colors flex items-center gap-1"
                >
                  <span>Visit Proquoment Platform</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--ctl-line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--ctl-soft)]">
          <p>&copy; 2026 Proquoment Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/blog"
              onMouseEnter={() => prefetchRoute("/blog")}
              className="hover:text-[var(--ctl-ink)] transition-colors"
            >
              Industry Dispatches
            </Link>
            <Link
              href="/privacy-policy"
              onMouseEnter={() => prefetchRoute("/privacy-policy")}
              className="hover:text-[var(--ctl-ink)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              onMouseEnter={() => prefetchRoute("/terms-of-service")}
              className="hover:text-[var(--ctl-ink)] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export interface LayoutProps {
  children: React.ReactNode;
  seo?: SEOProps;
  className?: string;
}

export function Layout({ children, seo, className }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--ctl-paper)] text-[var(--ctl-text)] antialiased transition-colors duration-300">
      <SEO {...seo} />
      <Navbar />
      <main className={cn("min-h-[calc(100vh-4rem)] flex-1", className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
