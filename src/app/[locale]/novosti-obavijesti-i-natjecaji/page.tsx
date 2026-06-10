import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'
import { getAllPosts } from '@/lib/sanity.queries'
import { formatDate } from '@/lib/utils'

export default async function NewsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('news')
  const posts = await getAllPosts(locale, 'novost').catch(() => [])
  const prefix = locale === 'en' ? '/en' : ''

  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {posts.length === 0 ? (
            <FadeIn><p className="text-forest-600/60">{t('noPosts')}</p></FadeIn>
          ) : (
            <div className="space-y-8">
              {posts.map((post, i) => (
                <FadeIn key={post._id} delay={i * 0.06}>
                  <Link href={`${prefix}/blog/${post.slug.current}`} className="group block border-b border-sand-200 pb-8">
                    {post.mainImage && (
                      <div className="relative aspect-[16/9] rounded-sm overflow-hidden mb-4">
                        <Image src={post.mainImage.asset.url} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 800px" />
                      </div>
                    )}
                    <p className="text-sm text-olive-600 font-medium mb-2">{formatDate(post.publishedAt, locale)}</p>
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
