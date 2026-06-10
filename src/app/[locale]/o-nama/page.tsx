import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f363c67c9f154095f64d49_photo14.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f363c6cfc9f8a631af61ea_photo1.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f365f196cc03dd814276cc_pisani-spomen%20(1).jpg',
]

const CTA_ITEMS = [
  { key: 'ctaActive' as const, descKey: 'ctaActiveDesc' as const, href: '/aktivni-odmor' },
  { key: 'ctaEvents' as const, descKey: 'ctaEventsDesc' as const, href: '/dogadanja' },
  { key: 'ctaLandmarks' as const, descKey: 'ctaLandmarksDesc' as const, href: '/znamenitosti' },
  { key: 'ctaBeaches' as const, descKey: 'ctaBeachesDesc' as const, href: '/plaze' },
]

export default function AboutPage() {
  const t = useTranslations('about')
  const locale = useLocale()
  const prefix = locale === 'en' ? '/en' : ''

  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} images={HERO_IMAGES} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn>
              <p className="text-forest-600/80 leading-relaxed text-lg">{t('introText')}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {CTA_ITEMS.map(({ key, descKey, href }) => (
                  <Link
                    key={key}
                    href={`${prefix}${href}`}
                    className="group p-5 bg-sand-100 hover:bg-forest-800 rounded-sm transition-all duration-300"
                  >
                    <h3 className="font-display text-xl font-medium text-forest-800 group-hover:text-white mb-2 transition-colors">
                      {t(key)}
                    </h3>
                    <p className="text-sm text-forest-600/70 group-hover:text-white/70 transition-colors">{t(descKey)}</p>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map + How to get here preview */}
      <section className="py-20 bg-sand-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-forest-800 font-light mb-6">{t('howToGetTitle')}</h2>
            <p className="text-forest-600/80 leading-relaxed max-w-2xl mb-8">{t('howToGetText')}</p>
            <Link
              href={`${prefix}/kako-do-nas`}
              className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-700 text-white text-sm font-medium px-6 py-3 transition-colors"
            >
              {t('showMore')} →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434913d13c4157070367_RR_04709.jpg',
              'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349f057f3c927cbbccc_RR_05250.jpg',
              'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434965550e6a39598db1_RR_05195.jpg',
              'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349e01dcdf1e90929c3_RR_04844.jpg',
              'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349e8d275cab4059d83_Kukljica%20FOTO%20Matija%20Lipar-75.jpg',
              'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f43497310ff023880e946_Dron%20fotografije%20Kukljica%2004%202022%20(21).jpg',
              'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f43492e72db1f2d0ef1ec_RR_05128.jpg',
              'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434913d13c415707032a_Tz%20Kukljica%202022%20(2).jpg',
            ].map((src, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="relative aspect-square rounded-sm overflow-hidden">
                  <Image src={src} alt="" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="25vw" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
