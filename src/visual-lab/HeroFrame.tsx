import { useId, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowRight, Cable, Headphones, ShieldCheck, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import { premiumSpring, subtleSpring } from "@/lib/motion";
import type { Concept } from "./VisualLab";

// Kept inside the temporary lab so the production hero is never restyled.
const deliveryPath = [
  { icon: Cable, title: "Plan", text: "Site survey, requirements, layout, capacity and security planning." },
  { icon: Wifi, title: "Deploy", text: "Clean installation for networks, Wi-Fi, surveillance and IT systems." },
  { icon: ShieldCheck, title: "Secure", text: "Firewall, access, endpoint and monitoring layers for safer operations." },
  { icon: Headphones, title: "Support", text: "Maintenance, troubleshooting and upgrades after handover." },
];

export function HeroFrame({ concept, background }: { concept: Concept; background: ReactNode }) {
  const reduceMotion = useReducedMotion() !== false;
  const pointerX = useMotionValue(650);
  const pointerY = useMotionValue(260);
  const layerX = useMotionValue(0);
  const layerY = useMotionValue(0);
  const x = useSpring(layerX, subtleSpring);
  const y = useSpring(layerY, subtleSpring);
  const spotlight = useMotionTemplate`radial-gradient(440px circle at ${pointerX}px ${pointerY}px, rgba(255, 183, 86, 0.19), transparent 75%)`;

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = event.clientX - bounds.left;
    const py = event.clientY - bounds.top;
    pointerX.set(px);
    pointerY.set(py);
    const strength = concept === "c" ? 18 : concept === "a" ? 10 : 6;
    layerX.set((px / bounds.width - 0.5) * strength);
    layerY.set((py / bounds.height - 0.5) * strength);
  }

  const entrance = (delay: number) => ({
    initial: reduceMotion ? false as const : { opacity: 0, y: concept === "c" ? 30 : 18, filter: concept === "b" ? "blur(5px)" : "blur(0px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: reduceMotion ? { duration: 0 } : { duration: concept === "b" ? 0.7 : 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className={`vl-hero vl-${concept}`} aria-label={`Hero concept ${concept.toUpperCase()}`}
      onPointerMove={onPointerMove} onPointerLeave={() => { layerX.set(0); layerY.set(0); }}>
      <motion.div className="vl-background" style={{ x, y }} aria-hidden="true">{background}</motion.div>
      <motion.div className="vl-pointer-light" style={{ background: spotlight }} aria-hidden="true" />
      <div className="vl-composition">
        <div className="vl-copy">
          <motion.div className="vl-badge" {...entrance(0.02)}><span />Trusted Network Infrastructure Partner</motion.div>
          <h1 className="vl-title">
            <motion.span {...entrance(0.1)}>Hindustan</motion.span>
            <motion.span className="vl-title-accent" {...entrance(0.19)}>Networks</motion.span>
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
          <div className="vl-delivery-label"><span>Plan / Deploy / Secure / Support</span><i /></div>
          <div className="vl-delivery-steps">
            <div className="vl-pathway" aria-hidden="true"><span /></div>
            {deliveryPath.map((step, index) => (
              <motion.div className="vl-step" key={step.title}
                style={{ "--step": index } as CSSProperties}
                {...entrance(0.3 + index * (concept === "b" ? 0.11 : 0.08))}
                whileHover={reduceMotion ? undefined : { y: concept === "c" ? -5 : -3, transition: premiumSpring }}>
                <div className="vl-step-icon"><step.icon size={23} strokeWidth={1.7} /></div>
                <div className="vl-step-copy"><div className="vl-step-title"><span>{String(index + 1).padStart(2, "0")}</span><h2>{step.title}</h2></div><p>{step.text}</p></div>
                <ArrowRight className="vl-step-arrow" size={17} aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const topologyNodes = [[620, 95], [800, 70], [1010, 110], [1200, 45], [720, 230], [925, 250], [1140, 250], [1320, 180], [615, 425], [850, 410], [1090, 450], [1280, 430], [710, 590], [970, 610], [1200, 610]];
const topologyPaths = [
  "M620 95H800L925 250H1140L1200 45", "M1010 110L1140 250L1320 180",
  "M620 95L720 230L615 425L710 590H970L1090 450H1280",
  "M720 230L925 250L850 410L970 610H1200L1280 430L1140 250",
  "M615 425L850 410L1090 450L1140 250", "M800 70L1010 110L925 250",
];

export function NetworkTopology() {
  const reduceMotion = useReducedMotion() !== false;
  return (
    <svg className="vl-topology" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {topologyPaths.map((path, index) => <g key={path}>
        <path d={path} className="vl-network-line" />
        {!reduceMotion && <circle r="3.5" className="vl-packet"><animateMotion path={path} dur={`${7 + index * 0.7}s`} begin={`${-index * 1.8}s`} repeatCount="indefinite" /></circle>}
      </g>)}
      {topologyNodes.map(([cx, cy], index) => <g key={`${cx}-${cy}`}>
        <circle cx={cx} cy={cy} r="11" className="vl-node-halo" style={{ animationDelay: `${-index * 0.43}s`, transformOrigin: `${cx}px ${cy}px` }} />
        <circle cx={cx} cy={cy} r="3.5" className="vl-node" />
      </g>)}
    </svg>
  );
}

export function SignalStreams() {
  const reduceMotion = useReducedMotion() !== false;
  const gradientId = useId().replace(/:/g, "");
  return (
    <>
      <div className="vl-energy-light" />
      <svg className="vl-streams" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs><linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0"><stop stopColor="#fb8c00" stopOpacity="0" /><stop offset="0.5" stopColor="#fb8c00" stopOpacity="0.7" /><stop offset="1" stopColor="#ffd9a0" stopOpacity="0.2" /></linearGradient></defs>
        {Array.from({ length: 9 }, (_, index) => {
          const path = `M${200 + index * 37} 760 C${710 + index * 12} ${630 - index * 13}, ${510 + index * 20} ${100 + index * 15}, ${1540} ${20 + index * 60}`;
          return <g key={index}>
            <path d={path} stroke={`url(#${gradientId})`} className="vl-stream-track" />
            <path d={path} pathLength="100" className="vl-stream-signal" style={{ animationDelay: `${-index * 0.8}s`, animationDuration: `${7 + index * 0.3}s` }} />
            {!reduceMotion && index % 2 === 0 && <circle r="3" className="vl-stream-packet"><animateMotion path={path} dur={`${7 + index * 0.3}s`} begin={`${-index * 0.8}s`} repeatCount="indefinite" /></circle>}
          </g>;
        })}
        <circle cx="1060" cy="305" r="246" className="vl-orbit" />
        <circle cx="1060" cy="305" r="290" className="vl-orbit vl-orbit-outer" />
      </svg>
    </>
  );
}
