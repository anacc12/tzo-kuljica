import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { getEventBySlug } from '@/lib/sanity.queries'
import { formatDate } from '@/lib/utils'

const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: { url: string } | null; alt?: string } }) =>
      value.asset?.url ? (
        <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 8, overflow: 'hidden', margin: '40px 0' }}>
          <Image src={value.asset.url} alt={value.alt || ''} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
        </div>
      ) : null,
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--dark)', marginTop: 48, marginBottom: 16 }}>
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 400, color: 'var(--dark)', marginTop: 36, marginBottom: 12 }}>
        {children}
      </h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p style={{ fontFamily: 'Geist, system-ui, sans-serif', fontSize: 15, lineHeight: 1.75, color: 'rgba(22,35,27,0.72)', marginBottom: 20 }}>
        {children}
      </p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote style={{ borderLeft: '2px solid rgba(22,35,27,0.2)', paddingLeft: 20, margin: '32px 0', fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', fontWeight: 400, lineHeight: 1.5, color: 'rgba(22,35,27,0.65)', fontStyle: 'italic' }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul style={{ paddingLeft: 20, marginBottom: 20, fontFamily: 'Geist, system-ui, sans-serif', fontSize: 15, lineHeight: 1.75, color: 'rgba(22,35,27,0.72)' }}>{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol style={{ paddingLeft: 20, marginBottom: 20, fontFamily: 'Geist, system-ui, sans-serif', fontSize: 15, lineHeight: 1.75, color: 'rgba(22,35,27,0.72)' }}>{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => <strong style={{ fontWeight: 600, color: 'var(--dark)' }}>{children}</strong>,
    em: ({ children }: { children?: React.ReactNode }) => <em style={{ fontStyle: 'italic' }}>{children}</em>,
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--dark)', borderBottom: '1px solid rgba(22,35,27,0.35)', paddingBottom: 1 }}>{children}</a>
    ),
  },
}

function MetaRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, paddingTop: 16, paddingBottom: 16, borderBottom: '1px solid rgba(22,35,27,0.1)' }}>
      <span style={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(22,35,27,0.4)' }}>
        {label}
      </span>
      <span style={{ fontFamily: 'Geist, system-ui, sans-serif', fontSize: 13, color: 'rgba(22,35,27,0.75)', lineHeight: 1.4 }}>
        {value}
      </span>
    </div>
  )
}

export default async function EventPage({ params }: { params: { locale: string; slug: string } }) {
  const event = await getEventBySlug(params.slug, params.locale).catch(() => null)
  if (!event) notFound()

  return (
    <article style={{ backgroundColor: 'var(--light)', paddingTop: 120, paddingBottom: 100 }}>
      <div className="tz-container">

        {/* Back link */}
        <Link
          href="/dogadanja"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'Roboto Condensed, sans-serif',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(22,35,27,0.45)',
            textDecoration: 'none',
            marginBottom: 40,
          }}
        >
          ← Događanja
        </Link>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'Instrument Serif, Georgia, serif',
            fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--dark)',
            maxWidth: 900,
            marginBottom: 48,
          }}
        >
          {event.title}
        </h1>

        {/* Full-width image */}
        {event.thumbnail?.asset?.url && (
          <div
            style={{
              position: 'relative',
              aspectRatio: '24/9',
              borderRadius: 8,
              overflow: 'hidden',
              marginBottom: 64,
            }}
          >
            <Image
              src={event.thumbnail.asset.url}
              alt={event.thumbnail.alt || event.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1400px"
              priority
            />
          </div>
        )}

        {/* Body: sidebar + content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: 'clamp(40px, 6vw, 100px)',
            alignItems: 'start',
          }}
          className="article-body"
        >
          {/* LEFT — metadata */}
          <div>
            {(() => {
              const isHR = params.locale === 'hr'
              const at = isHR ? 'u' : 'at'
              const startLabel = isHR ? 'Početak' : 'Start'
              const endLabel = isHR ? 'Kraj' : 'End'
              const locationLabel = isHR ? 'Lokacija' : 'Location'
              const categoryLabel = isHR ? 'Kategorija' : 'Category'
              const categoryValue = isHR ? 'Događanje' : 'Event'

              const startVal = event.startDate
                ? `${formatDate(event.startDate, params.locale)}${event.startTime ? ` ${at} ${event.startTime}` : ''}`
                : '–'

              const endVal = event.endDate && event.endDate !== event.startDate
                ? `${formatDate(event.endDate, params.locale)}${event.endTime ? ` ${at} ${event.endTime}` : ''}`
                : null

              return (
                <div style={{ borderTop: '1px solid rgba(22,35,27,0.1)' }}>
                  <MetaRow label={startLabel} value={startVal} />
                  {endVal && <MetaRow label={endLabel} value={endVal} />}
                  {event.location && <MetaRow label={locationLabel} value={event.location} />}
                  <MetaRow label={categoryLabel} value={categoryValue} />
                </div>
              )
            })()}
          </div>

          {/* RIGHT — content */}
          <div>
            {event.shortDescription && (
              <p
                style={{
                  fontFamily: 'Instrument Serif, Georgia, serif',
                  fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)',
                  lineHeight: 1.55,
                  color: 'rgba(22,35,27,1)',
                  marginBottom: 40,
                  fontStyle: 'italic',
                }}
              >
                {event.shortDescription}
              </p>
            )}

            {event.longDescription && (
              <PortableText
                value={event.longDescription as Parameters<typeof PortableText>[0]['value']}
                components={portableTextComponents}
              />
            )}

            {event.gallery && event.gallery.length > 0 && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 12,
                  marginTop: 48,
                }}
              >
                {event.gallery.filter(img => img.asset?.url).map((img, i) => (
                  <div key={i} style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 6, overflow: 'hidden' }}>
                    <Image src={img.asset.url} alt={img.alt || event.title} fill className="object-cover" sizes="300px" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
