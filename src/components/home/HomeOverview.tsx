import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SpotlightCard } from "@/components/effects/SpotlightCard";
import { integratedSolutions, deliveryCommitments } from "@/data/siteContent";

const coreServices = [
  "Structured Cabling", "CCTV Surveillance", "Active & Passive Networks", "WiFi & Wireless",
  "Access Control & Biometrics", "Optical Fiber", "Server & Data Center Setup", "Firewalls & Network Security",
  "Audio & Video Conferencing", "Home & Office Automation", "Intercom & Video Door Phones", "AMC & IT Support",
];

export function HomeOverview() {
  return (
    <div className="network-page">
      <section className="bg-page py-16 lg:py-20" aria-label="Core technology services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Core Solutions" title="Technology infrastructure" highlight="you can depend on"
            subtitle="From a single-site upgrade to an integrated deployment, we bring network, communication, security and IT systems together for businesses, institutions and residential projects." />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {coreServices.map((service) => (
              <li key={service} className="flex items-start gap-3 text-sm text-body leading-relaxed">
                <Check size={16} className="mt-0.5 shrink-0 text-brand-700" aria-hidden="true" />{service}
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center"><Link to="/services" className="btn-outline">Explore all services <ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="bg-page-alt py-16 lg:py-20" aria-label="Integrated technology solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Integrated Solutions" title="Built around" highlight="your environment"
            subtitle="Choose a coordinated solution for the way your site operates, with the right mix of connectivity, security, communication and support." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {integratedSolutions.map((solution) => (
              <SpotlightCard key={solution.title} className="rounded-xl border border-card p-6">
                <div className="relative">
                  <div className="signal-icon flex items-center justify-center h-11 w-11 rounded-xl mb-4"><solution.icon size={23} aria-hidden="true" /></div>
                  <h3 className="text-lg font-semibold text-heading mb-2">{solution.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{solution.description}</p>
                  <p className="text-xs text-muted leading-relaxed mt-4 pt-4 border-t border-card">{solution.applications}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-page py-16 lg:py-20" aria-label="Why choose Hindustan Networks">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Why Hindustan Networks" title="Professional execution." highlight="Long-term support."
            subtitle="Practical planning, quality-focused implementation and ongoing care for the infrastructure your people use every day." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7">
            {deliveryCommitments.map((item) => (
              <div key={item.title} className="border-l-2 border-brand-200 pl-5">
                <h3 className="text-base font-semibold text-heading mb-2">{item.title}</h3>
                <p className="text-sm text-body leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-xl border border-card bg-white/70 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-heading mb-2">A solution for your site</h3>
              <p className="text-sm text-body leading-relaxed">Offices, education, healthcare, hospitality, retail, industrial facilities, residential communities, public institutions, warehouses and data centers.</p>
              <Link to="/industries" className="inline-flex items-center gap-2 text-sm text-brand-700 mt-3">Explore the sectors we serve <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
            <Link to="/contact" className="btn-brand shrink-0 self-start lg:self-center">Request a consultation <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
