'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { motion, AnimatePresence } from 'framer-motion'
const FEATURES_HR = [
  { word: 'Plaže',          num: '01', href: '/plaze',                      img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434913d13c4157070367_RR_04709.jpg' },
  { word: 'Aktivni odmor',  num: '02', href: '/aktivni-odmor',              img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f40c00845e65a13e8cc51_DJI_20240725021050_0199_D--1.jpg' },
  { word: 'Nautika',        num: '03', href: '/aktivni-odmor/nautika',      img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f40bbc4c90c3044407ba7_DJI_20240709182237_0203_D.jpg' },
  { word: 'Biciklizam',     num: '04', href: '/aktivni-odmor/biciklizam',   img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f418c48987985b84a7d31_Zracne%20Fotografije%20Kukljica%202022%20%20(3)%20(3).jpg' },
  { word: 'Pješačenje',     num: '05', href: '/aktivni-odmor/pjesacenje',   img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349e8d275cab4059d83_Kukljica%20FOTO%20Matija%20Lipar-75.jpg' },
  { word: 'Izleti',         num: '06', href: '/aktivni-odmor/izleti',       img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434965550e6a39598db1_RR_05195.jpg' },
  { word: 'Događanja',      num: '07', href: '/dogadanja',                  img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f365f196cc03dd814276cc_pisani-spomen%20(1).jpg' },
  { word: 'Smještaj',       num: '08', href: '/privatni-smjestaj',          img: 'https://cdn.prod.website-files.com/67e320f2dcdaf05e336987b9/686430210b7db83c91f02c24_BAC%CC%8CIC%CC%81%20EDO.jpg' },
  { word: 'Znamenitosti',   num: '09', href: '/znamenitosti',               img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349e01dcdf1e90929c3_RR_04844.jpg' },
  { word: 'Zelena Punta',   num: '10', href: '/holiday-park-zelena-punta', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349f057f3c927cbbccc_RR_05250.jpg' },
]

const FEATURES_EN = [
  { word: 'Beaches',        num: '01', href: '/plaze',                      img: FEATURES_HR[0].img },
  { word: 'Active holidays',num: '02', href: '/aktivni-odmor',              img: FEATURES_HR[1].img },
  { word: 'Nautical',       num: '03', href: '/aktivni-odmor/nautika',      img: FEATURES_HR[2].img },
  { word: 'Cycling',        num: '04', href: '/aktivni-odmor/biciklizam',   img: FEATURES_HR[3].img },
  { word: 'Hiking',         num: '05', href: '/aktivni-odmor/pjesacenje',   img: FEATURES_HR[4].img },
  { word: 'Excursions',     num: '06', href: '/aktivni-odmor/izleti',       img: FEATURES_HR[5].img },
  { word: 'Events',         num: '07', href: '/dogadanja',                  img: FEATURES_HR[6].img },
  { word: 'Accommodation',  num: '08', href: '/privatni-smjestaj',          img: FEATURES_HR[7].img },
  { word: 'Landmarks',      num: '09', href: '/znamenitosti',               img: FEATURES_HR[8].img },
  { word: 'Zelena Punta',   num: '10', href: '/holiday-park-zelena-punta', img: FEATURES_HR[9].img },
]

type Props = { sectionLabel: string; title: string; locale: string }

export default function HomeExplore({ sectionLabel, title, locale }: Props) {
  const FEATURES = locale === 'en' ? FEATURES_EN : FEATURES_HR
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      style={{
        backgroundColor: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background images — absolute, full section, one per feature */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              key={hovered}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <Image
                src={FEATURES[hovered].img}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(22,35,27,0.65)' }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="tz-container" style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: 80, paddingBottom: 80 }}>

        {/* Label */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: `1px solid ${hovered !== null ? 'rgba(249,245,235,0.25)' : 'rgba(22,35,27,0.2)'}`,
                borderRadius: 999,
                padding: '4px 16px',
                fontFamily: 'Inter, sans-serif',
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase' as const,
                fontWeight: 500,
                color: hovered !== null ? 'rgba(249,245,235,0.6)' : 'rgba(22,35,27,0.5)',
                transition: 'all 0.35s ease',
              }}
            >
              {sectionLabel}
            </span>
          </motion.div>
        </div>

        
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'baseline',
            gap: '0 0.45em',
            maxWidth: 1100,
            margin: '0 auto',
          }}
        >
          {FEATURES.map((f, i) => (
            <Link
              key={i}
              href={f.href}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'inline-flex',
                alignItems: 'flex-end',
                gap: '0.06em',
                fontFamily: 'Instrument Serif, Georgia, serif',
                fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                textDecoration: 'none',
                cursor: 'pointer',
                color: hovered === null
                  ? 'var(--dark)'
                  : hovered === i
                    ? 'var(--light)'
                    : 'rgba(249,245,235,0.75)',
                filter: hovered === null
                  ? 'none'
                  : hovered === i
                    ? 'none'
                    : 'blur(6px)',
                transition: 'color 0.3s ease, filter 0.3s ease',
              }}
            >
              {f.word}
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.2em',
                  opacity: 0.55,
                  lineHeight: 1,
                  marginBottom: '0.3em',
                  letterSpacing: '0.04em',
                }}
              >
                {f.num}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
