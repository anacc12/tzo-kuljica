import { useTranslations } from 'next-intl'
import PageHero from '@/components/sections/PageHero'

export default function TimetablePage() {
  const t = useTranslations('timetable')

  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} label="Vozni red" />

      <section style={{ backgroundColor: 'var(--bg)', paddingTop: 100, paddingBottom: 100 }}>
        <div className="tz-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(40px, 6vw, 100px)',
              alignItems: 'start',
            }}
            className="harbour-top"
          >
            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex' }}>
                <span className="label-badge">Prijevoz</span>
              </div>
              <h2
                style={{
                  fontFamily: 'Instrument Serif, Georgia, serif',
                  fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  color: 'var(--dark)',
                }}
              >
                {t('linksTitle')}
              </h2>
            </div>

            {/* Right — links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, paddingTop: 8 }}>
              <a
                href="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6865a2cfc1f218a69db3ad93_205-LINIJA-PREKO-TKON1-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 0',
                  borderBottom: '1px solid rgba(22,35,27,0.1)',
                  textDecoration: 'none',
                  color: 'var(--dark)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Instrument Serif, Georgia, serif',
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
                    fontWeight: 400,
                  }}
                >
                  {t('bus')}
                </span>
                <span
                  style={{
                    fontFamily: 'Roboto Condensed, sans-serif',
                    fontSize: 11,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(22,35,27,0.4)',
                  }}
                >
                  PDF ↗
                </span>
              </a>

              <a
                href="https://www.jadrolinija.hr/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 0',
                  borderBottom: '1px solid rgba(22,35,27,0.1)',
                  textDecoration: 'none',
                  color: 'var(--dark)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Instrument Serif, Georgia, serif',
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
                    fontWeight: 400,
                  }}
                >
                  {t('ferryLines')}
                </span>
                <span
                  style={{
                    fontFamily: 'Roboto Condensed, sans-serif',
                    fontSize: 11,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(22,35,27,0.4)',
                  }}
                >
                  jadrolinija.hr ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
