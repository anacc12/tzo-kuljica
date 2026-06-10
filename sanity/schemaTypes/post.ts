import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Naslov', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'language', title: 'Jezik', type: 'string', options: { list: [{ title: 'Hrvatski', value: 'hr' }, { title: 'English', value: 'en' }] }, initialValue: 'hr', validation: r => r.required() }),
    defineField({ name: 'category', title: 'Kategorija', type: 'string', options: { list: [{ title: 'Novost', value: 'novost' }, { title: 'Iznajmljivači', value: 'iznajmljivaci' }, { title: 'Vlasnici', value: 'vlasnici' }, { title: 'Dodatno', value: 'dodatno' }] }, validation: r => r.required() }),
    defineField({ name: 'publishedAt', title: 'Datum objave', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'excerpt', title: 'Kratki opis', type: 'text', rows: 3 }),
    defineField({ name: 'mainImage', title: 'Naslovna slika', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Alt tekst', type: 'string' })] }),
    defineField({ name: 'body', title: 'Sadržaj', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
  ],
  preview: { select: { title: 'title', subtitle: 'publishedAt', media: 'mainImage' } },
})
