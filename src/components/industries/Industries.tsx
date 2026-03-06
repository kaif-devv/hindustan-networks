import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Building2,
  GraduationCap,
  Hospital,
  ShoppingBag,
  Home,
  Landmark,
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const industries = [
  {
    icon: Building2,
    title: 'Corporate Offices',
    desc: 'High-speed LAN, WiFi, CCTV, access control and AV conferencing for modern workspaces.',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    icon: GraduationCap,
    title: 'Educational Institutions',
    desc: 'Campus-wide fiber, smart classrooms, e-learning infrastructure and digital security.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Hospital,
    title: 'Hospitals & Healthcare',
    desc: 'Reliable medical-grade networks, IP telephony, surveillance and biometric access.',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: ShoppingBag,
    title: 'Hospitality & Retail',
    desc: 'Seamless guest WiFi, POS connectivity, IP CCTV and centralized monitoring systems.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Home,
    title: 'Residential Projects',
    desc: 'Smart home automation, fiber internet, intercom and apartment surveillance systems.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Landmark,
    title: 'Government & Public Sector',
    desc: 'Secure government networks, fiber projects, video conferencing and IT infrastructure.',
    color: 'from-slate-500 to-blue-600',
  },
]

function IndustryCard({ industry, index }: { industry: typeof industries[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 overflow-hidden hover:border-white/20 transition-all duration-300"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent" />
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} shadow-lg`}>
          <industry.icon size={28} className="text-white" />
        </div>
        <h3 className="text-lg font-bold text-white">{industry.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed">{industry.desc}</p>
      </div>
    </motion.div>
  )
}

export function Industries() {
  return (
    <section id="industries" className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.07)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
  )
}
