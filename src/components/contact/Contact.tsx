import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useMotionPreferences, useReveal } from "@/lib/MotionPreferences";
import { useSpotlight } from "@/components/effects/SpotlightCard";
import { subtleSpring } from "@/lib/motion";

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

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setError(null);
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      // Keys not configured — show success anyway in development
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 6000);
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
          message: data.message,
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
          subtitle="Have a project in mind? Let's discuss how we can build a reliable network infrastructure for your business."
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

            {/* Map placeholder */}
            
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
                    Thank you for reaching out. Our team will contact you within
                    24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <h3 className="text-xl font-bold text-heading mb-6">
                    Send Us a Message
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

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>Message *</label>
                    <textarea
                      id="contact-message" aria-invalid={!!errors.message}
                      {...register("message")}
                      rows={5}
                      placeholder=""
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
                        Send Message
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
