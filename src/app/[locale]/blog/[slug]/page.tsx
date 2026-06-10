import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/sanity.queries'
import { formatDate } from '@/lib/utils'
import FadeIn from '@/components/sections/FadeIn'

export default async function BlogPostPage({ params }: { params: { locale: string; slug: string } }) {
  const post = await getPostBySlug(params.slug, params.locale).catch(() => null)
  if (!post) notFound()
  const prefix = params.locale === 'en' ? '/en' : ''

  return (
    <article className="pt-28 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <Link href={`${prefix}/novosti-obavijesti-i-natjecaji`} className="text-sm text-olive-700 hover:text-olive-600 mb-6 inline-block">
            ← Natrag
          </Link>
          <p className="text-sm text-olive-600 font-medium mb-3">{formatDate(post.publishedAt, params.locale)}</p>
          <h1 className="font-display text-4xl md:text-5xl text-forest-800 font-light mb-6">{post.title}</h1>
          {post.excerpt && <p className="text-lg text-forest-600/80 leading-relaxed mb-8 border-l-4 border-olive-300 pl-4">{post.excerpt}</p>}
          {post.mainImage && (
            <div className="relative aspect-[16/9] rounded-sm overflow-hidden mb-10">
              <Image src={post.mainImage.asset.url} alt={post.mainImage.alt || post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
            </div>
          )}
          <div className="prose prose-lg prose-forest max-w-none">
            <p className="text-forest-600/80 leading-relaxed">Sadržaj se učitava iz Sanity CMS-a.</p>
          </div>
        </FadeIn>
      </div>
    </article>
  )
}
