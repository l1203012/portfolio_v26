import { motion } from 'framer-motion'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Section } from '../components/Section'
import { profile } from '../data'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.discord)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="06 — Contact"
      title={
        <>
          Have something in mind?
          <br />
          <span className="text-accent">Let's talk.</span>
        </>
      }
      intro={profile.contact.note}
    >
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl bg-ink text-bone p-10 sm:p-14"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full"
          style={{ background: 'radial-gradient(closest-side, rgba(227,6,19,0.65), transparent 70%)' }}
        />
        <p className="text-eyebrow text-bone/60 mb-6">Discord</p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="text-display text-4xl sm:text-6xl font-semibold tracking-tightest">
            {profile.contact.discord}
          </p>
          <button
            onClick={copy}
            className="group inline-flex items-center gap-2 rounded-full border border-bone/20 bg-bone/5 px-5 py-2.5 text-sm font-medium hover:border-accent hover:bg-accent transition-colors"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Copied' : 'Copy handle'}
          </button>
        </div>
        <p className="mt-10 text-sm text-bone/50 max-w-md">
          Open a DM with the handle above. Replies tend to come within a day.
        </p>
      </motion.div>
    </Section>
  )
}
