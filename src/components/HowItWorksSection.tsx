import { motion } from 'framer-motion'
import { SITE } from '../content/siteContent'
import Section from './Section'

export default function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      className="border-t border-brand-light-border dark:border-brand-border bg-brand-light-surface dark:bg-brand-surface"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="mb-14"
      >
        <p className="text-xs font-mono text-brand-yellow uppercase tracking-widest mb-4">
          How It Works
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-text dark:text-white max-w-2xl">
          {SITE.howItWorks.sectionTitle}
        </h2>
      </motion.div>

      {/* 4-step flow */}
      <div className="relative mb-16">
        {/* Connector line: desktop only, runs through badge centers */}
        <div className="hidden lg:block absolute top-6 left-6 right-6 h-px bg-brand-light-border dark:bg-brand-border z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
          {SITE.howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="relative flex lg:flex-col gap-4"
            >
              <div className="relative z-10 w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-brand-bg">{step.number}</span>
              </div>
              <div className="pt-0.5 lg:pt-0">
                <h3 className="text-base font-semibold text-brand-text dark:text-white mb-1.5">
                  {step.headline}
                </h3>
                <p className="text-sm text-brand-text-muted dark:text-slate-400 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3 impact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {SITE.howItWorks.impact.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="bg-brand-light-bg dark:bg-brand-bg border border-brand-light-border dark:border-brand-border rounded-xl p-6"
          >
            <h3 className="text-base font-semibold text-brand-text dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-brand-text-muted dark:text-slate-400 leading-relaxed">
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
