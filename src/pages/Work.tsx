import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Timeline } from '../sections/Timeline'
import { Videos } from '../sections/Videos'
import { profile } from '../data'

export function Work() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <section className="relative pt-32 pb-12 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(50% 50% at 80% 0%, rgba(227,6,19,0.16), transparent 70%)',
          }}
        />
        <div className="container-prose">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              <ArrowLeft size={14} />
              Back home
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-eyebrow mt-12"
          >
            <span className="text-accent">●</span> Work archive
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-display text-5xl sm:text-7xl leading-[1.02] tracking-tightest"
          >
            Every project,
            <br />
            <span className="text-accent">in one place.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg text-muted leading-relaxed"
          >
            A complete archive of work by {profile.name} — shipped projects, live events, and video captures.
          </motion.p>
        </div>
      </section>

      <Timeline />
      <Videos />

      <section className="border-t border-ink/10 py-20">
        <div className="container-prose text-center">
          <p className="text-eyebrow mb-6">End of archive</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} />
            Back home
          </Link>
        </div>
      </section>
    </>
  )
}
