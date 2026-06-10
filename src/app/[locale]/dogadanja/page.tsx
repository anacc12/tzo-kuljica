import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'
import { getAllEvents } from '@/lib/sanity.queries'
import { formatDate } from '@/lib/utils'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67e320f2dcdaf05e33698820_dining_1.webp',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67e320f2dcdaf05e3369881f_dining_2.webp',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67e320f2dcdaf05e3369881d_dining_3.webp',
]

export default async function EventsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('events')
  const events = await getAllEvents(locale).catch(() => [])

  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} images={HERO_IMAGES}
        label="Događanja" />
      <section className="py-20" style={{backgroundColor: "var(--light)"}}>
        <div className="max-w-7xl mx-auto px-6">
          {events.length === 0 ? (
            <FadeIn><p className="text-forest-600/60">{t('noEvents')}</p></FadeIn>
          ) : (
            <div className="space-y-6">
              {events.map((event, i) => (
                <FadeIn key={event._id} delay={i * 0.06}>
                  <div className="grid md:grid-cols-[200px_1fr_auto] gap-6 items-center border-b border-sand-200 pb-6">
                    {event.thumbnail ? (
                      <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                        <Image src={event.thumbnail.asset.url} alt={event.title} fill className="object-cover" sizes="200px" />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] bg-sand-100 rounded-sm flex items-center justify-center">
                        <span className="text-4xl">🎭</span>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-olive-600 font-medium mb-1">
                        {formatDate(event.startDate!, locale)}
                        {event.endDate && event.endDate !== event.startDate && ` — ${formatDate(event.endDate, locale)}`}
                      </p>
                      {event.location && (
                        <p className="text-xs text-forest-600/60 mb-1">📍 {event.location}</p>
                      )}
                      <h3 className="font-display text-2xl text-forest-800 font-medium mb-2">{event.title}</h3>
                      <p className="text-forest-600/80 text-sm">{event.shortDescription}</p>
                    </div>
                    <Link
                      href={{ pathname: '/dogadanja/[slug]', params: { slug: event.slug.current } }}
                      className="flex-shrink-0 border border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-white text-sm font-medium px-5 py-2.5 transition-colors"
                    >
                      {t('findOutMore')}
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
