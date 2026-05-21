import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow?: string
  title?: ReactNode
  intro?: ReactNode
  children: ReactNode
  className?: string
  fullBleed?: boolean
}

export function Section({ id, eyebrow, title, intro, children, className = '', fullBleed = false }: Props) {
  return (
    <section
      id={id}
      className={`relative py-28 sm:py-36 ${className}`}
    >
      <div className={fullBleed ? '' : 'container-prose'}>
        {(eyebrow || title || intro) && (
          <header className="mb-14 sm:mb-20 max-w-3xl">
            {eyebrow && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-eyebrow mb-6"
              >
                <span className="text-accent">—</span> {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-display text-4xl sm:text-6xl leading-[1.05]"
              >
                {title}
              </motion.h2>
            )}
            {intro && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 text-lg text-muted leading-relaxed"
              >
                {intro}
              </motion.div>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
