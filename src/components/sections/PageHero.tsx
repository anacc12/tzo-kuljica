'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type PageHeroProps = {
  title: string
  subtitle?: string
  images?: string[]
  dark?: boolean
}

export default function PageHero({ title, subtitle, images = [], dark = false }: PageHeroProps) {
  return (
    <section className={`pt-24 pb-10 ${dark ? 'bg-forest-800 text-white' : 'bg-sand-100'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className={`font-display text-5xl md:text-6xl lg:text-7xl font-light mb-4 ${dark ? 'text-white' : 'text-forest-800'}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-lg md:text-xl max-w-2xl ${dark ? 'text-white/70' : 'text-forest-600/80'}`}>
              {subtitle}
            </p>
          )}
        </motion.div>

        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 grid grid-cols-3 gap-3 h-56 md:h-72"
          >
            {images.slice(0, 3).map((src, i) => (
              <div key={i} className="relative rounded-sm overflow-hidden">
                <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
