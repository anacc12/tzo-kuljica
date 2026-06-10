import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f369faab3b8bde72017551_sabusa.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f369fa71279646736751d6_kostanj.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f369fac737cf96d8dfd5ea_jelenica.jpg',
]

const BEACHES = [
  { key: 'sabusa', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f369faab3b8bde72017551_sabusa.jpg', map: 'https://maps.app.goo.gl/mrs8cbM3bTHdFPuFA' },
  { key: 'jelenica', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f369fac737cf96d8dfd5ea_jelenica.jpg', map: 'https://maps.app.goo.gl/Cy1X56ccPKNVfaYG6' },
  { key: 'kostanj', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f369fa71279646736751d6_kostanj.jpg', map: 'https://maps.app.goo.gl/mZ553EVJ8R2yyiYj8' },
  { key: 'zelenaPunta', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f369fa59a98f33b8e41c35_zelena-punta.jpg', map: 'https://maps.app.goo.gl/f2W28z3ExPagx3vQ9' },
] as const

export default function BeachesPage() {
  const t = useTranslations('beaches')
  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} images={HERO_IMAGES} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {BEACHES.map(({ key, img, map }, i) => (
            <FadeIn key={key}>
              <div className={`grid md:grid-cols-2 gap-12 items-center`}>
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-3">Plaže</p>
                  <h2 className="font-display text-4xl text-forest-800 font-light mb-4">{t(key)}</h2>
                  <p className="text-forest-600/80 leading-relaxed mb-6">{t(`${key}Text` as Parameters<typeof t>[0])}</p>
                  <a href={map} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-olive-700 hover:text-olive-600 transition-colors">
                    <MapPin className="w-4 h-4" /> {t('viewOnMap')}
                  </a>
                </div>
                <div className={`relative aspect-[4/3] rounded-sm overflow-hidden ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Image src={img} alt={t(key)} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}
