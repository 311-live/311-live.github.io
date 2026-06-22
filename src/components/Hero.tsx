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
      {/* Fine city-grid lines */}
      <div className="absolute inset-0 hero-grid-bg" />
      {/* Pulsing signal dots */}
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

// ── Dashboard mockup card ──────────────────────────────────────────────────

function DashboardCard() {
  const maxPct = Math.max(...SITE.hero.categories.map((c) => c.pct))

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
      className="relative bg-brand-surface border border-brand-border rounded-2xl p-6 card-glow w-full"
    >
      {/* Card header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-brand-border">
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
          311-LIVE DASHBOARD
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

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-5">
        {SITE.hero.liveStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
          >
            <div
              className={[
                'text-xl font-bold tracking-tight',
                i === 1 ? 'text-brand-yellow' : 'text-white',
              ].join(' ')}
            >
              {stat.value}
            </div>
            <div className="text-xs text-slate-500 mt-0.5 uppercase tracking-wide font-mono">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-brand-border mb-4" />

      {/* Category breakdown bars */}
      <div>
        <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
          Category Breakdown
        </div>
        <div className="space-y-3">
          {SITE.hero.categories.map((cat, i) => (
            <div key={cat.name}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-slate-400">{cat.name}</span>
                <span className="text-slate-500 font-mono">{cat.pct}%</span>
              </div>
              <div className="h-1 bg-brand-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: cat.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(cat.pct / maxPct) * 88}%` }}
                  transition={{ duration: 1.2, delay: 0.9 + i * 0.15, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── Hero section ───────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-bg pt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-[#0a1020] to-[#050912]" />

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
            transition={{ duration: 0.8, ease: 'easeOut' }}
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              {SITE.hero.headline}
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
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

          {/* ── Right: dashboard mockup ── */}
          <DashboardCard />
        </div>
      </div>
    </section>
  )
}
