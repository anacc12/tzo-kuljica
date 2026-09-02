import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import FadeIn from './FadeIn'
import { type SanityArticle } from '@/lib/sanity.queries'
import { formatDate } from '@/lib/utils'

type Props = {
  posts: SanityArticle[]
  heading: string
  label: string
  category: string
  emptyText: string
  locale: string
}

export default function BlogPostGrid({ posts, heading, label, category, emptyText, locale }: Props) {
  return (
    <section style={{ backgroundColor: 'var(--bg)', paddingTop: 100, paddingBottom: 120 }}>
      <div className="tz-container">
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 56,
            gap: 24,
          }}
        >
          <FadeIn>
            <h2
              style={{
                fontFamily: 'Instrument Serif, Georgia, serif',
                fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--dark)',
                maxWidth: 520,
              }}
            >
              {heading}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="label-badge">{label}</span>
          </FadeIn>
        </div>

        <div className="divider" style={{ marginBottom: 56 }} />

        {posts.length === 0 ? (
          <FadeIn>
            <p style={{ color: 'rgba(22,35,27,0.5)', fontFamily: 'Geist, sans-serif', fontSize: 15 }}>
              {emptyText}
            </p>
          </FadeIn>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(24px, 3vw, 40px)',
            }}
            className="events-grid"
          >
            {posts.map((post, i) => (
              <FadeIn key={post._id} delay={i * 0.07}>
                <Link
                  href={{ pathname: '/blog/[slug]', params: { slug: post.slug.current } }}
                  style={{ display: 'block', textDecoration: 'none' }}
                  className="event-card-link"
                >
                  {/* Image */}
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '4/3',
                      borderRadius: 8,
                      overflow: 'hidden',
                      marginBottom: 20,
                      backgroundColor: 'rgba(17,21,46,0.06)',
                    }}
                  >
                    {post.thumbnail?.asset?.url ? (
                      <Image
                        src={post.thumbnail.asset.url}
                        alt={post.title}
                        fill
                        className="object-cover event-card-img"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={i < 3}
                      />
                    ) : (
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: 40, opacity: 0.15, color: 'var(--dark)' }}>TZO</span>
                      </div>
                    )}
                  </div>

                  {/* Meta: category · date */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      marginBottom: 10,
                      fontFamily: 'Roboto Condensed, sans-serif',
                      fontSize: 11,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'rgba(22,35,27,0.45)',
                    }}
                  >
                    <span>{category}</span>
                    <span>·</span>
                    <span>{post.publishedAt ? formatDate(post.publishedAt, locale) : ''}</span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'Instrument Serif, Georgia, serif',
                      fontSize: 'clamp(1.3rem, 1.8vw, 1.65rem)',
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                      color: 'var(--dark)',
                      marginBottom: 12,
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Short description */}
                  {post.shortDescription && (
                    <p
                      style={{
                        fontFamily: 'Geist, system-ui, sans-serif',
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: 'rgba(22,35,27,0.55)',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {post.shortDescription}
                    </p>
                  )}
                </Link>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
