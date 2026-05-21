import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Section } from '../components/Section'
import { videos } from '../data'

export function Videos() {
  if (videos.length === 0) return null
  return (
    <Section
      id="videos"
      eyebrow="Videos"
      title={
        <>
          See it
          <br />
          <span className="text-accent">in motion.</span>
        </>
      }
      intro="Recorded gameplay, demos, and event captures."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {videos.map((v, i) => (
          <motion.figure
            key={v.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group overflow-hidden rounded-3xl border border-ink/10 bg-ink/[0.02] hover:border-accent/40 transition-colors"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-ink">
              <iframe
                src={v.url}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <figcaption className="flex items-start gap-4 p-5">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Play size={14} fill="currentColor" />
              </span>
              <div>
                <p className="text-eyebrow mb-1">{v.project}</p>
                <h3 className="text-display text-lg leading-snug">{v.title}</h3>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  )
}
