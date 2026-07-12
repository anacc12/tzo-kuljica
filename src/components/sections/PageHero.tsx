'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type PageHeroProps = {
  title: string
  subtitle?: string
  images?: string[]
  label?: string
  variant?: 'dark' | 'light'
  layout?: 'centered' | 'split'
}

const EASE = [0.16, 1, 0.3, 1]

export default function PageHero({ title, subtitle, images = [], label, variant = 'dark', layout = 'centered' }: PageHeroProps) {
  const words = title.split(' ')
  const isDark = variant === 'dark'
  const textColor = isDark ? 'var(--light)' : 'var(--dark)'
  const subtitleColor = isDark ? 'rgba(249,245,235,0.5)' : 'rgba(22,35,27,0.5)'
  const dividerColor = isDark ? 'rgba(249,245,235,0.15)' : 'rgba(22,35,27,0.12)'

  if (layout === 'split') {
    return (
      <section
        style={{
          backgroundColor: isDark ? 'var(--dark)' : 'var(--light)',
          paddingTop: '120px',
          paddingBottom: 0,
        }}
      >
        <div className="max-w-[1800px] mx-auto px-8">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px, 6vw, 100px)',
              alignItems: 'center',
              paddingBottom: 64,
            }}
          >
            {/* Left: text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {label && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  style={{ display: 'flex' }}
                >
                  <span className={isDark ? 'label-badge light' : 'label-badge'}>{label}</span>
                </motion.div>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5em' }}>
                {words.map((word, i) => (
                  <div key={i} style={{ overflow: 'hidden', paddingBottom: '0.12em' }}>
                    <motion.span
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.9, delay: 0.05 + i * 0.09, ease: EASE }}
                      style={{
                        display: 'inline-block',
                        fontFamily: 'Instrument Serif, Georgia, serif',
                        fontWeight: 400,
                        fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)',
                        lineHeight: 0.95,
                        letterSpacing: '-0.03em',
                        color: textColor,
                      }}
                    >
                      {word}
                    </motion.span>
                  </div>
                ))}
              </div>

              {subtitle && (
                <div style={{ overflow: 'hidden' }}>
                  <motion.p
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: words.length * 0.09 + 0.15, ease: EASE }}
                    style={{
                      fontFamily: 'Geist, system-ui, sans-serif',
                      fontSize: 16,
                      lineHeight: 1.65,
                      color: subtitleColor,
                      maxWidth: 420,
                    }}
                  >
                    {subtitle}
                  </motion.p>
                </div>
              )}
            </div>

            {/* Right: single image */}
            {images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: EASE }}
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  borderRadius: 8,
                  overflow: 'hidden',
                }}
              >
                <Image src={images[0]} alt="" fill className="object-cover" sizes="50vw" priority />
              </motion.div>
            )}
          </div>

          <div style={{ borderBottom: `1px solid ${dividerColor}` }} />
        </div>
      </section>
    )
  }

  return (
    <section
      style={{
        backgroundColor: isDark ? 'var(--dark)' : 'var(--light)',
        paddingTop: '180px',
        paddingBottom: images.length > 0 ? '40px' : '80px',
      }}
    >
      <div className="max-w-[1800px] mx-auto px-8">

        {/* Label badge */}
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center' }}
            className="mb-12"
          >
            <span className={isDark ? 'label-badge light' : 'label-badge'}>{label}</span>
          </motion.div>
        )}

        {/* Giant word-by-word reveal heading */}
        <div className="flex flex-wrap justify-center gap-x-[22px] text-center mx-auto max-w-5xl">
          {words.map((word, i) => (
            <div key={i} className="overflow-hidden" style={{ paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.05 + i * 0.09, ease: EASE }}
                className="inline-block font-display font-light"
                style={{
                  fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.03em',
                  color: textColor,
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <div className="overflow-hidden mt-6">
            <motion.p
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: words.length * 0.09 + 0.15, ease: EASE }}
              className="text-base md:text-lg max-w-md mx-auto text-center font-sans"
              style={{ color: subtitleColor }}
            >
              {subtitle}
            </motion.p>
          </div>
        )}

        {/* Optional 3-col image strip */}
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            className="mt-20 grid grid-cols-3 gap-4"
            style={{ height: 'clamp(200px, 30vw, 400px)' }}
          >
            {images.slice(0, 3).map((src, i) => (
              <div key={i} className="relative overflow-hidden" style={{ borderRadius: 8 }}>
                <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </motion.div>
        )}

        {/* Bottom divider — only when there are images */}
        {images.length > 0 && (
          <div style={{ borderBottom: `1px solid ${dividerColor}`, marginTop: 0 }} />
        )}
      </div>
    </section>
  )
}
