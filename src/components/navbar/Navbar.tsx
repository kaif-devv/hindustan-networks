import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useMotionPreferences } from "@/lib/MotionPreferences";
import { subtleSpring } from "@/lib/motion";
import "./navbar.css";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Sectors", href: "/industries" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { reduced } = useMotionPreferences();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={reduced ? false : { y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reduced ? 0 : 0.3, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled ? "pt-3 sm:pt-4" : "bg-transparent",
        )}
      >
        <div className="navbar-scroll-blur" data-visible={scrolled} aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "relative flex items-center justify-between gap-4 rounded-[1.4rem] border px-4 py-3 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.06)]",
              scrolled
                ? "navbar-bg border-[var(--navbar-border)]"
                : "bg-white/80 border-white/80",
            )}
          >
            {/* Brand */}
            <Link to="/" aria-label="Hindustan Networks home" className="flex items-center gap-3 shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}hn-mark.svg`}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 shrink-0"
              />
              <div className="leading-none hidden sm:block">
                <div className="font-brand-roman font-[700] text-sm tracking-tight text-heading">
                  Hindustan{" "}
                  <span className="font-brand-gothic font-normal tracking-normal">Networks</span>
                </div>
                <div className="font-brand-gothic font-normal text-xs text-muted">
                  Network | Security | Communication | IT Infrastructure | Services | Solutions | Support
                </div>
              </div>
            </Link>

            {/* Desktop switcher */}
            <div className="hidden lg:flex items-center gap-1 rounded-full border border-[#F6C98B] bg-[#FFF4E8] px-2 py-1">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === link.href ||
                  (link.href !== "/" &&
                    location.pathname.startsWith(link.href));

                return (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    className={cn(
                      "group relative flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
                      isActive
                        ? "text-black"
                        : "text-black hover:text-black",
                    )}
                  >
                    {isActive && <motion.span aria-hidden="true" layoutId="active-navigation-pill" className="absolute inset-0 rounded-full bg-white shadow-sm" transition={reduced ? { duration: 0 } : subtleSpring} />}
                    <span
                      className={cn(
                        "relative h-1.5 w-1.5 rounded-full transition-colors",
                        isActive
                          ? "bg-brand-500"
                          : "bg-surface-300 group-hover:bg-brand-400",
                      )}
                    />
                    <span className="relative">{link.label}</span>
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-body hover:text-brand-600 transition-colors shrink-0"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduced ? 0 : 0.18 }}
            id="mobile-navigation"
            className="absolute top-full left-0 right-0 z-20 mt-2 px-4 lg:hidden"
          >
            <div className="rounded-[1.4rem] border border-card bg-white/95 p-3 shadow-[0_16px_40px_rgba(251,140,0,0.12)] backdrop-blur-xl">
              <div className="grid gap-2">
                {navLinks.map((link) => {
                  const isActive =
                    location.pathname === link.href ||
                    (link.href !== "/" &&
                      location.pathname.startsWith(link.href));

                  return (
                    <NavLink
                      key={link.label}
                      to={link.href}
                      onClick={handleMobileClose}
                      className={cn(
                        "relative flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "text-black"
                          : "text-black hover:bg-brand-50 hover:text-black",
                      )}
                    >
                      {isActive && <motion.span aria-hidden="true" layoutId="active-mobile-navigation-pill" className="absolute inset-0 rounded-xl bg-brand-50" transition={reduced ? { duration: 0 } : subtleSpring} />}
                      <span className="relative">{link.label}</span>
                      <span
                        className={cn(
                          "relative h-2 w-2 rounded-full transition-colors",
                          isActive ? "bg-brand-500" : "bg-surface-300",
                        )}
                      />
                    </NavLink>
                  );
                })}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>
    </>
  );
}
