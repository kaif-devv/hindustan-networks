import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={cn('mb-12 lg:mb-16', align === 'center' && 'text-center', className)}
    >
      {badge && (
        <div className={cn(
          'inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-wider uppercase mb-4',
          align === 'center' && 'mx-auto'
        )}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          {badge}
        </div>
      )}
      <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg text-white/50 leading-relaxed',
          align === 'center' && 'max-w-2xl mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
