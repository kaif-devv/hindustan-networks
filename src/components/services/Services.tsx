import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-default"
    >
      {/* Gradient overlay on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn('absolute inset-0 opacity-0 bg-gradient-to-br to-transparent', service.color.replace('from', 'from').replace('to', 'to'))}
        style={{ opacity: hovered ? 0.08 : 0 }}
      />

      {/* Top border line */}
      <div className={cn('absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl', service.color)} />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br mb-4 shadow-lg',
            service.color
          )}
        >
          <service.icon size={22} className="text-white" />
        </motion.div>

        <h3 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed mb-4">
          {service.description}
        </p>

        <motion.div
          animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1 text-xs text-cyan-400 font-medium"
        >
          Learn more <ArrowRight size={12} />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-gray-950/80 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.05)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What We Do"
          title="Our"
          highlight="Services"
          subtitle="Comprehensive network and communication solutions tailored for your business needs — from design to deployment and maintenance."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
