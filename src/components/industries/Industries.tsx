import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  GraduationCap,
  Hospital,
  ShoppingBag,
  Home,
  Landmark,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const industries = [
  {
    icon: Building2,
    title: "Corporate Offices",
    desc: "High-speed LAN, WiFi, CCTV, access control and AV conferencing for modern workspaces.",
    color: "from-brand-600 to-brand-400",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    desc: "Campus-wide fiber, smart classrooms, e-learning infrastructure and digital security.",
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: Hospital,
    title: "Hospitals & Healthcare",
    desc: "Reliable medical-grade networks, IP telephony, surveillance and biometric access.",
    color: "from-brand-500 to-sky-400",
  },
  {
    icon: ShoppingBag,
    title: "Hospitality & Retail",
    desc: "Seamless guest WiFi, POS connectivity, IP CCTV and centralized monitoring systems.",
    color: "from-sky-500 to-brand-400",
  },
  {
    icon: Home,
    title: "Residential Projects",
    desc: "Smart home automation, fiber internet, intercom and apartment surveillance systems.",
    color: "from-brand-500 to-sky-300",
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    desc: "Secure government networks, fiber projects, video conferencing and IT infrastructure.",
    color: "from-brand-700 to-sky-500",
  },
];

function IndustryCard({
  industry,
  index,
}: {
  industry: (typeof industries)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="card group hover:border-brand-300 hover:shadow-sm transition-all duration-200"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div
          className={cn(
            "flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br shadow-sm group-hover:shadow-md transition-shadow",
            industry.color,
          )}
        >
          <industry.icon size={28} className="text-white" />
        </div>
        <h3 className="text-lg font-bold text-heading">{industry.title}</h3>
        <p className="text-sm text-body leading-relaxed">{industry.desc}</p>
      </div>
    </motion.div>
  );
}

export function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Industries"
          title="Industries We"
          highlight="Serve"
          subtitle="Delivering specialized network solutions across diverse sectors with deep domain expertise."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.title} industry={industry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
