import { motion } from 'framer-motion'
import { SITE } from '../content/siteContent'
import Section from './Section'

export default function AboutSection() {
  return (
    <Section id="about" className="border-t border-brand-light-border dark:border-brand-border bg-brand-light-bg dark:bg-brand-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-6"
        >
          <div>
            <p className="text-xs font-mono text-brand-yellow uppercase tracking-widest mb-4">
              {SITE.about.eyebrow}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-text dark:text-white leading-[1.15] mb-5">
              {SITE.about.headline}
            </h2>
            <p className="text-lg text-brand-text-muted dark:text-slate-400 leading-relaxed mb-4">
              {SITE.about.body1}
            </p>
            <p className="text-lg text-brand-text-muted dark:text-slate-400 leading-relaxed">
              {SITE.about.body2}
            </p>
          </div>
          <p className="text-base text-brand-text-muted dark:text-slate-400 leading-relaxed border-l-2 border-brand-yellow pl-4">
            {SITE.about.dtprNote}
          </p>
        </motion.div>

        {/* Right: stat card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="bg-brand-light-surface dark:bg-brand-surface border border-brand-light-border dark:border-brand-border rounded-2xl p-8 shadow-sm">
            <div className="text-5xl font-bold text-brand-text dark:text-white tracking-tight mb-2">
              {SITE.about.stat.value}
            </div>
            <p className="text-base text-brand-text-muted dark:text-slate-400 leading-relaxed mb-7">
              {SITE.about.stat.label}
            </p>
            <div className="space-y-3">
              {SITE.about.bullets.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-[7px] shrink-0" />
                  <span className="text-sm text-brand-text-muted dark:text-slate-400">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  )
}
