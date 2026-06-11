import { useTranslations } from 'next-intl'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36d5b59baabea457e9ad6_photo4%20(1).jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36d5b17f95e346f66ce5a_photo2.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36d5b3ccf9bbbfb902c9d_photo7%20(1).jpg',
]

export default function HikingPage() {
  const t = useTranslations('hiking')
  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} images={HERO_IMAGES}
        label="Pješačenje" />
      <section className="py-20" style={{backgroundColor: "var(--light)"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <FadeIn>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f362927127964673613f82_kukljica%20pjeske.jpg" alt="" fill className="object-cover" sizes="50vw" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-3">Pješačenje</p>
              <h2 className="font-display text-4xl text-forest-800 font-light mb-4">{t('section1Title')}</h2>
              <p className="text-forest-600/80 leading-relaxed">{t('section1Text')}</p>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="bg-sand-100 rounded-sm p-8">
              <h2 className="font-display text-3xl text-forest-800 font-light mb-6">{t('section2Title')}</h2>
              <div className="space-y-3">
                {(['trail6','trail16','trail17','trail19'] as const).map(k => (
                  <div key={k} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-600 mt-2 flex-shrink-0" />
                    <p className="text-forest-700">{t(k)}</p>
                  </div>
                ))}
              </div>
              <a href="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f3d80a53520d3033b3679_Trail%20map%20Ugljan-Pasman%202025_web.pdf" target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-700 text-white text-sm font-medium px-6 py-3 transition-colors">
                {t('viewRoute')}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
