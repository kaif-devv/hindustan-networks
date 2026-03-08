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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      className={cn('mb-12 lg:mb-16', align === 'center' && 'text-center', className)}
    >
      {badge && (
        <div className={cn(
          'badge mb-4',
          align === 'center' && 'mx-auto'
        )}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-heading tracking-tight leading-tight mb-4">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {align === 'center' && (
        <div className="flex justify-center mb-4">
          <div className="divider-brand" />
        </div>
      )}
      {!align || align === 'left' ? <div className="divider-brand mb-4" /> : null}
      {subtitle && (
        <p className={cn(
          'text-base lg:text-lg text-body leading-relaxed',
          align === 'center' && 'max-w-2xl mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
