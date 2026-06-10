'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

const APTS = [
  {
    name: 'Apartmani Lavanda',
    img: 'https://cdn.prod.website-files.com/67e320f2dcdaf05e336987b9/686430210b7db83c91f02c24_BAC%CC%8CIC%CC%81%20EDO.jpg',
  },
  {
    name: 'Apartmani Sonja',
    img: 'https://cdn.prod.website-files.com/67e320f2dcdaf05e336987b9/6864314d9305ffbb4836af8a_217249734_1488037248213012_71304037562245513_n.jpg',
  },
  {
    name: 'Apartmani Tuta',
    img: 'https://cdn.prod.website-files.com/67e320f2dcdaf05e336987b9/686433110ac27170317deff3_244949136.jpg',
  },
]

const EASE = [0.16, 1, 0.3, 1]

type Props = { label: string; title: string; cta: string }

export default function HomeAccommodation({ label, title, cta }: Props) {
  return (
    <section style={{ backgroundColor: 'var(--dark)', color: 'var(--light)', paddingTop: 120, paddingBottom: 0 }}>
      <div className="tz-container">
        <div className="divider-light mb-12" />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, gap: 24, flexWrap: 'wrap' }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            <span className="label-badge light" style={{ marginBottom: 16, display: 'inline-flex' }}>{label}</span>
            <h2
              style={{
                fontFamily: 'Instrument Serif, Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                color: 'var(--light)',
                maxWidth: 520,
              }}
            >
              {title}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          >
            <Link
              href="/privatni-smjestaj"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--light)',
                borderBottom: '1px solid rgba(249,245,235,0.35)',
                paddingBottom: 2,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {cta} →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Full-width images — flush to edges */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
        {APTS.map((apt, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85, delay: i * 0.1, ease: EASE }}
            style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}
          >
            <Image
              src={apt.img}
              alt={apt.name}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="33vw"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(22,35,27,0.6) 0%, transparent 60%)' }} />
            <p
              style={{
                position: 'absolute',
                bottom: 24,
                left: 24,
                fontFamily: 'Instrument Serif, Georgia, serif',
                fontSize: 22,
                fontWeight: 400,
                color: 'var(--light)',
                lineHeight: 1.2,
              }}
            >
              {apt.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
