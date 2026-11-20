import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageTransition provides an elegant copperplate-inspired glide transition.
 * On mount, content floats up gently with silky smooth ease-out curves.
 * On exit, content fades smoothly before the next page arrives.
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  const transitionVariants = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 12,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.42,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -8,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.24,
        ease: [0.4, 0, 1, 1] as const,
      },
    },
  };

  return (
    <motion.div
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
