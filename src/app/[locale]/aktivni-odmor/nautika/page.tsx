'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '@/components/sections/PageHero'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36f0e31ee8e95e3fc1662_nautika2.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36f0de1d71a8ec91ccbf1_nautika5.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36f0e74be18ac411b00bc_nautika6.jpg',
]

const SECTIONS = [
  {
    key: 'section1',
    img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f363c6cfc9f8a631af61ea_photo1.jpg',
  },
  {
    key: 'section2',
    img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f371d4fe5fe9d5d6fd0afd_KUKLJICA.jpg',
  },
] as const

const HARBOUR_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36f0e31ee8e95e3fc1662_nautika2.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36f0de1d71a8ec91ccbf1_nautika5.jpg',
]

const EASE = [0.16, 1, 0.3, 1]

export default function NautikaPage() {
  const t = useTranslations('nautika')
  const [active, setActive] = useState(0)
  const section = SECTIONS[active]

  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} images={HERO_IMAGES}
        label="Nautika" />

      {/* Beaches-style interactive section */}
      <section
        style={{
          backgroundColor: 'var(--light)',
          height: '100svh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          overflow: 'hidden',
        }}
        className="beaches-grid"
      >
        {/* LEFT */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(48px, 6vw, 96px)',
          }}
        >
          {/* Top: badge + heading */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex' }}>
              <span className="label-badge">Nautika</span>
            </div>
            <h2
              style={{
                fontFamily: 'Instrument Serif, Georgia, serif',
                fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--dark)',
              }}
            >
              {t('heroSubtitle')}
            </h2>
          </div>

          {/* Bottom: numbered section list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {SECTIONS.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setActive(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  padding: '16px 20px',
                  borderRadius: 8,
                  backgroundColor: active === i ? 'var(--dark)' : 'transparent',
                  border: '1px solid transparent',
                  color: active === i ? 'var(--light)' : 'rgba(22,35,27,0.6)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { if (active !== i) e.currentTarget.style.color = 'var(--dark)' }}
                onMouseLeave={e => { if (active !== i) e.currentTarget.style.color = 'rgba(22,35,27,0.45)' }}
              >
                <span style={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: 11, letterSpacing: '0.1em', opacity: 0.45, minWidth: 20 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(1.2rem, 1.6vw, 1.4rem)', fontWeight: 400, textAlign: 'left' }}>
                  {t(`${s.key}Title` as Parameters<typeof t>[0])}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — image + description */}
        <div
          style={{
            position: 'relative',
            margin: '24px 24px 24px 0',
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <Image
                src={section.img}
                alt=""
                fill
                className="object-cover"
                sizes="60vw"
                priority={active === 0}
              />
            </motion.div>
          </AnimatePresence>

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(17,21,46,0.85) 0%, rgba(17,21,46,0.2) 45%, transparent 70%)',
              zIndex: 1,
            }}
          />
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: 'clamp(24px, 3vw, 40px)',
                zIndex: 2,
                fontFamily: 'Geist, system-ui, sans-serif',
                fontSize: 14,
                lineHeight: 1.65,
                color: 'rgba(249,245,235,0.9)',
                width: '70%',
              }}
            >
              {t(`${section.key}Text` as Parameters<typeof t>[0])}
            </motion.p>
          </AnimatePresence>
        </div>
      </section>

      {/* Harbour banner */}
      <section style={{ backgroundColor: 'var(--bg)', paddingTop: 100, paddingBottom: 100 }}>
        <div className="tz-container">
          {/* Top: heading left + info right */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px, 6vw, 100px)',
              alignItems: 'start',
              marginBottom: 64,
            }}
            className="harbour-top"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex' }}>
                <span className="label-badge">{t('harbourLabel')}</span>
              </div>
              <h2
                style={{
                  fontFamily: 'Instrument Serif, Georgia, serif',
                  fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  color: 'var(--dark)',
                }}
              >
                {t('harbourTitle')}
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 8 }}>
              <p
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'var(--dark)',
                  fontWeight: 500,
                }}
              >
                {t('harbourFeatures')}
              </p>
              <p
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'rgba(22,35,27,0.6)',
                  whiteSpace: 'pre-line',
                }}
              >
                {t('harbourContact')}
              </p>
              <div>
                <Link
                  href="/kontakt"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: 'var(--dark)',
                    color: 'var(--light)',
                    padding: '9px 20px',
                    borderRadius: 999,
                    fontFamily: 'Geist, sans-serif',
                    fontSize: 13,
                    fontWeight: 500,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {t('contactUs')}
                </Link>
              </div>
            </div>
          </div>

          {/* Two images */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '3fr 2fr',
              gap: 16,
              height: 'clamp(300px, 40vw, 520px)',
            }}
            className="harbour-images"
          >
            {HARBOUR_IMAGES.map((src, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  borderRadius: 12,
                  overflow: 'hidden',
                }}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
