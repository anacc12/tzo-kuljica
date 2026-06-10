import { getTranslations } from 'next-intl/server'
import { getFeaturedArticles, getAllEvents } from '@/lib/sanity.queries'
import HomeHero from '@/components/home/HomeHero'
import HomeMarquee from '@/components/home/HomeMarquee'
import HomeWelcome from '@/components/home/HomeWelcome'
import HomeExplore from '@/components/home/HomeExplore'
import HomeAbout from '@/components/home/HomeAbout'
import HomeAccommodation from '@/components/home/HomeAccommodation'
import HomeNews from '@/components/home/HomeNews'

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('home')

  const [featured, events] = await Promise.all([
    getFeaturedArticles(locale).catch(() => []),
    getAllEvents(locale).catch(() => []),
  ])

  const newsItems = [...featured, ...events].slice(0, 3)

  return (
    <>
      {/* 1. Hero — dark bg, giant text, video below */}
      <HomeHero
        heading={t('heroHeading')}
        badge={t('heroBadge')}
        subtitle={t('welcomeText')}
        ctaLabel={t('ctaEvents')}
        ctaSecondary={t('showMore')}
      />

      <HomeMarquee
        articles={[...events, ...featured].slice(0, 8)}
        readMoreLabel={t('readMore')}
        locale={locale}
      />

      {/* 3. Welcome — text + auto-rotating images */}
      <HomeWelcome
        label={t('welcomeLabel')}
        title={t('welcomeTitle')}
        body={t('welcomeText')}
        cta={t('showMore')}
      />

      {/* 4. Explore — hover background feature list */}
      <HomeExplore
        sectionLabel={t('exploreLabel')}
        title={t('exploreTitle')}
        locale={locale}
      />

      {/* 5. About — halves: text + 4 static images */}
      <HomeAbout
        label={t('aboutLabel')}
        title={t('aboutTitle')}
        body={t('aboutText')}
        cta={t('showMore')}
      />

      {/* 6. Accommodation — full-width image grid + button */}
      <HomeAccommodation
        label={t('accommodationLabel')}
        title={t('accommodationTitle')}
        cta={t('browseAccommodation')}
      />

      {/* 7. News — dark section, 3-col article cards */}
      <HomeNews
        articles={newsItems}
        label={t('featuredLabel')}
        title={t('featuredTitle')}
        locale={locale}
      />
    </>
  )
}
