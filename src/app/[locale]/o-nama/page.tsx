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

const STACKING_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f40c00845e65a13e8cc51_DJI_20240725021050_0199_D--1.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f40bbc4c90c3044407ba7_DJI_20240709182237_0203_D.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f418c48987985b84a7d31_Zracne%20Fotografije%20Kukljica%202022%20%20(3)%20(3).jpg',
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

const STACK_LABELS = ['Priroda', 'Kultura', 'Tradicija']
const STACK_TEXTS = [
  'Netaknuta priroda, bistro more i zelenilo otoka Kukljice',
  'Bogata kulturna baština i mediteranski duh',
  'Autentična tradicija i gostoljubivost lokalnog stanovništva',
]

export default function AboutPage() {
  const t = useTranslations('about')

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('heroSubtitle')}
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
                    <h3 className="font-display text-xl font-light mb-2" style={{ color: 'var(--light)' }}>
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

      {/* Stacking cards */}
      <section style={{ backgroundColor: 'var(--light)', paddingTop: 80, paddingBottom: 80 }}>
        <div className="tz-container">
          <div className="divider mb-12" />
          <div className="space-y-6">
            {STACKING_IMAGES.map((src, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="stacking-card relative" style={{ backgroundImage: `url(${src})` }}>
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(22,35,27,0.85) 0%, rgba(22,35,27,0) 60%)' }} />
                  <div className="relative z-10">
                    <span className="label-badge light mb-3 inline-flex">{STACK_LABELS[i]}</span>
                    <p className="font-display text-2xl font-light text-white">{STACK_TEXTS[i]}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

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
                {t('showMore')} →
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
