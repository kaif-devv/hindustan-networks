import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  GraduationCap,
  Hospital,
  ShoppingBag,
  Home,
  Landmark,
  Factory,
  Warehouse,
  ShieldCheck,
  Pill,
  Store,
  Hotel,
  School,
  Truck,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing & Industrial Sites",
    desc: "Plant networks, CCTV coverage, fiber backbones, access control and support for production floors.",
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: Building2,
    title: "Corporate Offices",
    desc: "High-speed LAN, WiFi, CCTV, access control and AV collaboration for growing workspaces.",
    color: "from-brand-600 to-brand-400",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    desc: "Campus fiber, smart classrooms, WiFi, e-learning infrastructure and digital security.",
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: Hospital,
    title: "Hospitals & Healthcare",
    desc: "Reliable medical-grade networks, IP telephony, surveillance and biometric access.",
    color: "from-brand-500 to-brand-300",
  },
  {
    icon: Pill,
    title: "Pharma & Medical Stores",
    desc: "Secure billing counters, inventory systems, CCTV, WiFi and backup-ready network layouts.",
    color: "from-brand-600 to-brand-400",
  },
  {
    icon: Store,
    title: "Retail Stores & Showrooms",
    desc: "POS connectivity, customer WiFi, CCTV, access control and stable back-office networks.",
    color: "from-brand-500 to-brand-300",
  },
  {
    icon: ShoppingBag,
    title: "Shopping & Commercial Spaces",
    desc: "Multi-tenant WiFi, common-area CCTV, managed switching and centralized monitoring.",
    color: "from-brand-700 to-brand-400",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    desc: "Guest WiFi, reception systems, IP cameras, intercom, POS and meeting-room connectivity.",
    color: "from-brand-600 to-brand-300",
  },
  {
    icon: School,
    title: "Schools & Campus Networks",
    desc: "Classroom connectivity, labs, CCTV, announcements, admin blocks and campus-wide WiFi.",
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: Warehouse,
    title: "Warehouses & Logistics",
    desc: "Coverage for large facilities, inventory zones, gates, loading areas and operations teams.",
    color: "from-brand-600 to-brand-300",
  },
  {
    icon: Truck,
    title: "Transport & Fleet Operations",
    desc: "Yard surveillance, office connectivity, tracking support and secure network access.",
    color: "from-brand-500 to-brand-200",
  },
  {
    icon: Home,
    title: "Residential Projects",
    desc: "Smart home automation, fiber internet, intercom and apartment surveillance systems.",
    color: "from-brand-500 to-brand-200",
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    desc: "Secure government networks, fiber projects, video conferencing and IT infrastructure.",
    color: "from-brand-700 to-brand-500",
  },
  {
    icon: ShieldCheck,
    title: "Security-Sensitive Facilities",
    desc: "Layered surveillance, controlled access, firewalls and monitoring for restricted environments.",
    color: "from-brand-800 to-brand-500",
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
          <industry.icon size={28} className="text-surface-700" />
        </div>
        <h3 className="text-lg font-bold text-heading">{industry.title}</h3>
        <p className="text-sm text-body leading-relaxed">{industry.desc}</p>
      </div>
    </motion.div>
  );
}

export function Industries() {
  return (
    <section id="industries" className="pt-8 pb-20 lg:pt-10 lg:pb-24 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Sectors"
          title="Experience Across"
          highlight="Many Environments"
          subtitle="These sectors show where our team has delivered, not where our work ends. We adapt network, security, and communication systems for any organization that needs reliable infrastructure."
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
