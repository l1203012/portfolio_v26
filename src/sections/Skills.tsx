import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { skills } from '../data'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="01 — Stack"
      title={
        <>
          Tools, picked for
          <br />
          <span className="text-accent">what gets it done.</span>
        </>
      }
    >
      <div className="grid gap-10 md:grid-cols-3">
        {skills.map((g, gi) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-ink/10 p-8 hover:border-accent/40 transition-colors"
          >
            <p className="text-eyebrow mb-6">{g.group}</p>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-ink/[0.04] px-3.5 py-1.5 text-sm font-medium text-ink/80"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
