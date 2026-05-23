import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { Section } from '../components/Section'
import { certifications } from '../data'

export function Certifications() {
  return (
    <Section
      id="credentials"
      eyebrow="02 — Credentials"
      title={
        <>
          Certified by
          <br />
          <span className="text-accent">the people who built it.</span>
        </>
      }
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.li
            key={c.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group flex items-start gap-5 rounded-3xl border border-ink/10 p-7 hover:border-accent/40 transition-colors"
          >
            <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink/[0.04] text-ink group-hover:bg-accent group-hover:text-bone transition-colors">
              <ShieldCheck size={18} />
            </span>
            <div className="min-w-0">
              <p className="text-eyebrow mb-2">{c.issuer}</p>
              <h3 className="text-display text-lg sm:text-xl leading-snug">{c.name}</h3>
              <p className="mt-2 text-sm text-muted font-mono">{c.code}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}
