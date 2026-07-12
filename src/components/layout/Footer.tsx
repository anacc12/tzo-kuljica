'use client'

import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Facebook, Instagram, ArrowRight } from 'lucide-react'

const VIDEO_URL = '/kukljica-before-footer.mov'
const POSTER_URL = 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f40c00845e65a13e8cc51_DJI_20240725021050_0199_D--1.jpg'

export default function Footer() {
  const t = useTranslations('footer')
  const inputRef = useRef<HTMLInputElement>(null)

  const NAV_COLUMNS = [
    {
      title: t('colPages'),
      links: [
        { label: t('home'), href: '/' },
        { label: t('about'), href: '/o-nama' },
        { label: t('events'), href: '/dogadanja' },
        { label: t('accommodation'), href: '/privatni-smjestaj' },
        { label: t('beaches'), href: '/plaze' },
        { label: t('landmarks'), href: '/znamenitosti' },
        { label: t('howToGetHere'), href: '/kako-do-nas' },
      ],
    },
    {
      title: t('colActivities'),
      links: [
        { label: t('activeVacation'), href: '/aktivni-odmor' },
        { label: t('nautical'), href: '/aktivni-odmor/nautika' },
        { label: t('cycling'), href: '/aktivni-odmor/biciklizam' },
        { label: t('hiking'), href: '/aktivni-odmor/pjesacenje' },
        { label: t('excursions'), href: '/aktivni-odmor/izleti' },
        { label: t('zelenaPoint'), href: '/holiday-park-zelena-punta' },
      ],
    },
    {
      title: t('colInfo'),
      links: [
        { label: t('news'), href: '/novosti-obavijesti-i-natjecaji' },
        { label: t('renters'), href: '/kutak-za-iznajmljivace' },
        { label: t('owners'), href: '/kutak-za-vlasnike' },
        { label: t('timetable'), href: '/vozni-red' },
        { label: t('usefulLinks'), href: '/korisni-linkovi' },
        { label: t('contact'), href: '/kontakt' },
      ],
    },
  ]

  return (
    <footer>
      {/* ── CTA section — sea video background ── */}
      <section className="relative overflow-hidden flex items-center justify-center" style={{ minHeight: '80vh' }}>
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={POSTER_URL}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEO_URL} type="video/mp4" />
          <source src={VIDEO_URL} type="video/quicktime" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,14,40,0.5) 0%, rgba(10,14,40,0.2) 40%, rgba(10,14,40,0.55) 100%)' }} />

        {/* Bottom gradient — blends into footer */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: 160, background: 'linear-gradient(to bottom, transparent, var(--dark))' }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6" style={{ maxWidth: 700 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <span className="label-badge light">{t('ctaBadge')}</span>
          </div>
          <h2
            style={{
              fontFamily: 'Instrument Serif, Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--light)',
              marginBottom: 32,
            }}
          >
            {t('ctaLine1')}
          </h2>
          <Link
            href="/dogadanja"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              border: '1px solid rgba(249,245,235,0.5)',
              borderRadius: 999,
              padding: '12px 28px',
              fontFamily: 'Geist, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--light)',
              textDecoration: 'none',
              transition: 'background-color 0.25s ease, border-color 0.25s ease',
              backdropFilter: 'blur(4px)',
              backgroundColor: 'rgba(249,245,235,0.1)',
            }}
          >
            {t('ctaButton')} <ArrowRight style={{ width: 14, height: 14 }} />
          </Link>
        </div>
      </section>

      {/* ── Main footer ── */}
      <div style={{ backgroundColor: 'var(--dark)', color: 'var(--light)', paddingTop: 80, paddingBottom: 0 }}>
        <div className="tz-container">

          {/* Top grid: newsletter left, columns right */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.55fr 1fr',
              gap: 64,
              paddingBottom: 64,
            }}
            className="footer-grid"
          >
            {/* Left: logo + newsletter */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {/* Logo — dark bg, always light version */}
              <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-light-1.png" alt="TZ Kukljica" style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
              </Link>

              {/* Newsletter */}
              {/* <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(249,245,235,0.5)', fontWeight: 500 }}>
                  {t('newsletterLabel')}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(249,245,235,0.2)', borderRadius: 4, overflow: 'hidden' }}>
                  <input
                    ref={inputRef}
                    type="email"
                    placeholder={t('newsletterPlaceholder')}
                    style={{
                      flex: 1,
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      padding: '12px 16px',
                      fontFamily: 'Geist, sans-serif',
                      fontSize: 14,
                      color: 'var(--light)',
                    }}
                  />
                  <button
                    style={{
                      padding: '12px 16px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'rgba(249,245,235,0.6)',
                    }}
                    aria-label="Subscribe"
                  >
                    <ArrowRight style={{ width: 16, height: 16 }} />
                  </button>
                </div>
                <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: 'rgba(249,245,235,0.35)', lineHeight: 1.5 }}>
                  {t('newsletterDisclaimer')}
                </p>
              </div> */}

              {/* Contact info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'Geist, sans-serif', fontSize: 13, color: 'rgba(249,245,235,0.5)' }}>
                <span>Ulica II br. 87, 23271 Kukljica</span>
                <a href="tel:+38523373276" style={{ color: 'rgba(249,245,235,0.5)', textDecoration: 'none' }}>+385 (0) 23 373 276</a>
                <a href="mailto:info@kukljica.hr" style={{ color: 'rgba(249,245,235,0.5)', textDecoration: 'none' }}>info@kukljica.hr</a>
              </div>
            </div>

            {/* Right: 3 nav columns */}
            <div style={{ display: 'flex', gap: 48, paddingRight: 48 }} className="footer-cols">
              {NAV_COLUMNS.map((col) => (
                <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 24, flex: 1 }}>
                  <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(249,245,235,0.4)', fontWeight: 500 }}>
                    {col.title}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {col.links.map((link) => (
                      <Link
                        key={link.href}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        href={link.href as any}
                        style={{
                          fontFamily: 'Geist, sans-serif',
                          fontSize: 14,
                          fontWeight: 400,
                          color: 'rgba(249,245,235,0.65)',
                          textDecoration: 'none',
                          lineHeight: 1.4,
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--light)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(249,245,235,0.65)')}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EU funding strip */}
          <div
            style={{
              backgroundColor: '#EBECF3',
              borderRadius: 8,
              padding: '20px 28px',
              marginBottom: 32,
              display: 'flex',
              alignItems: 'center',
              gap: 32,
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/footer-logos/logo-financira-eu.png" alt="Financira Europska unija" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/footer-logos/logo-leader.png" alt="LEADER" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/footer-logos/logo-lag-mareta.png" alt="LAG Mareta" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/footer-logos/logo-sp-zpp.png" alt="SP ZPP" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/footer-logos/logo-ministarstvo.png" alt="Ministarstvo poljoprivrede" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
            </div>
            <div style={{ marginLeft: 'auto', borderLeft: '1px solid rgba(0,0,0,0.1)', paddingLeft: 28 }}>
              <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginBottom: 4 }}>
                Sufinancirano sredstvima Europske unije
              </p>
              <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(0,0,0,0.75)', maxWidth: 280, lineHeight: 1.4 }}>
                Pametna Kukljica — digitalni informacijski sustav za zajednicu i turizam
              </p>
            </div>
          </div>

          {/* Bottom tile: social + copyright */}
          <div
            style={{
              borderTop: '1px solid rgba(249,245,235,0.12)',
              borderBottom: '1px solid rgba(249,245,235,0.12)',
              paddingTop: 28,
              paddingBottom: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <a href="https://web.facebook.com/visitkukljica/" target="_blank" rel="noopener noreferrer"
                style={{ color: 'rgba(249,245,235,0.5)', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--light)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(249,245,235,0.5)')}
              >
                <Facebook style={{ width: 18, height: 18 }} />
              </a>
              <a href="https://www.instagram.com/tz_kukljica/" target="_blank" rel="noopener noreferrer"
                style={{ color: 'rgba(249,245,235,0.5)', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--light)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(249,245,235,0.5)')}
              >
                <Instagram style={{ width: 18, height: 18 }} />
              </a>
            </div>

            <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: 'rgba(249,245,235,0.35)' }}>
              © {new Date().getFullYear()} TZ Kukljica. {t('rights')}
            </p>

            <div style={{ display: 'flex', gap: 20 }}>
              <Link href="/sluzbeni-dokumenti" style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: 'rgba(249,245,235,0.35)', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(249,245,235,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(249,245,235,0.35)')}
              >
                {t('officialDocs')}
              </Link>
              <Link href="/korisni-linkovi" style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: 'rgba(249,245,235,0.35)', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(249,245,235,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(249,245,235,0.35)')}
              >
                {t('usefulLinks')}
              </Link>
              <a
                href="https://mint.gov.hr/pristup-informacijama/propisi/propisi-iz-turizma/107"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'Geist, sans-serif', fontSize: 12, color: 'rgba(249,245,235,0.35)', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(249,245,235,0.7)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(249,245,235,0.35)')}
              >
                Propisi u turizmu
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-cols { flex-wrap: wrap; gap: 32px !important; padding-right: 0 !important; }
        }
      `}</style>
    </footer>
  )
}
