import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { clients } from '@/data/clients'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Building2 } from 'lucide-react'

function ClientLogo({ client, index }: { client: typeof clients[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: (index % 8) * 0.07 }}
      title={client.name}
      className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/25 hover:bg-white/10 transition-all duration-300 cursor-default overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-600/10 to-transparent" />

      {/* Logo image or fallback icon */}
      <div className="relative z-10 w-16 h-16 flex items-center justify-center">
        <img
          src={client.img}
          alt={client.name}
          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
          onError={(e) => {
            const target = e.currentTarget
            target.style.display = 'none'
            const fallback = target.nextElementSibling as HTMLElement
            if (fallback) fallback.style.display = 'flex'
          }}
        />
        {/* Fallback */}
        <div className="hidden absolute inset-0 items-center justify-center">
          <Building2 size={28} className="text-blue-400/60 group-hover:text-blue-400 transition-colors" />
        </div>
      </div>

      <p className="relative z-10 text-xs text-white/40 group-hover:text-white/70 text-center leading-tight font-medium transition-colors">
        {client.name}
      </p>
    </motion.div>
  )
}

export function Clients() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="clients" className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Clients"
          title="Trusted By"
          highlight="Industry Leaders"
          subtitle="We are proud to serve some of the most reputed organizations across India with reliable network infrastructure."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {clients.map((client, i) => (
            <ClientLogo key={client.name} client={client} index={i} />
          ))}
        </motion.div>

        {/* Subtle note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-white/30 mt-10"
        >
          Serving 100+ clients across Telangana and beyond
        </motion.p>
      </div>
    </section>
  )
}
