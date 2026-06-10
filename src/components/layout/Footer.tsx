import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()
  const prefix = locale === 'en' ? '/en' : ''

  return (
    <footer className="bg-forest-800 text-white">
      {/* Instagram strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact */}
            <div>
              <div className="w-10 h-10 bg-olive-600 rounded flex items-center justify-center mb-6">
                <span className="text-white font-display font-bold text-lg">K</span>
              </div>
              <p className="text-white font-display font-semibold text-lg mb-4">TZ Kukljica</p>
              <div className="space-y-2.5 text-sm text-white/60">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-olive-400" />
                  <span>Ulica II br. 87, 23271 Kukljica</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 flex-shrink-0 text-olive-400" />
                  <a href="tel:+38523373276" className="hover:text-white transition-colors">+385 (0) 23 373276</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 flex-shrink-0 text-olive-400" />
                  <a href="mailto:info@kukljica.hr" className="hover:text-white transition-colors">info@kukljica.hr</a>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://web.facebook.com/visitkukljica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/tz_kukljica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">O nama</p>
                <div className="space-y-2">
                  {[
                    { label: 'Općenito', href: `${prefix}/o-nama` },
                    { label: 'Kako do nas?', href: `${prefix}/kako-do-nas` },
                    { label: 'Znamenitosti', href: `${prefix}/znamenitosti` },
                    { label: 'Plaže', href: `${prefix}/plaze` },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} className="block text-sm text-white/60 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">Aktivnosti</p>
                <div className="space-y-2">
                  {[
                    { label: 'Aktivni odmor', href: `${prefix}/aktivni-odmor` },
                    { label: 'Nautika', href: `${prefix}/aktivni-odmor/nautika` },
                    { label: 'Biciklizam', href: `${prefix}/aktivni-odmor/biciklizam` },
                    { label: 'Pješačenje', href: `${prefix}/aktivni-odmor/pjesacenje` },
                    { label: 'Izleti', href: `${prefix}/aktivni-odmor/izleti` },
                    { label: 'Događanja', href: `${prefix}/dogadanja` },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} className="block text-sm text-white/60 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">Info</p>
                <div className="space-y-2">
                  {[
                    { label: 'Privatni smještaj', href: `${prefix}/privatni-smjestaj` },
                    { label: 'Zelena Punta', href: `${prefix}/holiday-park-zelena-punta` },
                    { label: 'Novosti', href: `${prefix}/novosti-obavijesti-i-natjecaji` },
                    { label: 'Vozni red', href: `${prefix}/vozni-red` },
                    { label: 'Korisni linkovi', href: `${prefix}/korisni-linkovi` },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} className="block text-sm text-white/60 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} TZ Kukljica. Sva prava pridržana.</span>
          <div className="flex gap-4">
            <a href="https://mint.gov.hr/pristup-informacijama/propisi/propisi-iz-turizma/107" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors uppercase tracking-wider">
              {t('touristRegulations')}
            </a>
            <Link href={`${prefix}/korisni-linkovi`} className="hover:text-white/70 transition-colors uppercase tracking-wider">
              {t('usefulLinks')}
            </Link>
            <Link href={`${prefix}/sluzbeni-dokumenti`} className="hover:text-white/70 transition-colors uppercase tracking-wider">
              {t('officialDocs')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
