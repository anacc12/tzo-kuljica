'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434913d13c4157070367_RR_04709.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349f057f3c927cbbccc_RR_05250.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434965550e6a39598db1_RR_05195.jpg',
]

const EASE = [0.16, 1, 0.3, 1]

type Section = { label: string; text: string }

type Props = {
  sections: Section[]
  cta: string
}

export default function HomeAbout({ sections, cta }: Props) {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = sections.map((_, i) => {
      const el = refs.current[i]
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [sections])

  return (
    <section style={{ backgroundColor: 'var(--dark)', color: 'var(--light)', overflow: 'clip' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

        {/* Left — scrollable text sections */}
        <div>
          {sections.map((section, i) => (
            <div
              key={i}
              ref={el => { refs.current[i] = el }}
              style={{
                minHeight: '100svh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 'clamp(48px, 10vw, 120px) clamp(32px, 5vw, 80px)',
                borderBottom: i < sections.length - 1 ? '1px solid rgba(249,245,235,0.1)' : 'none',
              }}
            >
              <span
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(249,245,235,0.4)',
                  marginBottom: 24,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span style={{ fontSize: 10, opacity: 0.6 }}>0{i + 1}</span>
                {section.label}
              </span>

              <p
                style={{
                  fontFamily: 'Instrument Serif, Georgia, serif',
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
                  fontWeight: 400,
                  lineHeight: 1.25,
                  letterSpacing: '-0.015em',
                  color: 'var(--light)',
                  maxWidth: 520,
                  marginBottom: 40,
                }}
              >
                {section.text}
              </p>

              <Link
                href="/o-nama"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 13,
                  fontWeight: 500,
                  color: 'var(--light)',
                  textDecoration: 'none',
                  border: '1px solid rgba(249,245,235,0.25)',
                  borderRadius: 999,
                  padding: '10px 22px',
                  width: 'fit-content',
                  transition: 'border-color 0.2s, background-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(249,245,235,0.6)'
                  e.currentTarget.style.backgroundColor = 'rgba(249,245,235,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(249,245,235,0.25)'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Right — sticky image */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'sticky',
              top: 0,
              height: '100svh',
              overflow: 'hidden',
            }}
          >
            {/* Preload all images silently */}
            {IMAGES.map((src, i) => i !== active && (
              <div key={`pre-${i}`} style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}>
                <Image src={src} alt="" fill sizes="1px" priority />
              </div>
            ))}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.65, ease: EASE }}
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

            {/* Section indicator dots */}
            <div
              style={{
                position: 'absolute',
                bottom: 32,
                left: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                zIndex: 2,
              }}
            >
              {sections.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 2,
                    height: i === active ? 24 : 8,
                    borderRadius: 2,
                    backgroundColor: i === active ? 'var(--light)' : 'rgba(249,245,235,0.3)',
                    transition: 'height 0.4s ease, background-color 0.4s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
