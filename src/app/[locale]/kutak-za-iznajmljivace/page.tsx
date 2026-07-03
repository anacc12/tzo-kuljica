import { getTranslations } from 'next-intl/server'
import PageHero from '@/components/sections/PageHero'
import BlogPostGrid from '@/components/sections/BlogPostGrid'
import { getAllPosts } from '@/lib/sanity.queries'

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('renters')
  const posts = await getAllPosts(locale, 'iznajmljivaci').catch(() => [])

  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} label="Iznajmljivači" />
      <BlogPostGrid
        posts={posts}
        heading={t('heroSubtitle')}
        label="Iznajmljivači"
        category="Iznajmljivači"
        emptyText="Nema objavljenih novosti."
        locale={locale}
      />
    </>
  )
}
