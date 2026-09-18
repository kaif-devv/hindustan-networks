import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { NetworkAmbientBackground } from "@/components/effects/NetworkAmbientBackground";
import { useMotionPreferences } from "@/lib/MotionPreferences";
import { sectionMotion } from "@/lib/motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  ambient?: "header" | "calm" | false;
}

export function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
  ambient = "header",
}: SectionHeaderProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { reduced } = useMotionPreferences();
  const variants = sectionMotion(reduced);

  return (
    <motion.div
      ref={ref}
      variants={variants.container}
      initial="hidden"
      animate={inView || reduced ? "visible" : "hidden"}
      className={cn(
        "section-heading mb-10 lg:mb-14",
        align === "center" && "text-center",
        className,
      )}
    >
      {ambient && <NetworkAmbientBackground variant={ambient} />}
      {badge && (
        <motion.div variants={variants.item} className={cn("badge mb-4", align === "center" && "mx-auto")}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
          {badge}
        </motion.div>
      )}
      <motion.h2 variants={variants.item} className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-heading tracking-tight leading-tight mb-4">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {align === "center" && (
        <div className="flex justify-center mb-4">
          <div className="divider-brand" />
        </div>
      )}
      {!align || align === "left" ? (
        <div className="divider-brand mb-4" />
      ) : null}
      {subtitle && (
        <motion.p variants={variants.item}
          className={cn(
            "text-base lg:text-lg text-body leading-relaxed",
            align === "center" && "max-w-2xl mx-auto",
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
