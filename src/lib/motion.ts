import type { Transition, Variants } from "framer-motion";

export const premiumSpring = {
  type: "spring",
  stiffness: 280,
  damping: 26,
  mass: 0.7,
} satisfies Transition;

export const subtleSpring = {
  type: "spring",
  stiffness: 240,
  damping: 28,
  mass: 0.8,
} satisfies Transition;

export const revealVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: subtleSpring },
} satisfies Variants;

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.04, staggerChildren: 0.06 },
  },
} satisfies Variants;

export function sectionMotion(reduced: boolean) {
  return {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: reduced ? 0 : 0.09 } },
    } satisfies Variants,
    item: {
      hidden: reduced ? { opacity: 1, y: 0, filter: "none" } : { opacity: 0, y: 10, filter: "blur(3px)" },
      visible: { opacity: 1, y: 0, filter: "none", transition: { duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] } },
    } satisfies Variants,
  };
}

const instantTransition = { duration: 0, delay: 0 } satisfies Transition;
const reducedRevealVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: instantTransition },
} satisfies Variants;
const reducedStaggerContainerVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0, staggerChildren: 0 } },
} satisfies Variants;

// Pass useReducedMotion() from the consuming component. Until the preference
// is known, keep content visible and motion disabled. No browser globals are
// read here, and existing component/route animations are not wired to these yet.
export function getMotionConfig(shouldReduceMotion: boolean | null) {
  const reduceMotion = shouldReduceMotion !== false;

  return {
    premiumSpring: reduceMotion ? instantTransition : premiumSpring,
    subtleSpring: reduceMotion ? instantTransition : subtleSpring,
    revealVariants: reduceMotion ? reducedRevealVariants : revealVariants,
    staggerContainerVariants: reduceMotion
      ? reducedStaggerContainerVariants
      : staggerContainerVariants,
  };
}
