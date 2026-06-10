'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const VIDEO_URL =
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f471fd908969cf332075b_Kukljica%20intro%20%282%29-transcode.mp4'

// Letters for staggered animation
const TITLE = 'TZO KUKLJICA'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => {})
  }, [])

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      {/* Fallback background while video loads */}
      <div className="absolute inset-0 bg-forest-900" />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Title with letter animation */}
        <div className="overflow-hidden">
          <motion.div
            className="flex flex-wrap justify-center gap-x-4 gap-y-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.8 } },
            }}
          >
            {TITLE.split(' ').map((word, wi) => (
              <div key={wi} className="flex">
                {word.split('').map((char, ci) => (
                  <motion.span
                    key={ci}
                    variants={{
                      hidden: { y: 80, opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    className="font-display text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.05em]"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Subtitle line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 w-24 h-px bg-white/40 origin-left"
        />

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors group"
        >
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
