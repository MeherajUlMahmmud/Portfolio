import Button from '@/components/ui/Button'
import { FaGithub, FaLinkedin, FaMedium, FaArrowRight, FaFileDownload } from 'react-icons/fa'
import { profile, socials } from '@/lib/data'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {profile.status}
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 font-mono text-sm text-accent md:text-base">
          {profile.role} · {profile.location}
        </p>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted md:text-2xl">{profile.headline}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="#projects">
            View projects <FaArrowRight size={12} />
          </Button>
          <Button href={profile.resumeUrl} variant="outline" target="_blank" rel="noopener noreferrer">
            <FaFileDownload size={14} /> Résumé
          </Button>
          <Button href={`mailto:${profile.email}`} variant="outline">
            Get in touch
          </Button>
        </div>

        <div className="mt-10 flex items-center gap-5 text-muted">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-fg">
            <FaGithub size={20} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-fg">
            <FaLinkedin size={20} />
          </a>
          <a href={socials.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium" className="transition-colors hover:text-fg">
            <FaMedium size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
