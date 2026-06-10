'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import FadeIn from './FadeIn'

const TABS = ['car', 'boat', 'train', 'plane', 'bus'] as const

export default function TransportTabs() {
  const t = useTranslations('howToGet')
  const [active, setActive] = useState<typeof TABS[number]>('car')

  return (
    <FadeIn>
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-olive-600 mb-6">{t('transportLabel')}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={cn(
              'px-4 py-2 text-sm font-medium transition-colors',
              active === tab
                ? 'bg-forest-800 text-white'
                : 'bg-sand-100 text-forest-700 hover:bg-sand-200'
            )}
          >
            {t(tab)}
          </button>
        ))}
      </div>
      <div className="bg-sand-100 rounded-sm p-6">
        <p className="text-forest-700 leading-relaxed">
          {t(`${active}Text` as Parameters<typeof t>[0])}
        </p>
        {active === 'boat' && (
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4be3695c96606a431057_9A-GAZENICA-TRAJEKTNA-LUKA-od-2.06.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-olive-700 underline hover:text-olive-600">{t('ferryPort')}</a>
            <a href="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4a41b9cf4e400cb16c77_204-LINIJA-PREKO-MULINE-od01.04.2025.-1-1-1.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-olive-700 underline hover:text-olive-600">{t('linePrekoMuline')}</a>
            <a href="https://cdn.prod.website-files.com/67e320f1dcdaf05e33698750/683f4ae14a692fe5bc548221_205-LINIJA-PREKO-TKON-09.09.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-olive-700 underline hover:text-olive-600">{t('linePrekoTkon')}</a>
            <a href="https://www.zadar-airport.hr/javni-prijevoz" target="_blank" rel="noopener noreferrer" className="text-sm text-olive-700 underline hover:text-olive-600">{t('airportBuses')}</a>
          </div>
        )}
        {active === 'train' && (
          <a href="https://prodaja.hzpp.hr/" target="_blank" rel="noopener noreferrer" className="mt-3 block text-sm text-olive-700 underline hover:text-olive-600">{t('trainLink')}</a>
        )}
        {active === 'plane' && (
          <a href="https://www.zadar-airport.hr/" target="_blank" rel="noopener noreferrer" className="mt-3 block text-sm text-olive-700 underline hover:text-olive-600">Zadar Airport →</a>
        )}
      </div>
    </FadeIn>
  )
}
