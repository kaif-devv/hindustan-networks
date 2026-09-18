import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { clients } from "@/data/clients";
import { createPortal } from "react-dom";
import { NetworkAmbientBackground, SignalPath } from "@/components/effects/NetworkAmbientBackground";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { useMotionPreferences } from "@/lib/MotionPreferences";
import { sectionMotion } from "@/lib/motion";
import { useDialog } from "@/lib/useDialog";
import {
  Building2,
  LayoutGrid,
  Network,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const trustNotes = [
  { value: "100+", label: "clients served" },
  { value: "24/7", label: "support mindset" },
  { value: "20+", label: "industry verticals" },
];

const serviceSignals = [
  {
    icon: ShieldCheck,
    title: "Secure sites",
    copy: "Connectivity and surveillance planned for real operating floors.",
  },
  {
    icon: Network,
    title: "Connected teams",
    copy: "LAN, fiber, WiFi, server, and support work kept under one roof.",
  },
  {
    icon: Zap,
    title: "Fast response",
    copy: "Local execution for projects that cannot wait on slow handoffs.",
  },
];

const clientRows = [
  clients.filter((_, index) => index % 3 === 0),
  clients.filter((_, index) => index % 3 === 1),
  clients.filter((_, index) => index % 3 === 2),
];

const laneMotion = [
  { direction: -1, speed: 0.026 },
  { direction: 1, speed: 0.008 },
  { direction: 1, speed: 0.026 },
];

function logoSrc(path: string) {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;
}

function LogoMark({
  client,
  className = "",
}: {
  client: (typeof clients)[0];
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden ${className}`}
    >
      <img
        src={logoSrc(client.img)}
        alt={client.name}
        className="max-h-full max-w-full object-contain"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = "none";
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div className="hidden h-full w-full items-center justify-center rounded-full bg-brand-50">
        <Building2 size={22} className="text-brand-500" />
      </div>
    </div>
  );
}

function NetworkField() {
  const { ref, inView } = useInView({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="network-surface client-network-visual relative mx-auto mt-10 h-44 max-w-4xl overflow-hidden rounded-[2rem] border border-brand-100/80 bg-white/45 shadow-[0_22px_60px_rgba(180,83,9,0.09)] backdrop-blur"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 900 220"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          className="client-network-line client-network-line-slow"
          d="M40 150 C160 28 260 188 385 82 S610 34 850 148"
        />
        <path
          className="client-network-line"
          d="M60 70 C205 178 310 42 458 122 S690 196 835 58"
        />
        <path
          className="client-network-line client-network-line-reverse"
          d="M90 112 C245 88 302 166 430 112 S650 36 800 118"
        />
        {inView && <>
          <SignalPath path="M40 150 C160 28 260 188 385 82 S610 34 850 148" duration={3.4} cycle={13} />
          <SignalPath path="M60 70 C205 178 310 42 458 122 S690 196 835 58" delay={5} duration={3.2} cycle={13} />
        </>}
      </svg>

      <div className="absolute left-[9%] top-[58%] h-3 w-3 rounded-full bg-brand-500 shadow-[0_0_0_8px_rgba(251,140,0,0.12)]" />
      <div className="absolute left-[29%] top-[27%] h-4 w-4 rounded-full bg-brand-300 shadow-[0_0_0_10px_rgba(255,209,102,0.2)]" />
      <div className="absolute left-[48%] top-[52%] h-5 w-5 rounded-full bg-white ring-4 ring-brand-300/50" />
      <div className="absolute left-[68%] top-[30%] h-3 w-3 rounded-full bg-brand-600 shadow-[0_0_0_8px_rgba(251,140,0,0.12)]" />
      <div className="absolute left-[86%] top-[61%] h-4 w-4 rounded-full bg-brand-300 shadow-[0_0_0_10px_rgba(255,209,102,0.2)]" />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/80 to-transparent px-6 py-5">
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-heading">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 ring-1 ring-brand-100">
            <ShieldCheck size={16} className="text-brand-600" />
            Secure
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 ring-1 ring-brand-100">
            <Network size={16} className="text-brand-600" />
            Connected
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 ring-1 ring-brand-100">
            <Zap size={16} className="text-brand-600" />
            Responsive
          </span>
        </div>
      </div>
    </div>
  );
}

function ClientPill({ client, index }: { client: (typeof clients)[0]; index: number }) {
  const { reduced } = useMotionPreferences();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : Math.min(index * 0.012, 0.2) }}
      title={client.name}
      className="network-surface client-logo-card group relative flex h-[96px] w-[270px] shrink-0 items-center gap-4 overflow-hidden rounded-[1.35rem] border border-brand-100/80 bg-white/80 px-4 py-4 shadow-[0_12px_28px_rgba(180,83,9,0.06)] backdrop-blur hover:border-brand-300 hover:bg-white hover:shadow-[0_18px_36px_rgba(180,83,9,0.11)] sm:w-[310px]"
    >
      <div className="absolute inset-y-4 left-0 w-1 rounded-r-full bg-gradient-to-b from-brand-300 to-brand-600 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex h-14 w-24 shrink-0 items-center justify-center rounded-2xl bg-white px-3 shadow-inner ring-1 ring-brand-100/70">
        <LogoMark client={client} className="h-10 w-full" />
      </div>
      <p className="line-clamp-2 min-w-0 text-sm font-semibold leading-snug text-heading">
        {client.name}
      </p>
    </motion.div>
  );
}

function ClientCard({ client, index }: { client: (typeof clients)[0]; index: number }) {
  const { reduced } = useMotionPreferences();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.35, delay: reduced ? 0 : Math.min(index * 0.015, 0.25) }}
      title={client.name}
      className="network-surface client-logo-card group flex min-h-[132px] flex-col items-center justify-center gap-4 rounded-2xl border border-brand-100 bg-white p-5 text-center shadow-[0_12px_30px_rgba(180,83,9,0.07)] hover:border-brand-300 hover:shadow-[0_18px_40px_rgba(180,83,9,0.12)]"
    >
      <LogoMark client={client} className="h-14 w-full" />
      <p className="line-clamp-2 text-xs font-semibold leading-snug text-heading">
        {client.name}
      </p>
    </motion.div>
  );
}

function ClientsModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { reduced } = useMotionPreferences();
  useDialog(dialogRef, onClose);
  return createPortal(
    <div
      className="network-page fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="clients-dialog-title" tabIndex={-1}
        initial={reduced ? false : { opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: reduced ? 0 : 8 }}
        transition={{ duration: reduced ? 0 : 0.25 }}
        className="flex max-h-[86vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-brand-100 bg-page shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-brand-100 px-5 py-4 sm:px-7">
          <div>
            <h3 id="clients-dialog-title" className="text-xl font-semibold text-heading">
              All Clients
            </h3>
            <p className="mt-1 text-sm text-muted">
              {clients.length} trusted partners
            </p>
          </div>
          <button
            type="button"
            aria-label="Close clients popup"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-100 bg-white text-muted hover:border-brand-300 hover:text-heading"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-4 overflow-y-auto p-5 sm:grid-cols-2 sm:p-7 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, index) => (
            <ClientCard key={client.name} client={client} index={index} />
          ))}
        </div>
      </motion.div>
    </div>, document.body
  );
}

function DraggableClientLane({
  row,
  rowIndex,
}: {
  row: typeof clients;
  rowIndex: number;
}) {
  const { reduced, compact } = useMotionPreferences();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const pointerRef = useRef({
    active: false,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    resumeAt: 0,
  });
  const frameRef = useRef<number | null>(null);
  const glideFrameRef = useRef<number | null>(null);
  const repeatedRow = [...row, ...row, ...row];

  const wrapScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const segment = scroller.scrollWidth / 3;
    if (!segment) return;

    if (scroller.scrollLeft < segment * 0.45) {
      scroller.scrollLeft += segment;
    } else if (scroller.scrollLeft > segment * 1.55) {
      scroller.scrollLeft -= segment;
    }
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const segment = scroller.scrollWidth / 3;
    scroller.scrollLeft = segment;
    if (reduced || compact) return;

    let previousTime = performance.now();
    const { direction, speed } = laneMotion[rowIndex] ?? laneMotion[0];

    const tick = (time: number) => {
      const delta = Math.min(time - previousTime, 40);
      previousTime = time;

      if (!document.hidden && !pausedRef.current && !pointerRef.current.active && time > pointerRef.current.resumeAt) {
        scroller.scrollLeft += direction * speed * delta;
        wrapScroll();
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [rowIndex, reduced, compact]);

  useEffect(() => () => { if (glideFrameRef.current !== null) cancelAnimationFrame(glideFrameRef.current); }, [reduced, compact]);

  const glide = () => {
    const scroller = scrollerRef.current;
    if (!scroller || pointerRef.current.active || reduced) return;

    pointerRef.current.velocity *= 0.94;
    scroller.scrollLeft -= pointerRef.current.velocity * 16;
    wrapScroll();

    if (Math.abs(pointerRef.current.velocity) > 0.03) {
      glideFrameRef.current = requestAnimationFrame(glide);
    } else {
      pointerRef.current.resumeAt = performance.now() + 450;
    }
  };

  return (
    <div className="client-lane-mask overflow-hidden py-1">
      <div
        ref={scrollerRef}
        tabIndex={0} aria-label={`Client logos, row ${rowIndex + 1}`}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onFocus={() => { pausedRef.current = true; }}
        onBlur={() => { pausedRef.current = false; }}
        className="client-circular-lane flex cursor-grab gap-4 overflow-x-scroll active:cursor-grabbing"
        onScroll={wrapScroll}
        onPointerDown={(event) => {
          const scroller = scrollerRef.current;
          if (!scroller) return;
          if (glideFrameRef.current !== null) cancelAnimationFrame(glideFrameRef.current);

          pointerRef.current.active = true;
          pointerRef.current.lastX = event.clientX;
          pointerRef.current.lastTime = performance.now();
          pointerRef.current.velocity = 0;
          pointerRef.current.resumeAt = Number.POSITIVE_INFINITY;
          scroller.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!pointerRef.current.active) return;

          const scroller = scrollerRef.current;
          if (!scroller) return;

          const now = performance.now();
          const deltaX = event.clientX - pointerRef.current.lastX;
          const deltaTime = Math.max(now - pointerRef.current.lastTime, 16);

          scroller.scrollLeft -= deltaX;
          pointerRef.current.velocity = deltaX / deltaTime;
          pointerRef.current.lastX = event.clientX;
          pointerRef.current.lastTime = now;
          wrapScroll();
        }}
        onPointerUp={(event) => {
          const scroller = scrollerRef.current;
          if (scroller?.hasPointerCapture(event.pointerId)) {
            scroller.releasePointerCapture(event.pointerId);
          }

          pointerRef.current.active = false;
          pointerRef.current.resumeAt = performance.now() + 900;
          if (!reduced) glideFrameRef.current = requestAnimationFrame(glide);
        }}
        onPointerCancel={() => {
          pointerRef.current.active = false;
          pointerRef.current.resumeAt = performance.now() + 450;
        }}
      >
        {repeatedRow.map((client, index) => (
            <ClientPill
              key={`${client.name}-${index}`}
              client={client}
              index={rowIndex * 18 + index}
            />
        ))}
      </div>
    </div>
  );
}

export function Clients() {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });
  const [showAllClients, setShowAllClients] = useState(false);
  const { reduced } = useMotionPreferences();
  const headingMotion = sectionMotion(reduced);

  return (
    <section
      id="clients"
      className="network-page relative overflow-hidden bg-page-alt pb-20 pt-8 lg:pb-24 lg:pt-10"
    >
      <div className="page-ambient-wash pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-8 h-[420px] w-[min(88vw,980px)] -translate-x-1/2 rounded-full border border-brand-200/50" />
        <div className="absolute left-1/2 top-20 h-[300px] w-[min(76vw,760px)] -translate-x-1/2 rounded-full border border-brand-100/70" />
        <div className="absolute inset-x-0 top-64 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={headingMotion.container} initial="hidden" animate={inView || reduced ? "visible" : "hidden"}
          className="section-heading mx-auto max-w-5xl text-center"
        >
          <NetworkAmbientBackground />
          <motion.div variants={headingMotion.item} className="badge mx-auto mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Our Clients
          </motion.div>
          <motion.h1 variants={headingMotion.item} className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-heading sm:text-5xl lg:text-6xl">
            A trusted network of{" "}
            <span className="gradient-text">long-term partners</span>
          </motion.h1>
          <motion.p variants={headingMotion.item} className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-body lg:text-lg">
            Organizations across public sector, manufacturing, healthcare,
            education, energy, and infrastructure rely on Hindustan Networks for
            dependable connectivity and site technology delivery.
          </motion.p>

          <NetworkField />

          <div className="network-surface client-stats mx-auto mt-8 grid max-w-3xl grid-cols-3 overflow-hidden rounded-2xl border border-brand-100 bg-white/70 text-left shadow-[0_18px_44px_rgba(180,83,9,0.08)]">
            {trustNotes.map((item) => (
              <div
                key={item.label}
                className="border-r border-brand-100 px-4 py-5 text-center last:border-r-0"
              >
                <div className="text-2xl font-semibold text-heading">
                  <AnimatedStat value={item.value} />
                </div>
                <div className="mt-1 text-xs font-medium uppercase text-muted">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {serviceSignals.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : index * 0.06 }}
                className="network-surface rounded-2xl border border-brand-100/80 bg-white/70 p-5 shadow-[0_12px_32px_rgba(180,83,9,0.07)] backdrop-blur"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Icon size={20} />
                </div>
                <h2 className="text-base font-semibold text-heading">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {item.copy}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="network-surface mt-16 overflow-hidden rounded-[2rem] border border-brand-100/80 bg-white/45 p-4 shadow-[0_26px_70px_rgba(180,83,9,0.1)] backdrop-blur sm:p-6 lg:p-8">
          <div className="flex flex-col gap-5 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <button
                type="button"
                onClick={() => setShowAllClients(true)}
                className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase text-brand-700 ring-1 ring-brand-100 hover:bg-brand-50 hover:ring-brand-300"
              >
                <Sparkles size={14} />
                Our clients
                <LayoutGrid size={14} />
              </button>
              <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
                A broad base of partners
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-body">
              From regional institutions to national enterprises, these
              relationships reflect the range of environments we help connect.
            </p>
          </div>

          <div className="space-y-4">
            {clientRows.map((row, rowIndex) => (
              <DraggableClientLane
                key={rowIndex}
                row={row}
                rowIndex={rowIndex}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showAllClients && (
          <ClientsModal onClose={() => setShowAllClients(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
