import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Network,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Sectors", href: "/industries" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  "Leased Lines",
  "LAN & WAN",
  "CCTV Surveillance",
  "Access Control",
  "Cybersecurity",
  "Manufacturing Networks",
  "WiFi Networking",
  "AMC Services",
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-white/95 text-body border-t border-card backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 lg:py-18">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-500 shadow-sm">
                <Network size={20} className="text-surface-700" />
              </div>
              <div>
                <div className="text-heading font-bold text-sm tracking-wide leading-none">
                  Hindustan Networks
                </div>
              </div>
            </div>
            <p className="text-sm text-body leading-relaxed mb-5">
              Comprehensive network and communication infrastructure solutions
              since 2017.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-brand-200 bg-brand-50 text-body hover:text-brand-700 hover:border-brand-400 transition-colors"
                  aria-label={s.label}
                >
                  <s.icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-heading mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-1.5 text-sm text-body hover:text-brand-700 transition-colors"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-500"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-heading mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group flex items-center gap-1.5 text-sm text-body hover:text-brand-700 transition-colors"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-500"
                    />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-heading mb-5 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919849533913"
                className="flex items-start gap-3 group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-400/20 shrink-0 mt-0.5">
                  <Phone size={14} className="text-brand-700" />
                </div>
                <span className="text-sm text-body group-hover:text-brand-700 transition-colors">
                  +91 9849533913
                </span>
              </a>
              <a
                href="mailto:info@hindustannetworks.com"
                className="flex items-start gap-3 group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-400/20 shrink-0 mt-0.5">
                  <Mail size={14} className="text-brand-700" />
                </div>
                <span className="text-sm text-body group-hover:text-brand-700 transition-colors break-all">
                  info@hindustannetworks.com
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-card py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-body">
            Copyright {new Date().getFullYear()} Hindustan Networks. All rights
            reserved.
          </p>
          <p className="text-xs text-muted">
            Network, security, and communication infrastructure solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
