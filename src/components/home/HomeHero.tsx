'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'

const VIDEO_URL =
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f471fd908969cf332075b_Kukljica%20intro%20%282%29-transcode.mp4'

const EASE = [0.16, 1, 0.3, 1]

type Props = {
  heading: string
  ctaLabel: string
  ctaSecondary: string
  subtitle: string
  badge: string
}

export default function HomeHero({ heading, ctaLabel, ctaSecondary, subtitle, badge }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)
  const WORDS = heading.split(' ')

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <section style={{ backgroundColor: 'var(--dark)', color: 'var(--light)', paddingTop: 128, paddingBottom: 0 }}>
      <div className="tz-container">

        {/* Top tile: label + heading + subtitle + buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, textAlign: 'center', paddingBottom: 56 }}>

          {/* Badge — width: fit-content prevents full-width stretch */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <span className="label-badge light">{badge}</span>
          </motion.div>

          {/* Giant heading — word by word reveal */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.25em' }}>
            {WORDS.map((word, i) => (
              <div
                key={i}
                style={{ overflow: 'hidden', paddingBottom: '0.12em', marginBottom: '-0.12em' }}
              >
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.1, ease: EASE }}
                  style={{
                    display: 'inline-block',
                    fontFamily: 'Instrument Serif, Georgia, serif',
                    fontWeight: 400,
                    fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                    lineHeight: 0.93,
                    letterSpacing: '-0.03em',
                    color: 'var(--light)',
                  }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <div style={{ overflow: 'hidden' }}>
            <motion.p
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
              style={{ color: 'rgba(249,245,235,0.55)', fontSize: 18, maxWidth: 520 }}
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Link
              href="/dogadanja"
              style={{
                backgroundColor: 'var(--light)',
                color: 'var(--dark)',
                padding: '14px 28px',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '0.02em',
                fontFamily: 'Inter, sans-serif',
                transition: 'opacity 0.2s',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {ctaLabel}
            </Link>
            <Link
              href="/o-nama"
              style={{
                border: '1px solid rgba(249,245,235,0.3)',
                color: 'var(--light)',
                padding: '14px 28px',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '0.02em',
                fontFamily: 'Inter, sans-serif',
                transition: 'border-color 0.2s',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {ctaSecondary}
            </Link>
          </motion.div>
        </div>

        {/* Video block — vidljiv odmah, poster dok se video ne učita */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
          style={{
            borderRadius: 8,
            overflow: 'hidden',
            width: '100%',
            height: 'clamp(280px, 42vw, 620px)',
            position: 'relative',
            backgroundColor: '#0D160A',
          }}
        >
          <video
            ref={videoRef}
            src={VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f40c00845e65a13e8cc51_DJI_20240725021050_0199_D--1.jpg"
            onCanPlay={() => setLoaded(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>

      </div>
    </section>
  )
}
