import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'
import { getAllPosts } from '@/lib/sanity.queries'
import { formatDate } from '@/lib/utils'

export default async function AdditionalPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('additional')
  const posts = await getAllPosts(locale, 'dodatno').catch(() => [])
  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')}
        label="Dodatno" />
      <section className="py-20" style={{backgroundColor: "var(--light)"}}>
        <div className="max-w-3xl mx-auto px-6">
          {posts.length === 0 ? (
            <FadeIn><p className="text-forest-600/60">{t('noContent')}</p></FadeIn>
          ) : (
            <div className="space-y-8">
              {posts.map((post, i) => (
                <FadeIn key={post._id} delay={i * 0.06}>
                  <Link
                    href={{ pathname: '/blog/[slug]', params: { slug: post.slug.current } }}
                    className="group block border-b border-sand-200 pb-8"
                  >
                    {post.thumbnail && (
                      <div className="relative aspect-[16/9] rounded-sm overflow-hidden mb-4">
                        <Image
                          src={post.thumbnail.asset.url}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    )}
                    <p className="text-sm text-olive-600 font-medium mb-1">{formatDate(post.publishedAt!, locale)}</p>
                    <h3 className="font-display text-2xl text-forest-800 font-medium mb-2 group-hover:text-forest-600 transition-colors">{post.title}</h3>
                    <p className="text-forest-600/80 text-sm">{post.shortDescription}</p>
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
