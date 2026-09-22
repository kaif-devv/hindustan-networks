import type { RefObject } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import type { Service } from "@/data/services";
import { MorphDialog } from "@/components/ui/MorphDialog";
import { useMotionPreferences } from "@/lib/MotionPreferences";
import { serviceEase, serviceMorph, instantServiceMotion } from "./serviceMotion";

interface Props {
  service: Service;
  layoutId: string;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
}

export function ServiceDetailDialog({ service, layoutId, returnFocusRef, onClose }: Props) {
  const { reduced } = useMotionPreferences();
  const transition = reduced ? instantServiceMotion : serviceMorph;
  return (
    <MorphDialog
      id="service-detail-dialog"
      titleId="service-detail-title"
      descriptionId="service-detail-description"
      layoutId={layoutId}
      returnFocusRef={returnFocusRef}
      onClose={onClose}
      transition={transition}
      className="network-page services-detail"
    >
      <div className="services-detail-header">
        <div className="services-detail-accent" aria-hidden="true" />
        <motion.div className="services-icon" layoutId={reduced ? undefined : `${layoutId}-icon`} transition={transition} style={{ borderRadius: 12 }}>
          <service.icon size={22} aria-hidden="true" />
        </motion.div>
        <span className="badge services-detail-badge">Our Service</span>
        <button className="services-detail-close" type="button" onClick={onClose} aria-label="Close service details">
          <X size={20} aria-hidden="true" />
        </button>
        <motion.h2
          id="service-detail-title"
          className="services-detail-title text-2xl font-semibold text-heading leading-tight"
          layoutId={reduced ? undefined : `${layoutId}-title`}
          layout="position"
          transition={transition}
        >{service.title}</motion.h2>
      </div>
      <motion.div
        className="services-detail-body"
        initial={reduced ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, transition: { duration: reduced ? 0 : 0.1 } }}
        transition={reduced ? instantServiceMotion : { duration: 0.25, delay: 0.32, ease: serviceEase }}
      >
        <p id="service-detail-description" className="text-base text-body leading-relaxed">{service.detailedDesc}</p>
        <h3 className="services-detail-label">Key Highlights &amp; Capabilities</h3>
        <ul className="services-detail-features grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.features.map((feature) => (
            <li key={feature}>
              <span className="services-feature-check" aria-hidden="true"><Check size={12} strokeWidth={2.5} /></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-7 border-t border-card pt-5">
          <p className="text-sm text-body leading-relaxed mb-4">Tell us about your site, existing systems and priorities. We can help define the scope, installation requirements and support plan.</p>
          <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="btn-brand" onClick={onClose}>Request a consultation</Link>
        </div>
      </motion.div>
    </MorphDialog>
  );
}
