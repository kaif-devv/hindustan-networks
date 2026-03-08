import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Network } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'navbar-bg shadow-sm border-b border-gray-200 dark:border-gray-700/60' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
              className="flex items-center gap-2.5"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-500 shadow-sm">
                <Network size={18} className="text-white" />
              </div>
              <div className="leading-none">
                <div className="font-bold text-sm tracking-tight text-heading">Hindustan Networks</div>
                <div className="text-amber-500 text-[9px] font-semibold tracking-widest uppercase">LLP</div>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                  className="px-4 py-2 text-sm font-medium text-body hover:text-amber-600 dark:hover:text-amber-400 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
                className="btn-brand text-sm px-5 py-2 rounded-lg font-semibold"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-body hover:text-amber-600 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 left-0 right-0 z-40 navbar-bg border-b border-gray-200 dark:border-gray-700 px-4 py-3 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                  className="px-4 py-2.5 text-sm font-medium text-body hover:text-amber-600 dark:hover:text-amber-400 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-700 mt-2">
                <ThemeToggle />
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
                  className="btn-brand text-sm px-5 py-2 rounded-lg font-semibold"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
