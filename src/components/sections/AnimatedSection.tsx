"use client"

import { motion } from "framer-motion"

type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
}

export function AnimatedSection({ children, className, delay = 0, duration = 0.6, y = 40 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}