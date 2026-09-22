import { useId, useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { InteractiveCard } from "@/components/effects/InteractiveCard";
import { useMotionPreferences } from "@/lib/MotionPreferences";

interface Props {
  sector: { icon: LucideIcon; title: string; desc: string };
  index: number;
}

export function SectorCard({ sector, index }: Props) {
  const ref = useRef<HTMLLIElement>(null);
  const titleId = useId();
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const { reduced } = useMotionPreferences();
  const visible = inView || reduced;

  return (
    <motion.li
      ref={ref}
      className="sectors-grid-item"
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: reduced ? 0 : 0.56, delay: reduced ? 0 : index % 3 * 0.065, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg className="sectors-connector" viewBox="0 0 20 10" aria-hidden="true">
        <motion.path
          d="M0 5H20"
          initial={reduced ? false : { pathLength: 0 }}
          animate={{ pathLength: visible ? 1 : 0 }}
          transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.18 + index % 3 * 0.065 }}
        />
      </svg>
      <InteractiveCard>
        <article className="sectors-card interactive-card-surface" aria-labelledby={titleId}>
          <div className="sectors-card-accent" aria-hidden="true"><span /></div>
          <span className="sectors-card-node" aria-hidden="true" />
          <div className="sectors-icon-shift">
            <div className="sectors-icon"><sector.icon size={28} strokeWidth={1.65} aria-hidden="true" /></div>
          </div>
          <h2 id={titleId} className="sectors-card-title text-lg font-semibold text-heading">{sector.title}</h2>
          <p className="sectors-card-description text-sm text-body leading-relaxed">{sector.desc}</p>
          <svg className="sectors-card-trace" viewBox="0 0 72 12" width="72" height="12" fill="none" aria-hidden="true">
            <path className="sectors-trace-base" d="M4 6H26L32 2H46L52 6H68" />
            <path className="sectors-trace-signal" d="M4 6H26L32 2H46L52 6H68" />
            <circle cx="4" cy="6" r="1.5" /><circle cx="68" cy="6" r="1.5" />
          </svg>
        </article>
      </InteractiveCard>
    </motion.li>
  );
}
