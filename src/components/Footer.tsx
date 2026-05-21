import { profile } from '../data'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ink/10 py-12">
      <div className="container-prose flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-ink text-bone font-display font-bold text-sm">
            A
          </span>
          <p className="text-sm text-muted">
            © {year} {profile.name}
            <span className="mx-2 text-ink/20">/</span>
            <span className="font-mono">@{profile.handle}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
