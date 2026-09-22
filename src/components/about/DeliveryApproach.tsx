import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { deliveryApproach } from "@/data/siteContent";

export function DeliveryApproach() {
  return (
    <section className="network-page bg-page-alt py-16 lg:py-20" aria-label="Our approach and commitment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Our Approach" title="From requirement" highlight="to ongoing support"
          subtitle="Our objective is dependable infrastructure that helps you operate securely, efficiently and confidently. We plan around your site, budget and future needs." />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {deliveryApproach.map((step, index) => (
            <li key={step.title} className="network-surface rounded-xl border border-card p-6">
              <span className="text-xs font-semibold text-brand-700">0{index + 1}</span>
              <h3 className="text-lg font-semibold text-heading mt-3 mb-2">{step.title}</h3>
              <p className="text-sm text-body leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 border-l-2 border-brand-300 pl-6 max-w-3xl">
          <h3 className="text-xl font-semibold text-heading mb-3">Quality beyond the equipment</h3>
          <p className="text-sm text-body leading-relaxed">Our commitment includes the planning, workmanship, configuration, testing and documentation that accompany each installation. Handover and ongoing support are part of the conversation from the start.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-brand-700 mt-4">Discuss your requirements <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
