import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Network, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const sectionEl = document.querySelector<HTMLElement>(href);
    if (!sectionEl) return;

    // Prefer aligning section title near top instead of section container.
    const headingEl = sectionEl.querySelector<HTMLElement>("h2");
    const targetEl = headingEl ?? sectionEl;
    const navEl = document.querySelector<HTMLElement>("nav");
    const navOffset = (navEl?.getBoundingClientRect().height ?? 72) + 14;
    const top =
      targetEl.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled ? "pt-3 sm:pt-4" : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "relative flex items-center justify-between gap-4 rounded-[1.4rem] border px-4 py-3 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.06)]",
              scrolled
                ? "navbar-bg border-card bg-white/85 dark:bg-slate-950/90"
                : "bg-white/70 dark:bg-slate-950/60 border-white/70 dark:border-slate-800/70",
            )}
          >
            {/* Brand */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#hero");
              }}
              className="flex items-center gap-3 shrink-0"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-600 text-white shadow-sm">
                <Network size={18} />
              </div>
              <div className="leading-none hidden sm:block">
                <div className="font-semibold text-sm tracking-tight text-heading">
                  Hindustan Networks
                </div>
                <div className="text-xs text-muted">
                  Network & communication systems
                </div>
              </div>
            </a>

            {/* Desktop switcher */}
            <div className="hidden lg:flex items-center gap-1 rounded-full border border-card bg-slate-50/90 dark:bg-slate-900/60 px-2 py-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className={cn(
                      "group relative flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
                      isActive
                        ? "bg-white text-brand-700 shadow-sm dark:bg-slate-950 dark:text-brand-200"
                        : "text-muted hover:text-brand-600 dark:hover:text-brand-300",
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full transition-colors",
                        isActive
                          ? "bg-brand-500"
                          : "bg-slate-300 group-hover:bg-brand-400 dark:bg-slate-600",
                      )}
                    />
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <ThemeToggle />
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("#contact");
                }}
                className="btn-brand text-sm px-4 py-2 rounded-full font-semibold"
              >
                Get a Quote
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-body hover:text-brand-600 transition-colors shrink-0"
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
            className="fixed top-[76px] left-0 right-0 z-40 px-4 md:hidden"
          >
            <div className="rounded-[1.4rem] border border-card bg-white/95 dark:bg-slate-950/95 p-3 shadow-[0_16px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <div className="grid gap-2">
                {navLinks.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeSection === id;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-200"
                          : "text-body hover:bg-slate-50 hover:text-brand-600 dark:hover:bg-slate-900 dark:hover:text-brand-300",
                      )}
                    >
                      <span>{link.label}</span>
                      <span
                        className={cn(
                          "h-2 w-2 rounded-full transition-colors",
                          isActive
                            ? "bg-brand-500"
                            : "bg-slate-300 dark:bg-slate-600",
                        )}
                      />
                    </a>
                  );
                })}
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 border-t border-card pt-3">
                <ThemeToggle />
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("#contact");
                  }}
                  className="btn-brand text-sm px-4 py-2 rounded-full font-semibold"
                >
                  Get a Quote
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
