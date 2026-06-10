import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { getEventBySlug } from '@/lib/sanity.queries'
import { formatDate } from '@/lib/utils'
import FadeIn from '@/components/sections/FadeIn'

const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: { url: string }; alt?: string } }) => (
      <div className="relative aspect-[16/9] rounded-sm overflow-hidden my-8">
        <Image src={value.asset.url} alt={value.alt || ''} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
      </div>
    ),
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => <h2 className="font-display text-3xl text-forest-800 font-light mt-10 mb-4">{children}</h2>,
    h3: ({ children }: { children?: React.ReactNode }) => <h3 className="font-display text-2xl text-forest-800 font-light mt-8 mb-3">{children}</h3>,
    normal: ({ children }: { children?: React.ReactNode }) => <p className="text-forest-600/80 leading-relaxed mb-5">{children}</p>,
    blockquote: ({ children }: { children?: React.ReactNode }) => <blockquote className="border-l-4 border-olive-300 pl-4 text-forest-600/70 italic my-6">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => <ul className="list-disc list-inside text-forest-600/80 mb-5 space-y-1">{children}</ul>,
    number: ({ children }: { children?: React.ReactNode }) => <ol className="list-decimal list-inside text-forest-600/80 mb-5 space-y-1">{children}</ol>,
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => <strong className="font-semibold text-forest-800">{children}</strong>,
    em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-olive-700 underline hover:text-olive-600">{children}</a>
    ),
  },
}

export default async function EventPage({ params }: { params: { locale: string; slug: string } }) {
  const event = await getEventBySlug(params.slug, params.locale).catch(() => null)
  if (!event) notFound()

  return (
    <article className="pt-28 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <Link href="/dogadanja" className="text-sm text-olive-700 hover:text-olive-600 mb-6 inline-block">← Natrag</Link>
          <p className="text-sm text-olive-600 font-medium mb-1">
            {formatDate(event.startDate!, params.locale)}
            {event.endDate && event.endDate !== event.startDate && ` — ${formatDate(event.endDate, params.locale)}`}
          </p>
          {event.startTime && (
            <p className="text-xs text-forest-600/60 mb-1">🕐 {event.startTime}{event.endTime && ` — ${event.endTime}`}</p>
          )}
          {event.location && (
            <p className="text-xs text-forest-600/60 mb-3">📍 {event.location}</p>
          )}
          <h1 className="font-display text-4xl md:text-5xl text-forest-800 font-light mb-6">{event.title}</h1>
          {event.shortDescription && (
            <p className="text-lg text-forest-600/80 leading-relaxed mb-8 border-l-4 border-olive-300 pl-4">{event.shortDescription}</p>
          )}
          {event.thumbnail && (
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden mb-10">
              <Image src={event.thumbnail.asset.url} alt={event.thumbnail.alt || event.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
            </div>
          )}
          {event.longDescription && (
            <div className="mb-10">
              <PortableText value={event.longDescription as Parameters<typeof PortableText>[0]['value']} components={portableTextComponents} />
            </div>
          )}
          {event.gallery && event.gallery.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
              {event.gallery.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-sm overflow-hidden">
                  <Image src={img.asset.url} alt={img.alt || event.title} fill className="object-cover" sizes="300px" />
                </div>
              ))}
            </div>
          )}
        </FadeIn>
      </div>
    </article>
  )
}
