'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

const IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434913d13c4157070367_RR_04709.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349f057f3c927cbbccc_RR_05250.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434965550e6a39598db1_RR_05195.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349e01dcdf1e90929c3_RR_04844.jpg',
]

const EASE = [0.16, 1, 0.3, 1]

type Props = { label: string; title: string; body: string; cta: string }

export default function HomeAbout({ label, title, body, cta }: Props) {
  return (
    <section style={{ backgroundColor: 'var(--light)', paddingTop: 160, paddingBottom: 160 }}>
      <div className="tz-container">
        <div className="divider mb-16" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
          className="md-grid-halves"
        >
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 520 }}
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
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.7, color: 'rgba(22,35,27,0.68)' }}>
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
          </motion.div>

          {/* Right — 4 images (2x2 asymmetric grid) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {IMAGES.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.75, delay: i * 0.08, ease: EASE }}
                style={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  aspectRatio: i % 2 === 0 ? '4/5' : '4/3',
                }}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="25vw" />
              </motion.div>
            ))}
          </div>
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
