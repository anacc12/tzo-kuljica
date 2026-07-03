'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const SECTION1_IMG = 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/686422a194cfe3ae50400efe_punta%20screen%201.jpeg'

const GALLERY_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/686422a194cfe3ae50400efe_punta%20screen%201.jpeg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/686422e13476d979a20bcc0a_punta%20screenshot%203.jpeg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6864235999c41bffe27df21b_punta%20screen%204.png',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/686423b6657667a6005a8793_punta%20screenshot%202.jpeg',
]

const CLEAN_GALLERY = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36f0e31ee8e95e3fc1662_nautika2.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/686422e13476d979a20bcc0a_punta%20screenshot%203.jpeg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/686423b6657667a6005a8793_punta%20screenshot%202.jpeg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6864235999c41bffe27df21b_punta%20screen%204.png',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/686422a194cfe3ae50400efe_punta%20screen%201.jpeg',
]

const SERVICES = ['parking', 'pedaloes', 'sports', 'restaurant', 'pizzeria', 'tours'] as const

const EASE = [0.16, 1, 0.3, 1]

export default function ZelenaPuntaPage() {
  const t = useTranslations('zelenaPunta')
  const [galleryActive, setGalleryActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setGalleryActive(p => (p + 1) % GALLERY_IMAGES.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* ── 1. VIDEO HERO ── */}
      <section style={{ position: 'relative', height: '100svh', overflow: 'hidden' }}>
        <video
          src="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/68641dbe660a616a11a2a739_Punta%20short%20video%20720-transcode.mp4"
          autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,14,40,0.35) 0%, rgba(10,14,40,0.15) 40%, rgba(10,14,40,0.55) 100%)' }} />
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 clamp(24px, 6vw, 80px)',
          }}
        >
          <h1
            style={{
              fontFamily: 'Instrument Serif, Georgia, serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: 'var(--light)',
              marginBottom: 40,
              maxWidth: 900,
            }}
          >
            {t('title')}
          </h1>
          <a
            href="https://www.zelenapunta.hr/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'var(--light)',
              color: 'var(--dark)',
              padding: '12px 28px',
              borderRadius: 999,
              fontFamily: 'Geist, sans-serif',
              fontSize: 13,
              fontWeight: 500,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {t('book')}
          </a>
        </div>
      </section>

      {/* ── 2. SERVICES CARDS ── */}
      <section style={{ backgroundColor: 'var(--bg)', paddingTop: 100, paddingBottom: 100 }}>
        <div className="tz-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, gap: 24 }}>
            <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--dark)' }}>
              {t('servicesTitle')}
            </h2>
            <span className="label-badge">Zelena Punta</span>
          </div>
          <div className="divider" style={{ marginBottom: 48 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }} className="services-grid">
            {SERVICES.map((s, i) => (
              <div
                key={s}
                style={{
                  padding: '28px 24px',
                  border: '1px solid rgba(22,35,27,0.12)',
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  backgroundColor: 'var(--light)',
                }}
              >
                <span style={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(22,35,27,0.35)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(1.3rem, 1.8vw, 1.6rem)', fontWeight: 400, lineHeight: 1.2, color: 'var(--dark)', marginTop: 'auto' }}>
                  {t(s)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. STACKING CARDS ── */}
      <div style={{ position: 'relative' }}>

        {/* Card 1 — Slikovito */}
        <div
          style={{
            position: 'sticky', top: 0, height: '100svh', zIndex: 1,
            backgroundColor: 'var(--light)', display: 'flex', alignItems: 'center', overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '100%', maxWidth: 1800, margin: '0 auto',
              padding: '0 clamp(24px, 4vw, 64px)',
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px, 5vw, 80px)', alignItems: 'center',
            }}
            className="landmark-row"
          >
            <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden' }}>
              <Image src={SECTION1_IMG} alt="" fill className="object-cover" sizes="50vw" priority />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 'clamp(0px, 2vw, 40px)' }}>
              <div style={{ display: 'flex' }}>
                <span className="label-badge">01</span>
              </div>
              <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--dark)' }}>
                {t('section1Title')}
              </h2>
              <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 15, lineHeight: 1.7, color: 'rgba(22,35,27,0.65)' }}>
                {t('section1Text')}
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 — Posjetite nas + gallery */}
        <div
          style={{
            position: 'sticky', top: 0, height: '100svh', zIndex: 2,
            backgroundColor: 'var(--light)', display: 'flex', alignItems: 'center', overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '100%', maxWidth: 1800, margin: '0 auto',
              padding: '0 clamp(24px, 4vw, 64px)',
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px, 5vw, 80px)', alignItems: 'center',
            }}
            className="landmark-row"
          >
            {/* Text left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 'clamp(0px, 2vw, 40px)' }}>
              <div style={{ display: 'flex' }}>
                <span className="label-badge">02</span>
              </div>
              <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--dark)' }}>
                {t('section2Title')}
              </h2>
              <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 15, lineHeight: 1.7, color: 'rgba(22,35,27,0.65)' }}>
                {t('section2Text')}
              </p>
            </div>

            {/* Gallery right */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, height: 'clamp(360px, 60vh, 580px)' }}>
              {/* Main image */}
              <div style={{ position: 'relative', flex: 1, borderRadius: 12, overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={galleryActive}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <Image src={GALLERY_IMAGES[galleryActive]} alt="" fill className="object-cover" sizes="50vw" priority />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Thumbnails */}
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${GALLERY_IMAGES.length}, 1fr)`, gap: 8, height: 80 }}>
                {GALLERY_IMAGES.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setGalleryActive(i)}
                    style={{
                      position: 'relative', borderRadius: 8, overflow: 'hidden', cursor: 'pointer',
                      border: 'none', padding: 0,
                      opacity: galleryActive === i ? 1 : 0.5,
                      transition: 'opacity 0.3s',
                      outline: galleryActive === i ? '2px solid var(--dark)' : 'none',
                      outlineOffset: 2,
                    }}
                  >
                    <Image src={src} alt="" fill className="object-cover" sizes="15vw" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: '50svh', backgroundColor: 'var(--light)' }} />
      </div>

      {/* ── 3. QUOTE ── */}
      <section style={{ backgroundColor: 'var(--dark)', paddingTop: 180, paddingBottom: 180 }}>
        <div className="tz-container" style={{ maxWidth: 860, textAlign: 'center' }}>
          <blockquote
            style={{
              fontFamily: 'Instrument Serif, Georgia, serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: 'var(--light)',
              fontStyle: 'normal',
              marginBottom: 32,
            }}
          >
            "{t('quote')}"
          </blockquote>
          <p style={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(249,245,235,0.4)' }}>
            {t('quoteAuthor')}
          </p>
        </div>
      </section>

      {/* ── 5. BANNER ── */}
      <section style={{ backgroundColor: 'var(--bg)', paddingTop: 100, paddingBottom: 100 }}>
        <div className="tz-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 100px)', alignItems: 'start', marginBottom: 64 }} className="harbour-top">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex' }}>
                <span className="label-badge">Rezervacija</span>
              </div>
              <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.03em', color: 'var(--dark)' }}>
                Holiday Park Zelena Punta
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 8 }}>
              <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 15, lineHeight: 1.7, color: 'rgba(22,35,27,0.65)' }}>
                {t('section1Text').split('\n')[0]}
              </p>
              <div>
                <a
                  href="https://www.zelenapunta.hr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    backgroundColor: 'var(--dark)', color: 'var(--light)',
                    padding: '9px 20px', borderRadius: 999,
                    fontFamily: 'Geist, sans-serif', fontSize: 13, fontWeight: 500,
                    textDecoration: 'none', whiteSpace: 'nowrap',
                  }}
                >
                  {t('book')}
                </a>
              </div>
            </div>
          </div>

          {/* Gallery grid instead of 2 images */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              gridTemplateRows: 'repeat(2, clamp(180px, 20vw, 280px))',
              gap: 12,
            }}
          >
            <div style={{ position: 'relative', gridRow: '1 / 3', borderRadius: 12, overflow: 'hidden' }}>
              <Image src={CLEAN_GALLERY[0]} alt="" fill className="object-cover" sizes="45vw" />
            </div>
            {CLEAN_GALLERY.slice(1).map((src, i) => (
              <div key={i} style={{ position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
                <Image src={src} alt="" fill className="object-cover" sizes="25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
