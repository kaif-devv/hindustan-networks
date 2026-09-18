import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";

function useMediaQuery(query: string, serverValue = false) {
  return useSyncExternalStore(
    (notify) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", notify);
      return () => media.removeEventListener("change", notify);
    },
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}

const MotionPreferences = createContext({ reduced: true, pointer: false, compact: false });

export function MotionPreferencesProvider({ children }: { children: ReactNode }) {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)", true);
  const pointer = useMediaQuery("(hover: hover) and (pointer: fine)") && !reduced;
  const compact = useMediaQuery("(max-width: 767px)");
  return <MotionPreferences.Provider value={{ reduced, pointer, compact }}>{children}</MotionPreferences.Provider>;
}

export const useMotionPreferences = () => useContext(MotionPreferences);

export function useReveal(active: boolean, index = 0) {
  const { reduced } = useMotionPreferences();
  return {
    initial: reduced ? false as const : { opacity: 0, y: 14 },
    animate: active || reduced ? { opacity: 1, y: 0 } : {},
    transition: { duration: reduced ? 0 : 0.5, delay: reduced ? 0 : Math.min(index * 0.065, 0.26), ease: [0.22, 1, 0.36, 1] as const },
  };
}
