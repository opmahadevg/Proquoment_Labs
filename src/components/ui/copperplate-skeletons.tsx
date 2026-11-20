import * as React from "react";
import { cn } from "@/lib/utils";

/** Engraved corner tick marks for etched skeleton cards */
export function SkeletonCornerTicks() {
  return (
    <>
      <span
        className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-[var(--ctl-line)] pointer-events-none"
        aria-hidden="true"
      />
      <span
        className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-[var(--ctl-line)] pointer-events-none"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-[var(--ctl-line)] pointer-events-none"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-[var(--ctl-line)] pointer-events-none"
        aria-hidden="true"
      />
    </>
  );
}

/** Hero stage skeleton with arch wireframe and zero layout shift */
export function HeroSkeleton({ className }: { className?: string }) {
  return (
    <section
      aria-label="Loading hero..."
      className={cn("ctl-hero relative w-full", className)}
    >
      <div
        className="relative mx-auto w-full max-w-[1640px] overflow-hidden rounded-[2px] border border-[var(--ctl-line)] bg-[var(--ctl-paper)]"
        style={{ height: "clamp(560px, 52vw, 880px)" }}
      >
        <SkeletonCornerTicks />

        {/* Outer border frame */}
        <div className="absolute inset-3 border border-[var(--ctl-line)] opacity-60 pointer-events-none" />

        {/* Top kicker and edition placeholders */}
        <div className="absolute top-6 left-6 sm:left-8 flex items-center gap-2">
          <div className="ctl-skeleton h-3 w-20" />
        </div>
        <div className="absolute top-6 right-6 sm:right-8 flex items-center gap-2">
          <div className="ctl-skeleton h-3 w-24" />
        </div>

        {/* Center arch wireframe */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl px-6 flex flex-col items-center text-center space-y-6">
          {/* Logo mark placeholder */}
          <div className="ctl-skeleton w-10 h-10 rounded-full" />

          {/* Kicker rule */}
          <div className="ctl-skeleton h-3.5 w-32" />

          {/* Headline lines */}
          <div className="space-y-3 w-full max-w-md flex flex-col items-center">
            <div className="ctl-skeleton h-8 sm:h-11 w-4/5" />
            <div className="ctl-skeleton h-8 sm:h-11 w-3/5" />
          </div>

          {/* Subtitle wireframe */}
          <div className="space-y-2 w-full max-w-sm flex flex-col items-center pt-2">
            <div className="ctl-skeleton h-3.5 w-full" />
            <div className="ctl-skeleton h-3.5 w-4/5" />
          </div>

          {/* CTA button placeholder */}
          <div className="pt-2">
            <div className="ctl-skeleton h-11 w-40 rounded-[2px]" />
          </div>
        </div>

        {/* Subtle bottom scroll cue wireframe */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="ctl-skeleton h-2.5 w-16" />
          <div className="w-[1px] h-6 bg-[var(--ctl-line)]" />
        </div>
      </div>
    </section>
  );
}

/** Etched card skeleton */
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative bg-[var(--ctl-paper)] border border-[var(--ctl-line)] p-6 sm:p-8 rounded-[2px] flex flex-col justify-between space-y-6 min-h-[220px]",
        className
      )}
    >
      <SkeletonCornerTicks />
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--ctl-line)] pb-3">
          <div className="ctl-skeleton h-3.5 w-24" />
          <div className="ctl-skeleton h-3 w-12" />
        </div>
        <div className="ctl-skeleton h-6 w-3/4" />
        <div className="space-y-2 pt-1">
          <div className="ctl-skeleton h-3.5 w-full" />
          <div className="ctl-skeleton h-3.5 w-5/6" />
          <div className="ctl-skeleton h-3.5 w-2/3" />
        </div>
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-[var(--ctl-line)]/40">
        <div className="ctl-skeleton h-3 w-20" />
        <div className="ctl-skeleton h-3 w-8" />
      </div>
    </div>
  );
}

/** Card grid skeleton */
export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}

/** Blog/Article header skeleton */
export function ArticleSkeleton() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto py-12 px-6">
      <div className="space-y-4">
        <div className="ctl-skeleton h-3.5 w-28" />
        <div className="ctl-skeleton h-10 sm:h-12 w-4/5" />
        <div className="ctl-skeleton h-4 w-40" />
      </div>
      <div className="w-full h-[1px] bg-[var(--ctl-line)]" />
      <div className="space-y-4">
        <div className="ctl-skeleton h-4 w-full" />
        <div className="ctl-skeleton h-4 w-11/12" />
        <div className="ctl-skeleton h-4 w-4/5" />
        <div className="ctl-skeleton h-4 w-full" />
        <div className="ctl-skeleton h-4 w-3/4" />
      </div>
    </div>
  );
}

/** Contextual copperplate page skeleton replacing spinning loader */
export function PageFallbackSkeleton({ isHero = false }: { isHero?: boolean }) {
  if (isHero) {
    return <HeroSkeleton />;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-[70vh] w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-12 animate-fade-in"
    >
      {/* Header section wireframe */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[var(--ctl-line)]" />
          <div className="ctl-skeleton h-3 w-24" />
        </div>
        <div className="ctl-skeleton h-10 sm:h-14 w-3/4" />
        <div className="ctl-skeleton h-4 w-1/2" />
      </div>

      {/* Decorative divider wireframe */}
      <div className="w-full h-[1px] bg-[var(--ctl-line)]" />

      {/* Content grid wireframe */}
      <CardGridSkeleton count={6} />

      <span className="sr-only">Loading page content...</span>
    </div>
  );
}
