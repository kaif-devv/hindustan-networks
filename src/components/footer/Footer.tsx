import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
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

function FooterLinkRow({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={`Footer ${title}`} className="flex min-w-0 items-baseline gap-3">
      <h4 className="w-28 shrink-0 whitespace-nowrap text-sm font-semibold text-heading leading-6">
        {title}:
      </h4>
      <ul className="flex min-w-0 flex-wrap items-baseline gap-x-2.5 gap-y-1">
        {links.map((link, index) => (
          <li key={link.label} className="inline-flex items-baseline gap-2.5">
            <Link
              to={link.href}
              className="text-sm leading-6 text-body hover:text-brand-700 transition-colors"
            >
              {link.label}
            </Link>
            {index < links.length - 1 && <span aria-hidden="true" className="text-brand-300">|</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="font-footer bg-white/95 text-body border-t border-card backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 py-6 sm:py-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex shrink-0 items-center gap-2.5">
              <img
                src={`${import.meta.env.BASE_URL}hn-mark.svg`}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0"
              />
              <div>
                <div className="text-heading font-[700] text-sm tracking-tight leading-none">
                  Hindustan{" "}
                  <span className="font-normal tracking-normal">Networks</span>
                </div>
              </div>
            </div>
            <p className="min-w-56 flex-1 text-sm text-body leading-relaxed">
              Comprehensive network and communication infrastructure solutions
              since 2017.
            </p>
            <div className="flex shrink-0 items-center gap-2">
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

          <div className="flex flex-col gap-2">
            <FooterLinkRow title="Quick Links" links={quickLinks} />
            <FooterLinkRow title="Services" links={serviceLinks.map((label) => ({ label, href: "/services" }))} />
          </div>

          <div className="flex items-baseline gap-3">
            <h4 className="w-28 shrink-0 whitespace-nowrap text-sm font-semibold text-heading leading-6">
              Contact:
            </h4>
            <div className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href="tel:+919849533913"
                className="flex items-center gap-2 group"
              >
                <Phone size={14} className="shrink-0 text-brand-700" />
                <span className="text-sm leading-6 text-body group-hover:text-brand-700 transition-colors">
                  +91 9849533913
                </span>
              </a>
              <a
                href="mailto:info@hindustannetworks.com"
                className="flex min-w-0 items-center gap-2 group"
              >
                <Mail size={14} className="shrink-0 text-brand-700" />
                <span className="text-sm leading-6 text-body group-hover:text-brand-700 transition-colors break-all">
                  info@hindustannetworks.com
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-card py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
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
