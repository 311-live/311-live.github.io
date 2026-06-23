import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { SITE } from '../content/siteContent'
import Button from './Button'

// ── Animated signal dots ───────────────────────────────────────────────────

interface SignalDot {
  id: number
  x: number
  y: number
  delay: number
  size: number
  repeatDelay: number
}

function LiveSignalGrid() {
  const dots = useMemo<SignalDot[]>(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 8,
        size: Math.random() * 3 + 1.5,
        repeatDelay: Math.random() * 6 + 2,
      })),
    [],
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hero-fade-bottom">
      <div className="absolute inset-0 hero-grid-bg" />
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
            backgroundColor: '#fff200',
          }}
          animate={{ opacity: [0, 0.85, 0], scale: [0.4, 2.2, 0.4] }}
          transition={{
            duration: 2.8,
            delay: dot.delay,
            repeat: Infinity,
            repeatDelay: dot.repeatDelay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// ── AI Conversation card ───────────────────────────────────────────────────

function ConversationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
      className="relative bg-brand-light-surface dark:bg-brand-surface border border-brand-light-border dark:border-brand-border rounded-2xl p-6 card-glow-light dark:card-glow w-full"
    >
      {/* Card header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-brand-light-border dark:border-brand-border">
        <span className="text-xs font-mono text-brand-text-muted dark:text-slate-500 uppercase tracking-widest">
          311-LIVE · LIVE SESSION
        </span>
        <div className="flex items-center gap-2">
          <motion.span
            className="w-2 h-2 rounded-full bg-green-400"
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-xs font-mono text-green-400 uppercase tracking-wider">Live</span>
        </div>
      </div>

      {/* Agent message */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="mb-4"
      >
        <div className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest mb-1.5">
          Agent
        </div>
        <div className="bg-brand-light-bg dark:bg-brand-bg border border-brand-light-border dark:border-brand-border rounded-xl rounded-tl-sm px-4 py-3 text-sm text-brand-text dark:text-slate-300 leading-relaxed max-w-[92%]">
          I can see standing water blocking the crosswalk. Can you confirm this is near P.S. 147?
        </div>
      </motion.div>

      {/* Resident message */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="mb-5 flex flex-col items-end"
      >
        <div className="text-[10px] font-mono text-brand-text-muted dark:text-slate-500 uppercase tracking-widest mb-1.5">
          Resident
        </div>
        <div className="bg-brand-yellow/10 border border-brand-yellow/20 rounded-xl rounded-tr-sm px-4 py-3 text-sm text-brand-text dark:text-white leading-relaxed max-w-[85%]">
          Yes, been here since last night
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-brand-light-border dark:border-brand-border mb-4" />

      {/* Auto-generated report preview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="text-xs font-mono text-brand-text-muted dark:text-slate-500 uppercase tracking-widest mb-3">
          Auto-generated report
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/20 rounded-full px-2.5 py-0.5">
              Flooding
            </span>
            <span className="text-xs text-brand-text-muted dark:text-slate-400">School crossing</span>
          </div>
          <div className="text-xs text-brand-text-muted dark:text-slate-500 font-mono">
            Greenpoint Ave · P.S. 147
          </div>
          <motion.div
            className="flex items-center gap-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.85, duration: 0.4 }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-xs font-mono text-green-400 uppercase tracking-wider">
              Ready to submit
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── Hero section ───────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-light-bg dark:bg-brand-bg pt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light-bg via-[#f0ede6] to-[#e8e4dc] dark:from-brand-bg dark:via-[#0a1020] dark:to-[#050912]" />

      {/* Animated grid + signal dots */}
      <LiveSignalGrid />

      {/* Radial glow behind content */}
      <div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,242,0,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: copy + CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-7"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 border border-brand-cyan/30 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-xs font-mono text-brand-cyan tracking-widest uppercase">
                {SITE.hero.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text dark:text-white leading-[1.1]">
              {SITE.hero.headline}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-brand-text-muted dark:text-slate-400 leading-relaxed max-w-xl">
              {SITE.hero.subtitle}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-1">
              {SITE.hero.ctas.map((cta, i) => (
                <Button
                  key={cta.label}
                  label={cta.label}
                  href={cta.href}
                  variant={i === 0 ? 'primary' : 'secondary'}
                  size="lg"
                />
              ))}
            </div>
          </motion.div>

          {/* ── Right: AI conversation card ── */}
          <ConversationCard />
        </div>
      </div>
    </section>
  )
}
