import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { NetworkAmbientBackground } from "@/components/effects/NetworkAmbientBackground";
import { useMotionPreferences } from "@/lib/MotionPreferences";
import { serviceEase, instantServiceMotion } from "./serviceMotion";

/** Keeps the shared header's composition and copy; animation stays local to Services. */
export function ServicesHeader() {
  const ref = useRef<HTMLElement>(null);
  const { reduced, compact } = useMotionPreferences();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const networkY = useTransform(scrollYProgress, [0, 1], [0, 28]);
  const timing = (delay: number) => reduced ? instantServiceMotion : { duration: 0.6, delay, ease: serviceEase };

  return (
    <header ref={ref} className="services-header section-heading mb-10 lg:mb-14 text-center">
      <motion.div className="services-header-network" style={{ y: reduced || compact ? 0 : networkY }} aria-hidden="true">
        <NetworkAmbientBackground variant="calm" />
      </motion.div>
      <motion.div className="badge mb-4 mx-auto" initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={timing(0.04)}>
        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />What We Do
      </motion.div>
      <h1 id="services-heading" className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-heading tracking-tight leading-tight mb-4">
        <span className="services-heading-mask">
          <motion.span initial={reduced ? false : { y: "105%" }} animate={{ y: 0 }} transition={timing(0.09)}>Our</motion.span>
        </span>{" "}
        <span className="services-heading-mask">
          <motion.span className="gradient-text" initial={reduced ? false : { y: "105%" }} animate={{ y: 0 }} transition={timing(0.15)}>Services</motion.span>
        </span>
      </h1>
      <div className="flex justify-center mb-4" aria-hidden="true">
        <motion.div className="divider-brand" style={{ originX: 0 }} initial={reduced ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={timing(0.24)} />
      </div>
      <motion.p className="max-w-2xl mx-auto text-base lg:text-lg text-body leading-relaxed" initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={timing(0.23)}>
        Comprehensive network and communication solutions tailored for your business needs — from design to deployment and maintenance.
      </motion.p>
    </header>
  );
}
