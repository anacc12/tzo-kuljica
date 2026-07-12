'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
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
  // Strip `locale` from params — next-intl handles it separately
  const { locale: _locale, ...routeParams } = useParams() as Record<string, string>
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

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
        { label: t('about'), href: '/o-nama' },
        { label: t('howToGetHere'), href: '/kako-do-nas' },
        { label: t('landmarks'), href: '/znamenitosti' },
        { label: t('beaches'), href: '/plaze' },
      ],
    },
    { label: t('events'), href: '/dogadanja' },
    {
      label: t('activeVacation'),
      dropdown: [
        { label: t('activeVacationGeneral'), href: '/aktivni-odmor' },
        { label: t('nautics'), href: '/aktivni-odmor/nautika' },
        { label: t('cycling'), href: '/aktivni-odmor/biciklizam' },
        { label: t('hiking'), href: '/aktivni-odmor/pjesacenje' },
        { label: t('trips'), href: '/aktivni-odmor/izleti' },
      ],
    },
    {
      label: t('accommodation'),
      dropdown: [
        { label: t('zelenaPoint'), href: '/holiday-park-zelena-punta' },
        { label: t('privateAccommodation'), href: '/privatni-smjestaj' },
      ],
    },
    {
      label: t('info'),
      dropdown: [
        { label: t('rentersCorner'), href: '/kutak-za-iznajmljivace' },
        { label: t('ownersCorner'), href: '/kutak-za-vlasnike' },
        { label: t('timetable'), href: '/vozni-red' },
        { label: t('newsAndNotices'), href: '/novosti-obavijesti-i-natjecaji' },
        { label: t('additional'), href: '/dodatno' },
      ],
    },
  ]

  const otherLocale = locale === 'hr' ? 'en' : 'hr'

  // Color tokens — flip on scroll
  const c = {
    text:        scrolled ? 'rgba(22,35,27,0.7)'    : 'rgba(249,245,235,0.7)',
    textHover:   scrolled ? 'var(--dark)'            : 'var(--light)',
    subtle:      scrolled ? 'rgba(22,35,27,0.5)'    : 'rgba(249,245,235,0.55)',
    subtleHover: scrolled ? 'var(--dark)'            : 'var(--light)',
    border:      scrolled ? 'rgba(22,35,27,0.1)'    : 'rgba(249,245,235,0.1)',
    dropBg:      scrolled ? 'var(--light)'           : 'var(--dark)',
    dropBorder:  scrolled ? 'rgba(22,35,27,0.1)'    : 'rgba(249,245,235,0.1)',
    dropText:    scrolled ? 'rgba(22,35,27,0.65)'   : 'rgba(249,245,235,0.65)',
    dropTextHov: scrolled ? 'var(--dark)'            : 'var(--light)',
    btnBg:       scrolled ? 'var(--dark)'            : 'var(--light)',
    btnColor:    scrolled ? 'var(--light)'           : 'var(--dark)',
    icon:        scrolled ? 'var(--dark)'            : 'var(--light)',
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'var(--light)' : 'var(--dark)',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1800,
          margin: '0 auto',
          padding: '0 32px',
          height: scrolled ? 56 : 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'height 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={scrolled ? '/logo-dark-1.png' : '/logo-light-1.png'}
            alt="TZ Kukljica"
            style={{ height: 36, width: 'auto', objectFit: 'contain', transition: 'opacity 0.3s ease' }}
          />
        </Link>

        {/* Desktop nav — centered */}
        <div className="hidden lg:flex items-center" style={{ gap: 4 }}>
          {navItems.map((item) => (
            <div
              key={item.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.href ? (
                <Link
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  href={item.href as any}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '8px 12px',
                    fontFamily: 'Geist, sans-serif',
                    fontSize: 13,
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    color: c.text,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = c.textHover)}
                  onMouseLeave={e => (e.currentTarget.style.color = c.text)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '8px 12px',
                    fontFamily: 'Geist, sans-serif',
                    fontSize: 13,
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    color: c.text,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                >
                  {item.label}
                  <ChevronDown style={{ width: 12, height: 12, opacity: 0.5 }} />
                </button>
              )}

              <AnimatePresence>
                {item.dropdown && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      marginTop: 4,
                      backgroundColor: c.dropBg,
                      border: `1px solid ${c.dropBorder}`,
                      borderRadius: 4,
                      minWidth: 200,
                      padding: '8px 0',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
                    }}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        href={sub.href as any}
                        style={{
                          display: 'block',
                          padding: '8px 16px',
                          fontFamily: 'Geist, sans-serif',
                          fontSize: 13,
                          color: c.dropText,
                          textDecoration: 'none',
                          transition: 'color 0.15s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = c.textHover)}
                        onMouseLeave={e => (e.currentTarget.style.color = c.dropText)}
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

        {/* Right: language + contact button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Language */}
          <Link
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            href={{ pathname, params: routeParams } as any}
            locale={otherLocale}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'Geist, sans-serif',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: c.subtle,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = c.textHover)}
            onMouseLeave={e => (e.currentTarget.style.color = c.subtle)}
          >
            <Globe style={{ width: 14, height: 14 }} />
            {otherLocale}
          </Link>
          <Link
            href="/kontakt"
            className="hidden lg:flex"
            style={{
              alignItems: 'center',
              backgroundColor: c.btnBg,
              color: c.btnColor,
              padding: '9px 20px',
              borderRadius: 999,
              fontFamily: 'Geist, sans-serif',
              fontSize: 13,
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            {t('contact')}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
            style={{ color: c.icon, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          >
            {mobileOpen ? <X style={{ width: 20, height: 20 }} /> : <Menu style={{ width: 20, height: 20 }} />}
          </button>
        </div>
      </div>
      <div style={{ height: 1, backgroundColor: c.border }} />

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
                      href={item.href as '/'}
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
                                href={sub.href as '/'}
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
                  href="/kontakt"
                  className="bg-olive-600 text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5"
                >
                  {t('contact')}
                </Link>
                <Link href={pathname as '/'} locale={otherLocale} className="text-white/70 text-sm uppercase font-medium">
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
