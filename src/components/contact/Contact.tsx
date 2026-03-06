import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/SectionHeader'

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
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@hindustannetworks.com',
    href: 'mailto:info@hindustannetworks.com',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '#1-105 Suleman Colony, Shadnagar – 509216, Telangana, India',
    href: 'https://maps.google.com/?q=Shadnagar,Telangana',
    gradient: 'from-indigo-500 to-blue-600',
  },
]

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.06)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 mb-2">
              <h3 className="text-xl font-bold text-white mb-1">Hindustan Networks LLP</h3>
              <p className="text-sm text-white/50">Your trusted network infrastructure partner</p>
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
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-white/20 hover:bg-white/8 transition-all duration-300"
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} shrink-0 shadow-md`}>
                  <item.icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-sm text-white/80 group-hover:text-white transition-colors font-medium leading-relaxed">
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
              className="rounded-2xl overflow-hidden border border-white/10 h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin size={28} className="text-blue-400/60 mx-auto mb-2" />
                <p className="text-xs text-white/30">Shadnagar, Telangana</p>
                <p className="text-xs text-white/20">509216</p>
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
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 lg:p-9 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600/40 via-cyan-400/40 to-transparent" />
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-blue-600/10 blur-2xl" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-white/50 text-sm max-w-xs">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-5">
                  <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/50 font-medium mb-1.5 tracking-wide uppercase">Your Name *</label>
                      <input
                        {...register('name')}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 font-medium mb-1.5 tracking-wide uppercase">Email Address *</label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/50 font-medium mb-1.5 tracking-wide uppercase">Phone Number</label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 font-medium mb-1.5 tracking-wide uppercase">Subject *</label>
                      <input
                        {...register('subject')}
                        placeholder="Project Inquiry"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      />
                      {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/50 font-medium mb-1.5 tracking-wide uppercase">Message *</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Tell us about your project requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all resize-none"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
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
