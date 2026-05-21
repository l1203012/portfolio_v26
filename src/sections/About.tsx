import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { profile } from '../data'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={
        <>
          A developer focused on
          <br />
          <span className="text-accent">shipping things people use.</span>
        </>
      }
    >
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-6 text-lg leading-relaxed text-ink/80">
          {profile.bio.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {line}
            </motion.p>
          ))}
        </div>
        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-2 rounded-3xl border border-ink/10 bg-white/60 backdrop-blur p-8"
        >
          <p className="text-eyebrow mb-6">Profile</p>
          <Row label="Name" value={profile.name} />
          <Row label="Handle" value={`@${profile.handle}`} />
          <Row label="Location" value={profile.location} />
          <Row label="Studying" value={profile.education} />
        </motion.aside>
      </div>
    </Section>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-ink/5 py-3 last:border-b-0">
      <span className="text-sm text-muted">{label}</span>
      <span className="font-display text-base">{value}</span>
    </div>
  )
}
