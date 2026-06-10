import { sanityClient } from './sanity'

// ─── Types ───────────────────────────────────────────────────────────────────

export type SanityArticle = {
  _id: string
  type: 'blog' | 'event'
  title: string
  slug: { current: string }
  featured: boolean
  thumbnail?: { asset: { url: string }; alt?: string }
  shortDescription?: string
  longDescription?: unknown[]
  gallery?: { asset: { url: string }; alt?: string }[]
  // blog only
  pages?: string[]
  publishedAt?: string
  // event only
  location?: string
  startDate?: string
  startTime?: string
  endDate?: string
  endTime?: string
}

// GROQ projekcija — title i shortDescription se čitaju per-locale
const articleFields = (locale: string) => `
  _id, type, slug, featured,
  "title": title.${locale},
  "shortDescription": shortDescription.${locale},
  thumbnail { asset->{ url }, alt }
`

const articleFieldsFull = (locale: string) => `
  ${articleFields(locale)},
  "longDescription": longDescription.${locale}[] {
    ...,
    _type == "image" => { "asset": asset->{ url }, alt }
  },
  gallery[] { asset->{ url }, alt },
  pages, publishedAt,
  location, startDate, startTime, endDate, endTime
`

// ─── Events ──────────────────────────────────────────────────────────────────

export async function getAllEvents(locale: string): Promise<SanityArticle[]> {
  return sanityClient.fetch(
    `*[_type == "article" && type == "event"] | order(startDate asc) { ${articleFields(locale)} }`,
    {}
  )
}

export async function getEventBySlug(slug: string, locale: string): Promise<SanityArticle | null> {
  return sanityClient.fetch(
    `*[_type == "article" && type == "event" && slug.current == $slug][0] { ${articleFieldsFull(locale)} }`,
    { slug }
  )
}

// ─── Blog posts ───────────────────────────────────────────────────────────────

export async function getAllPosts(locale: string, page?: string): Promise<SanityArticle[]> {
  const pageFilter = page ? `&& $page in pages` : ''
  return sanityClient.fetch(
    `*[_type == "article" && type == "blog" ${pageFilter}] | order(publishedAt desc) { ${articleFields(locale)}, publishedAt, pages }`,
    { page: page ?? null }
  )
}

export async function getPostBySlug(slug: string, locale: string): Promise<SanityArticle | null> {
  return sanityClient.fetch(
    `*[_type == "article" && type == "blog" && slug.current == $slug][0] { ${articleFieldsFull(locale)} }`,
    { slug }
  )
}

// ─── Featured (homepage) ──────────────────────────────────────────────────────

export async function getFeaturedArticles(locale: string): Promise<SanityArticle[]> {
  return sanityClient.fetch(
    `*[_type == "article" && featured == true] | order(_createdAt desc) { ${articleFields(locale)}, publishedAt, startDate }`,
    {}
  )
}
