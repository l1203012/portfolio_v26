import { motion } from 'framer-motion'
import { Gamepad2, Code2, Plane, Music } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section } from '../components/Section'
import { hobbies } from '../data'

const iconMap: Record<string, LucideIcon> = {
  gaming: Gamepad2,
  coding: Code2,
  travel: Plane,
  music: Music,
}

export function Hobbies() {
  return (
    <Section
      id="offline"
      eyebrow="05 — Offline"
      title={
        <>
          Outside the editor,
          <br />
          <span className="text-accent">staying curious.</span>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {hobbies.map((h, i) => {
          const Icon = iconMap[h.id] ?? Code2
          return (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-3xl border border-ink/10 p-7 hover:border-accent/40 hover:bg-white transition-all"
            >
              <Icon
                size={26}
                className="text-ink/60 group-hover:text-accent transition-colors"
                strokeWidth={1.5}
              />
              <h3 className="text-display text-xl mt-6">{h.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{h.description}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
