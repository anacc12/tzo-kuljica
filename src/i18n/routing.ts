import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['hr', 'en'],
  defaultLocale: 'hr',
  localePrefix: 'as-needed', // HR is at /, EN is at /en
})
