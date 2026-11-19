import * as React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

/**
 * Super Smooth Momentum Scroll Provider
 * Provides buttery-smooth inertial momentum scrolling on desktop viewports,
 * while preserving native 120Hz touch physics on mobile/touch devices.
 */
export function SmoothScroll() {
  const [location] = useLocation();
  const currentY = useRef(0);
  const targetY = useRef(0);
  const isScrolling = useRef(false);
  const rafId = useRef<number | null>(null);

  // Sync scroll target on route navigation
  useEffect(() => {
    currentY.current = window.scrollY;
    targetY.current = window.scrollY;
  }, [location]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Skip on touch-only devices or if user requested reduced motion
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = "smooth";
      return;
    }

    currentY.current = window.scrollY;
    targetY.current = window.scrollY;

    const clamp = (min: number, val: number, max: number) => Math.min(Math.max(val, min), max);

    const getMaxScroll = () =>
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
      ) - window.innerHeight;

    const isScrollableElement = (el: HTMLElement | null): boolean => {
      let current = el;
      while (current && current !== document.body && current !== document.documentElement) {
        const style = window.getComputedStyle(current);
        const overflowY = style.overflowY;
        if (
          (overflowY === "auto" || overflowY === "scroll") &&
          current.scrollHeight > current.clientHeight
        ) {
          return true;
        }
        current = current.parentElement;
      }
      return false;
    };

    const animate = () => {
      const diff = targetY.current - currentY.current;
      const ease = 0.09;

      if (Math.abs(diff) > 0.4) {
        currentY.current += diff * ease;
        window.scrollTo(0, currentY.current);
        rafId.current = requestAnimationFrame(animate);
      } else {
        currentY.current = targetY.current;
        window.scrollTo(0, currentY.current);
        isScrolling.current = false;
        rafId.current = null;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Don't intercept if modifier keys are pressed (zoom/pan)
      if (e.ctrlKey || e.metaKey || e.shiftKey) return;

      // Don't intercept if inside an internal scrollable container
      if (isScrollableElement(e.target as HTMLElement)) return;

      e.preventDefault();

      const maxScroll = getMaxScroll();
      if (maxScroll <= 0) return;

      const delta = e.deltaY;
      targetY.current = clamp(0, targetY.current + delta, maxScroll);

      if (!isScrolling.current) {
        isScrolling.current = true;
        rafId.current = requestAnimationFrame(animate);
      }
    };

    const handleNativeScroll = () => {
      if (!isScrolling.current) {
        currentY.current = window.scrollY;
        targetY.current = window.scrollY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleNativeScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleNativeScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return null;
}

export default SmoothScroll;
