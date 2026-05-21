import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Section } from '../components/Section'
import { projects, type Project } from '../data'

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <Section
      id="work"
      eyebrow="03 — Selected Work"
      title={
        <>
          A timeline of
          <br />
          <span className="text-accent">shipped projects.</span>
        </>
      }
      intro="Six years of building for screens and games — from solo scripts to live events reaching millions."
    >
      <div ref={ref} className="relative mt-8">
        <div
          aria-hidden
          className="pointer-events-none absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-ink/10"
        />
        <motion.div
          aria-hidden
          style={{ height: lineHeight }}
          className="pointer-events-none absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 w-px bg-accent origin-top"
        />

        <ol className="space-y-16 sm:space-y-24">
          {projects.map((p, i) => (
            <TimelineItem key={p.id} project={p} index={i} />
          ))}
        </ol>
      </div>
    </Section>
  )
}

function TimelineItem({ project, index }: { project: Project; index: number }) {
  const left = index % 2 === 0
  return (
    <li className="relative grid sm:grid-cols-2 sm:gap-12">
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10 flex h-3.5 w-3.5 items-center justify-center"
      >
        <span className="absolute inset-0 rounded-full bg-accent" />
        <span className="absolute inset-[-6px] rounded-full bg-accent/20 animate-pulse" />
      </motion.span>

      <div className={`hidden sm:block ${left ? '' : 'order-2'}`}>
        <YearLabel year={project.year} align={left ? 'right' : 'left'} />
      </div>

      <motion.article
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pl-12 sm:pl-0 ${left ? 'sm:order-2 sm:pl-12' : 'sm:pr-12 sm:text-right'}`}
      >
        <div className={`sm:hidden mb-3`}>
          <span className="text-eyebrow text-accent">{project.year}</span>
        </div>

        <div
          className={`group relative rounded-3xl border border-ink/10 bg-white p-7 transition-all hover:border-accent/40 hover:shadow-[0_30px_60px_-30px_rgba(227,6,19,0.35)] ${
            project.featured ? 'ring-1 ring-accent/20' : ''
          }`}
        >
          <div className={`flex items-start gap-3 ${left ? 'sm:flex-row-reverse' : ''}`}>
            <div className="flex-1 min-w-0">
              <p className={`text-eyebrow mb-3 ${left ? 'sm:text-right' : ''}`}>
                {project.role} · {project.scale}
              </p>
              <h3 className="text-display text-2xl sm:text-3xl leading-tight">
                {project.title}
                {project.featured && (
                  <span className="ml-2 align-middle text-[10px] uppercase tracking-widest text-accent font-mono">
                    Featured
                  </span>
                )}
              </h3>
              <p className="mt-4 text-base text-ink/70 leading-relaxed">
                {project.description}
              </p>
              <ul className={`mt-5 flex flex-wrap gap-2 ${left ? 'sm:justify-end' : ''}`}>
                {project.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-ink/[0.04] px-2.5 py-1 text-xs font-medium text-ink/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline ${
                    left ? 'sm:float-right' : ''
                  }`}
                >
                  Visit site <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </li>
  )
}

function YearLabel({ year, align }: { year: number; align: 'left' | 'right' }) {
  return (
    <div className={`pt-3 ${align === 'right' ? 'text-right pr-12' : 'text-left pl-12'}`}>
      <span className="text-display text-5xl sm:text-6xl text-ink/15 font-bold tabular-nums">
        {year}
      </span>
    </div>
  )
}
