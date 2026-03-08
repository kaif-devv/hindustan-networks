import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Eye, Target, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const missionPoints = [
  'Deliver tailor-made network solutions for every client',
  'Adopt the latest technologies in our deployments',
  'Build long-term client relationships through trust',
  'Ensure timely execution on every project',
  "Support India's digital infrastructure growth",
]

export function Vision() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="vision" className="py-24 lg:py-32 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="card hover:border-amber-400/40 hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-sm">
                <Eye size={22} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-amber-600 dark:text-amber-400 font-medium tracking-wider uppercase mb-0.5">Our</div>
                <h3 className="text-2xl font-black text-heading">Vision</h3>
              </div>
            </div>
            <p className="text-body leading-relaxed text-base">
              To be recognized as a{' '}
              <span className="text-amber-600 dark:text-amber-400 font-semibold">trusted leader</span>{' '}in network
              and communication solutions — providing innovative, reliable and scalable
              technologies that empower businesses to thrive in a connected world.
            </p>
            <div className="mt-6 pt-6 border-t border-card">
              <p className="text-muted text-sm italic">
                "Technology that connects, infrastructure that endures."
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="card hover:border-amber-400/40 hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500 shadow-sm">
                <Target size={22} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-amber-600 dark:text-amber-400 font-medium tracking-wider uppercase mb-0.5">Our</div>
                <h3 className="text-2xl font-black text-heading">Mission</h3>
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
                  <CheckCircle2 size={16} className="text-amber-500 mt-0.5 shrink-0" />
                  <span className="text-body text-sm leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
