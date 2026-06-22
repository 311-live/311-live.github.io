import { motion } from 'framer-motion'
import { Activity, MapPin, BarChart2, Download } from 'lucide-react'
import { SITE } from '../content/siteContent'
import Section from './Section'

// Map icon name strings from siteContent → actual lucide components
const iconMap: Record<string, typeof Activity> = {
  Activity,
  MapPin,
  BarChart2,
  Download,
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function ProductSection() {
  return (
    <Section id="product" className="border-t border-brand-border">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-xs font-mono text-brand-yellow uppercase tracking-widest mb-4">
          Capabilities
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-white max-w-2xl">
          {SITE.features.sectionTitle}
        </h2>
      </motion.div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SITE.features.cards.map((card, i) => {
          const Icon = iconMap[card.icon] ?? Activity
          return (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              className="group bg-brand-surface border border-brand-border rounded-xl p-6 hover:border-brand-yellow/40 transition-colors duration-300"
            >
              <div className="mb-5">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-yellow/10 text-brand-yellow group-hover:bg-brand-yellow/20 transition-colors duration-300">
                  <Icon size={18} />
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{card.description}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
