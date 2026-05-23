import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 75% 18%, rgba(222,155,53,0.20), transparent 65%), radial-gradient(45% 35% at 8% 88%, rgba(222,155,53,0.10), transparent 60%)',
        }}
      />

      <motion.div style={{ y, opacity }} className="container-prose w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-eyebrow mb-8"
        >
          <span className="text-accent">●</span> Portfolio · {new Date().getFullYear()}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display text-[14vw] sm:text-[8.5vw] leading-[0.92] tracking-tightest"
        >
          {profile.name}.
          <br />
          <span className="text-accent">{profile.title}.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-xl text-lg sm:text-xl text-muted leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <a
            href="#videos"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bone hover:bg-accent-soft transition-colors"
          >
            <Play size={14} fill="currentColor" />
            Watch demos
          </a>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
          >
            View full archive
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-10 max-w-3xl"
        >
          <Stat label="Combined Visits" value="150M+" />
          <Stat label="Based In" value={profile.location} />
          <Stat label="Education" value={profile.education.replace('Bachelor of ', 'B.S. ')} />
          <Stat label="Age" value={`${profile.age}`} />
        </motion.dl>
      </motion.div>

      <ScrollIndicator />
    </section>
  )
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none absolute bottom-12 right-6 hidden flex-col items-center gap-6 sm:right-10 sm:flex"
      aria-hidden
    >
      <span
        className="font-mono text-[11px] uppercase tracking-[0.45em] text-muted"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        Scroll · Down
      </span>
      <div className="relative h-32 w-px overflow-hidden bg-ink/15">
        <div className="absolute inset-x-0 top-0 h-10 w-px bg-accent animate-scroll-dot" />
      </div>
      <span className="block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(222,155,53,0.6)]" />
    </motion.div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-eyebrow mb-2">{label}</dt>
      <dd className="text-display text-2xl sm:text-3xl">{value}</dd>
    </div>
  )
}
