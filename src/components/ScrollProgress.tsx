import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] h-[3px] bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 origin-left"
      style={{ scaleX: progress / 100, transformOrigin: '0 0' }}
      initial={{ scaleX: 0 }}
    />
  )
}
