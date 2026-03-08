import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/SectionHeader'

// ─── EmailJS config ───────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Create an Email Service (Gmail / Outlook / etc.)
// 3. Create an Email Template — use these variables:
//    {{from_name}}, {{from_email}}, {{phone}}, {{subject}}, {{message}}
// 4. Copy your keys to .env.local
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || ''
// ─────────────────────────────────────────────────────────────────────────────

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9849533913',
    href: 'tel:+919849533913',
    color: 'bg-amber-100 dark:bg-amber-500/20 border-amber-200 dark:border-amber-500/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@hindustannetworks.com',
    href: 'mailto:info@hindustannetworks.com',
    color: 'bg-orange-100 dark:bg-orange-500/20 border-orange-200 dark:border-orange-500/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '#1-105 Suleman Colony, Shadnagar – 509216, Telangana, India',
    href: 'https://maps.google.com/?q=Shadnagar,Telangana',
    color: 'bg-yellow-100 dark:bg-yellow-500/20 border-yellow-200 dark:border-yellow-500/30',
    iconColor: 'text-yellow-700 dark:text-yellow-400',
  },
]

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border-2 border-amber-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all'
const labelClass = 'block text-xs text-muted font-semibold mb-1.5 tracking-wide uppercase'

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setError(null)
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      // Keys not configured — show success anyway in development
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 6000)
      return
    }
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || 'Not provided',
          subject: data.subject,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 6000)
    } catch {
      setError('Failed to send message. Please try again or call us directly.')
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contact Us"
          title="Get In"
          highlight="Touch"
          subtitle="Have a project in mind? Let's discuss how we can build a reliable network infrastructure for your business."
        />

        <div ref={ref} className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="card mb-2">
              <h3 className="text-xl font-bold text-heading mb-1">Hindustan Networks LLP</h3>
              <p className="text-sm text-muted">Your trusted network infrastructure partner</p>
            </div>

            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === 'Address' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="card group flex items-start gap-4 hover:border-amber-400/40 hover:shadow-sm transition-all duration-300 p-5"
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl border shrink-0 ${item.color}`}>
                  <item.icon size={17} className={item.iconColor} />
                </div>
                <div>
                  <div className="text-xs text-muted font-semibold uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-sm text-body group-hover:text-heading transition-colors font-medium leading-relaxed">
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card flex items-center justify-center h-40 hover:border-amber-400/40 transition-all"
            >
              <div className="text-center">
                <MapPin size={28} className="text-amber-500/60 mx-auto mb-2" />
                <p className="text-xs text-muted">Shadnagar, Telangana</p>
                <p className="text-xs text-muted/60">509216</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="card p-7 lg:p-9">
              {/* Amber top accent - bleeds to card edges */}
              <div className="h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-t-[calc(1rem-1px)] -mx-7 lg:-mx-9 -mt-7 lg:-mt-9 mb-7" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30">
                    <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-heading">Message Sent!</h3>
                  <p className="text-muted text-sm max-w-xs">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <h3 className="text-xl font-bold text-heading mb-6">Send Us a Message</h3>

                  {error && (
                    <div className="px-4 py-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-sm text-red-600 dark:text-red-400">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Your Name *</label>
                      <input {...register('name')} className={inputClass} />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input {...register('email')} type="email" className={inputClass} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input {...register('phone')} type="tel" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Subject *</label>
                      <input {...register('subject')} className={inputClass} />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Message *</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder=""
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" variant="gradient" size="lg" disabled={isSubmitting} className="w-full group">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-gray-900/30 border-t-gray-900 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
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
  )
}
