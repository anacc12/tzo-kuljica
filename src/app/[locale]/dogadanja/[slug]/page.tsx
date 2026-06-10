import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getEventBySlug } from '@/lib/sanity.queries'
import { formatDate } from '@/lib/utils'
import FadeIn from '@/components/sections/FadeIn'

export default async function EventPage({ params }: { params: { locale: string; slug: string } }) {
  const event = await getEventBySlug(params.slug, params.locale).catch(() => null)
  if (!event) notFound()
  const prefix = params.locale === 'en' ? '/en' : ''

  return (
    <article className="pt-28 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <Link href={`${prefix}/dogadanja`} className="text-sm text-olive-700 hover:text-olive-600 mb-6 inline-block">← Natrag</Link>
          <p className="text-sm text-olive-600 font-medium mb-3">
            {formatDate(event.dateFrom, params.locale)}
            {event.dateTo !== event.dateFrom && ` — ${formatDate(event.dateTo, params.locale)}`}
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-forest-800 font-light mb-6">{event.title}</h1>
          {event.description && <p className="text-lg text-forest-600/80 leading-relaxed mb-8 border-l-4 border-olive-300 pl-4">{event.description}</p>}
          {event.image && (
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden mb-10">
              <Image src={event.image.asset.url} alt={event.image.alt || event.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
            </div>
          )}
        </FadeIn>
      </div>
    </article>
  )
}
