'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type PageHeroProps = {
  title: string
  subtitle?: string
  images?: string[]
  label?: string
}

const EASE = [0.16, 1, 0.3, 1]

export default function PageHero({ title, subtitle, images = [], label }: PageHeroProps) {
  const words = title.split(' ')

  return (
    <section className="bg-forest-900 text-sand-100" style={{ paddingTop: '140px', paddingBottom: 0 }}>
      <div className="max-w-[1800px] mx-auto px-8">

        {/* Label badge */}
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ display: 'flex' }}
            className="mb-12"
          >
            <span className="label-badge light">{label}</span>
          </motion.div>
        )}

        {/* Giant word-by-word reveal heading */}
        <div className="flex flex-wrap justify-center gap-x-[0.25em] text-center mx-auto max-w-5xl">
          {words.map((word, i) => (
            <div key={i} className="overflow-hidden" style={{ paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.05 + i * 0.09, ease: EASE }}
                className="inline-block font-display font-light text-sand-100"
                style={{
                  fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.03em',
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
              className="text-sand-100/50 text-base md:text-lg max-w-md mx-auto text-center font-sans tracking-wide"
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
            className="mt-16 grid grid-cols-3 gap-4"
            style={{ height: 'clamp(200px, 30vw, 400px)' }}
          >
            {images.slice(0, 3).map((src, i) => (
              <div key={i} className="relative overflow-hidden" style={{ borderRadius: 2 }}>
                <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </motion.div>
        )}

        {/* Bottom divider */}
        <div
          className="border-b border-white/20"
          style={{ marginTop: images.length > 0 ? '0' : '80px' }}
        />
      </div>
    </section>
  )
}
