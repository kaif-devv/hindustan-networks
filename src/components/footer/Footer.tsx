import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
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
  "Cabling & Networks",
  "CCTV",
  "ISP & Leased Lines",
  "WiFi",
  "Access & Biometrics",
  "Fiber",
  "Servers & Cloud",
  "Cybersecurity",
  "Intercom & Door Phones",
  "AV Conferencing",
  "Automation",
  "AMC & Support",
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

type FooterLink = { label: string; href: string };

function FooterLinkRow({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <nav
      aria-label={`Footer ${title}`}
      className="grid gap-2 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-start sm:gap-5"
    >
      <h2 className="pt-1 text-xs font-semibold uppercase tracking-[0.16em] text-heading">
        {title}
      </h2>
      <ul className="flex min-w-0 flex-wrap gap-x-6 gap-y-1.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="text-sm leading-6 text-body transition-colors hover:text-brand-700"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="font-footer relative overflow-hidden border-t border-card bg-white/95 text-body backdrop-blur-md">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-40 h-72 w-72 rounded-full bg-brand-100/35 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:gap-8">
          <Link
            to="/"
            aria-label="Hindustan Networks home"
            className="inline-flex shrink-0 items-center gap-3 self-start"
          >
            <img
              src={`${import.meta.env.BASE_URL}hn-mark.svg`}
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 shrink-0"
            />
            <div className="leading-none">
              <div className="font-brand-roman text-base font-bold tracking-tight text-heading">
                Hindustan{" "}
                <span className="font-brand-gothic font-normal tracking-normal">
                  Networks
                </span>
              </div>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-muted">
                Connected. Secure. Supported.
              </p>
            </div>
          </Link>

          <p className="max-w-2xl text-sm leading-6 text-body lg:flex-1 lg:border-l lg:border-card lg:pl-8">
            Reliable network, security, communication and IT infrastructure for
            businesses, institutions and residential projects.
          </p>

          <div className="flex shrink-0 items-center gap-2">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -2 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-card bg-white text-body shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700"
                aria-label={social.label}
              >
                <social.icon size={15} aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="space-y-4 border-t border-card py-6">
          <FooterLinkRow title="Quick links" links={quickLinks} />
          <FooterLinkRow
            title="Services"
            links={serviceLinks.map((label) => ({ label, href: "/services" }))}
          />

          <div className="grid gap-2 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-start sm:gap-5">
            <h2 className="pt-1 text-xs font-semibold uppercase tracking-[0.16em] text-heading">
              Contact
            </h2>
            <div className="flex min-w-0 flex-wrap items-center gap-x-7 gap-y-2">
              <a
                href="tel:+919849533913"
                className="group inline-flex items-center gap-2 text-sm leading-6 text-body transition-colors hover:text-brand-700"
              >
                <Phone size={14} className="text-brand-700" aria-hidden="true" />
                +91 9849533913
              </a>
              <a
                href="mailto:info@hindustannetworks.com"
                className="group inline-flex min-w-0 items-center gap-2 text-sm leading-6 text-body transition-colors hover:text-brand-700"
              >
                <Mail size={14} className="shrink-0 text-brand-700" aria-hidden="true" />
                <span className="break-all">info@hindustannetworks.com</span>
              </a>
              <a
                href="https://maps.app.goo.gl/PdNCabdtoV9dRkcA6"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm leading-6 text-body transition-colors hover:text-brand-700"
              >
                <MapPin size={14} className="shrink-0 text-brand-700" aria-hidden="true" />
                Shadnagar, Future City, Telangana
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-card py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Hindustan Networks. All rights reserved.</p>
          <p>Network &middot; Security &middot; Communication &middot; IT Infrastructure</p>
        </div>
      </div>
    </footer>
  );
}
