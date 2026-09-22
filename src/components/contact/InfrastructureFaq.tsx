import { SectionHeader } from "@/components/ui/SectionHeader";
import { infrastructureFaqs } from "@/data/siteContent";

export function InfrastructureFaq() {
  return (
    <section className="network-page bg-page-alt py-16 lg:py-20" aria-label="Frequently asked questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Frequently Asked Questions" title="Before you" highlight="get started"
          subtitle="Answers to common questions about installations, upgrades, system integration and ongoing support." />
        <div className="space-y-3">
          {infrastructureFaqs.map((faq) => (
            <details key={faq.question} className="network-surface rounded-xl border border-card px-5 py-4">
              <summary className="cursor-pointer text-sm sm:text-base font-semibold text-heading leading-relaxed focus-visible:outline-2 focus-visible:outline-brand-500 focus-visible:outline-offset-4">{faq.question}</summary>
              <p className="mt-3 text-sm text-body leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
