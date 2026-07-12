import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36093617865f143922b06_boat-rent.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f3609345b625a7db6e004c_diving.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f3609355257d344d32bffb_tenis.jpg',
]

const ACTIVITIES = [
  { key: 'hiking',  href: '/aktivni-odmor/pjesacenje', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f362927127964673613f82_kukljica%20pjeske.jpg' },
  { key: 'cycling', href: '/aktivni-odmor/biciklizam',  img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36093a92601c7a06324cd_cycling.jpg' },
  { key: 'nautics', href: '/aktivni-odmor/nautika',     img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36093ec871d9613af68e1_ribolov.jpg' },
  { key: 'trips',   href: '/aktivni-odmor/izleti',      img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f363c6717a6f67a9e8f965_photo6.jpg' },
] as const

export default function ActiveVacationPage() {
  const t = useTranslations('activeVacation')

  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} images={HERO_IMAGES}
        label="Aktivni odmor" />

      {/* Sticky stacking cards */}
      <div style={{ position: 'relative' }}>
        {ACTIVITIES.map(({ key, href, img }, i) => {
          const imgLeft = i % 2 === 0
          return (
            <div
              key={key}
              style={{
                position: 'sticky',
                top: 0,
                height: '100svh',
                zIndex: i + 1,
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
                    <span className="label-badge">0{i + 1}</span>
                  </div>

                  <h2
                    style={{
                      fontFamily: 'Instrument Serif, Georgia, serif',
                      fontSize: 'clamp(4rem, 3.2vw, 3rem)',
                      fontWeight: 400,
                      lineHeight: 1.12,
                      letterSpacing: '-0.025em',
                      color: 'var(--dark)',
                    }}
                  >
                    {t(key)}
                  </h2>

                  <p
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: 'rgba(22,35,27,0.65)',
                    }}
                  >
                    {t(`${key}Text` as Parameters<typeof t>[0])}
                  </p>

                  <div>
                    <Link
                      href={href}
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
                      {t('findOutMore')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <div style={{ height: '50svh', backgroundColor: 'var(--light)' }} />
      </div>
    </>
  )
}
