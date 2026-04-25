import { motion } from "framer-motion";
import { ArrowRight, Network, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Zap, value: "14+", label: "Years Experience" },
  { icon: Network, value: "500+", label: "Projects Delivered" },
  { icon: Shield, value: "99.9%", label: "Uptime Guarantee" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-page"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(251,140,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(251,140,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute top-24 right-0 w-[28rem] h-[28rem] rounded-full bg-brand-500/10 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] rounded-full bg-brand-300/20 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

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
            className="text-lg sm:text-xl text-brand-700 font-semibold tracking-wide mb-4"
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
            <Button variant="gradient" size="xl" asChild className="group">
              <Link to="/contact">
                Get a Quote
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="!font-semibold"
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="grid gap-4 sm:grid-cols-3 p-5 rounded-2xl bg-white/95 border border-brand-200 shadow-[0_20px_42px_rgba(251,140,0,0.14)] backdrop-blur-md"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.36 + i * 0.06 }}
                className="flex items-center gap-3 rounded-xl p-3 bg-brand-50/60 border border-brand-200"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-brand-200">
                  <stat.icon size={18} className="text-brand-700" />
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
    </section>
  );
}
