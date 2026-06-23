import { motion } from 'framer-motion'
import { Mic, FileText, ShieldCheck, GitBranch } from 'lucide-react'
import { SITE } from '../content/siteContent'
import Section from './Section'

const iconMap: Record<string, typeof Mic> = {
  Mic,
  FileText,
  ShieldCheck,
  GitBranch,
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] },
  }),
}

export default function ProductSection() {
  return (
    <Section id="product" className="border-t border-brand-light-border bg-brand-light-bg">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="mb-14"
      >
        <p className="text-xs font-mono text-brand-yellow uppercase tracking-widest mb-4">
          Capabilities
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-text max-w-2xl">
          {SITE.features.sectionTitle}
        </h2>
      </motion.div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SITE.features.cards.map((card, i) => {
          const Icon = iconMap[card.icon] ?? Mic
          return (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } }}
              className="group bg-brand-light-surface border border-brand-light-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default"
            >
              <div className="mb-5">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-yellow/10 text-brand-yellow group-hover:bg-brand-yellow/20 transition-colors duration-200">
                  <Icon size={18} />
                </span>
              </div>
              <h3 className="text-base font-semibold text-brand-text mb-2">{card.title}</h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">{card.description}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
