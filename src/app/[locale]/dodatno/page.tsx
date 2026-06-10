import { useTranslations } from 'next-intl'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'
import { getAllPosts } from '@/lib/sanity.queries'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

export default async function AdditionalPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('additional')
  const posts = await getAllPosts(locale, 'dodatno').catch(() => [])
  const prefix = locale === 'en' ? '/en' : ''
  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {posts.length === 0 ? (
            <FadeIn><p className="text-forest-600/60">{t('noContent')}</p></FadeIn>
          ) : (
            <div className="space-y-6">
              {posts.map((post, i) => (
                <FadeIn key={post._id} delay={i * 0.06}>
                  <Link href={`${prefix}/blog/${post.slug.current}`} className="group block border-b border-sand-200 pb-6">
                    <p className="text-sm text-olive-600 font-medium mb-1">{formatDate(post.publishedAt, locale)}</p>
                    <h3 className="font-display text-2xl text-forest-800 font-medium mb-2 group-hover:text-forest-600 transition-colors">{post.title}</h3>
                    <p className="text-forest-600/80 text-sm">{post.excerpt}</p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
