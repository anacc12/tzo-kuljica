import fs from 'fs'
import path from 'path'

const IMAGE_RE = /\.(jpe?g|png|webp|avif|gif)$/i
const BASE = path.join(process.cwd(), 'public', 'iznajmljivaci')

export type GalleryGroup = {
  title: string | null  // null = flat (no subfolders)
  images: string[]      // absolute URL paths
}

export function getGalleryGroups(slug: string): GalleryGroup[] {
  const dir = path.join(BASE, slug)
  if (!fs.existsSync(dir)) return []

  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const subdirs = entries
    .filter(e => e.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name, 'hr'))

  if (subdirs.length > 0) {
    return subdirs
      .map(sub => ({
        title: sub.name,
        images: fs.readdirSync(path.join(dir, sub.name))
          .filter(f => IMAGE_RE.test(f))
          .sort((a, b) => a.localeCompare(b))
          .map(f => `/iznajmljivaci/${slug}/${encodeURIComponent(sub.name)}/${encodeURIComponent(f)}`),
      }))
      .filter(g => g.images.length > 0)
  }

  const files = entries
    .filter(e => e.isFile() && IMAGE_RE.test(e.name))
    .sort((a, b) => a.name.localeCompare(b.name))

  if (files.length > 0) {
    return [{
      title: null,
      images: files.map(f => `/iznajmljivaci/${slug}/${encodeURIComponent(f.name)}`),
    }]
  }

  return []
}

export function getFirstImage(slug: string): string | null {
  const groups = getGalleryGroups(slug)
  return groups[0]?.images[0] ?? null
}
