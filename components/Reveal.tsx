"use client"

import { motion } from "framer-motion"

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string // Tambahkan baris ini
}

export const Reveal = ({ children, delay = 0, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.19, 1, 0.22, 1] 
      }}
      className={className} // Tambahkan baris ini
    >
      {children}
    </motion.div>
  )
}