import { useTranslations } from 'next-intl'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f365f13f855673966dd49f_sv-pavla%20(1).jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36707c265c97bdb0a28ab_jeronim.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f365f196cc03dd814276cc_pisani-spomen%20(1).jpg',
]

const LANDMARKS = [
  { key: 'writtenRecord', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f365f196cc03dd814276cc_pisani-spomen%20(1).jpg' },
  { key: 'churchGospe', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f365f17c9f154095f7e6d9_gospe-od-sniga-s.jpg' },
  { key: 'churchJeronim', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f3670875022f901c15f338_jeronim1.jpg' },
  { key: 'churchPavao', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f3678896cc03dd8143d6cb_svpavla4.jpg' },
] as const

export default function LandmarksPage() {
  const t = useTranslations('landmarks')
  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} images={HERO_IMAGES} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {LANDMARKS.map(({ key, img }, i) => (
            <FadeIn key={key} delay={0.05}>
              <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-3">Znamenitosti</p>
                  <h2 className="font-display text-4xl text-forest-800 font-light mb-6">{t(key)}</h2>
                  <p className="text-forest-600/80 leading-relaxed whitespace-pre-line">{t(`${key}Text` as Parameters<typeof t>[0])}</p>
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
