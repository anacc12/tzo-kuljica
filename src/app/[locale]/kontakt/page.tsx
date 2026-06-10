'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactPage() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<Status>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Kontakt poruka od ${formData.name}`,
          from_name: 'TZO Kukljica web',
          ...formData,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')}
        label="Kontakt" />

      <section className="py-20" style={{backgroundColor: "var(--light)"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Kontakt informacije */}
            <FadeIn>
              <h2 className="font-display text-3xl text-forest-800 font-light mb-8">{t('infoTitle')}</h2>
              <div className="space-y-5 text-forest-600/80 mb-10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-olive-600 mt-0.5 flex-shrink-0" />
                  <span>Ulica II br. 87, 23271 Kukljica</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-olive-600 flex-shrink-0" />
                  <a href="tel:+38523373276" className="hover:text-forest-800 transition-colors">+385 (0) 23 373 276</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-olive-600 flex-shrink-0" />
                  <a href="mailto:info@kukljica.hr" className="hover:text-forest-800 transition-colors">info@kukljica.hr</a>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://web.facebook.com/visitkukljica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-forest-800 hover:bg-forest-700 text-white rounded flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/tz_kukljica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-forest-800 hover:bg-forest-700 text-white rounded flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>

            {/* Forma */}
            <FadeIn delay={0.1}>
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="font-display text-2xl text-forest-800 font-light mb-2">{t('successTitle')}</h3>
                  <p className="text-forest-600/70">{t('successText')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-forest-600/60 mb-2">
                        {t('nameLabel')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        className="w-full border border-sand-300 rounded-sm px-4 py-3 text-forest-800 placeholder-forest-400/50 focus:outline-none focus:border-olive-500 transition-colors bg-white"
                        placeholder={t('namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-forest-600/60 mb-2">
                        {t('emailLabel')} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="w-full border border-sand-300 rounded-sm px-4 py-3 text-forest-800 placeholder-forest-400/50 focus:outline-none focus:border-olive-500 transition-colors bg-white"
                        placeholder="email@primjer.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-forest-600/60 mb-2">
                      {t('phoneLabel')}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      className="w-full border border-sand-300 rounded-sm px-4 py-3 text-forest-800 placeholder-forest-400/50 focus:outline-none focus:border-olive-500 transition-colors bg-white"
                      placeholder="+385 91 234 5678"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widets uppercase text-forest-600/60 mb-2">
                      {t('messageLabel')} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="w-full border border-sand-300 rounded-sm px-4 py-3 text-forest-800 placeholder-forest-400/50 focus:outline-none focus:border-olive-500 transition-colors bg-white resize-none"
                      placeholder={t('messagePlaceholder')}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm">{t('errorText')}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-forest-800 hover:bg-forest-700 disabled:opacity-60 text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 transition-colors"
                  >
                    {status === 'sending' ? t('sending') : t('submit')}
                  </button>
                </form>
              )}
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  )
}
