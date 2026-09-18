import { useId, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { ServiceDetailDialog } from "./ServiceDetailDialog";
import { ServicesHeader } from "./ServicesHeader";
import "./services.css";

export function Services() {
  const groupId = useId();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const returnFocusRef = useRef<HTMLButtonElement | null>(null);

  return (
    <LayoutGroup id={groupId}>
      <section id="services" aria-labelledby="services-heading" className="network-page services-page pt-8 pb-20 lg:pt-10 lg:pb-24 bg-page-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesHeader />
          <ul className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" aria-label="Our services">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                layoutId={`service-${index}`}
                selected={selectedIndex === index}
                dialogOpen={selectedIndex !== null}
                onOpen={(trigger) => {
                  returnFocusRef.current = trigger;
                  setSelectedIndex(index);
                }}
              />
            ))}
          </ul>
        </div>
        <AnimatePresence initial={false}>
          {selectedIndex !== null && (
            <ServiceDetailDialog
              key={selectedIndex}
              service={services[selectedIndex]}
              layoutId={`service-${selectedIndex}`}
              returnFocusRef={returnFocusRef}
              onClose={() => setSelectedIndex(null)}
            />
          )}
        </AnimatePresence>
      </section>
    </LayoutGroup>
  );
}
