import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
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
            'radial-gradient(60% 50% at 70% 20%, rgba(227,6,19,0.18), transparent 60%), radial-gradient(50% 40% at 10% 90%, rgba(227,6,19,0.10), transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)',
          backgroundSize: '64px 64px',
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
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bone hover:bg-accent transition-colors"
          >
            View work
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-bone px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
          >
            Get in touch
          </a>
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-eyebrow flex items-center gap-2"
      >
        <span className="inline-block h-px w-8 bg-ink/30" />
        Scroll
      </motion.div>
    </section>
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
