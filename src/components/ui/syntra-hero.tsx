import * as React from "react";

export interface SyntraHeroProps {
  showNav?: boolean;
}

/**
 * Minimal legacy export stub for CoreHero / SyntraHero.
 * Replaced by the native 2-column Technical Precision Hero in HomePage.tsx.
 */
export function SyntraHero({ showNav = false }: SyntraHeroProps) {
  return null;
}

export const CoreHero = SyntraHero;
export default SyntraHero;
