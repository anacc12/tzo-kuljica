import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'

// Apartments are hardcoded since they're not in Sanity
const APARTMENTS = [
  {
    slug: 'apartmani-lavanda',
    name: 'Apartmani Lavanda',
    summary: 'Mir i priroda na Jadranskoj obali.',
    color: '#8B7A3D',
    image: 'https://cdn.prod.website-files.com/67e320f2dcdaf05e336987b9/686430210b7db83c91f02c24_BAC%CC%8CIC%CC%81%20EDO.jpg',
  },
  {
    slug: 'apartmani-sonja',
    name: 'Apartmani Sonja',
    summary: 'Ugodni apartmani s pogledom na more.',
    color: '#5B7A5B',
    image: 'https://cdn.prod.website-files.com/67e320f2dcdaf05e336987b9/6864314d9305ffbb4836af8a_217249734_1488037248213012_71304037562245513_n.jpg',
  },
  {
    slug: 'apartmani-tuta',
    name: 'Apartmani Tuta',
    summary: 'Tradicionalna dalmatinska gostoljubivost.',
    color: '#7A5B3D',
    image: 'https://cdn.prod.website-files.com/67e320f2dcdaf05e336987b9/686433110ac27170317deff3_244949136.jpg',
  },
]

function getInitials(name: string) {
  return name.trim().split(/\s+/).map(w => w[0].toUpperCase()).join('')
}

export default function AccommodationPage() {
  const t = useTranslations('accommodation')

  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')}
        label="Smještaj" />
      <section className="py-20" style={{backgroundColor: "var(--light)"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {APARTMENTS.map((apt, i) => (
              <FadeIn key={apt.slug} delay={i * 0.1}>
                <div className="group rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                  {/* Image or color fallback */}
                  <div className="relative aspect-[4/3]">
                    {apt.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={apt.image} alt={apt.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-white/90" style={{ backgroundColor: apt.color }}>
                        {getInitials(apt.name)}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-semibold text-forest-800 mb-2">{apt.name}</h3>
                    <p className="text-sm text-forest-600/80 mb-4 line-clamp-2">{apt.summary}</p>
                    <Link href={`/privatni-smjestaj/${apt.slug}`}
                      className="inline-block w-full text-center bg-forest-800 hover:bg-forest-700 text-white text-sm font-medium py-2.5 transition-colors">
                      {t('viewDetails')}
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
