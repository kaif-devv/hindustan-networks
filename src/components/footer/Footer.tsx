import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
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

function FooterLinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={`Footer ${title}`} className="min-w-0">
      <h4 className="text-sm font-semibold text-heading mb-5 leading-5 uppercase tracking-wider">
        {title}
      </h4>
      <ul className="grid gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="group relative block min-h-5 pr-5 text-sm leading-5 text-body hover:text-brand-700 transition-colors"
            >
              {link.label}
              <ArrowRight
                size={12}
                aria-hidden="true"
                className="absolute right-0 top-1 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 -translate-x-1 group-hover:translate-x-0 group-focus-visible:translate-x-0 transition-all text-brand-500"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-white/95 text-body border-t border-card backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 lg:py-18">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src={`${import.meta.env.BASE_URL}hn-mark.svg`}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0"
              />
              <div>
                <div className="text-heading font-brand-roman font-[700] text-sm tracking-tight leading-none">
                  Hindustan{" "}
                  <span className="font-brand-gothic font-normal tracking-normal">Networks</span>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:col-span-2">
            <FooterLinkColumn title="Quick Links" links={quickLinks} />
            <FooterLinkColumn title="Services" links={serviceLinks.map((label) => ({ label, href: "/services" }))} />
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold text-heading mb-5 leading-5 uppercase tracking-wider">
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
