import { motion } from 'framer-motion'
import { Building2, BookOpen, Newspaper } from 'lucide-react'
import { SITE } from '../content/siteContent'
import Section from './Section'
import Button from './Button'

const iconMap: Record<string, typeof Building2> = {
  Building2,
  BookOpen,
  Newspaper,
}

export default function PartnershipSection() {
  return (
    <Section id="partnership" className="border-t border-brand-border bg-brand-surface/40">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-12"
      >
        <p className="text-xs font-mono text-brand-yellow uppercase tracking-widest mb-4">
          Partnership
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          {SITE.partnership.sectionTitle}
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed">
          {SITE.partnership.body}
        </p>
      </motion.div>

      {/* Partnership mode cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {SITE.partnership.modes.map((mode, i) => {
          const Icon = iconMap[mode.icon] ?? Building2
          return (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-brand-surface border border-brand-border rounded-xl p-7 flex flex-col gap-4"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-yellow/10 text-brand-yellow">
                <Icon size={18} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white mb-2">{mode.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{mode.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button
          label={SITE.partnership.cta.label}
          href={SITE.partnership.cta.href}
          variant="primary"
          size="lg"
        />
      </motion.div>
    </Section>
  )
}
