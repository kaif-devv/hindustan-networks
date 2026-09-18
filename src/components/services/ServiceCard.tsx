import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { InteractiveCard } from "@/components/effects/InteractiveCard";
import { useMotionPreferences } from "@/lib/MotionPreferences";
import { serviceEase, serviceMorph, instantServiceMotion } from "./serviceMotion";

interface ServiceCardProps {
  service: Service;
  index: number;
  layoutId: string;
  selected: boolean;
  dialogOpen: boolean;
  onOpen: (trigger: HTMLButtonElement) => void;
}

export function ServiceCard({ service, index, layoutId, selected, dialogOpen, onOpen }: ServiceCardProps) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [focused, setFocused] = useState(false);
  const { reduced } = useMotionPreferences();
  const titleId = `${layoutId}-heading`;
  const descriptionId = `${layoutId}-summary`;
  const transition = reduced ? instantServiceMotion : serviceMorph;
  const signalPath = /cloud/i.test(service.title)
    ? "M4 14H16V4M12 8L16 4L20 8"
    : /security|firewall|access|cctv/i.test(service.title)
      ? "M7 9L13 14L25 4" : "M4 13H12L20 5H28";

  return (
    <motion.li
      ref={ref}
      className="services-grid-item"
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={inView || focused || reduced ? { opacity: 1, y: 0 } : {}}
      transition={reduced || focused ? instantServiceMotion : { duration: 0.56, ease: serviceEase, delay: index % 3 * 0.065 }}
      onFocusCapture={() => setFocused(true)}
    >
      <InteractiveCard disabled={dialogOpen}>
        <motion.article
          className="services-card-surface interactive-card-surface"
          layoutId={reduced ? undefined : layoutId}
          transition={transition}
          style={{ borderRadius: 12 }}
        >
          <div className="services-card-accent" aria-hidden="true"><span /></div>
          <div className="services-card-top">
            <div className="services-card-icon-shift">
              <motion.div className="services-icon" layoutId={reduced ? undefined : `${layoutId}-icon`} transition={transition} style={{ borderRadius: 12 }}>
                <span className="services-icon-glyph"><service.icon size={22} aria-hidden="true" /></span>
              </motion.div>
            </div>
            <svg className="services-card-signal" width="36" height="20" viewBox="0 0 32 18" fill="none" aria-hidden="true">
              <path d={signalPath} />
              <circle cx="4" cy="13" r="1.6" /><circle cx="28" cy="5" r="1.6" />
            </svg>
          </div>
          <motion.h2
            id={titleId}
            className="services-card-title text-base font-semibold text-heading leading-tight"
            layoutId={reduced ? undefined : `${layoutId}-title`}
            layout="position"
            transition={transition}
          >{service.title}</motion.h2>
          <p id={descriptionId} className="services-card-description text-sm text-body leading-relaxed">{service.description}</p>
          <div className="services-card-affordance" aria-hidden="true">
            <span>Learn details</span><ArrowUpRight size={15} />
          </div>
          <button
            type="button"
            className="services-card-trigger"
            aria-label={`Learn details: ${service.title}`}
            aria-describedby={descriptionId}
            aria-haspopup="dialog"
            aria-expanded={selected}
            aria-controls={selected ? "service-detail-dialog" : undefined}
            onClick={(event) => onOpen(event.currentTarget)}
          />
        </motion.article>
      </InteractiveCard>
    </motion.li>
  );
}
