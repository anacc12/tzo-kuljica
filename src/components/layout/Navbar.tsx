'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

type DropdownItem = { label: string; href: string }

type NavItem = {
  label: string
  href?: string
  dropdown?: DropdownItem[]
}

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const prefix = locale === 'en' ? '/en' : ''

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const navItems: NavItem[] = [
    {
      label: t('aboutUs'),
      dropdown: [
        { label: t('about'), href: `${prefix}/o-nama` },
        { label: t('howToGetHere'), href: `${prefix}/kako-do-nas` },
        { label: t('landmarks'), href: `${prefix}/znamenitosti` },
        { label: t('beaches'), href: `${prefix}/plaze` },
      ],
    },
    { label: t('events'), href: `${prefix}/dogadanja` },
    {
      label: t('activeVacation'),
      dropdown: [
        { label: t('activeVacationGeneral'), href: `${prefix}/aktivni-odmor` },
        { label: t('nautics'), href: `${prefix}/aktivni-odmor/nautika` },
        { label: t('cycling'), href: `${prefix}/aktivni-odmor/biciklizam` },
        { label: t('hiking'), href: `${prefix}/aktivni-odmor/pjesacenje` },
        { label: t('trips'), href: `${prefix}/aktivni-odmor/izleti` },
      ],
    },
    {
      label: t('accommodation'),
      dropdown: [
        { label: t('zelenaPoint'), href: `${prefix}/holiday-park-zelena-punta` },
        { label: t('privateAccommodation'), href: `${prefix}/privatni-smjestaj` },
      ],
    },
    {
      label: t('info'),
      dropdown: [
        { label: t('rentersCorner'), href: `${prefix}/kutak-za-iznajmljivace` },
        { label: t('ownersCorner'), href: `${prefix}/kutak-za-vlasnike` },
        { label: t('timetable'), href: `${prefix}/vozni-red` },
        { label: t('newsAndNotices'), href: `${prefix}/novosti-obavijesti-i-natjecaji` },
        { label: t('additional'), href: `${prefix}/dodatno` },
      ],
    },
  ]

  const otherLocale = locale === 'hr' ? 'en' : 'hr'
  const otherLocalePath = locale === 'hr'
    ? `/en${pathname}`
    : pathname.replace(/^\/en/, '') || '/'

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-forest-800/98 shadow-lg' : 'bg-forest-800'
      )}
    >
      {/* Top utility bar */}
      <div className="border-b border-white/10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center h-8 gap-4 text-xs text-white/60">
          <Link href={`${prefix}/kutak-za-iznajmljivace`} className="hover:text-white transition-colors">{t('rentersCorner')}</Link>
          <span className="text-white/30">|</span>
          <Link href={`${prefix}/kutak-za-vlasnike`} className="hover:text-white transition-colors">{t('ownersCorner')}</Link>
          <span className="text-white/30">|</span>
          <Link href={`${prefix}/vozni-red`} className="hover:text-white transition-colors">{t('timetable')}</Link>
          <span className="text-white/30">|</span>
          <Link href={`${prefix}/novosti-obavijesti-i-natjecaji`} className="hover:text-white transition-colors">{t('newsAndNotices')}</Link>
          <span className="text-white/30">|</span>
          <Link href={`${prefix}/dodatno`} className="hover:text-white transition-colors">{t('additional')}</Link>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`${prefix}/`} className="flex-shrink-0">
            <div className="w-10 h-10 bg-olive-600 rounded flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">K</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-white/80 hover:text-white text-xs font-medium tracking-widest uppercase transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 px-3 py-2 text-white/80 hover:text-white text-xs font-medium tracking-widest uppercase transition-colors">
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                )}

                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 bg-forest-900 border border-white/10 rounded-sm shadow-xl min-w-48 py-2"
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-white/75 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side: CTA + Lang + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              href={`${prefix}/o-nama`}
              className="hidden lg:block bg-olive-600 hover:bg-olive-500 text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-colors"
            >
              {t('contact')}
            </Link>

            {/* Language switcher */}
            <Link
              href={otherLocalePath}
              className="flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-medium uppercase tracking-wider transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              {otherLocale}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-1"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-forest-900 border-t border-white/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block py-2.5 text-white/80 text-sm font-medium tracking-wider uppercase"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full py-2.5 text-white/80 text-sm font-medium tracking-wider uppercase"
                      >
                        {item.label}
                        <ChevronDown className={cn('w-4 h-4 transition-transform', activeDropdown === item.label && 'rotate-180')} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden pl-4 border-l border-white/10"
                          >
                            {item.dropdown?.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="block py-2 text-sm text-white/60 hover:text-white transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`${prefix}/o-nama`}
                  className="bg-olive-600 text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5"
                >
                  {t('contact')}
                </Link>
                <Link href={otherLocalePath} className="text-white/70 text-sm uppercase font-medium">
                  {otherLocale}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
