import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { services } from '@/data/services'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      whileHover={{ y: -4 }}
      className="card group hover:border-amber-400/40 hover:shadow-md transition-all duration-300 cursor-default flex flex-col"
    >
      {/* Top accent line - bleeds to card edges */}
      <div className={cn('h-0.5 bg-gradient-to-r rounded-full mb-5 opacity-60 group-hover:opacity-100 transition-opacity -mx-6', service.color)} />

      {/* Icon */}
      <div className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br mb-4 shadow-sm group-hover:shadow-md transition-shadow',
        service.color
      )}>
        <service.icon size={22} className="text-white" />
      </div>

      <h3 className="text-base font-bold text-heading mb-2 leading-tight">
        {service.title}
      </h3>
      <p className="text-sm text-body leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-page-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
