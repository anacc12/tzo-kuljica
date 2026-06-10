import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f363c681779dc231468bcf_photo9.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36d5b5ae87004f1ea0c1e_photo3%20(1).jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f363c6965177459e76d581_photo4.jpg',
]

export default function TripsPage() {
  const t = useTranslations('trips')
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
                <Image src="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f363c6717a6f67a9e8f965_photo6.jpg" alt="" fill className="object-cover" sizes="50vw" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-3">Izleti</p>
              <h2 className="font-display text-4xl text-forest-800 font-light mb-4">{t('section1Title')}</h2>
              <p className="text-forest-600/80 leading-relaxed whitespace-pre-line">{t('section1Text')}</p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-3">Izleti</p>
              <h2 className="font-display text-4xl text-forest-800 font-light mb-4">{t('section2Title')}</h2>
              <p className="text-forest-600/80 leading-relaxed">{t('section2Text')}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f363c63520f87ee947f2a8_photo11.jpg" alt="" fill className="object-cover" sizes="50vw" />
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="bg-sand-100 rounded-sm p-8">
              <h2 className="font-display text-3xl text-forest-800 font-light mb-3">{t('infoTitle')}</h2>
              <p className="text-forest-600/80 mb-6">{t('infoText')}</p>
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
