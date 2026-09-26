import { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  intro?: ReactNode
  children: ReactNode
  className?: string
}

export default function Section({ id, eyebrow, title, intro, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
