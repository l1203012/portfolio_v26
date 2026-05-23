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
      eyebrow="03 — Contact"
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
        className="relative overflow-hidden rounded-3xl border border-line bg-panel/80 backdrop-blur text-ink p-10 sm:p-14"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full"
          style={{ background: 'radial-gradient(closest-side, rgba(222,155,53,0.55), transparent 70%)' }}
        />
        <p className="text-eyebrow mb-6">Discord</p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="text-display text-4xl sm:text-6xl font-semibold tracking-tightest">
            {profile.contact.discord}
          </p>
          <button
            onClick={copy}
            className="group inline-flex items-center gap-2 rounded-full border border-ink/20 bg-ink/5 px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Copied' : 'Copy handle'}
          </button>
        </div>
        <p className="mt-10 text-sm text-muted max-w-md">
          Open a DM with the handle above. Replies tend to come within a day.
        </p>
      </motion.div>
    </Section>
  )
}
