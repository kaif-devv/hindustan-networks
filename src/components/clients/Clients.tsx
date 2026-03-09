import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { clients } from "@/data/clients";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Building2, X, LayoutGrid } from "lucide-react";

function ClientLogo({ client }: { client: (typeof clients)[0] }) {
  return (
    <div
      title={client.name}
      className="group flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-amber-100 dark:border-gray-700 bg-white dark:bg-gray-800 px-8 py-6 mx-4 min-w-[200px] h-[140px] hover:border-amber-400 hover:shadow-lg transition-all duration-300 cursor-default"
    >
      <div className="w-20 h-14 flex items-center justify-center">
        <img
          src={client.img}
          alt={client.name}
          className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <div className="hidden items-center justify-center">
          <Building2
            size={24}
            className="text-amber-500/60 group-hover:text-amber-500 transition-colors"
          />
        </div>
      </div>
      <p className="text-xs text-muted group-hover:text-body text-center leading-tight font-medium transition-colors line-clamp-2">
        {client.name}
      </p>
    </div>
  );
}

function ViewAllModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-page w-full max-w-5xl rounded-2xl border border-card shadow-xl overflow-hidden"
        >
          {/* Modal header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-card">
            <div>
              <h3 className="text-2xl font-bold text-heading">
                All Our Clients
              </h3>
              <p className="text-sm text-muted">
                {clients.length} trusted partners
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-muted hover:text-heading hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            >
              <X size={20} />
            </button>
          </div>
          {/* Grid */}
          <div className="p-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8 max-h-[80vh] overflow-y-auto">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                title={client.name}
                className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-card bg-white dark:bg-gray-800 p-6 hover:border-amber-400/60 hover:shadow-md transition-all cursor-default"
              >
                <div className="w-16 h-12 flex items-center justify-center">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="hidden items-center justify-center">
                    <Building2 size={24} className="text-amber-500/60" />
                  </div>
                </div>
                <p className="text-xs text-muted text-center leading-tight font-medium line-clamp-2">
                  {client.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Clients() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [showAll, setShowAll] = useState(false);
  // Duplicate for seamless loop
  const loop = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="py-24 lg:py-32 bg-page-alt overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Clients"
          title="Trusted By"
          highlight="Industry Leaders"
          subtitle="We are proud to serve some of the most reputed organizations across India with reliable network infrastructure."
        />
      </div>

      {/* Carousel */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative w-full overflow-hidden mb-10 pause-on-hover"
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[var(--section-alt)] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[var(--section-alt)] to-transparent" />

        <div className="flex animate-marquee">
          {loop.map((client, i) => (
            <ClientLogo key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-3">
        <p className="text-sm text-muted">
          Serving 100+ clients across Telangana and beyond
        </p>
        <button
          onClick={() => setShowAll(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-amber-300 dark:border-amber-600 text-amber-700 dark:text-amber-400 text-sm font-semibold hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-all"
        >
          <LayoutGrid size={15} />
          View All Clients
        </button>
      </div>

      {showAll && <ViewAllModal onClose={() => setShowAll(false)} />}
    </section>
  );
}
