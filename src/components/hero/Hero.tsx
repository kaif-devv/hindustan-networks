import { motion } from "framer-motion";
import {
  ArrowRight,
  Cable,
  Headphones,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const deliveryPath = [
  {
    icon: Cable,
    title: "Plan",
    text: "Site survey, requirements, layout, capacity and security planning.",
  },
  {
    icon: Wifi,
    title: "Deploy",
    text: "Clean installation for networks, Wi-Fi, surveillance and IT systems.",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    text: "Firewall, access, endpoint and monitoring layers for safer operations.",
  },
  {
    icon: Headphones,
    title: "Support",
    text: "Maintenance, troubleshooting and upgrades after handover.",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-page pb-14 pt-0 lg:pb-18"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(251,140,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(251,140,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute right-0 top-6 h-[28rem] w-[28rem] translate-x-1/3 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[22rem] w-[22rem] -translate-x-1/4 translate-y-1/3 rounded-full bg-brand-300/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-start gap-10 pb-10 pt-6 sm:pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-12 lg:pt-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="badge mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Trusted Network Infrastructure Partner
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mb-5 text-5xl font-semibold leading-none tracking-tight text-heading sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              <span className="block">Hindustan</span>
              <span className="gradient-text ml-10 block sm:ml-14 lg:ml-20">
                Networks
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mb-4 text-lg font-semibold tracking-wide text-brand-700 sm:text-xl"
            >
              Comprehensive Network &amp; Communication Solutions
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="mb-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg"
            >
              We design, install, secure, and maintain dependable technology
              infrastructure for offices, factories, campuses, retail spaces,
              healthcare facilities, and growing enterprises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button variant="gradient" size="xl" asChild className="group">
                <Link to="/services">
                  Explore Services
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                asChild
                className="!font-semibold"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="relative hidden h-full lg:flex lg:items-stretch"
          >
            <div className="absolute left-7 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-transparent via-brand-300 to-transparent" />
            <div className="flex w-full flex-col justify-between gap-4 py-2">
              {deliveryPath.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.36, delay: 0.26 + index * 0.07 }}
                  className="relative flex gap-4 rounded-2xl border border-transparent bg-white/45 p-4 backdrop-blur-sm hover:border-brand-200 hover:bg-white/70"
                >
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-200 bg-white text-brand-700 shadow-sm">
                    <step.icon size={23} strokeWidth={2.1} />
                  </div>
                  <div className="pt-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-lg font-semibold text-heading">
                        {step.title}
                      </h2>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-body">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
