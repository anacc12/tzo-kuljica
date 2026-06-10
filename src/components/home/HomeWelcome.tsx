'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

const IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f40c00845e65a13e8cc51_DJI_20240725021050_0199_D--1.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434913d13c4157070367_RR_04709.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f40bbc4c90c3044407ba7_DJI_20240709182237_0203_D.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f418c48987985b84a7d31_Zracne%20Fotografije%20Kukljica%202022%20%20(3)%20(3).jpg',
]

const EASE = [0.16, 1, 0.3, 1]

type Props = {
  label: string
  title: string
  body: string
  cta: string
}

export default function HomeWelcome({ label, title, body, cta }: Props) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % IMAGES.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={{ backgroundColor: 'var(--light)', paddingTop: 120, paddingBottom: 120 }}>
      <div className="tz-container">
        <div className="divider mb-16" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}
          className="md-grid-halves"
        >
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: EASE }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <span className="label-badge">{label}</span>
            <h2
              style={{
                fontFamily: 'Instrument Serif, Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                color: 'var(--dark)',
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 17,
                lineHeight: 1.65,
                color: 'rgba(22,35,27,0.7)',
                maxWidth: 480,
              }}
            >
              {body}
            </p>
            <Link
              href="/o-nama"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--dark)',
                borderBottom: '1px solid rgba(22,35,27,0.35)',
                paddingBottom: 2,
                width: 'fit-content',
                textDecoration: 'none',
              }}
            >
              {cta} →
            </Link>

            {/* Dot indicators */}
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === active ? 'var(--dark)' : 'rgba(22,35,27,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right — auto-rotating image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 4, overflow: 'hidden' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <Image
                  src={IMAGES[active]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .md-grid-halves { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
