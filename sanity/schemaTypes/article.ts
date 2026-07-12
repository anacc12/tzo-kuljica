import { defineField, defineType } from 'sanity'

// Helper: object field s hr i en verzijom (string)
const localizedString = (name: string, title: string, description: string, required = false) =>
  defineField({
    name,
    title,
    description,
    type: 'object',
    fields: [
      defineField({
        name: 'hr',
        title: '🇭🇷',
        type: 'string',
        validation: required ? r => r.required() : undefined,
      }),
      defineField({
        name: 'en',
        title: '🇬🇧',
        type: 'string',
      }),
    ],
  })

// Helper: object field s hr i en verzijom (text/textarea)
const localizedText = (name: string, title: string, description: string) =>
  defineField({
    name,
    title,
    description,
    type: 'object',
    fields: [
      defineField({ name: 'hr', title: '🇭🇷', type: 'text', rows: 3 }),
      defineField({ name: 'en', title: '🇬🇧', type: 'text', rows: 3 }),
    ],
  })

// Helper: object field s hr i en verzijom (block content)
const localizedBlock = (name: string, title: string, description: string) =>
  defineField({
    name,
    title,
    description,
    type: 'object',
    fields: [
      defineField({
        name: 'hr',
        title: '🇭🇷',
        type: 'array',
        of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
      }),
      defineField({
        name: 'en',
        title: '🇬🇧',
        type: 'array',
        of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
      }),
    ],
  })

export const articleType = defineType({
  name: 'article',
  title: 'Članak',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Tip',
      type: 'string',
      options: {
        list: [
          { title: 'Blog / Objava', value: 'blog' },
          { title: 'Događanje', value: 'event' },
        ],
        layout: 'radio',
      },
      validation: r => r.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Istaknuto na naslovnici',
      type: 'boolean',
      initialValue: false,
    }),

    // ─── Lokalizirani tekstualni sadržaj ─────────────────────────────────────
    localizedString('title', 'Naslov', 'Unesite naslov na hrvatskom i engleskom.', true),
    localizedText('shortDescription', 'Kratki opis', 'Unesite kratki opis na hrvatskom i engleskom.'),
    localizedBlock('longDescription', 'Sadržaj', 'Unesite sadržaj na hrvatskom i engleskom.'),

    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: (doc: Record<string, unknown>) => (doc.title as { hr?: string } | undefined)?.hr ?? '' },
      validation: r => r.required(),
    }),

    // ─── Mediji (isti za oba jezika) ──────────────────────────────────────────
    defineField({
      name: 'thumbnail',
      title: 'Naslovna slika',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt tekst', type: 'string' })],
    }),
    defineField({
      name: 'gallery',
      title: 'Galerija (do 10 slika)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [defineField({ name: 'alt', title: 'Alt tekst', type: 'string' })],
        },
      ],
      validation: r => r.max(10),
    }),

    // ─── Blog polja ───────────────────────────────────────────────────────────
    defineField({
      name: 'pages',
      title: 'Prikaži na stranicama',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Novosti, obavijesti i natjecaji', value: 'novosti' },
          { title: 'Kutak za iznajmljivače', value: 'iznajmljivaci' },
          { title: 'Kutak za vlasnike', value: 'vlasnici' },
          { title: 'Dodatno', value: 'dodatno' },
        ],
      },
      hidden: ({ document }) => document?.type !== 'blog',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Datum objave',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      hidden: ({ document }) => document?.type !== 'blog',
    }),

    // ─── Event polja ──────────────────────────────────────────────────────────
    defineField({
      name: 'location',
      title: 'Lokacija',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'event',
    }),
    defineField({
      name: 'startDate',
      title: 'Datum početka',
      type: 'date',
      hidden: ({ document }) => document?.type !== 'event',
      validation: r =>
        r.custom((val, ctx) => {
          if ((ctx.document as { type?: string })?.type === 'event' && !val)
            return 'Obavezno polje za događanje'
          return true
        }),
    }),
    defineField({
      name: 'startTime',
      title: 'Vrijeme početka (HH:MM)',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'event',
    }),
    defineField({
      name: 'endDate',
      title: 'Datum završetka',
      type: 'date',
      hidden: ({ document }) => document?.type !== 'event',
    }),
    defineField({
      name: 'endTime',
      title: 'Vrijeme završetka (HH:MM)',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'event',
    }),
  ],
  preview: {
    select: {
      titleHr: 'title.hr',
      type: 'type',
      media: 'thumbnail',
      featured: 'featured',
    },
    prepare({ titleHr, type, media, featured }) {
      const typeLabel = type === 'event' ? 'Događanje' : 'Blog'
      const featuredLabel = featured ? ' ⭐' : ''
      return { title: titleHr || '(bez naslova)', subtitle: `${typeLabel}${featuredLabel}`, media }
    },
  },
})
