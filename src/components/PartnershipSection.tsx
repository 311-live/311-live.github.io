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
    <Section id="partnership" className="border-t border-brand-light-border bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-2xl mb-16"
      >
        <p className="text-xs font-mono text-brand-yellow uppercase tracking-widest mb-4">
          Partnership
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-text mb-5">
          {SITE.partnership.sectionTitle}
        </h2>
        <p className="text-lg text-brand-text-muted leading-relaxed">
          {SITE.partnership.body}
        </p>
      </motion.div>

      {/* Editorial numbered modes */}
      <div className="mb-14">
        {SITE.partnership.modes.map((mode, i) => {
          const Icon = iconMap[mode.icon] ?? Building2
          return (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              {i > 0 && <div className="border-t border-brand-light-border" />}
              <div className="py-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start">
                {/* Number + icon */}
                <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-2">
                  <span className="text-4xl font-bold text-brand-light-border select-none leading-none">
                    {mode.number}
                  </span>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-yellow/10 text-brand-yellow">
                    <Icon size={18} />
                  </span>
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-brand-text mb-3">{mode.title}</h3>
                  <p className="text-base text-brand-text-muted leading-relaxed max-w-xl">
                    {mode.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
        <div className="border-t border-brand-light-border" />
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
