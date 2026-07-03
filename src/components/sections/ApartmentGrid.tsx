'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import type { Apartment, FilterCategory } from '@/data/apartments'
import { getCategories } from '@/data/apartments'

interface Props {
  apartments: Apartment[]
  filterLabels: Record<FilterCategory, string>
  allLabel: string
}

const FILTER_ORDER: FilterCategory[] = ['all', 'studio', 'a2', 'a4', 'a5plus', 'kuca']

export default function ApartmentGrid({ apartments, filterLabels, allLabel }: Props) {
  const [active, setActive] = useState<FilterCategory>('all')

  const visible = active === 'all'
    ? apartments
    : apartments.filter(apt => getCategories(apt.types).includes(active))

  return (
    <div>
      {/* Filter pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 48 }}>
        {FILTER_ORDER.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              borderRadius: 999,
              padding: '9px 20px',
              backgroundColor: active === cat ? 'var(--dark)' : 'transparent',
              color: active === cat ? 'var(--light)' : 'var(--dark)',
              fontFamily: 'Geist, sans-serif',
              fontSize: 13,
              fontWeight: 500,
              border: '1px solid rgba(17,21,46,0.2)',
              cursor: 'pointer',
              transition: 'background-color 0.15s, color 0.15s',
            }}
          >
            {cat === 'all' ? allLabel : filterLabels[cat]}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="events-grid">
        {visible.map(apt => (
          <Link
            key={apt.slug}
            href={`/privatni-smjestaj/${apt.slug}` as '/privatni-smjestaj'}
            className="event-card-link"
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
          >
            {/* Image or initials placeholder */}
            <div
              className="event-card-img"
              style={{
                aspectRatio: '4/3',
                overflow: 'hidden',
                borderRadius: 8,
                marginBottom: 16,
                backgroundColor: 'rgba(17,21,46,0.06)',
                position: 'relative',
              }}
            >
              {apt.images.length > 0 ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`/iznajmljivači/${apt.slug}/${apt.images[0]}`}
                  alt={apt.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Instrument Serif, Georgia, serif',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    color: 'rgba(17,21,46,0.18)',
                    letterSpacing: '0.05em',
                    userSelect: 'none',
                  }}
                >
                  {apt.name.split(' ').map((w: string) => w[0]).join('').slice(0, 2).toUpperCase()}
                </div>
              )}
            </div>

            {/* Meta */}
            <div
              style={{
                fontFamily: 'Roboto Condensed, sans-serif',
                fontSize: 11,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(17,21,46,0.4)',
                marginBottom: 10,
              }}
            >
              {apt.types ? apt.types.split(',')[0].trim() : 'Smještaj'}
            </div>

            {/* Name */}
            <h3
              style={{
                fontFamily: 'Instrument Serif, Georgia, serif',
                fontSize: 'clamp(1.25rem, 1.6vw, 1.5rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: 'var(--dark)',
                marginBottom: 10,
              }}
            >
              {apt.name}
            </h3>

            {/* Address */}
            <p
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 14,
                lineHeight: 1.6,
                color: 'rgba(17,21,46,0.5)',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {apt.addressProperty}
            </p>
          </Link>
        ))}
      </div>

      {visible.length === 0 && (
        <p
          style={{
            fontFamily: 'Geist, sans-serif',
            fontSize: 15,
            color: 'rgba(17,21,46,0.4)',
            textAlign: 'center',
            padding: '60px 0',
          }}
        >
          Nema rezultata.
        </p>
      )}
    </div>
  )
}
