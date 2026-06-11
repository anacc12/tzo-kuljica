import { useTranslations } from 'next-intl'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'
import TransportTabs from '@/components/sections/TransportTabs'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f363c67c9f154095f64d49_photo14.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f363c6cfc9f8a631af61ea_photo1.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f365f196cc03dd814276cc_pisani-spomen%20(1).jpg',
]

export default function HowToGetPage() {
  const t = useTranslations('howToGet')
  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} images={HERO_IMAGES} />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="text-forest-600/80 leading-relaxed text-lg whitespace-pre-line mb-8">{t('introText')}</p>
            <a
              href="https://maps.app.goo.gl/cwG7Tdhfvd7e9E4u7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-700 text-white text-sm font-medium px-6 py-3 transition-colors mb-16"
            >
              {t('showOnMap')}
            </a>
          </FadeIn>
          <TransportTabs />
        </div>
      </section>
    </>
  )
}
