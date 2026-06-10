import { sanityClient } from './sanity'

// ─── Types ──────────────────────────────────────────────────────────────────

export type SanityPost = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt: string
  category: 'novost' | 'iznajmljivaci' | 'vlasnici' | 'dodatno'
  language: 'hr' | 'en'
  mainImage?: { asset: { url: string }; alt?: string }
  body?: unknown[]
}

export type SanityEvent = {
  _id: string
  title: string
  slug: { current: string }
  dateFrom: string
  dateTo: string
  description: string
  language: 'hr' | 'en'
  image?: { asset: { url: string }; alt?: string }
  body?: unknown[]
}

// ─── Posts ───────────────────────────────────────────────────────────────────

export async function getAllPosts(locale: string, category?: string): Promise<SanityPost[]> {
  const categoryFilter = category ? `&& category == "${category}"` : ''
  return sanityClient.fetch(
    `*[_type == "post" && language == $locale ${categoryFilter}] | order(publishedAt desc) {
      _id, title, slug, publishedAt, excerpt, category, language,
      mainImage { asset->{ url }, alt }
    }`,
    { locale }
  )
}

export async function getPostBySlug(slug: string, locale: string): Promise<SanityPost | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug && language == $locale][0] {
      _id, title, slug, publishedAt, excerpt, category, language, body,
      mainImage { asset->{ url }, alt }
    }`,
    { slug, locale }
  )
}

// ─── Events ──────────────────────────────────────────────────────────────────

export async function getAllEvents(locale: string): Promise<SanityEvent[]> {
  return sanityClient.fetch(
    `*[_type == "event" && language == $locale] | order(dateFrom asc) {
      _id, title, slug, dateFrom, dateTo, description, language,
      image { asset->{ url }, alt }
    }`,
    { locale }
  )
}

export async function getEventBySlug(slug: string, locale: string): Promise<SanityEvent | null> {
  return sanityClient.fetch(
    `*[_type == "event" && slug.current == $slug && language == $locale][0] {
      _id, title, slug, dateFrom, dateTo, description, language, body,
      image { asset->{ url }, alt }
    }`,
    { slug, locale }
  )
}
