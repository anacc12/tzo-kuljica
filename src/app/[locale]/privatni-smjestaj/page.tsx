import { getTranslations } from 'next-intl/server'
import PageHero from '@/components/sections/PageHero'
import ApartmentGrid from '@/components/sections/ApartmentGrid'
import { APARTMENTS, FILTER_LABELS, type FilterCategory } from '@/data/apartments'
import { getFirstImage } from '@/lib/gallery'

export default async function AccommodationPage() {
  const t = await getTranslations('accommodation')
  const tp = await getTranslations('accommodationPage')

  const filterLabels = Object.fromEntries(
    Object.entries(FILTER_LABELS).map(([k]) => [k, tp(`filter_${k}`)])
  ) as Record<FilterCategory, string>

  const thumbnails = Object.fromEntries(
    APARTMENTS.map(apt => [apt.slug, getFirstImage(apt.slug)])
  ) as Record<string, string | null>

  const sorted = [...APARTMENTS].sort((a, b) => {
    const aHas = !!thumbnails[a.slug]
    const bHas = !!thumbnails[b.slug]
    if (aHas && !bHas) return -1
    if (!aHas && bHas) return 1
    if (!aHas && !bHas) return a.name.localeCompare(b.name, 'hr')
    return 0
  })

  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} label="Smještaj" />

      <section style={{ backgroundColor: 'var(--bg)', paddingTop: 100, paddingBottom: 100 }}>
        <div className="tz-container">

          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, gap: 24 }}>
            <h2
              style={{
                fontFamily: 'Instrument Serif, Georgia, serif',
                fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--dark)',
              }}
            >
              {t('title')}
            </h2>
            <span className="label-badge">{APARTMENTS.length} iznajmljivača</span>
          </div>

          <div className="divider" style={{ marginBottom: 48 }} />

          <ApartmentGrid
            apartments={sorted}
            filterLabels={filterLabels}
            allLabel={tp('filter_all')}
            thumbnails={thumbnails}
            loadMoreLabel={tp('loadMore')}
            noResultsLabel={tp('noResults')}
            ofLabel={tp('of')}
          />
        </div>
      </section>
    </>
  )
}
