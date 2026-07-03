import { useTranslations } from 'next-intl'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f365f13f855673966dd49f_sv-pavla%20(1).jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36707c265c97bdb0a28ab_jeronim.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f365f196cc03dd814276cc_pisani-spomen%20(1).jpg',
]

const LANDMARKS = [
  {
    key: 'writtenRecord',
    img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f365f196cc03dd814276cc_pisani-spomen%20(1).jpg',
  },
  {
    key: 'churchGospe',
    img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f365f17c9f154095f7e6d9_gospe-od-sniga-s.jpg',
  },
  {
    key: 'churchJeronim',
    img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f3670875022f901c15f338_jeronim1.jpg',
  },
  {
    key: 'churchPavao',
    img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f3678896cc03dd8143d6cb_svpavla4.jpg',
  },
] as const

export default function LandmarksPage() {
  const t = useTranslations('landmarks')

  return (
    <>
      <PageHero
        title={t('heroSubtitle')}
        // subtitle={t('heroSubtitle')}
        images={HERO_IMAGES}
        label="Znamenitosti"
        variant="light"
        layout="split"
      />

      {/* Landmarks — Franco alternating layout */}
      <section style={{ backgroundColor: 'var(--dark)', paddingTop: 120, paddingBottom: 160 }}>
        <div
          style={{
            maxWidth: 1800,
            margin: '0 auto',
            padding: '0 clamp(24px, 4vw, 64px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 160,
          }}
        >
          {LANDMARKS.map(({ key, img }, i) => {
            const imgLeft = i % 2 === 0
            return (
              <div
                key={key}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'clamp(32px, 5vw, 80px)',
                  alignItems: 'center',
                }}
                className="landmark-row"
              >
                {/* Image */}
                <div
                  style={{
                    order: imgLeft ? 0 : 1,
                    position: 'relative',
                    aspectRatio: '4/3',
                    borderRadius: 12,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={img}
                    alt={t(key)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </div>

                {/* Text */}
                <div
                  style={{
                    order: imgLeft ? 1 : 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 24,
                    padding: 'clamp(0px, 2vw, 40px)',
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <span className="label-badge light">00{i+1}</span>
                  </div>

                  <h2
                    style={{
                      fontFamily: 'Instrument Serif, Georgia, serif',
                      fontSize: 'clamp(2rem, 3.2vw, 3rem)',
                      fontWeight: 400,
                      lineHeight: 1.12,
                      letterSpacing: '-0.025em',
                      color: 'var(--light)',
                    }}
                  >
                    {t(key)}
                  </h2>

                  <p
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      fontSize: 14,
                      lineHeight: 1.4,
                      color: 'rgba(255,255,255,0.9)',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {t(`${key}Text` as any)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

    </>
  )
}
