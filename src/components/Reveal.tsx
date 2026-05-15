import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  className?: string
  style?: React.CSSProperties
}

const directionOffset = {
  up: { y: 28, x: 0 },
  left: { y: 0, x: 28 },
  right: { y: 0, x: -28 },
}

export function Reveal({ children, delay = 0, direction = 'up', className, style }: RevealProps) {
  const { x, y } = directionOffset[direction]
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
