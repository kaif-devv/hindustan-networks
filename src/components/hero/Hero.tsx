import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Network, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { icon: Zap, value: '14+', label: 'Years Experience' },
  { icon: Network, value: '500+', label: 'Projects Delivered' },
  { icon: Shield, value: '99.9%', label: 'Uptime Guarantee' },
]

export function Hero() {
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-page">
      {/* Subtle dot/grid bg */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, #6b7280 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />
      {/* Warm accent glow — top right */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full bg-amber-400/10 blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      {/* Warm accent glow — bottom left */}
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full bg-yellow-400/8 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-0">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="badge mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block mr-2" />
            Trusted Network Infrastructure Partner
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-black text-heading tracking-tight leading-none text-balance mb-5"
          >
            Hindustan{' '}
            <span className="gradient-text">Networks</span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-muted">LLP</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-lg sm:text-xl text-amber-600 dark:text-amber-400 font-semibold tracking-wide mb-4"
          >
            Comprehensive Network &amp; Communication Solutions
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="max-w-2xl text-base sm:text-lg text-body leading-relaxed mb-10"
          >
            Powering enterprises with reliable, secure, and scalable network infrastructure
            across India for over a decade.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button variant="gradient" size="xl" onClick={scrollToContact} className="group">
              Get a Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" onClick={scrollToServices} className="!text-gray-950 !border-gray-950 !font-extrabold dark:!text-white dark:!border-white">
              Our Services
            </Button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 py-6 px-8 rounded-2xl bg-white dark:bg-gray-800/60 border border-amber-300 dark:border-gray-700/60 shadow-md"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.65 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/20 border border-amber-200 dark:border-amber-500/30">
                  <stat.icon size={18} className="text-amber-600 dark:text-amber-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-heading">{stat.value}</div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden sm:block w-px h-10 bg-amber-200 dark:bg-gray-600 ml-6" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  )
}
