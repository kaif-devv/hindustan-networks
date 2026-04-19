import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Network, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Zap, value: "14+", label: "Years Experience" },
  { icon: Network, value: "500+", label: "Projects Delivered" },
  { icon: Shield, value: "99.9%", label: "Uptime Guarantee" },
];

export function Hero() {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  };
  const scrollToServices = () => scrollTo("#services");
  const scrollToContact = () => scrollTo("#contact");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-page"
    >
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.08) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute top-24 right-0 w-[28rem] h-[28rem] rounded-full bg-brand-100/70 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none dark:bg-brand-500/10" />
      <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] rounded-full bg-sky-100/80 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none dark:bg-sky-500/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="badge mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block mr-2" />
            Trusted Network Infrastructure Partner
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-semibold text-heading tracking-tight leading-none text-balance mb-5"
          >
            Hindustan <span className="gradient-text">Networks</span>
            <br />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-lg sm:text-xl text-brand-600 dark:text-brand-300 font-semibold tracking-wide mb-4"
          >
            Comprehensive Network &amp; Communication Solutions
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="max-w-2xl text-base sm:text-lg text-body leading-relaxed mb-10"
          >
            Powering enterprises with reliable, secure, and scalable network
            infrastructure across India for over a decade.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              variant="gradient"
              size="xl"
              onClick={scrollToContact}
              className="group"
            >
              Get a Quote
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={scrollToServices}
              className="!font-semibold"
            >
              Our Services
            </Button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="grid gap-4 sm:grid-cols-3 p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-card shadow-sm"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.36 + i * 0.06 }}
                className="flex items-center gap-3 rounded-xl p-3 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20">
                  <stat.icon
                    size={18}
                    className="text-brand-600 dark:text-brand-300"
                  />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — fades out once user scrolls */}
      <AnimatePresence>
        {!scrolledPast && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.4 }}
            animate={{ y: [0, 6, 0] }}
            style={{
              animationDuration: "2.4s",
              animationIterationCount: "infinite",
            }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted pointer-events-none"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown size={16} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
