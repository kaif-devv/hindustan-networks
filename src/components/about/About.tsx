import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, ThumbsUp, CheckCircle, MapPin, Calendar } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const stats = [
  { icon: Calendar, value: '14+', label: 'Years Experience', desc: 'Established 2017 with a decade of expertise' },
  { icon: Users, value: '200+', label: 'Expert Team', desc: 'Certified network & security professionals' },
  { icon: ThumbsUp, value: '98%', label: 'Customer Satisfaction', desc: 'Trusted by businesses across Telangana' },
  { icon: Award, value: 'ISO', label: 'Quality Assurance', desc: 'Adherence to international quality standards' },
]

const values = [
  { icon: CheckCircle, text: 'Reliability you can count on, 24/7' },
  { icon: CheckCircle, text: 'Continuous innovation in network tech' },
  { icon: CheckCircle, text: 'Enterprise-grade security at every level' },
  { icon: CheckCircle, text: 'End-to-end turnkey project delivery' },
]

function StatCard({ icon: Icon, value, label, desc, index }: typeof stats[0] & { index: number }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/20 mb-4">
          <Icon size={22} className="text-cyan-400" />
        </div>
        <div className="text-3xl font-black text-white mb-1">{value}</div>
        <div className="text-sm font-semibold text-cyan-300 mb-2">{label}</div>
        <div className="text-xs text-white/40 leading-relaxed">{desc}</div>
      </div>
    </motion.div>
  )
}

export function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Us"
          title="Building Digital"
          highlight="Infrastructure"
          subtitle="Hindustan Networks LLP is a leading provider of end-to-end network and communication infrastructure solutions serving businesses in and around Shadnagar, Telangana."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-sm text-cyan-400 mb-4">
              <MapPin size={14} />
              <span>Shadnagar, Telangana, India</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
              Your Trusted Partner in<br />
              <span className="gradient-text">Network Excellence</span>
            </h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Since 2017, Hindustan Networks LLP has been at the forefront of delivering
              comprehensive network and communication solutions to enterprises, institutions
              and government bodies. Our expertise spans structured cabling, fiber optics,
              enterprise WiFi, surveillance, and cloud infrastructure.
            </p>
            <div className="space-y-3">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <v.icon size={16} className="text-cyan-400 shrink-0" />
                  {v.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: decorative code-style card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur-sm p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600/50 via-cyan-400/50 to-transparent" />
              {/* Terminal-style header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-white/40 font-mono">company.json</span>
              </div>
              <pre className="text-sm font-mono leading-relaxed text-white/70">
                <span className="text-cyan-400">{'{'}</span>{'\n'}
                {'  '}<span className="text-blue-300">"name"</span>{': '}<span className="text-green-300">"Hindustan Networks LLP"</span>,{'\n'}
                {'  '}<span className="text-blue-300">"established"</span>{': '}<span className="text-orange-300">2017</span>,{'\n'}
                {'  '}<span className="text-blue-300">"experience"</span>{': '}<span className="text-green-300">"14+ Years"</span>,{'\n'}
                {'  '}<span className="text-blue-300">"location"</span>{': '}<span className="text-green-300">"Shadnagar, Telangana"</span>,{'\n'}
                {'  '}<span className="text-blue-300">"services"</span>{': '}<span className="text-orange-300">15</span>,{'\n'}
                {'  '}<span className="text-blue-300">"uptime"</span>{': '}<span className="text-green-300">"99.9%"</span>,{'\n'}
                {'  '}<span className="text-blue-300">"clients"</span>{': '}<span className="text-green-300">"100+"</span>,{'\n'}
                {'  '}<span className="text-blue-300">"status"</span>{': '}<span className="text-cyan-300">"operational"</span>{'\n'}
                <span className="text-cyan-400">{'}'}</span>
              </pre>
            </div>
            {/* Glow */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
