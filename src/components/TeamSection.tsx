import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { SITE } from '../content/siteContent'
import Section from './Section'

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function TeamSection() {
  return (
    <Section id="team" className="border-t border-brand-light-border dark:border-brand-border bg-brand-light-bg dark:bg-brand-bg">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="mb-12"
      >
        <p className="text-xs font-mono text-brand-yellow uppercase tracking-widest mb-4">
          Team
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-text dark:text-white mb-4">
          {SITE.team.sectionTitle}
        </h2>
        <p className="text-lg text-brand-text-muted dark:text-slate-400 max-w-xl leading-relaxed">
          {SITE.team.body}
        </p>
      </motion.div>

      {/* Member cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SITE.team.members.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } }}
            className="bg-brand-light-surface dark:bg-brand-surface border border-brand-light-border dark:border-brand-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
          >
            {/* Photo or initials fallback */}
            {member.photo ? (
              <div className="h-48 overflow-hidden bg-brand-light-border dark:bg-brand-border">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ) : (
              <div className="h-48 bg-brand-yellow/10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center">
                  <span className="text-lg font-bold text-brand-bg tracking-wide">
                    {getInitials(member.name)}
                  </span>
                </div>
              </div>
            )}

            {/* Info */}
            <div className="p-6 flex flex-col gap-3 flex-1">
              <div>
                <div className="font-semibold text-brand-text dark:text-white mb-0.5">
                  {member.name}
                </div>
                <div className="text-sm text-brand-text-muted dark:text-slate-400">
                  {member.role}
                </div>
                <div className="text-xs text-brand-text-muted/70 dark:text-slate-500 mt-0.5 font-mono">
                  {member.org}
                </div>
              </div>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-brand-text-muted dark:text-slate-400 hover:text-brand-yellow transition-colors duration-150 mt-auto"
                aria-label={`${member.name} on LinkedIn`}
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
