import { useTranslations } from 'next-intl'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'

export default function OfficialDocsPage() {
  const t = useTranslations('officialDocs')
  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="text-forest-600/60">Dokumenti će biti dostupni uskoro.</p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
