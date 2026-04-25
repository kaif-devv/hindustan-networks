import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Network, ArrowRight } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
                ? "navbar-bg border-card bg-white/90"
                : "bg-white/80 border-white/80",
            )}
          >
            {/* Brand */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-600 text-surface-700 shadow-sm">
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
            </Link>

            {/* Desktop switcher */}
            <div className="hidden lg:flex items-center gap-1 rounded-full border border-card bg-brand-50 px-2 py-1">
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
                        ? "bg-white text-black shadow-sm"
                        : "text-black hover:text-black",
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full transition-colors",
                        isActive
                          ? "bg-brand-500"
                          : "bg-surface-300 group-hover:bg-brand-400",
                      )}
                    />
                    {link.label}
                  </NavLink>
                );
              })}
            </div>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="btn-brand text-sm px-4 py-2 rounded-full font-semibold"
              >
                Get a Quote
                <ArrowRight size={14} />
              </Link>
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
                        "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-brand-50 text-black"
                          : "text-black hover:bg-brand-50 hover:text-black",
                      )}
                    >
                      <span>{link.label}</span>
                      <span
                        className={cn(
                          "h-2 w-2 rounded-full transition-colors",
                          isActive ? "bg-brand-500" : "bg-surface-300",
                        )}
                      />
                    </NavLink>
                  );
                })}
              </div>

              <div className="mt-3 flex items-center justify-end gap-3 border-t border-card pt-3">
                <Link
                  to="/contact"
                  onClick={handleMobileClose}
                  className="btn-brand text-sm px-4 py-2 rounded-full font-semibold"
                >
                  Get a Quote
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
