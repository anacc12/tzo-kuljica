'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { formatDate } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1]

const BG_IMAGE =
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67e320f2dcdaf05e33698820_dining_1.webp'

type LatestEvent = {
  _id: string
  title: string
  slug: { current: string }
  startDate?: string
  thumbnail?: { asset: { url: string }; alt?: string }
  location?: string
}

type Props = {
  heading: string
  subtitle: string
  ctaLabel: string
  badge: string
  latestEvent: LatestEvent | null
  locale: string
}

export default function EventsHero({
  heading,
  subtitle,
  ctaLabel,
  badge,
  latestEvent,
  locale,
}: Props) {
  const WORDS = heading.split(' ')

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <Image
        src={BG_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(120deg, rgba(17,21,46,0.82) 45%, rgba(17,21,46,0.45) 100%)',
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(100px, 10vw, 160px) clamp(24px, 6vw, 80px) 64px',
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ marginBottom: 24 }}
        >
          <span className="label-badge light">{badge}</span>
        </motion.div>

        {/* Heading */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: 24,
            maxWidth: 680,
          }}
        >
          {WORDS.map((word, i) => (
            <div key={i} style={{ overflow: 'hidden', paddingBottom: '0.12em' }}>
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.15 + i * 0.1, ease: EASE }}
                style={{
                  display: 'inline-block',
                  fontFamily: 'Instrument Serif, Georgia, serif',
                  fontWeight: 400,
                  fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                  lineHeight: 1.05,
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
        <div style={{ overflow: 'hidden', marginBottom: 36 }}>
          <motion.p
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            style={{
              fontFamily: 'Geist, sans-serif',
              fontSize: 17,
              color: 'rgba(249,245,235,0.7)',
              maxWidth: 440,
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: EASE }}
        >
          <button
            onClick={() =>
              document.getElementById('events-list')?.scrollIntoView({ behavior: 'smooth' })
            }
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--light)',
              color: 'var(--dark)',
              padding: '14px 28px',
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 600,
              fontFamily: 'Geist, sans-serif',
              letterSpacing: '0.02em',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {ctaLabel}
          </button>
        </motion.div>

        {/* Latest event card — bottom right */}
        {latestEvent && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
            style={{
              position: 'absolute',
              bottom: 48,
              right: 'clamp(24px, 6vw, 80px)',
              width: 'clamp(220px, 22vw, 300px)',
            }}
          >
            <Link
              href={{ pathname: '/dogadanja/[slug]', params: { slug: latestEvent.slug.current } } as never}
              style={{ display: 'block', textDecoration: 'none' }}
            >
              <div
                style={{
                  backgroundColor: 'var(--bg)',
                  borderRadius: 8,
                  padding: 8,
                }}
              >
                {latestEvent.thumbnail && (
                  <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', borderRadius: 4, marginBottom: 10 }}>
                    <Image
                      src={latestEvent.thumbnail.asset.url}
                      alt={latestEvent.title}
                      fill
                      sizes="300px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                )}
                <div style={{ padding: '2px 4px 4px' }}>
                  <div
                    style={{
                      fontFamily: 'Roboto Condensed, sans-serif',
                      fontSize: 10,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(17,21,46,0.4)',
                      marginBottom: 5,
                    }}
                  >
                    
                    {latestEvent.startDate ? ` · ${formatDate(latestEvent.startDate, locale)}` : ''}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Instrument Serif, Georgia, serif',
                      fontSize: '1.6rem',
                      fontWeight: 400,
                      lineHeight: 1.25,
                      letterSpacing: '-0.02em',
                      color: 'var(--dark)',
                    }}
                  >
                    {latestEvent.title}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
