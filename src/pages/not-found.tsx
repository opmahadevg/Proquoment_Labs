import * as React from "react";
import { Link, useLocation } from "wouter";
import {
  PlateHeader,
  PlateKicker,
  EtchedCard,
  CopperplateButton,
  HatchDivider,
} from "@/components/ui/copperplate-primitives";
import { Home, Compass, ArrowRight, ArrowLeft, Terminal } from "lucide-react";

export function NotFoundPage() {
  const [location] = useLocation();

  return (
    <div className="relative min-h-[calc(100vh-10rem)] flex items-center justify-center py-20 px-6 text-[var(--ctl-text)] bg-[var(--ctl-paper)] overflow-hidden">
      <div className="max-w-2xl w-full mx-auto text-center space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-wash)] text-xs text-[var(--ctl-ink)] font-semibold uppercase tracking-wider">
          <span>HTTP 404 • Resource Not Located</span>
        </div>

        {/* Engraved Compass / Star Ornament */}
        <div className="flex justify-center" aria-hidden="true">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-[var(--ctl-ink)]">
            <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <path
              d="M32 6 L35 29 L58 32 L35 35 L32 58 L29 35 L6 32 L29 29 Z"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="var(--ctl-wash)"
            />
            <circle cx="32" cy="32" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Display Code */}
        <div className="space-y-3">
          <h1 className="font-serif text-7xl sm:text-8xl font-bold tracking-tight text-[var(--ctl-text)] leading-none">
            4<span className="text-[var(--ctl-ink)]">0</span>4
          </h1>
          <h2 className="font-serif text-2xl sm:text-3xl text-[var(--ctl-text)]">
            Route Not Found
          </h2>
          <p className="text-[16px] text-[var(--ctl-soft)] max-w-md mx-auto leading-relaxed">
            The requested plate or coordinates could not be located on the Proquoment Labs network.
          </p>
        </div>

        {/* Diagnostic Path Feedback */}
        <EtchedCard className="max-w-md mx-auto text-left p-4 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ctl-ink)]">
            <Terminal className="w-3.5 h-3.5" />
            <span>Diagnostic Route Telemetry</span>
          </div>
          <div className="text-xs font-mono text-[var(--ctl-text)] bg-[var(--ctl-wash)] p-2 rounded-[2px] border border-[var(--ctl-line)] break-all">
            Path: <span className="text-[var(--ctl-ink)] font-semibold">{location || "/"}</span>
          </div>
        </EtchedCard>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="/">
            <CopperplateButton variant="deep">
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </CopperplateButton>
          </Link>
          <Link href="/services">
            <CopperplateButton variant="paper">
              <Compass className="w-4 h-4 text-[var(--ctl-ink)]" />
              <span>Explore Services</span>
            </CopperplateButton>
          </Link>
        </div>

        {/* Quick Nav Links */}
        <nav aria-label="404 Available Destinations" className="pt-8 border-t border-[var(--ctl-line)] max-w-md mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--ctl-ink)] block mb-3">
            Available Destinations
          </span>
          <div className="flex items-center justify-center gap-6 text-xs text-[var(--ctl-soft)]">
            <Link href="/services" className="hover:text-[var(--ctl-ink)] uppercase tracking-wider">
              Services
            </Link>
            <span className="text-[var(--ctl-line)]">•</span>
            <Link href="/about" className="hover:text-[var(--ctl-ink)] uppercase tracking-wider">
              About Us
            </Link>
            <span className="text-[var(--ctl-line)]">•</span>
            <Link href="/contact" className="hover:text-[var(--ctl-ink)] uppercase tracking-wider">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export const NotFound = NotFoundPage;
export default NotFoundPage;
