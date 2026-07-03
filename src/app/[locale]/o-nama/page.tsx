import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'



const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f363c67c9f154095f64d49_photo14.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f363c6cfc9f8a631af61ea_photo1.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f365f196cc03dd814276cc_pisani-spomen%20(1).jpg',
]

const CTA_ITEMS = [
  { key: 'ctaActive', descKey: 'ctaActiveDesc', href: '/aktivni-odmor' },
  { key: 'ctaEvents', descKey: 'ctaEventsDesc', href: '/dogadanja' },
  { key: 'ctaLandmarks', descKey: 'ctaLandmarksDesc', href: '/znamenitosti' },
  { key: 'ctaBeaches', descKey: 'ctaBeachesDesc', href: '/plaze' },
] as const

const GALLERY_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434913d13c4157070367_RR_04709.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349f057f3c927cbbccc_RR_05250.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434965550e6a39598db1_RR_05195.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349e01dcdf1e90929c3_RR_04844.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349e8d275cab4059d83_Kukljica%20FOTO%20Matija%20Lipar-75.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f43497310ff023880e946_Dron%20fotografije%20Kukljica%2004%202022%20(21).jpg',
]

const STACKING_SECTIONS = [
  {
    label: 'Priroda',
    text: 'Netaknuta priroda, bistro more i zelenilo otoka Kukljice',
    img: '/about-priroda.jpg',
  },
  {
    label: 'Kultura',
    text: 'Bogata kulturna baština i mediteranski duh',
    img: '/about-kultura.jpg',
  },
  {
    label: 'Tradicija',
    text: 'Autentična tradicija i gostoljubivost lokalnog stanovništva',
    img: '/about-tradicija.jpg',
  },
]

export default function AboutPage() {
  const t = useTranslations('about')

  return (
    <>
      <PageHero
        title={t('heroSubtitle')}
        // subtitle={t('heroSubtitle')}
        images={HERO_IMAGES}
        label="O nama"
      />
      <section style={{ backgroundColor: 'var(--dark)', color: 'var(--light)', paddingTop: 80, paddingBottom: 80 }}>
        <div className="tz-container">
          <div className="divider-light mb-12" />
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <span className="label-badge light mb-6 inline-flex">Otok Kukljica</span>
              <p className="font-sans text-lg leading-relaxed" style={{ color: 'rgba(249,245,235,0.75)' }}>
                {t('introText')}
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                {CTA_ITEMS.map(({ key, descKey, href }) => (
                  <Link
                    key={key}
                    href={href}
                    className="group p-5 transition-all duration-500"
                    style={{ border: '1px solid var(--border-light)', borderRadius: 4 }}
                  >
                    <h3 className="font-display text-3xl font-light mb-10" style={{ color: 'var(--light)' }}>
                      {t(key)}
                    </h3>
                    <p className="text-sm" style={{ color: 'rgba(249,245,235,0.5)' }}>{t(descKey)}</p>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stacking cards — sticky scroll */}
      <div style={{ position: 'relative' }}>
        {STACKING_SECTIONS.map((section, i) => (
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
            <Image
              src={section.img}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={i < 2}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(17,21,46,0.82) 0%, rgba(17,21,46,0.35) 55%, rgba(17,21,46,0.1) 100%)',
              }}
            />
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
              <div style={{ display: 'flex' }}>
                <span className="label-badge light">{section.label}</span>
              </div>
              <p
                style={{
                  fontFamily: 'Instrument Serif, Georgia, serif',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  color: 'var(--light)',
                  maxWidth: 720,
                }}
              >
                {section.text}
              </p>
            </div>
            {/* Progress dots */}
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
              {STACKING_SECTIONS.map((_, j) => (
                <div
                  key={j}
                  style={{
                    width: 2,
                    height: j === i ? 24 : 8,
                    borderRadius: 2,
                    backgroundColor: j <= i ? 'var(--light)' : 'rgba(249,245,235,0.3)',
                  }}
                />
              ))}
            </div>
          </div>
        ))}
        <div style={{ height: '50svh', backgroundColor: 'var(--dark)' }} />
      </div>

      {/* Thirds: text + image grid */}
      <section style={{ backgroundColor: 'var(--bg)', paddingTop: 80, paddingBottom: 80 }}>
        <div className="tz-container">
          <div className="divider mb-16" />
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <FadeIn>
              <span className="label-badge mb-6 inline-flex">Lokacija</span>
              <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: 'var(--dark)' }}>
                {t('howToGetTitle')}
              </h2>
              <p className="font-sans leading-relaxed mb-8" style={{ color: 'rgba(22,35,27,0.65)' }}>
                {t('howToGetText')}
              </p>
              <Link
                href="/kako-do-nas"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium"
                style={{ color: 'var(--dark)', borderBottom: '1px solid rgba(22,35,27,0.4)', paddingBottom: 2 }}
              >
                {t('showMore')}
              </Link>
            </FadeIn>
            <div className="grid grid-cols-3 gap-3">
              {GALLERY_IMAGES.map((src, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', borderRadius: 2 }}>
                    <Image src={src} alt="" fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="20vw" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
