import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero'
import FadeIn from '@/components/sections/FadeIn'

const HERO_IMAGES = [
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36093617865f143922b06_boat-rent.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f3609345b625a7db6e004c_diving.jpg',
  'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f3609355257d344d32bffb_tenis.jpg',
]

const ACTIVITIES = [
  { key: 'hiking', href: '/aktivni-odmor/pjesacenje', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f362927127964673613f82_kukljica%20pjeske.jpg' },
  { key: 'cycling', href: '/aktivni-odmor/biciklizam', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36093a92601c7a06324cd_cycling.jpg' },
  { key: 'nautics', href: '/aktivni-odmor/nautika', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f36093ec871d9613af68e1_ribolov.jpg' },
  { key: 'trips', href: '/aktivni-odmor/izleti', img: 'https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/67f363c6717a6f67a9e8f965_photo6.jpg' },
] as const

export default function ActiveVacationPage() {
  const t = useTranslations('activeVacation')
  return (
    <>
      <PageHero title={t('title')} subtitle={t('heroSubtitle')} images={HERO_IMAGES}
        label="Aktivni odmor" />
      <section className="py-20" style={{backgroundColor: "var(--light)"}}>
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {ACTIVITIES.map(({ key, href, img }, i) => (
            <FadeIn key={key}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-3">Aktivni odmor</p>
                  <h2 className="font-display text-4xl text-forest-800 font-light mb-4">{t(key)}</h2>
                  <p className="text-forest-600/80 leading-relaxed mb-6">{t(`${key}Text` as Parameters<typeof t>[0])}</p>
                  <Link href={href} className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-700 text-white text-sm font-medium px-6 py-3 transition-colors">
                    {t('findOutMore')} →
                  </Link>
                </div>
                <div className={`relative aspect-[4/3] rounded-sm overflow-hidden ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Image src={img} alt={t(key)} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}
