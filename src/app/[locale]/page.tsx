import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import HeroVideo from '@/components/sections/HeroVideo'
import FadeIn from '@/components/sections/FadeIn'

const EXPLORE_ITEMS = [
  { key: 'beaches', href: '/plaze', icon: '🏖️' },
  { key: 'activeVacation', href: '/aktivni-odmor', icon: '🚴' },
  { key: 'eventsCard', href: '/dogadanja', icon: '🎭' },
  { key: 'accommodationCard', href: '/privatni-smjestaj', icon: '🏠' },
  { key: 'landmarksCard', href: '/znamenitosti', icon: '⛪' },
  { key: 'gastronomy', href: '/o-nama', icon: '🐟' },
] as const

const ACCOMMODATION_IMAGES = [
  {
    name: 'Apartmani Lavanda',
    href: '/privatni-smjestaj',
    image: 'https://cdn.prod.website-files.com/67e320f2dcdaf05e336987b9/686430210b7db83c91f02c24_BAC%CC%8CIC%CC%81%20EDO.jpg',
  },
  {
    name: 'Apartmani Sonja',
    href: '/privatni-smjestaj',
    image: 'https://cdn.prod.website-files.com/67e320f2dcdaf05e336987b9/6864314d9305ffbb4836af8a_217249734_1488037248213012_71304037562245513_n.jpg',
  },
  {
    name: 'Apartmani Tuta',
    href: '/privatni-smjestaj',
    image: 'https://cdn.prod.website-files.com/67e320f2dcdaf05e336987b9/686433110ac27170317deff3_244949136.jpg',
  },
]

export default function HomePage() {
  const t = useTranslations('home')

  return (
    <>
      <HeroVideo />

      {/* Welcome section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-4">{t('welcomeLabel')}</p>
              <h2 className="font-display text-4xl md:text-5xl text-forest-800 font-light leading-tight mb-6">
                {t('welcomeTitle')}
              </h2>
              <p className="text-forest-600/80 leading-relaxed mb-8">{t('welcomeText')}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/privatni-smjestaj"
                  className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-700 text-white text-sm font-medium px-6 py-3 transition-colors"
                >
                  {t('ctaAccommodation')}
                  <span className="text-white/50">→</span>
                </Link>
                <Link
                  href="/dogadanja"
                  className="inline-flex items-center gap-2 border border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-white text-sm font-medium px-6 py-3 transition-colors"
                >
                  {t('ctaEvents')}
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-3 h-80">
                <div className="relative rounded-sm overflow-hidden row-span-2">
                  <Image
                    src="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f40c00845e65a13e8cc51_DJI_20240725021050_0199_D--1.jpg"
                    alt="Kukljica"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative rounded-sm overflow-hidden">
                  <Image
                    src="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f40bbc4c90c3044407ba7_DJI_20240709182237_0203_D.jpg"
                    alt="Kukljica"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative rounded-sm overflow-hidden">
                  <Image
                    src="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f418c48987985b84a7d31_Zracne%20Fotografije%20Kukljica%202022%20%20(3)%20(3).jpg"
                    alt="Kukljica"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Explore grid */}
      <section className="py-20 bg-sand-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-2">{t('exploreLabel')}</p>
            <h2 className="font-display text-4xl md:text-5xl text-forest-800 font-light mb-12">{t('exploreTitle')}</h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {EXPLORE_ITEMS.map(({ key, href, icon }, i) => (
              <FadeIn key={key} delay={i * 0.07}>
                <Link
                  href={href}
                  className="group flex flex-col items-center text-center p-6 bg-white hover:bg-forest-800 rounded-sm transition-all duration-300 hover:shadow-lg"
                >
                  <span className="text-3xl mb-3">{icon}</span>
                  <h3 className="font-display text-lg font-medium text-forest-800 group-hover:text-white transition-colors leading-tight mb-2">
                    {t(key as Parameters<typeof t>[0])}
                  </h3>
                  <p className="text-xs text-forest-600/70 group-hover:text-white/70 transition-colors leading-snug">
                    {t(`${key}Desc` as Parameters<typeof t>[0])}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434913d13c4157070367_RR_04709.jpg',
                  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349f057f3c927cbbccc_RR_05250.jpg',
                  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434965550e6a39598db1_RR_05195.jpg',
                  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349e01dcdf1e90929c3_RR_04844.jpg',
                ].map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden">
                    <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-4">{t('aboutLabel')}</p>
              <h2 className="font-display text-4xl md:text-5xl text-forest-800 font-light leading-tight mb-6">
                {t('aboutTitle')}
              </h2>
              <p className="text-forest-600/80 leading-relaxed mb-8">{t('aboutText')}</p>
              <Link
                href="/o-nama"
                className="inline-flex items-center gap-2 text-forest-800 font-medium text-sm border-b border-forest-800/30 hover:border-forest-800 pb-0.5 transition-colors"
              >
                {t('showMore')} <span>→</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Accommodation section */}
      <section className="py-20 bg-forest-800">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-400 mb-2">{t('accommodationLabel')}</p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-12">{t('accommodationTitle')}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {ACCOMMODATION_IMAGES.map((apt, i) => (
              <FadeIn key={apt.name} delay={i * 0.1}>
                <Link href={apt.href} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
                    <Image
                      src={apt.image}
                      alt={apt.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl text-white font-medium">{apt.name}</h3>
                    <span className="text-xs text-olive-400 group-hover:text-olive-300 transition-colors tracking-wider">
                      {t('moreInfo')} →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <Link
              href="/privatni-smjestaj"
              className="inline-block border border-white/30 hover:bg-white hover:text-forest-800 text-white text-sm font-medium tracking-widest uppercase px-8 py-3 transition-colors"
            >
              {t('browseAccommodation')}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
