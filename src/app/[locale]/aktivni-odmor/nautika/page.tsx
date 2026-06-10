import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36f0e31ee8e95e3fc1662_nautika2.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36f0de1d71a8ec91ccbf1_nautika5.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36f0e74be18ac411b00bc_nautika6.jpg',
]

export default function NautikaPage() {
  const t = useTranslations('nautika')
  const locale = useLocale()
  const prefix = locale === 'en' ? '/en' : ''
  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} images={HERO_IMAGES} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f363c6cfc9f8a631af61ea_photo1.jpg" alt="" fill className="object-cover" sizes="50vw" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-3">Nautika</p>
              <h2 className="font-display text-4xl text-forest-800 font-light mb-4">{t('section1Title')}</h2>
              <p className="text-forest-600/80 leading-relaxed whitespace-pre-line">{t('section1Text')}</p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-3">Nautika</p>
              <h2 className="font-display text-4xl text-forest-800 font-light mb-4">{t('section2Title')}</h2>
              <p className="text-forest-600/80 leading-relaxed whitespace-pre-line">{t('section2Text')}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f371d4fe5fe9d5d6fd0afd_KUKLJICA.jpg" alt="" fill className="object-cover" sizes="50vw" />
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="bg-sand-100 rounded-sm p-8">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-3">{t('harbourLabel')}</p>
              <h2 className="font-display text-3xl text-forest-800 font-light mb-4">{t('harbourTitle')}</h2>
              <p className="text-forest-700 mb-2">{t('harbourFeatures')}</p>
              <p className="text-forest-600/80 text-sm whitespace-pre-line mb-6">{t('harbourContact')}</p>
              <Link href={`${prefix}/o-nama`} className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-700 text-white text-sm font-medium px-6 py-3 transition-colors">
                {t('contactUs')} →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
