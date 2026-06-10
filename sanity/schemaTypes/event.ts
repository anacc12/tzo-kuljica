import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Događanje',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Naziv', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'language', title: 'Jezik', type: 'string', options: { list: [{ title: 'Hrvatski', value: 'hr' }, { title: 'English', value: 'en' }] }, initialValue: 'hr', validation: r => r.required() }),
    defineField({ name: 'dateFrom', title: 'Datum od', type: 'date', validation: r => r.required() }),
    defineField({ name: 'dateTo', title: 'Datum do', type: 'date', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Kratki opis', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Slika', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Alt tekst', type: 'string' })] }),
    defineField({ name: 'body', title: 'Sadržaj', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
  ],
  preview: { select: { title: 'title', subtitle: 'dateFrom', media: 'image' } },
})
