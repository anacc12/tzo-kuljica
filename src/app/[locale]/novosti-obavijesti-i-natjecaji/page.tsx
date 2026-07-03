import { getTranslations } from 'next-intl/server'
import PageHero from '@/components/sections/PageHero'
import BlogPostGrid from '@/components/sections/BlogPostGrid'
import { getAllPosts } from '@/lib/sanity.queries'

export default async function NewsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('news')
  const posts = await getAllPosts(locale, 'novosti').catch(() => [])

  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} label="Novosti" />
      <BlogPostGrid
        posts={posts}
        heading={t('heroSubtitle')}
        label="Novosti"
        category="Novosti"
        emptyText={t('noPosts')}
        locale={locale}
      />
    </>
  )
}
