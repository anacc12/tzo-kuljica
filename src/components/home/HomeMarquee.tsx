'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import type { SanityArticle } from '@/lib/sanity.queries'

type Props = {
  articles: SanityArticle[]
  readMoreLabel: string
  locale: string
}

const FALLBACK_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f40c00845e65a13e8cc51_DJI_20240725021050_0199_D--1.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434913d13c4157070367_RR_04709.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f40bbc4c90c3044407ba7_DJI_20240709182237_0203_D.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f418c48987985b84a7d31_Zracne%20Fotografije%20Kukljica%202022%20%20(3)%20(3).jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4349f057f3c927cbbccc_RR_05250.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f434965550e6a39598db1_RR_05195.jpg',
]

export default function HomeMarquee({ articles, readMoreLabel, locale }: Props) {
  const typeLabel = (type: string) =>
    type === 'event'
      ? (locale === 'en' ? 'Event' : 'Događanje')
      : (locale === 'en' ? 'Post' : 'Objava')

  const items = articles.length > 0 ? articles : FALLBACK_IMAGES.map((img, i) => ({
    _id: `f${i}`,
    type: 'event' as const,
    title: '',
    slug: { current: '' },
    featured: false,
    thumbnail: { asset: { url: img } },
  } as SanityArticle))

  const doubled = [...items, ...items]

  return (
    <section
      style={{
        backgroundColor: 'var(--light)',
        paddingTop: 24,
        paddingBottom: 40,
        overflow: 'hidden',
        borderTop: '1px solid var(--border-dark)',
        borderBottom: '1px solid var(--border-dark)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 16,
          animation: 'marquee-scroll 40s linear infinite',
          willChange: 'transform',
        }}
      >
        {doubled.map((article, i) => {
          const href = article.slug.current
            ? (article.type === 'event'
                ? { pathname: '/dogadanja/[slug]' as const, params: { slug: article.slug.current } }
                : { pathname: '/blog/[slug]' as const, params: { slug: article.slug.current } })
            : null

          const imgSrc = article.thumbnail?.asset?.url ?? FALLBACK_IMAGES[i % FALLBACK_IMAGES.length]

          return (
            <div
              key={i}
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '12px 20px',
                border: '1px solid var(--border-dark)',
                borderRadius: 4,
                minWidth: 280,
                backgroundColor: 'var(--light)',
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  flexShrink: 0,
                  width: 64,
                  height: 64,
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: 'rgba(22,35,27,0.06)',
                }}
              >
                <Image src={imgSrc} alt="" fill className="object-cover" sizes="64px" />
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontSize: 11,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(22,35,27,0.4)',
                    marginBottom: 4,
                  }}
                >
                  {typeLabel(article.type)}
                </p>
                {article.title && (
                  <p
                    style={{
                      fontFamily: 'Instrument Serif, Georgia, serif',
                      fontSize: 18,
                      fontWeight: 500,
                      color: 'var(--dark)',
                      lineHeight: 1.3,
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      marginBottom: 6,
                    }}
                  >
                    {article.title}
                  </p>
                )}
                {href && (
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      fontSize: 11,
                      color: 'rgba(22,35,27,0.5)',
                      textDecoration: 'none',
                      letterSpacing: '0em',
                      borderBottom: '1px solid rgba(22,35,27,0.25)',
                      paddingBottom: 1,
                    }}
                  >
                    {readMoreLabel}
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
