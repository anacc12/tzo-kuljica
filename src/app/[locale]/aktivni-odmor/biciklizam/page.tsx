import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36d5b5ae87004f1ea0c1e_photo3%20(1).jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f365f127fbe65f4d9b9861_gospe-od-sniga%20(1).jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f3766ef1b734d58f9ec904_variant.jpg',
]

export default function CyclingPage() {
  const t = useTranslations('cycling')
  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} images={HERO_IMAGES}
        label="Biciklizam" />
      <section className="py-20" style={{backgroundColor: "var(--light)"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36093a92601c7a06324cd_cycling.jpg" alt="" fill className="object-cover" sizes="50vw" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-3">Biciklizam</p>
              <h2 className="font-display text-4xl text-forest-800 font-light mb-4">{t('section1Title')}</h2>
              <p className="text-forest-600/80 leading-relaxed">{t('section1Text')}</p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-3">Biciklizam</p>
              <h2 className="font-display text-4xl text-forest-800 font-light mb-4">{t('section2Title')}</h2>
              <p className="text-forest-600/80 leading-relaxed">{t('section2Text')}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f3766ef1b734d58f9ec904_variant.jpg" alt="" fill className="object-cover" sizes="50vw" />
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="bg-sand-100 rounded-sm p-8">
              <h2 className="font-display text-3xl text-forest-800 font-light mb-3">{t('rentTitle')}</h2>
              <p className="text-forest-600/80 mb-6">{t('rentText')}</p>
              <div className="flex flex-wrap gap-4">
                <Link href={`/o-nama`} className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-700 text-white text-sm font-medium px-6 py-3 transition-colors">
                  {t('contactUs')} →
                </Link>
                <a href="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f3c5c6a3b2660ca1d2dbe_Bike%20map%20Ugljan-Pasman%202025_web.pdf" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-white text-sm font-medium px-6 py-3 transition-colors">
                  {t('viewRoute')} →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
