import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import FadeIn from '@/components/sections/FadeIn'

const SERVICES = ['parking','pedaloes','sports','restaurant','pizzeria','tours'] as const

export default function ZelenaPuntaPage() {
  const t = useTranslations('zelenaPunta')
  return (
    <>
      {/* Video hero */}
      <section className="relative h-screen overflow-hidden">
        <video src="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/68641dbe660a616a11a2a739_Punta%20short%20video%20720-transcode.mp4"
          autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
          <h1 className="font-display text-white text-6xl md:text-8xl font-light mb-8">{t('title')}</h1>
          <blockquote className="text-white/80 text-lg italic font-display mb-6 leading-relaxed">"{t('quote')}"</blockquote>
          <p className="text-white/60 text-sm mb-8">{t('quoteAuthor')}</p>
          <a href="https://www.zelenapunta.hr/" target="_blank" rel="noopener noreferrer"
            className="bg-olive-600 hover:bg-olive-500 text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 transition-colors">
            {t('book')}
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-20" style={{backgroundColor: "var(--light)"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-3">O Kukljici</p>
              <h2 className="font-display text-4xl text-forest-800 font-light mb-4">{t('section1Title')}</h2>
              <p className="text-forest-600/80 leading-relaxed whitespace-pre-line mb-6">{t('section1Text')}</p>
              <a href="https://www.zelenapunta.hr/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-700 text-white text-sm font-medium px-6 py-3 transition-colors">
                {t('book')}
              </a>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {['https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/686422a194cfe3ae50400efe_punta%20screen%201.jpeg',
                  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/686422e13476d979a20bcc0a_punta%20screenshot%203.jpeg',
                  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/6864235999c41bffe27df21b_punta%20screen%204.png',
                  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/686423b6657667a6005a8793_punta%20screenshot%202.jpeg',
                ].map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden">
                    <Image src={src} alt="" fill className="object-cover" sizes="25vw" />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/686422e13476d979a20bcc0a_punta%20screenshot%203.jpeg" alt="" fill className="object-cover" sizes="50vw" />
              </div>
            </FadeIn>
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-3">Turizam</p>
              <h2 className="font-display text-4xl text-forest-800 font-light mb-4">{t('section2Title')}</h2>
              <p className="text-forest-600/80 leading-relaxed whitespace-pre-line">{t('section2Text')}</p>
            </FadeIn>
          </div>

          {/* Services */}
          <FadeIn>
            <h2 className="font-display text-3xl text-forest-800 font-light mb-8">{t('servicesTitle')}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {SERVICES.map(s => (
                <div key={s} className="bg-sand-100 rounded-sm p-5 text-center">
                  <p className="text-sm font-medium text-forest-800">{t(s)}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
