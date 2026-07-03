import { getTranslations } from 'next-intl/server'
import PageHero from '@/components/sections/PageHero'
import BlogPostGrid from '@/components/sections/BlogPostGrid'
import { getAllPosts } from '@/lib/sanity.queries'

export default async function AdditionalPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('additional')
  const posts = await getAllPosts(locale, 'dodatno').catch(() => [])

  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} label="Dodatno" />
      <BlogPostGrid
        posts={posts}
        heading={t('heroSubtitle')}
        label="Dodatno"
        category="Informacije"
        emptyText={t('noContent')}
        locale={locale}
      />
    </>
  )
}
