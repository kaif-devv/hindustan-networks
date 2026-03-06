import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Package, Users, ShieldCheck, HeartHandshake, Clock } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const strengths = [
  {
    icon: Package,
    title: 'End-to-End Turnkey Solutions',
    desc: 'From consultation to commissioning, we handle every aspect of your network project under one roof.',
    gradient: 'from-blue-500 to-indigo-500',
    delay: 0,
  },
  {
    icon: Users,
    title: 'Expert Technical Team',
    desc: 'Certified network engineers with deep expertise in the latest technologies and industry standards.',
    gradient: 'from-cyan-500 to-blue-500',
    delay: 0.1,
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'Rigorous quality control at every stage ensuring deployments meet and exceed international standards.',
    gradient: 'from-green-500 to-teal-500',
    delay: 0.2,
  },
  {
    icon: HeartHandshake,
    title: 'Customer Centric Approach',
    desc: 'Tailored solutions designed around your unique business requirements with dedicated support.',
    gradient: 'from-violet-500 to-blue-500',
    delay: 0.3,
  },
  {
    icon: Clock,
    title: 'Timely Execution',
    desc: 'Proven project management methodology ensuring on-time delivery without compromising quality.',
    gradient: 'from-orange-500 to-amber-500',
    delay: 0.4,
  },
]

export function Strengths() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="strengths" className="relative py-24 lg:py-32 overflow-hidden bg-gray-950/60">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="Our"
          highlight="Strengths"
          subtitle="What makes Hindustan Networks LLP the preferred partner for businesses across Telangana and beyond."
        />

        <div ref={ref} className="relative">
          {/* Large center card + 4 corner cards layout on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: s.delay }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-8 overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                {/* Glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${s.gradient} blur-2xl`} style={{ opacity: 0 }} />
                <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${s.gradient} blur-xl`} />

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} shadow-lg mb-5`}>
                    <s.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                  {/* Number */}
                  <div className={`absolute top-6 right-6 text-6xl font-black opacity-[0.04] bg-gradient-to-br ${s.gradient} bg-clip-text`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
