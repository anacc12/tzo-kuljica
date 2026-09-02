import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import { APARTMENTS } from '@/data/apartments'
import { getGalleryGroups } from '@/lib/gallery'
import { routing } from '@/i18n/routing'

interface Props {
  params: { slug: string; locale: string }
}

export function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    APARTMENTS.map(a => ({ locale, slug: a.slug }))
  )
}

export async function generateMetadata({ params }: Props) {
  const apt = APARTMENTS.find(a => a.slug === params.slug)
  if (!apt) return {}
  return { title: `${apt.name} — Kukljica` }
}

export default async function ApartmentPage({ params }: Props) {
  setRequestLocale(params.locale)

  const apt = APARTMENTS.find(a => a.slug === params.slug)
  if (!apt) notFound()

  const t = await getTranslations('accommodationPage')
  const galleryGroups = getGalleryGroups(apt.slug)
  const hasGallery = galleryGroups.length > 0
  const hasRightCol = !!(apt.types || apt.description)
  const totalImages = galleryGroups.reduce((n, g) => n + g.images.length, 0)

  return (
    <>
      <PageHero title={apt.name} label={t('label')} />

      {/* ── Contact + info ── */}
      <section style={{ backgroundColor: 'var(--bg)', paddingTop: 100, paddingBottom: 100 }}>
        <div className="tz-container">

          {/* Back link */}
          <div style={{ marginBottom: 56 }}>
            <Link
              href="/privatni-smjestaj"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 13,
                fontWeight: 500,
                color: 'rgba(22,35,27,0.5)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              {t('backLink')}
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: hasRightCol ? '1fr 1fr' : '1fr',
              gap: 'clamp(40px, 6vw, 100px)',
              alignItems: 'start',
              maxWidth: hasRightCol ? undefined : 560,
            }}
            className="harbour-top"
          >
            {/* Left — contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <h2
                style={{
                  fontFamily: 'Instrument Serif, Georgia, serif',
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  color: 'var(--dark)',
                  marginBottom: 40,
                }}
              >
                {t('contactTitle')}
              </h2>

              {/* Address */}
              <div style={{ display: 'flex', gap: 24, paddingBottom: 20, borderBottom: '1px solid rgba(22,35,27,0.1)', marginBottom: 20 }}>
                <span style={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(22,35,27,0.35)', minWidth: 80, paddingTop: 2 }}>
                  {t('addressLabel')}
                </span>
                <span style={{ fontFamily: 'Geist, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'var(--dark)' }}>
                  {apt.addressProperty}
                </span>
              </div>

              {/* Phones */}
              {apt.phones && apt.phones.length > 0 && (
                <div style={{ display: 'flex', gap: 24, paddingBottom: 20, borderBottom: '1px solid rgba(22,35,27,0.1)', marginBottom: 20 }}>
                  <span style={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(22,35,27,0.35)', minWidth: 80, paddingTop: 2 }}>
                    {t('phonesLabel')}
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {apt.phones.map(p => (
                      <a key={p} href={`tel:${p.replace(/\s/g, '')}`} style={{ fontFamily: 'Geist, sans-serif', fontSize: 15, lineHeight: 1.4, color: 'var(--dark)', textDecoration: 'none' }}>
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Email */}
              {apt.email && (
                <div style={{ display: 'flex', gap: 24, paddingBottom: 20 }}>
                  <span style={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(22,35,27,0.35)', minWidth: 80, paddingTop: 2 }}>
                    {t('emailLabel')}
                  </span>
                  <a href={`mailto:${apt.email}`} style={{ fontFamily: 'Geist, sans-serif', fontSize: 15, lineHeight: 1.6, color: 'var(--dark)', textDecoration: 'none', wordBreak: 'break-all' }}>
                    {apt.email}
                  </a>
                </div>
              )}
            </div>

            {/* Right — types + description */}
            {hasRightCol && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingTop: 8 }}>
                {apt.types && (
                  <div>
                    <p style={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(22,35,27,0.35)', marginBottom: 16 }}>
                      {t('typesLabel')}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {apt.types.split(',').map(type => (
                        <span key={type} style={{ fontFamily: 'Geist, sans-serif', fontSize: 13, fontWeight: 500, padding: '6px 14px', borderRadius: 999, border: '1px solid rgba(22,35,27,0.2)', color: 'var(--dark)', backgroundColor: 'var(--light)', whiteSpace: 'nowrap' }}>
                          {type.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {apt.description && (
                  <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 15, lineHeight: 1.7, color: 'rgba(22,35,27,0.65)' }}>
                    {apt.description.hr}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {hasGallery && (
        <section style={{ backgroundColor: 'var(--light)', paddingTop: 80, paddingBottom: 100 }}>
          <div className="tz-container">

            {/* Gallery header */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, gap: 24 }}>
              <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--dark)' }}>
                {t('galleryTitle')}
              </h2>
              <span className="label-badge">{totalImages} slika</span>
            </div>

            {/* Groups */}
            {galleryGroups.map((group, gi) => (
              <div key={gi} style={{ marginBottom: gi < galleryGroups.length - 1 ? 64 : 0 }}>

                {/* Subfolder title */}
                {group.title && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                    <h3 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--dark)' }}>
                      {group.title}
                    </h3>
                    <span style={{ fontFamily: 'Roboto Condensed, sans-serif', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(22,35,27,0.4)' }}>
                      {group.images.length} slika
                    </span>
                  </div>
                )}

                {group.title && <div className="divider" style={{ marginBottom: 24 }} />}

                {/* Photo grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }} className="events-grid">
                  {group.images.map((src, i) => (
                    <div key={i} style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 8, overflow: 'hidden', backgroundColor: 'rgba(22,35,27,0.06)' }}>
                      <Image
                        src={src}
                        alt={`${apt.name}${group.title ? ` — ${group.title}` : ''} — ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
