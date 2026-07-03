'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '@/components/sections/PageHero'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f369faab3b8bde72017551_sabusa.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f369fa71279646736751d6_kostanj.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f369fac737cf96d8dfd5ea_jelenica.jpg',
]

const BEACHES = [
  { key: 'sabusa',       img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f369faab3b8bde72017551_sabusa.jpg' },
  { key: 'jelenica',    img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f369fac737cf96d8dfd5ea_jelenica.jpg' },
  { key: 'kostanj',     img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f369fa71279646736751d6_kostanj.jpg' },
  { key: 'zelenaPunta', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f369fa59a98f33b8e41c35_zelena-punta.jpg' },
] as const

const EASE = [0.16, 1, 0.3, 1]

export default function BeachesPage() {
  const t = useTranslations('beaches')
  const [active, setActive] = useState(0)
  const beach = BEACHES[active]

  return (
    <>
      <PageHero
        title={t('heroSubtitle')}
        images={HERO_IMAGES}
        label="Plaže"
      />

      <section
        style={{
          backgroundColor: 'var(--light)',
          height: '100svh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          overflow: 'hidden',
        }}
      >
        {/* LEFT — light bg, tekst */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(48px, 6vw, 96px)',
          }}
        >
          {/* Gore: badge + naslov */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex' }}>
              <span className="label-badge">Plaže</span>
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
              Proučite naše plaže
            </h2>
          </div>

          {/* Dolje: numbered lista */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {BEACHES.map((b, i) => (
              <button
                key={b.key}
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
                <span style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(1.5rem, 1.6vw, 1.4rem)', fontWeight: 400 }}>
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {t(b.key as any)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — slika, puna visina, rounded corners lijevo */}
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
                src={beach.img}
                alt=""
                fill
                className="object-cover"
                sizes="60vw"
                priority={active === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient + opis */}
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
                lineHeight: 1.34,
                color: 'rgba(249,245,235,1)',
                width: "60%",
              }}
            >
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {t(`${beach.key}Text` as any)}
            </motion.p>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
