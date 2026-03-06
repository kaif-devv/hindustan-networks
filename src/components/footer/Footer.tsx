import { motion } from 'framer-motion'
import { Network, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Clients', href: '#clients' },
  { label: 'Vision & Mission', href: '#vision' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Internet Leased Lines',
  'LAN Networking',
  'CCTV Surveillance',
  'Access Control',
  'WiFi Networking',
  'Server Setup',
  'Optical Fiber',
  'AMC Services',
]

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-950 border-t border-white/10 overflow-hidden">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(59,130,246,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20">
                <Network size={20} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm tracking-wide leading-none">Hindustan</div>
                <div className="text-cyan-400 text-[10px] font-medium tracking-widest uppercase">Networks LLP</div>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-5">
              Comprehensive network &amp; communication infrastructure solutions since 2017.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -2, scale: 1.1 }}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/5 text-white/50 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
                  aria-label={s.label}
                >
                  <s.icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                    className="group flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNav('#services') }}
                    className="group flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-4">
              <a href="tel:+919849533913" className="flex items-start gap-3 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/15 shrink-0 mt-0.5">
                  <Phone size={14} className="text-blue-400" />
                </div>
                <span className="text-sm text-white/40 group-hover:text-white/70 transition-colors">+91 9849533913</span>
              </a>
              <a href="mailto:info@hindustannetworks.com" className="flex items-start gap-3 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/15 shrink-0 mt-0.5">
                  <Mail size={14} className="text-cyan-400" />
                </div>
                <span className="text-sm text-white/40 group-hover:text-white/70 transition-colors break-all">
                  info@hindustannetworks.com
                </span>
              </a>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/15 shrink-0 mt-0.5">
                  <MapPin size={14} className="text-indigo-400" />
                </div>
                <span className="text-sm text-white/40 leading-relaxed">
                  #1-105 Suleman Colony,<br />
                  Shadnagar – 509216,<br />
                  Telangana, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Hindustan Networks LLP. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            #1-105 Suleman Colony, Shadnagar, Telangana – 509216
          </p>
        </div>
      </div>
    </footer>
  )
}
