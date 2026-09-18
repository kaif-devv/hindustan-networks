import { useEffect, useState, type CSSProperties, type PointerEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowRight, Cable, Headphones, ShieldCheck, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import { premiumSpring, subtleSpring } from "@/lib/motion";
import { NetworkA2 } from "./NetworkA2";
import "./concept-a2.css";

const MotionLink = motion.create(Link);
const stages = [
  { icon: Cable, title: "Plan", text: "Site survey, requirements, layout, capacity and security planning." },
  { icon: Wifi, title: "Deploy", text: "Clean installation for networks, Wi-Fi, surveillance and IT systems." },
  { icon: ShieldCheck, title: "Secure", text: "Firewall, access, endpoint and monitoring layers for safer operations." },
  { icon: Headphones, title: "Support", text: "Maintenance, troubleshooting and upgrades after handover." },
];

function useFinePointer() {
  const [finePointer, setFinePointer] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return finePointer;
}

function entrance(reduced: boolean, delay: number, blur = false) {
  return {
    initial: reduced ? false as const : { opacity: 0, y: 16, filter: blur ? "blur(4px)" : "blur(0px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: reduced ? 0 : 0.65, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

function PipelineStage({ index, reduced, interactive }: { index: number; reduced: boolean; interactive: boolean }) {
  const stage = stages[index];
  const pointerX = useMotionValue(40);
  const pointerY = useMotionValue(45);
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const rotateX = useSpring(targetX, premiumSpring);
  const rotateY = useSpring(targetY, premiumSpring);
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${pointerX}px ${pointerY}px, rgba(251,140,0,0.10), transparent 40%)`;

  function reset() { targetX.set(0); targetY.set(0); }
  useEffect(() => { if (!interactive) reset(); }, [interactive]);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (!interactive || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = event.clientX - bounds.left;
    const py = event.clientY - bounds.top;
    pointerX.set(px);
    pointerY.set(py);
    targetX.set(Math.max(-1, Math.min(1, -(py / bounds.height - 0.5) * 2)));
    targetY.set(Math.max(-1.5, Math.min(1.5, (px / bounds.width - 0.5) * 3)));
  }

  return (
    <motion.div className="a2-stage" {...entrance(reduced, 0.35 + index * 0.15)}
      style={{ "--stage-delay": `${1.1 + index * 1.65}s`, "--handoff-delay": `${2.15 + index * 1.65}s` } as CSSProperties}>
      <motion.div className="vl-step a2-stage-card" onPointerMove={move} onPointerLeave={reset}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        whileHover={interactive ? { y: -2, transition: premiumSpring } : undefined}>
        <div className="a2-stage-activation" aria-hidden="true" />
        <motion.div className="a2-card-spotlight" style={{ background: spotlight }} aria-hidden="true" />
        <div className="vl-step-icon"><stage.icon size={23} strokeWidth={1.7} /><span className="a2-icon-pulse" aria-hidden="true" /></div>
        <div className="vl-step-copy"><div className="vl-step-title"><span>{String(index + 1).padStart(2, "0")}</span><h2>{stage.title}</h2></div><p>{stage.text}</p></div>
        <div className="a2-stage-ticks" aria-hidden="true"><i /><i /><i /></div>
      </motion.div>
      {index < 3 && <div className="a2-handoff" aria-hidden="true"><span /><i /></div>}
    </motion.div>
  );
}

export function HeroConceptA2() {
  const reduced = useReducedMotion() !== false;
  const finePointer = useFinePointer();
  const interactive = finePointer && !reduced;
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const x = useSpring(targetX, subtleSpring);
  const y = useSpring(targetY, subtleSpring);
  const pointerX = useMotionValue(900);
  const pointerY = useMotionValue(270);
  const light = useMotionTemplate`radial-gradient(440px circle at ${pointerX}px ${pointerY}px, rgba(250,173,87,.13), transparent 75%)`;

  useEffect(() => {
    if (!interactive) { targetX.set(0); targetY.set(0); }
  }, [interactive, targetX, targetY]);

  function move(event: PointerEvent<HTMLElement>) {
    if (!interactive || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = event.clientX - bounds.left;
    const py = event.clientY - bounds.top;
    targetX.set(Math.max(-8, Math.min(8, (px / bounds.width - 0.5) * 16)));
    targetY.set(Math.max(-6, Math.min(6, (py / bounds.height - 0.5) * 12)));
    pointerX.set(px);
    pointerY.set(py);
  }

  return (
    <section className="vl-hero vl-a vl-a2" aria-label="Hero concept A version 2"
      onPointerMove={move} onPointerLeave={() => { targetX.set(0); targetY.set(0); }}>
      <div className="a2-lighting" aria-hidden="true" />
      <NetworkA2 x={x} y={y} reduced={reduced} />
      <motion.div className="vl-pointer-light" style={{ background: light }} aria-hidden="true" />
      <div className="vl-composition">
        <div className="vl-copy">
          <motion.div className="vl-badge" {...entrance(reduced, 0.15)}><span />Trusted Network Infrastructure Partner</motion.div>
          <h1 className="vl-title">
            <motion.span {...entrance(reduced, 0.2, true)}>Hindustan</motion.span>
            <motion.span className="vl-title-accent" {...entrance(reduced, 0.28, true)}>Networks</motion.span>
          </h1>
          <motion.p className="vl-subtitle" {...entrance(reduced, 0.35)}>Comprehensive Network &amp; Communication Solutions</motion.p>
          <motion.p className="vl-body" {...entrance(reduced, 0.4)}>
            We design, install, secure, and maintain dependable technology infrastructure for offices, factories, campuses, retail spaces, healthcare facilities, and growing enterprises.
          </motion.p>
          <motion.div className="vl-actions" {...entrance(reduced, 0.45)}>
            <MotionLink className="vl-button vl-primary" to="/services"
              whileHover={interactive ? { y: -2 } : undefined} whileTap={!reduced ? { scale: 0.98 } : undefined} transition={premiumSpring}>
              Explore Services<ArrowRight size={18} />
            </MotionLink>
            <MotionLink className="vl-button vl-secondary" to="/contact"
              whileHover={interactive ? { y: -1 } : undefined} whileTap={!reduced ? { scale: 0.98 } : undefined} transition={subtleSpring}>
              Contact Us<ArrowRight size={17} />
            </MotionLink>
          </motion.div>
          <motion.div className="vl-copy-rule" {...entrance(reduced, 0.6)} aria-hidden="true"><span /><i /><span /></motion.div>
        </div>
        <div className="vl-delivery">
          <motion.div className="vl-delivery-label" {...entrance(reduced, 0.25)}><span>Plan / Deploy / Secure / Support</span><i /></motion.div>
          <div className="vl-delivery-steps">
            <div className="a2-pipeline-spine" aria-hidden="true" />
            {stages.map((stage, index) => <PipelineStage key={stage.title} index={index} reduced={reduced} interactive={interactive} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
