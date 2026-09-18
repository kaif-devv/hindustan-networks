import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NetworkAmbientBackground } from "@/components/effects/NetworkAmbientBackground";
import { useMotionPreferences } from "@/lib/MotionPreferences";

export function SectorsHeader() {
  const ref = useRef<HTMLElement>(null);
  const { reduced, pointer } = useMotionPreferences();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const networkY = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const timing = (delay: number) => ({ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const });

  return (
    <header ref={ref} className="sectors-header section-heading mb-10 lg:mb-14 text-center">
      <motion.div className="sectors-header-network" style={{ y: pointer && !reduced ? networkY : 0 }} aria-hidden="true">
        <NetworkAmbientBackground variant="calm" />
      </motion.div>
      <motion.div className="badge mb-4 mx-auto" initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={timing(0.04)}>
        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />Sectors
      </motion.div>
      <h1 id="sectors-heading" className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-heading tracking-tight leading-tight mb-4">
        <span className="sectors-heading-mask">
          <motion.span initial={reduced ? false : { y: "105%" }} animate={{ y: 0 }} transition={timing(0.09)}>Experience Across</motion.span>
        </span>{" "}
        <span className="sectors-heading-mask">
          <motion.span className="gradient-text" initial={reduced ? false : { y: "105%" }} animate={{ y: 0 }} transition={timing(0.15)}>Many Environments</motion.span>
        </span>
      </h1>
      <div className="flex justify-center mb-4" aria-hidden="true">
        <motion.div className="divider-brand" style={{ originX: 0 }} initial={reduced ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={timing(0.24)} />
      </div>
      <motion.p className="max-w-2xl mx-auto text-base lg:text-lg text-body leading-relaxed" initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={timing(0.23)}>
        These sectors show where our team has delivered, not where our work ends. We adapt network, security, and communication systems for any organization that needs reliable infrastructure.
      </motion.p>
    </header>
  );
}
