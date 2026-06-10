'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
  distance?: number
  duration?: number
}
const EASE = [0.16, 1, 0.3, 1]

export default function FadeIn({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  distance = 40,
  duration = 0.85,
}: FadeInProps) {
  const initial =
    direction === 'up'    ? { opacity: 0, y: distance } :
    direction === 'left'  ? { opacity: 0, x: -distance } :
    direction === 'right' ? { opacity: 0, x: distance } :
    { opacity: 0 }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
