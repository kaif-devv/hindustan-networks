import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useMotionPreferences, useReveal } from "@/lib/MotionPreferences";
import { useSpotlight } from "@/components/effects/SpotlightCard";
import { subtleSpring } from "@/lib/motion";
import { services } from "@/data/services";
import { enquirySchema, formatEnquiryMessage, type Enquiry } from "@/lib/enquiry";

// ─── EmailJS config ───────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Create an Email Service (Gmail / Outlook / etc.)
// 3. Create an Email Template — use these variables:
//    {{from_name}}, {{from_email}}, {{phone}}, {{subject}}, {{message}}
// 4. Copy your keys to .env.local
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
// ─────────────────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9849533913",
    href: "tel:+919849533913",
    color: "bg-brand-50 border-brand-100",
    iconColor: "text-brand-700",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@hindustannetworks.com",
    href: "mailto:info@hindustannetworks.com",
    color: "bg-brand-50 border-brand-100",
    iconColor: "text-brand-700",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "#1-105, first floor, Shadnagar, Future City – 509216, Telangana, India",
    href: "https://maps.app.goo.gl/PdNCabdtoV9dRkcA6",
    color: "bg-brand-50 border-brand-100",
    iconColor: "text-brand-700",
  },
];

const inputClass =
  "network-input w-full px-4 py-3 rounded-xl bg-white border border-brand-100 text-body text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-400/15 transition-colors";
const labelClass =
  "block text-xs text-muted font-semibold mb-1.5 tracking-wide uppercase";

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const reveal = useReveal(inView);
  const { reduced } = useMotionPreferences();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("service") || "";
  const selectedService = services.some((service) => service.title === requestedService) ? requestedService : "";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Enquiry>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { service: selectedService, subject: selectedService ? `Enquiry: ${selectedService}` : "" },
  });

  const onSubmit = async (data: Enquiry) => {
    setError(null);
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError("Online enquiries are currently unavailable. Please call +91 9849533913 or email info@hindustannetworks.com. Your details have been kept in the form.");
      return;
    }
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "Not provided",
          subject: data.subject,
          message: formatEnquiryMessage(data),
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 6000);
    } catch {
      setError("Failed to send message. Please try again or call us directly.");
    }
  };

  return (
    <section id="contact" className="network-page pt-8 pb-20 lg:pt-10 lg:pb-24 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          ambient="calm"
          badge="Contact Us"
          title="Get In"
          highlight="Touch"
          subtitle="Planning a new project, upgrade, security installation or maintenance contract? Tell us about your site and requirements so we can recommend a practical next step."
        />

        <div ref={ref} className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            {...reveal}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="card mb-2">
              <h3 className="text-xl font-bold text-heading mb-1">
                Hindustan Networks{" "}
              </h3>
              <p className="text-sm text-muted">
                Your trusted network infrastructure partner
              </p>
            </div>

            {contactInfo.map((item, i) => <ContactInfoCard key={item.label} item={item} index={i} active={inView} />)}

            <div className="network-surface rounded-xl border border-card p-5">
              <h3 className="text-base font-semibold text-heading mb-2">What happens next?</h3>
              <p className="text-sm text-body leading-relaxed">We review your requirement, discuss the existing systems and site conditions, then recommend the scope and whether a site survey is needed. Share your location, priorities and any planned timeline to help us prepare.</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            {...reveal}
            className="lg:col-span-3"
          >
            <div className="card contact-form-card p-7 lg:p-9">
              {/* Amber top accent - bleeds to card edges */}
              <div className="h-1 bg-gradient-to-r from-brand-600 to-brand-300 rounded-t-[calc(1rem-1px)] -mx-7 lg:-mx-9 -mt-7 lg:-mt-9 mb-7" />

              {submitted ? (
                <motion.div
                  initial={reduced ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: reduced ? 0 : 0.3 }}
                  role="status"
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 border border-brand-100">
                    <CheckCircle size={32} className="text-brand-700" />
                  </div>
                  <h3 className="text-xl font-bold text-heading">
                    Message Sent!
                  </h3>
                  <p className="text-muted text-sm max-w-xs">
                    Thank you for reaching out. Our team will review your
                    requirements and get in touch using the details you provided.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <h3 className="text-xl font-bold text-heading mb-6">
                    Request a Consultation
                  </h3>

                  {error && (
                    <motion.div role="alert" initial={reduced ? false : { opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.2 }} className="px-4 py-3 rounded-xl bg-brand-50 border border-brand-200 text-sm text-brand-700">
                      {error}
                    </motion.div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>Your Name *</label>
                      <input id="contact-name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} className={inputClass} />
                      {errors.name && (
                        <p className="text-brand-700 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>Email Address *</label>
                      <input
                        id="contact-email" autoComplete="email" aria-invalid={!!errors.email}
                        {...register("email")}
                        type="email"
                        className={inputClass}
                      />
                      {errors.email && (
                        <p className="text-brand-700 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-phone" className={labelClass}>Phone Number</label>
                      <input
                        id="contact-phone" autoComplete="tel"
                        {...register("phone")}
                        type="tel"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className={labelClass}>Subject *</label>
                      <input id="contact-subject" aria-invalid={!!errors.subject} {...register("subject")} className={inputClass} />
                      {errors.subject && (
                        <p className="text-brand-700 text-xs mt-1">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-company" className={labelClass}>Company / Organization</label>
                      <input id="contact-company" autoComplete="organization" {...register("company")} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="contact-location" className={labelClass}>Project Location</label>
                      <input id="contact-location" {...register("location")} placeholder="City or site location" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className={labelClass}>Service Required</label>
                    <select id="contact-service" {...register("service")} className={inputClass}>
                      <option value="">Select a service (optional)</option>
                      {services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}
                      <option value="Other / Multiple services">Other / Multiple services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>Project Details *</label>
                    <textarea
                      id="contact-message" aria-invalid={!!errors.message}
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your site, existing systems, priorities and preferred timeline."
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-brand-700 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    disabled={isSubmitting}
                    className="network-submit w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-gray-900/30 border-t-gray-900 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Request a Consultation
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoCard({ item, index, active }: { item: (typeof contactInfo)[number]; index: number; active: boolean }) {
  const reveal = useReveal(active, index);
  const light = useSpotlight();
  const { pointer } = useMotionPreferences();
  return <motion.a href={item.href} target={item.label === "Address" ? "_blank" : undefined} rel="noopener noreferrer"
    {...reveal} {...light} whileHover={pointer ? { y: -2, transition: subtleSpring } : undefined}
    className="network-surface spotlight-card card group flex items-start gap-4 p-5">
    <div className={`signal-icon flex items-center justify-center w-10 h-10 rounded-xl border shrink-0 ${item.color}`}><item.icon size={17} className={item.iconColor} /></div>
    <div className="min-w-0"><div className="text-xs text-muted font-semibold uppercase tracking-wider mb-1">{item.label}</div><div className="contact-info-value text-sm text-body group-hover:text-heading transition-colors font-medium leading-relaxed">{item.value}</div></div>
  </motion.a>;
}
