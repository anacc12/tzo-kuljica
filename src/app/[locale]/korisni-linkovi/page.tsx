import { useTranslations } from 'next-intl'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'

const LINKS = [
  { name: 'Portal e-visitor', url: 'https://www.evisitor.hr' },
  { name: 'Hrvatska Turistička Zajednica', url: 'https://www.htz.hr' },
  { name: 'Zračna Luka Zadar', url: 'https://www.zadar-airport.hr' },
  { name: 'Jadrolinija', url: 'https://www.jadrolinija.hr' },
  { name: 'Liburnija', url: 'https://liburnija-zadar.hr' },
  { name: 'Pointers Travel', url: 'https://pointerstraveldmc.com' },
]

export default function UsefulLinksPage() {
  const t = useTranslations('usefulLinks')
  return (
    <>
      <PageHero title={t('title')}
        label="Linkovi" />
      <section className="py-20" style={{backgroundColor: "var(--light)"}}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="space-y-4">
            {LINKS.map((link, i) => (
              <FadeIn key={link.url} delay={i * 0.07}>
                <div className="flex items-center justify-between p-5 bg-sand-100 rounded-sm">
                  <h3 className="font-medium text-forest-800">{link.name}</h3>
                  <a href={link.url} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-olive-700 hover:text-olive-600 font-medium transition-colors">
                    {t('visit')} →
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
