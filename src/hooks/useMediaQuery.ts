import { useState, useEffect } from "react";
import { useReducedMotion } from "./useReducedMotion";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 768px)");
}

export function useIsLowPerformance(): boolean {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  return isMobile || reducedMotion;
}
