import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { X, Check, ArrowRight } from "lucide-react";

function ServiceCard({
  service,
  index,
  onClick,
}: {
  service: (typeof services)[0];
  index: number;
  onClick: () => void;
}) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: (index % 6) * 0.06 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="card group hover:border-brand-300 hover:shadow-sm transition-all duration-200 cursor-pointer select-none flex flex-col"
    >
      {/* Top accent line - bleeds to card edges */}
      <div
        className={cn(
          "h-0.5 bg-gradient-to-r rounded-full mb-5 opacity-70 group-hover:opacity-100 transition-opacity -mx-5",
          service.color,
        )}
      />

      {/* Icon */}
      <div
        className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br mb-4 shadow-sm group-hover:shadow-sm transition-shadow",
          service.color,
        )}
      >
        <service.icon size={22} className="text-surface-700" />
      </div>

      <h3 className="text-base font-semibold text-heading mb-2 leading-tight">
        {service.title}
      </h3>
      <p className="text-sm text-body leading-relaxed">{service.description}</p>
      
      {/* Micro-interaction 'Learn details' indicator */}
      <div className="mt-auto pt-6 flex items-center gap-1.5 text-xs font-bold text-brand-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <span>Learn details</span>
        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </motion.div>
  );
}

export function Services() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="services" className="pt-8 pb-20 lg:pt-10 lg:pb-24 bg-page-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What We Do"
          title="Our"
          highlight="Services"
          subtitle="Comprehensive network and communication solutions tailored for your business needs — from design to deployment and maintenance."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      {/* Modal Detail Overlay */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-page w-full max-w-2xl rounded-3xl border border-card shadow-2xl overflow-hidden relative"
            >
              {/* Top accent line matching gradient color */}
              <div className={cn("h-2 w-full bg-gradient-to-r", selectedService.color)} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-muted hover:text-heading hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="p-6 sm:p-8 space-y-6">
                {/* Header info */}
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br shadow-sm text-surface-700 shrink-0",
                      selectedService.color,
                    )}
                  >
                    <selectedService.icon size={26} />
                  </div>
                  <div>
                    <span className="badge mb-1.5">Our Service</span>
                    <h3 className="text-2xl font-bold text-heading leading-tight">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="space-y-5">
                  <p className="text-base text-body leading-relaxed">
                    {selectedService.detailedDesc}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-heading uppercase tracking-wider mb-3">
                      Key Highlights &amp; Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedService.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm"
                        >
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-500/10 text-brand-500 mt-0.5 shrink-0">
                            <Check size={12} className="stroke-[3]" />
                          </div>
                          <span className="text-sm text-gray-900 font-medium leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
