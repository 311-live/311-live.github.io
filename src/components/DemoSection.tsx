import { useState, useRef, useMemo } from 'react'
import type { RefObject } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play } from 'lucide-react'
import { SITE } from '../content/siteContent'
import Section from './Section'

interface PulseDot { id: number; x: number; y: number; delay: number }

function PanelBackground() {
  const dots = useMemo<PulseDot[]>(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
      })),
    [],
  )

  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,242,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,242,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-brand-yellow"
          style={{ left: `${dot.x}%`, top: `${dot.y}%`, width: 3, height: 3 }}
          animate={{ opacity: [0, 0.4, 0], scale: [0.5, 2.5, 0.5] }}
          transition={{
            duration: 3,
            delay: dot.delay,
            repeat: Infinity,
            repeatDelay: dot.delay + 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

interface PhoneMockupProps {
  isPlaying: boolean
  onPlay:    () => void
  onPause:   () => void
  videoRef:  RefObject<HTMLVideoElement>
}

function PhoneMockup({ isPlaying, onPlay, onPause, videoRef }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto" style={{ width: 'min(72vw, 288px)' }}>
      <div className="absolute left-0 -translate-x-full pointer-events-none" style={{ top: '11%' }}>
        <div className="rounded-l-[2px]" style={{ width: 3, height: 22, background: '#2d2d2f' }} />
      </div>
      <div className="absolute left-0 -translate-x-full pointer-events-none flex flex-col" style={{ top: '21%', gap: 11 }}>
        <div className="rounded-l-[2px]" style={{ width: 3, height: 42, background: '#2d2d2f' }} />
        <div className="rounded-l-[2px]" style={{ width: 3, height: 42, background: '#2d2d2f' }} />
      </div>
      <div className="absolute right-0 translate-x-full pointer-events-none" style={{ top: '24%' }}>
        <div className="rounded-r-[2px]" style={{ width: 3, height: 70, background: '#2d2d2f' }} />
      </div>
      <div
        className="relative bg-[#1c1c1e]"
        style={{
          borderRadius: 46,
          border: '2.5px solid #3a3a3c',
          padding: 11,
          boxShadow: [
            'inset 0 1.5px 0 rgba(255,255,255,0.07)',
            'inset 0 -1px 0 rgba(0,0,0,0.5)',
            '0 0 0 0.5px rgba(255,255,255,0.04)',
            '0 0 0 1.5px rgba(255,242,0,0.11)',
            '0 32px 80px rgba(0,0,0,0.35)',
            '0 8px 20px rgba(0,0,0,0.2)',
          ].join(', '),
        }}
      >
        <div className="relative overflow-hidden bg-black" style={{ borderRadius: 36, aspectRatio: '390 / 844' }}>
          <div
            className="absolute z-20 bg-black pointer-events-none"
            style={{ top: 8, left: '50%', transform: 'translateX(-50%)', width: 112, height: 26, borderRadius: '0 0 18px 18px' }}
          >
            <div className="absolute rounded-full" style={{ width: 44, height: 3, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#2c2c2e' }} />
          </div>
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-contain bg-black"
            poster={SITE.demo.posterPath}
            playsInline
            onEnded={onPause}
          >
            <source src={SITE.demo.videoPath} type="video/mp4" />
          </video>
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 cursor-pointer"
                style={{ background: 'rgba(0,0,0,0.4)' }}
                onClick={onPlay}
                role="button"
                aria-label="Play demo"
              >
                <motion.div
                  whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                  whileTap={{ scale: 0.92 }}
                  className="w-14 h-14 rounded-full bg-brand-yellow flex items-center justify-center"
                  style={{ boxShadow: '0 8px 32px rgba(255,242,0,0.4)' }}
                >
                  <Play size={20} className="text-brand-bg ml-1" fill="currentColor" />
                </motion.div>
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                  Tap to play
                </span>
              </motion.div>
            )}
          </AnimatePresence>
          {isPlaying && (
            <div className="absolute inset-0 z-10 cursor-pointer" onClick={onPause} aria-label="Pause demo" />
          )}
          <div
            className="absolute inset-0 z-30 pointer-events-none"
            style={{ borderRadius: 36, background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 42%)' }}
          />
        </div>
      </div>
    </div>
  )
}

export default function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => { setIsPlaying(true); videoRef.current?.play() }
  const handlePause = () => { setIsPlaying(false); videoRef.current?.pause() }

  return (
    <Section id="demo" className="border-t border-brand-light-border dark:border-brand-border bg-brand-light-bg dark:bg-brand-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Left: demo panel */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
        >
          {SITE.demo.embedUrl ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-brand-light-border dark:border-brand-border">
              <iframe
                src={SITE.demo.embedUrl}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="311-live product demo"
              />
            </div>
          ) : (
            <div
              className="relative rounded-2xl bg-brand-light-surface dark:bg-brand-surface border border-brand-light-border dark:border-brand-border py-10 px-8 sm:py-14 sm:px-12 flex items-center justify-center shadow-sm"
            >
              <PanelBackground />
              {SITE.demo.badges.map((badge) => (
                <div
                  key={badge.label}
                  className={[
                    'hidden sm:flex absolute z-10 items-center gap-1.5',
                    'bg-white/90 dark:bg-brand-surface/90 border border-brand-light-border dark:border-brand-border backdrop-blur-sm',
                    'rounded-full px-2.5 py-1 shadow-sm',
                    badge.pos,
                  ].join(' ')}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: badge.dot }}
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <span className="text-[10px] font-mono text-brand-text-muted dark:text-slate-400 uppercase tracking-widest whitespace-nowrap">
                    {badge.label}
                  </span>
                </div>
              ))}
              <div className="relative z-10 w-full">
                <PhoneMockup isPlaying={isPlaying} onPlay={handlePlay} onPause={handlePause} videoRef={videoRef} />
              </div>
            </div>
          )}
        </motion.div>

        {/* Right: copy */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col justify-center space-y-6"
        >
          <div>
            <p className="text-xs font-mono text-brand-yellow uppercase tracking-widest mb-4">
              Demo
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-text dark:text-white">
              {SITE.demo.sectionTitle}
            </h2>
          </div>
          <p className="text-brand-text-muted dark:text-slate-400 leading-relaxed text-lg">
            {SITE.demo.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {SITE.demo.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-brand-text-muted dark:text-slate-400 border border-brand-light-border dark:border-brand-border rounded-full px-3 py-1 bg-brand-light-surface dark:bg-brand-surface"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  )
}
