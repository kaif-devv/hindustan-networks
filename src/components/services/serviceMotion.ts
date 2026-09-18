import type { Transition } from "framer-motion";

export const serviceEase = [0.22, 1, 0.36, 1] as const;
export const serviceMorph = { duration: 0.44, ease: serviceEase } satisfies Transition;
export const instantServiceMotion = { duration: 0, delay: 0 } satisfies Transition;
