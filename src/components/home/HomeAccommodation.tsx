'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

export type AptCard = {
  slug: string
  name: string
  thumbnail: string
}

type Props = { label: string; title: string; cta: string; detailsLabel?: string; apartments: AptCard[] }

export default function HomeAccommodation({ label, title, cta, detailsLabel = 'Pogledaj detalje', apartments }: Props) {
  const doubled = [...apartments, ...apartments]

  return (
    <section style={{ backgroundColor: 'var(--bg)', paddingTop: 140, paddingBottom: 140, overflow: 'hidden' }}>
      <div className="tz-container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, flexWrap: 'wrap' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
          >
            <h2 style={{
              fontFamily: 'Instrument Serif, Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              color: 'var(--dark)',
            }}>
              {title}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            <Link
              href="/privatni-smjestaj"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--dark)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(22,35,27,0.35)',
                paddingBottom: 2,
              }}
            >
              {cta}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Auto-scrolling carousel — flush edges */}
      <div style={{ overflow: 'clip' }}>
        <div
          style={{
            display: 'flex',
            gap: 16,
            paddingLeft: 32,
            animation: 'apt-scroll 40s linear infinite',
            willChange: 'transform',
          }}
        >
          {doubled.map((apt, i) => (
            <Link
              key={i}
              href={`/privatni-smjestaj/${apt.slug}` as '/privatni-smjestaj'}
              style={{
                flexShrink: 0,
                display: 'block',
                width: 'clamp(280px, 28vw, 420px)',
                aspectRatio: '3/4',
                borderRadius: 12,
                overflow: 'hidden',
                position: 'relative',
                textDecoration: 'none',
              }}
            >
              <Image
                src={apt.thumbnail}
                alt={apt.name}
                fill
                className="object-cover"
                sizes="420px"
                priority={i < apartments.length}
                style={{ transition: 'transform 0.6s ease' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.transform = 'scale(1.04)')}
                onMouseLeave={e => ((e.target as HTMLElement).style.transform = 'scale(1)')}
              />

              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(17,21,46,0.85) 0%, rgba(17,21,46,0) 55%)',
              }} />

              {/* Content */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}>
                <p style={{
                  fontFamily: 'Instrument Serif, Georgia, serif',
                  fontSize: 20,
                  fontWeight: 400,
                  color: 'var(--light)',
                  lineHeight: 1.2,
                }}>
                  {apt.name}
                </p>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'rgba(249,245,235,0.75)',
                  border: '1px solid rgba(249,245,235,0.3)',
                  borderRadius: 999,
                  padding: '6px 14px',
                  width: 'fit-content',
                  letterSpacing: '0.02em',
                }}>
                  {detailsLabel}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes apt-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
