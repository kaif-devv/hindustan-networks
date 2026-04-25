import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Package,
  Users,
  ShieldCheck,
  HeartHandshake,
  Clock,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const strengths = [
  {
    icon: Package,
    title: "End-to-End Turnkey Solutions",
    desc: "From consultation to commissioning, we handle every aspect of your network project under one roof.",
    color: "from-brand-600 to-brand-400",
    delay: 0,
  },
  {
    icon: Users,
    title: "Expert Technical Team",
    desc: "Certified network engineers with deep expertise in the latest technologies and industry standards.",
    color: "from-brand-700 to-brand-500",
    delay: 0.1,
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Rigorous quality control at every stage ensuring deployments meet and exceed international standards.",
    color: "from-brand-700 to-brand-400",
    delay: 0.2,
  },
  {
    icon: HeartHandshake,
    title: "Customer Centric Approach",
    desc: "Tailored solutions designed around your unique business requirements with dedicated support.",
    color: "from-brand-500 to-brand-300",
    delay: 0.3,
  },
  {
    icon: Clock,
    title: "Timely Execution",
    desc: "Proven project management methodology ensuring on-time delivery without compromising quality.",
    color: "from-brand-500 to-brand-200",
    delay: 0.4,
  },
];

export function Strengths() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="strengths" className="py-20 lg:py-28 bg-page-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="Our"
          highlight="Strengths"
          subtitle="What makes Hindustan Networks  the preferred partner for businesses across Telangana and beyond."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: s.delay }}
              whileHover={{ y: -6 }}
              className="card group hover:border-brand-300 hover:shadow-sm transition-all duration-200 relative overflow-hidden flex flex-col"
            >
              <div
                className={cn(
                  "inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br mb-5 shadow-sm group-hover:shadow-md transition-shadow",
                  s.color,
                )}
              >
                <s.icon size={24} className="text-surface-700" />
              </div>
              <h3 className="text-xl font-semibold text-heading mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-body leading-relaxed">{s.desc}</p>
              {/* Faint number watermark */}
              <div className="absolute top-4 right-5 text-6xl font-semibold text-heading/[0.04] select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
