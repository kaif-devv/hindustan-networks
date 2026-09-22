import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { maintenanceCoverage, maintenanceBenefits } from "@/data/siteContent";

export function MaintenanceSupport() {
  return (
    <section className="network-page bg-page py-16 lg:py-20" aria-label="Annual maintenance and technical support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="AMC & Support" title="Keep your infrastructure" highlight="running"
          subtitle="Installation is the beginning. Regular inspection, preventive maintenance and technical assistance help keep your systems ready for daily use." />
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="network-surface rounded-xl border border-card p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-heading mb-4">Coverage built around your systems</h3>
            <ul className="space-y-3">
              {maintenanceCoverage.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-body leading-relaxed"><Check size={16} className="shrink-0 mt-0.5 text-brand-700" aria-hidden="true" />{item}</li>)}
            </ul>
            <p className="mt-5 text-sm text-muted leading-relaxed">Equipment eligibility, preventive visits, response arrangements and any replacement coverage are agreed as part of your contract.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 content-start">
            {maintenanceBenefits.map((item) => <div key={item.title}><h3 className="text-base font-semibold text-heading mb-2">{item.title}</h3><p className="text-sm text-body leading-relaxed">{item.description}</p></div>)}
            <div className="sm:col-span-2"><Link to="/contact?service=Annual%20Maintenance%20Contracts" className="btn-brand">Request AMC support <ArrowRight size={16} aria-hidden="true" /></Link></div>
          </div>
        </div>
      </div>
    </section>
  );
}
