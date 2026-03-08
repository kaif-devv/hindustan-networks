import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Package, Users, ShieldCheck, HeartHandshake, Clock } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'

const strengths = [
  {
    icon: Package,
    title: 'End-to-End Turnkey Solutions',
    desc: 'From consultation to commissioning, we handle every aspect of your network project under one roof.',
    color: 'from-amber-500 to-orange-500',
    delay: 0,
  },
  {
    icon: Users,
    title: 'Expert Technical Team',
    desc: 'Certified network engineers with deep expertise in the latest technologies and industry standards.',
    color: 'from-amber-600 to-yellow-500',
    delay: 0.1,
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'Rigorous quality control at every stage ensuring deployments meet and exceed international standards.',
    color: 'from-yellow-500 to-amber-500',
    delay: 0.2,
  },
  {
    icon: HeartHandshake,
    title: 'Customer Centric Approach',
    desc: 'Tailored solutions designed around your unique business requirements with dedicated support.',
    color: 'from-orange-500 to-amber-500',
    delay: 0.3,
  },
  {
    icon: Clock,
    title: 'Timely Execution',
    desc: 'Proven project management methodology ensuring on-time delivery without compromising quality.',
    color: 'from-amber-500 to-yellow-400',
    delay: 0.4,
  },
]

export function Strengths() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="strengths" className="py-24 lg:py-32 bg-page-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="Our"
          highlight="Strengths"
          subtitle="What makes Hindustan Networks LLP the preferred partner for businesses across Telangana and beyond."
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: s.delay }}
              whileHover={{ y: -6 }}
              className="card group hover:border-amber-400/40 hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col"
            >
              <div className={cn('inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br mb-5 shadow-sm group-hover:shadow-md transition-shadow', s.color)}>
                <s.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-3">{s.title}</h3>
              <p className="text-sm text-body leading-relaxed">{s.desc}</p>
              {/* Faint number watermark */}
              <div className="absolute top-4 right-5 text-6xl font-black text-heading/[0.04] select-none pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
