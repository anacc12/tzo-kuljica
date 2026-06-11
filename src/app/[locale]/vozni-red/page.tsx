import { useTranslations } from 'next-intl'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'

export default function TimetablePage() {
  const t = useTranslations('timetable')
  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')}
        label="Vozni red" />
      <section className="py-20" style={{backgroundColor: "var(--light)"}}>
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-6">{t('linksTitle')}</p>
            <div className="space-y-4">
              <a href="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6865a2cfc1f218a69db3ad93_205-LINIJA-PREKO-TKON1-1.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-sand-100 hover:bg-sand-200 rounded-sm transition-colors group">
                <span className="font-medium text-forest-800">{t('bus')}</span>
                <span className="text-sm text-olive-700 group-hover:text-olive-600">PDF</span>
              </a>
              <a href="https://www.jadrolinija.hr/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-sand-100 hover:bg-sand-200 rounded-sm transition-colors group">
                <span className="font-medium text-forest-800">{t('ferryLines')}</span>
                <span className="text-sm text-olive-700 group-hover:text-olive-600">jadrolinija.hr</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
