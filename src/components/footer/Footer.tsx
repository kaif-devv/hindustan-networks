import { motion } from "framer-motion";
import {
  Network,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Clients", href: "#clients" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Internet Leased Lines",
  "LAN Networking",
  "CCTV Surveillance",
  "Access Control",
  "WiFi Networking",
  "Server Setup",
  "Optical Fiber",
  "AMC Services",
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 lg:py-18">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-500 shadow-sm">
                <Network size={20} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm tracking-wide leading-none">
                  Hindustan Networks
                </div>
                <div className="text-brand-300 text-[9px] font-semibold tracking-widest uppercase"></div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Comprehensive network &amp; communication infrastructure solutions
              since 2017.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:text-brand-200 hover:border-brand-400/50 transition-colors"
                  aria-label={s.label}
                >
                  <s.icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="group flex items-center gap-1.5 text-sm text-slate-300 hover:text-brand-200 transition-colors"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-300"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("#services");
                    }}
                    className="group flex items-center gap-1.5 text-sm text-slate-300 hover:text-brand-200 transition-colors"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-300"
                    />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919849533913"
                className="flex items-start gap-3 group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-400/20 shrink-0 mt-0.5">
                  <Phone size={14} className="text-brand-300" />
                </div>
                <span className="text-sm text-slate-300 group-hover:text-brand-200 transition-colors">
                  +91 9849533913
                </span>
              </a>
              <a
                href="mailto:info@hindustannetworks.com"
                className="flex items-start gap-3 group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-400/20 shrink-0 mt-0.5">
                  <Mail size={14} className="text-brand-300" />
                </div>
                <span className="text-sm text-slate-300 group-hover:text-brand-200 transition-colors break-all">
                  info@hindustannetworks.com
                </span>
              </a>
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-400/20 shrink-0 mt-0.5">
                  <MapPin size={14} className="text-brand-300" />
                </div>
                <span className="text-sm text-slate-300 leading-relaxed">
                  #1-105 Suleman Colony,
                  <br />
                  Shadnagar – 509216,
                  <br />
                  Telangana, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Hindustan Networks . All rights
            reserved.
          </p>
          <p className="text-xs text-slate-500">
            #1-105 Suleman Colony, Shadnagar, Telangana – 509216
          </p>
        </div>
      </div>
    </footer>
  );
}
