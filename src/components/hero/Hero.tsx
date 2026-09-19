import { useEffect, type PointerEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Cable, Headphones, ShieldCheck, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import { subtleSpring } from "@/lib/motion";
import { NetworkAmbientBackground } from "@/components/effects/NetworkAmbientBackground";
import { useMotionPreferences } from "@/lib/MotionPreferences";
import "./concept-a.css";

const deliveryPath = [
  { icon: Cable, title: "Plan", text: "Site survey, requirements, layout, capacity and security planning." },
  { icon: Wifi, title: "Deploy", text: "Clean installation for networks, Wi-Fi, surveillance and IT systems." },
  { icon: ShieldCheck, title: "Secure", text: "Firewall, access, endpoint and monitoring layers for safer operations." },
  { icon: Headphones, title: "Support", text: "Maintenance, troubleshooting and upgrades after handover." },
];

export function Hero() {
  const background = <NetworkAmbientBackground variant="hero" />;
  const { reduced: reduceMotion } = useMotionPreferences();
  const pointerX = useMotionValue(650);
  const pointerY = useMotionValue(260);
  const layerX = useMotionValue(0);
  const layerY = useMotionValue(0);
  const x = useSpring(layerX, subtleSpring);
  const y = useSpring(layerY, subtleSpring);
  useEffect(() => {
    if (reduceMotion) { layerX.set(0); layerY.set(0); x.jump(0); y.jump(0); }
  }, [reduceMotion, layerX, layerY, x, y]);
  const spotlight = useMotionTemplate`radial-gradient(440px circle at ${pointerX}px ${pointerY}px, rgba(255, 183, 86, 0.19), transparent 75%)`;

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = event.clientX - bounds.left;
    const py = event.clientY - bounds.top;
    pointerX.set(px);
    pointerY.set(py);
    const strength = 10;
    layerX.set((px / bounds.width - 0.5) * strength);
    layerY.set((py / bounds.height - 0.5) * strength);
  }

  const entrance = (delay: number) => ({
    initial: reduceMotion ? false as const : { opacity: 0, y: 18, filter: "blur(0px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div className="concept-home">
    <section id="hero" className="vl-hero vl-a" aria-label="Hindustan Networks"
      onPointerMove={onPointerMove} onPointerLeave={() => { layerX.set(0); layerY.set(0); }}>
      <motion.div className="vl-background" style={{ x, y }} aria-hidden="true">{background}</motion.div>
      <motion.div className="vl-pointer-light" style={{ background: spotlight }} aria-hidden="true" />
      <div className="vl-composition">
        <div className="vl-copy">
          <motion.div className="vl-badge" {...entrance(0.02)}><span />Trusted Network Infrastructure Partner</motion.div>
          <h1 className="vl-title">
            <motion.span className="font-brand-roman font-[700] tracking-tight" {...entrance(0.1)}>Hindustan</motion.span>
            <motion.span className="vl-title-accent font-brand-gothic font-normal tracking-normal" {...entrance(0.19)}>Networks</motion.span>
          </h1>
          <motion.p className="vl-subtitle" {...entrance(0.25)}>Comprehensive Network &amp; Communication Solutions</motion.p>
          <motion.p className="vl-body" {...entrance(0.32)}>
            We design, install, secure, and maintain dependable technology infrastructure for offices, factories, campuses, retail spaces, healthcare facilities, and growing enterprises.
          </motion.p>
          <motion.div className="vl-actions" {...entrance(0.4)}>
            <Link className="vl-button vl-primary" to="/services">Explore Services<ArrowRight size={18} /></Link>
            <Link className="vl-button vl-secondary" to="/contact">Contact Us<ArrowRight size={17} /></Link>
          </motion.div>
          <motion.div className="vl-copy-rule" {...entrance(0.48)} aria-hidden="true"><span /><i /><span /></motion.div>
        </div>
        <motion.div className="vl-delivery" {...entrance(0.22)}>
          <div className="vl-delivery-label">How we work</div>
          <div className="vl-delivery-steps">
            {deliveryPath.map((step) => (
              <div className="vl-step" key={step.title}>
                <div className="vl-step-icon"><step.icon size={23} strokeWidth={1.7} /></div>
                <div className="vl-step-copy">
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
}
