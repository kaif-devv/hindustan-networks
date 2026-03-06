import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Eye, Target, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const missionPoints = [
  'Deliver tailor-made network solutions for every client',
  'Adopt the latest technologies in our deployments',
  'Build long-term client relationships through trust',
  'Ensure timely execution on every project',
  'Support India\'s digital infrastructure growth',
]

export function Vision() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="vision" className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_65%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Vision & Mission"
          title="Where We're"
          highlight="Headed"
          subtitle="Our vision and mission define every decision, every deployment and every relationship we build."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-6">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-950/60 to-gray-900/60 backdrop-blur-sm p-8 lg:p-10"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600/50 via-blue-400/50 to-transparent" />
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-blue-600/10 blur-3xl group-hover:bg-blue-600/15 transition-colors duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg shadow-blue-500/20">
                  <Eye size={22} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-blue-400 font-medium tracking-wider uppercase mb-0.5">Our</div>
                  <h3 className="text-2xl font-black text-white">Vision</h3>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed text-base">
                To be recognized as a{' '}
                <span className="text-blue-300 font-semibold">trusted leader</span> in network
                and communication solutions — providing innovative, reliable and scalable
                technologies that empower businesses to thrive in a connected world.
              </p>

              {/* Decorative quote */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-3xl text-white/5 font-black leading-none select-none">"</p>
                <p className="text-white/30 text-sm italic">
                  Technology that connects, infrastructure that endures.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-950/60 to-gray-900/60 backdrop-blur-sm p-8 lg:p-10"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-600/50 via-cyan-400/50 to-transparent" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-cyan-600/10 blur-3xl group-hover:bg-cyan-600/15 transition-colors duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600 to-teal-400 shadow-lg shadow-cyan-500/20">
                  <Target size={22} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-cyan-400 font-medium tracking-wider uppercase mb-0.5">Our</div>
                  <h3 className="text-2xl font-black text-white">Mission</h3>
                </div>
              </div>
              <div className="space-y-3">
                {missionPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
