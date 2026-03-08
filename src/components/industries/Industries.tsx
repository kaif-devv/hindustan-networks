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
import { cn } from '@/lib/utils'

const industries = [
  {
    icon: Building2,
    title: 'Corporate Offices',
    desc: 'High-speed LAN, WiFi, CCTV, access control and AV conferencing for modern workspaces.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: GraduationCap,
    title: 'Educational Institutions',
    desc: 'Campus-wide fiber, smart classrooms, e-learning infrastructure and digital security.',
    color: 'from-amber-600 to-yellow-500',
  },
  {
    icon: Hospital,
    title: 'Hospitals & Healthcare',
    desc: 'Reliable medical-grade networks, IP telephony, surveillance and biometric access.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: ShoppingBag,
    title: 'Hospitality & Retail',
    desc: 'Seamless guest WiFi, POS connectivity, IP CCTV and centralized monitoring systems.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Home,
    title: 'Residential Projects',
    desc: 'Smart home automation, fiber internet, intercom and apartment surveillance systems.',
    color: 'from-amber-500 to-yellow-400',
  },
  {
    icon: Landmark,
    title: 'Government & Public Sector',
    desc: 'Secure government networks, fiber projects, video conferencing and IT infrastructure.',
    color: 'from-orange-600 to-amber-500',
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
      className="card group hover:border-amber-400/40 hover:shadow-md transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className={cn('flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br shadow-sm group-hover:shadow-md transition-shadow', industry.color)}>
          <industry.icon size={28} className="text-white" />
        </div>
        <h3 className="text-lg font-bold text-heading">{industry.title}</h3>
        <p className="text-sm text-body leading-relaxed">{industry.desc}</p>
      </div>
    </motion.div>
  )
}

export function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-page">
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
  )
}
