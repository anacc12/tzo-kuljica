'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import type { SanityArticle } from '@/lib/sanity.queries'
import { formatDate } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1]

type Props = {
  articles: SanityArticle[]
  label: string
  title: string
  locale: string
}

export default function HomeNews({ articles, label, title, locale }: Props) {
  const [hovered, setHovered] = useState<number | null>(null)

  if (articles.length === 0) return null

  return (
    <section style={{ backgroundColor: 'var(--light)', color: 'var(--dark)', paddingTop: 140, paddingBottom: 140 }}>
      <div className="tz-container">
        {/* <div className="divider mb-16" /> */}

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", marginBottom: 64, flexWrap: 'wrap', gap: 16 }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: EASE }}
            style={{ display: 'flex', alignItems: "center", flexDirection: 'column', gap: 12 }}
          >
            <div style={{ display: 'flex' }}>
              <span className="label-badge">{label}</span>
            </div>
            <h2
              style={{
                fontFamily: 'Instrument Serif, Georgia, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                color: 'var(--dark)',
              }}
            >
              {title}
            </h2>
          </motion.div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3 }}>
          {articles.slice(0, 4).map((article, i) => {
            const href = article.type === 'event'
              ? { pathname: '/dogadanja/[slug]' as const, params: { slug: article.slug.current } }
              : { pathname: '/blog/[slug]' as const, params: { slug: article.slug.current } }

            const dateLabel = article.type === 'event'
              ? (article.startDate ? formatDate(article.startDate, locale) : '')
              : (article.publishedAt ? formatDate(article.publishedAt, locale) : '')

            return (
              <motion.div
                key={article._id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link href={href} style={{ display: 'block', textDecoration: 'none' }}>
                  {/* Image */}
                  <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', borderRadius: 4, marginBottom: 20 }}>
                    {article.thumbnail ? (
                      <Image
                        src={article.thumbnail.asset.url}
                        alt={article.title}
                        fill
                        className="object-cover"
                        style={{ transform: hovered === i ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.6s ease' }}
                        sizes="33vw"
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: 'rgba(22,35,27,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: 40, opacity: 0.3 }}>{article.type === 'event' ? '🎭' : '📄'}</span>
                      </div>
                    )}
                    {/* Type tag — top-left corner of image */}
                    <span style={{
                      position: 'absolute',
                      top: 6,
                      left: 6,
                      fontFamily: 'Geist, sans-serif',
                      fontSize: 11,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                      color: 'var(--dark)',
                      backgroundColor: 'var(--bg)',
                      borderRadius: 4,
                      padding: '3px 8px',
                    }}>
                      {article.type === 'event' ? 'Događanje' : 'Objava'}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      {dateLabel && (
                        <span style={{ fontFamily: 'Geist, sans-serif', fontSize: 13, color: 'rgba(22,35,27,0.5)' }}>
                          {dateLabel}
                        </span>
                      )}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Instrument Serif, Georgia, serif',
                        fontSize: 30,
                        fontWeight: 400,
                        lineHeight: 1.25,
                        letterSpacing: '-0.01em',
                        color: 'var(--dark)',
                        transition: 'opacity 0.3s',
                        opacity: hovered === i ? 0.75 : 1,
                      }}
                    >
                      {article.title}
                    </h3>
                    {article.shortDescription && (
                      <p style={{ fontFamily: 'Geist, sans-serif', fontSize: 14, color: 'rgba(22,35,27,0.5)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {article.shortDescription}
                      </p>
                    )}
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
