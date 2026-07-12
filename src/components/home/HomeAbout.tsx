'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'

const IMAGES = [
  '/home/image-01.jpg',
  '/home/image-02.jpg',
  '/home/image-03.jpg',
]

type Section = { label: string; text: string }
type Props = { sections: Section[]; cta: string }

export default function HomeAbout({ sections, cta }: Props) {
  return (
    <div style={{ position: 'relative' }}>
      {sections.map((section, i) => (
        <div
          key={i}
          style={{
            position: 'sticky',
            top: 0,
            height: '100svh',
            overflow: 'hidden',
            zIndex: i + 1,
          }}
        >
          {/* Background image */}
          <Image
            src={IMAGES[i]}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={i < 2}
          />

          {/* Gradient overlay — heavy at bottom for text legibility */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(17,21,46,0.82) 0%, rgba(17,21,46,0.35) 55%, rgba(17,21,46,0.1) 100%)',
            }}
          />

          {/* Content — anchored to bottom-left */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: 'clamp(40px, 7vw, 96px)',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <span
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(249,245,235,0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <span style={{ opacity: 0.6 }}>0{i + 1}</span>
              {section.label}
            </span>

            <p
              style={{
                fontFamily: 'Instrument Serif, Georgia, serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 400,
                lineHeight: 1.22,
                letterSpacing: '-0.02em',
                color: 'var(--light)',
                maxWidth: 660,
              }}
            >
              {section.text}
            </p>

            <div>
              <Link
                href="/o-nama"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 13,
                  fontWeight: 500,
                  color: 'var(--light)',
                  textDecoration: 'none',
                  border: '1px solid rgba(249,245,235,0.35)',
                  borderRadius: 999,
                  padding: '10px 22px',
                  transition: 'border-color 0.2s, background-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(249,245,235,0.7)'
                  e.currentTarget.style.backgroundColor = 'rgba(249,245,235,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(249,245,235,0.35)'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                {cta}
              </Link>
            </div>
          </div>

          {/* Progress dots — bottom-right */}
          <div
            style={{
              position: 'absolute',
              bottom: 'clamp(40px, 7vw, 96px)',
              right: 'clamp(40px, 7vw, 96px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              zIndex: 1,
            }}
          >
            {sections.map((_, j) => (
              <div
                key={j}
                style={{
                  width: 2,
                  height: j === i ? 24 : 8,
                  borderRadius: 2,
                  backgroundColor:
                    j <= i ? 'var(--light)' : 'rgba(249,245,235,0.3)',
                  transition: 'height 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Scroll space — keeps last card visible while scrolling toward next section */}
      <div style={{ height: '70svh', backgroundColor: 'var(--dark)' }} />
    </div>
  )
}
