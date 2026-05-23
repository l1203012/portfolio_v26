import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState } from 'react'
import { Section } from '../components/Section'
import { videos, type Video } from '../data'

function getYouTubeId(url: string) {
  const m = url.match(/\/embed\/([^?&/]+)/) || url.match(/[?&]v=([^&]+)/)
  return m ? m[1] : ''
}

function LiteYouTube({ video, eager = false }: { video: Video; eager?: boolean }) {
  const [active, setActive] = useState(false)
  const id = getYouTubeId(video.url)
  const poster = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
  const fallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

  if (active) {
    return (
      <iframe
        src={`${video.url}?autoplay=1&rel=0`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    )
  }

  return (
    <button
      type="button"
      aria-label={`Play ${video.title}`}
      onClick={() => setActive(true)}
      className="group absolute inset-0 h-full w-full overflow-hidden bg-ink"
    >
      <img
        src={poster}
        onError={(e) => {
          const t = e.currentTarget
          if (t.src !== fallback) t.src = fallback
        }}
        alt=""
        loading={eager ? 'eager' : 'lazy'}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent opacity-90" />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-bone shadow-[0_20px_50px_-10px_rgba(222,155,53,0.6)] transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
          <Play size={26} fill="currentColor" className="ml-1" />
        </span>
      </span>
    </button>
  )
}

export function Videos() {
  if (videos.length === 0) return null
  const [featured, ...rest] = videos

  return (
    <Section
      id="videos"
      eyebrow="Demos · YouTube"
      title={
        <>
          Systems,
          <br />
          <span className="text-accent">on camera.</span>
        </>
      }
      intro="Recorded gameplay, mechanics, and live captures from shipped Roblox projects. Press play."
    >
      <motion.figure
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="group overflow-hidden rounded-3xl border border-ink/10 bg-ink/[0.02] hover:border-accent/40 transition-colors"
      >
        <div className="relative aspect-video w-full">
          <LiteYouTube video={featured} eager />
        </div>
        <figcaption className="flex items-start justify-between gap-6 p-6 sm:p-8">
          <div className="min-w-0">
            <p className="text-eyebrow mb-2">
              <span className="text-accent">Featured</span> · {featured.project}
            </p>
            <h3 className="text-display text-2xl sm:text-3xl leading-tight">{featured.title}</h3>
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${getYouTubeId(featured.url)}`}
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 self-center rounded-full border border-ink/15 px-4 py-2 text-xs font-medium uppercase tracking-widest text-ink/70 hover:border-accent hover:text-accent transition-colors sm:inline-block"
          >
            Watch on YouTube
          </a>
        </figcaption>
      </motion.figure>

      {rest.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {rest.map((v, i) => (
            <motion.figure
              key={v.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-3xl border border-ink/10 bg-ink/[0.02] hover:border-accent/40 transition-colors"
            >
              <div className="relative aspect-video w-full">
                <LiteYouTube video={v} />
              </div>
              <figcaption className="p-5">
                <p className="text-eyebrow mb-1">{v.project}</p>
                <h3 className="text-display text-base leading-snug">{v.title}</h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      )}
    </Section>
  )
}
