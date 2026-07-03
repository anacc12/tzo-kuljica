import { useTranslations } from 'next-intl'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36d5b59baabea457e9ad6_photo4%20(1).jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36d5b17f95e346f66ce5a_photo2.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36d5b3ccf9bbbfb902c9d_photo7%20(1).jpg',
]

const BANNER_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36d5b17f95e346f66ce5a_photo2.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36d5b3ccf9bbbfb902c9d_photo7%20(1).jpg',
]

const TRAIL_KEYS = ['trail6', 'trail16', 'trail17', 'trail19'] as const

export default function HikingPage() {
  const t = useTranslations('hiking')

  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} images={HERO_IMAGES}
        label="Pješačenje" />

      {/* Stacking card — Lungomare */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100svh',
            zIndex: 1,
            backgroundColor: 'var(--light)',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 1800,
              margin: '0 auto',
              padding: '0 clamp(24px, 4vw, 64px)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px, 5vw, 80px)',
              alignItems: 'center',
            }}
            className="landmark-row"
          >
            {/* Image left */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: 12,
                overflow: 'hidden',
              }}
            >
              <Image
                src="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f362927127964673613f82_kukljica%20pjeske.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Text right */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                padding: 'clamp(0px, 2vw, 40px)',
              }}
            >
              <div style={{ display: 'flex' }}>
                <span className="label-badge">01</span>
              </div>
              <h2
                style={{
                  fontFamily: 'Instrument Serif, Georgia, serif',
                  fontSize: 'clamp(2rem, 3.2vw, 3rem)',
                  fontWeight: 400,
                  lineHeight: 1.12,
                  letterSpacing: '-0.025em',
                  color: 'var(--dark)',
                }}
              >
                {t('section1Title')}
              </h2>
              <p
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'rgba(22,35,27,0.65)',
                }}
              >
                {t('section1Text')}
              </p>
            </div>
          </div>
        </div>
        <div style={{ height: '50svh', backgroundColor: 'var(--light)' }} />
      </div>

      {/* Bottom banner — Preporučene staze */}
      <section style={{ backgroundColor: 'var(--bg)', paddingTop: 100, paddingBottom: 100 }}>
        <div className="tz-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px, 6vw, 100px)',
              alignItems: 'start',
              marginBottom: 64,
            }}
            className="harbour-top"
          >
            {/* Left: heading */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex' }}>
                <span className="label-badge">Pješačenje</span>
              </div>
              <h2
                style={{
                  fontFamily: 'Instrument Serif, Georgia, serif',
                  fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  color: 'var(--dark)',
                }}
              >
                {t('section2Title')}
              </h2>
            </div>

            {/* Right: trail list + button */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 8 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {TRAIL_KEYS.map((k, i) => (
                  <div
                    key={k}
                    style={{
                      display: 'flex',
                      gap: 16,
                      paddingBottom: 12,
                      borderBottom: i < TRAIL_KEYS.length - 1 ? '1px solid rgba(22,35,27,0.1)' : 'none',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Roboto Condensed, sans-serif',
                        fontSize: 11,
                        letterSpacing: '0.08em',
                        color: 'rgba(22,35,27,0.35)',
                        minWidth: 20,
                        paddingTop: 2,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p
                      style={{
                        fontFamily: 'Geist, sans-serif',
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: 'rgba(22,35,27,0.7)',
                      }}
                    >
                      {t(k)}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <a
                  href="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f3d80a53520d3033b3679_Trail%20map%20Ugljan-Pasman%202025_web.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: 'var(--dark)',
                    color: 'var(--light)',
                    padding: '9px 20px',
                    borderRadius: 999,
                    fontFamily: 'Geist, sans-serif',
                    fontSize: 13,
                    fontWeight: 500,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {t('viewRoute')}
                </a>
              </div>
            </div>
          </div>

          {/* Two images */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '3fr 2fr',
              gap: 16,
              height: 'clamp(300px, 40vw, 520px)',
            }}
            className="harbour-images"
          >
            {BANNER_IMAGES.map((src, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  borderRadius: 12,
                  overflow: 'hidden',
                }}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
