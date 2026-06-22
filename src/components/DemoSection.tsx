import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play } from 'lucide-react'
import { SITE } from '../content/siteContent'
import Section from './Section'

export default function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    setIsPlaying(true)
    videoRef.current?.play()
  }

  return (
    <Section id="demo" className="border-t border-brand-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

        {/* ── Left: video / embed ── */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
        >
          {SITE.demo.embedUrl ? (
            /* YouTube / Vimeo iframe embed */
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-brand-border">
              <iframe
                src={SITE.demo.embedUrl}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="311-live product demo"
              />
            </div>
          ) : (
            /* Local video file with play-overlay */
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-brand-border bg-brand-surface">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={SITE.demo.posterPath}
                controls={isPlaying}
                playsInline
              >
                <source src={SITE.demo.videoPath} type="video/mp4" />
                Your browser does not support the video element.
              </video>

              {/* Play button overlay */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 cursor-pointer bg-brand-bg/40 backdrop-blur-sm"
                    onClick={handlePlay}
                    role="button"
                    aria-label="Play demo video"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center shadow-lg"
                    >
                      <Play size={22} className="text-brand-bg ml-1" />
                    </motion.div>
                    <span className="text-xs font-mono text-white/70 uppercase tracking-widest">
                      Play Demo
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>

        {/* ── Right: description ── */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="flex flex-col justify-center space-y-6"
        >
          <div>
            <p className="text-xs font-mono text-brand-yellow uppercase tracking-widest mb-4">
              Demo
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              {SITE.demo.sectionTitle}
            </h2>
          </div>
          <p className="text-slate-400 leading-relaxed text-lg">
            {SITE.demo.description}
          </p>

          {/* Callout detail chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {['Live patterns', 'Spatial hotspots', 'Category trends', 'Pilot-ready'].map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-slate-400 border border-brand-border rounded-full px-3 py-1"
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
