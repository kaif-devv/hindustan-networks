import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Cable,
  CheckCircle2,
  CloudCog,
  Network,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutStats, aboutValues, aboutHighlights } from "@/data/aboutData";

const networkNodes = [
  { icon: Network, label: "LAN", className: "left-[12%] top-[20%]" },
  { icon: Wifi, label: "WiFi", className: "right-[14%] top-[16%]" },
  { icon: ShieldCheck, label: "Security", className: "left-[20%] bottom-[18%]" },
  { icon: CloudCog, label: "Cloud", className: "right-[18%] bottom-[21%]" },
  { icon: Cable, label: "Fiber", className: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" },
];

function StatCard({
  icon: Icon,
  value,
  label,
  desc,
  index,
}: (typeof aboutStats)[0] & { index: number }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.42, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-brand-100/80 bg-white/80 p-5 shadow-[0_16px_38px_rgba(180,83,9,0.08)] backdrop-blur"
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-200/30 blur-2xl transition-opacity group-hover:opacity-80" />
      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
          <Icon size={22} />
        </div>
        <div>
          <div className="text-3xl font-semibold text-heading">{value}</div>
          <div className="mt-1 text-sm font-semibold text-brand-700">
            {label}
          </div>
          <div className="mt-2 text-xs leading-relaxed text-muted">{desc}</div>
        </div>
      </div>
    </motion.div>
  );
}

function InfrastructureVisual({ active }: { active: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 36 }}
      animate={active ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.12 }}
      className="relative min-h-[470px] overflow-hidden rounded-[2rem] border border-brand-100/80 bg-white/60 p-6 shadow-[0_30px_80px_rgba(180,83,9,0.12)] backdrop-blur"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,209,102,0.35),transparent_38%)]" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 560 470"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="about-network-line about-network-line-slow"
          d="M86 112 C178 74 245 204 280 232 C330 274 412 111 480 102"
        />
        <path
          className="about-network-line"
          d="M112 374 C162 276 236 322 280 232 C338 152 404 292 456 354"
        />
        <path
          className="about-network-line about-network-line-reverse"
          d="M86 112 C134 244 146 324 112 374 M480 102 C426 224 428 294 456 354"
        />
      </svg>

      <div className="relative h-[330px]">
        {networkNodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, scale: 0.82 }}
              animate={active ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.38, delay: 0.28 + index * 0.08 }}
              className={`absolute ${node.className}`}
            >
              <div className="about-node flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-3xl border border-brand-100 bg-white/90 text-heading shadow-[0_18px_42px_rgba(180,83,9,0.12)]">
                <Icon size={24} className="text-brand-700" />
                <span className="text-xs font-semibold">{node.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative grid grid-cols-2 gap-3">
        {aboutHighlights.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.55 + index * 0.06 }}
            className="rounded-2xl border border-brand-100 bg-white/75 p-4 text-center shadow-sm"
          >
            <div className="text-3xl font-semibold gradient-text">
              {item.value}
            </div>
            <div className="mt-1 text-xs font-semibold text-muted">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-page pb-20 pt-8 lg:pb-24 lg:pt-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[460px] w-[min(92vw,980px)] -translate-x-1/2 rounded-full border border-brand-100/70" />
        <div className="absolute -left-24 bottom-16 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Us"
          title="Building Digital"
          highlight="Infrastructure"
          subtitle="Hindustan Networks is a provider of end-to-end network and communication infrastructure solutions for businesses, institutions, and public sector teams."
        />

        <div className="mb-16 grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -34 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.62 }}
          >
           
            <h3 className="max-w-2xl text-3xl font-semibold leading-tight text-heading sm:text-4xl">
              From planning to uptime, we build the systems behind{" "}
              <span className="gradient-text">reliable operations.</span>
            </h3>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-body">
              Hindustan Networks delivers practical infrastructure across
              structured cabling, fiber optics, enterprise WiFi, surveillance,
              access control, cybersecurity, cloud and managed support. Our work
              is designed for teams that need their sites to stay connected,
              secure and ready to scale.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {aboutValues.map((value, index) => (
                <motion.div
                  key={value.text}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.34, delay: 0.18 + index * 0.07 }}
                  className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-white/70 p-4 shadow-[0_12px_28px_rgba(180,83,9,0.06)] backdrop-blur"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <value.icon size={17} />
                  </div>
                  <span className="text-sm font-medium leading-snug text-body">
                    {value.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <InfrastructureVisual active={inView} />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
