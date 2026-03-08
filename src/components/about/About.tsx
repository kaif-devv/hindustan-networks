import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutStats, aboutValues, aboutHighlights } from "@/data/aboutData";

function StatCard({
  icon: Icon,
  value,
  label,
  desc,
  index,
}: (typeof aboutStats)[0] & { index: number }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="card group hover:border-amber-400/40 transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-500/20 border border-amber-200 dark:border-amber-500/30 mb-4 group-hover:bg-amber-200 dark:group-hover:bg-amber-500/30 transition-colors">
        <Icon size={22} className="text-amber-600 dark:text-amber-400" />
      </div>
      <div className="text-3xl font-black text-heading mb-1">{value}</div>
      <div className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2">
        {label}
      </div>
      <div className="text-xs text-muted leading-relaxed">{desc}</div>
    </motion.div>
  );
}

export function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-page overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Us"
          title="Building Digital"
          highlight="Infrastructure"
          subtitle="Hindustan Networks LLP is a leading provider of end-to-end network and communication infrastructure solutions serving businesses in and around Shadnagar, Telangana."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 mb-4">
              <MapPin size={14} />
              <span>Shadnagar, Telangana, India</span>
            </div>
            <h3 className="text-3xl font-bold text-heading mb-6 leading-tight">
              Your Trusted Partner in{" "}
              <span className="gradient-text">Network Excellence</span>
            </h3>
            <p className="text-body leading-relaxed mb-6">
              Since 2017, Hindustan Networks LLP has been at the forefront of
              delivering comprehensive network and communication solutions to
              enterprises, institutions and government bodies. Our expertise
              spans structured cabling, fiber optics, enterprise WiFi,
              surveillance, and cloud infrastructure.
            </p>
            <div className="space-y-3">
              {aboutValues.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-body"
                >
                  <v.icon size={16} className="text-amber-500 shrink-0" />
                  {v.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: professional highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {aboutHighlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.45, delay: 0.25 + i * 0.1 }}
                  className="card text-center py-8 hover:border-amber-400/40 hover:shadow-md transition-all"
                >
                  <div className="text-4xl font-black gradient-text mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted font-medium">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {aboutStats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
