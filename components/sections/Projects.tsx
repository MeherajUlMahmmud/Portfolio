'use client'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import { projects, socials, type ProjectCategory } from '@/lib/data'

type Filter = 'Featured' | 'All' | ProjectCategory

const filters: Filter[] = ['Featured', 'All', 'AI / ML', 'Full-stack', 'Mobile', 'Tools']

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('Featured')

  const visible = projects.filter((p) => {
    if (filter === 'Featured') return p.featured
    if (filter === 'All') return true
    return p.category === filter
  })

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      intro="Side projects and freelance work: AI agents, document AI, full-stack apps and Flutter apps. Production systems from my day job are under Experience."
    >
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {filters.map((f) => {
          const count = f === 'Featured' ? projects.filter((p) => p.featured).length : f === 'All' ? projects.length : projects.filter((p) => p.category === f).length
          const active = f === filter
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                active ? 'border-fg bg-fg text-bg' : 'border-border text-muted hover:border-fg hover:text-fg'
              }`}
            >
              {f} <span className="ml-1 font-mono text-xs opacity-60">{count}</span>
            </button>
          )
        })}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
          >
            <div className="mb-4 flex items-center justify-between gap-3 font-mono text-xs text-muted">
              <span>{project.category}</span>
              <span className="flex items-center gap-2">
                {project.status && (
                  <span className="rounded-full bg-accent-soft px-2 py-0.5 text-accent">{project.status}</span>
                )}
                {project.year}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-fg">{project.title}</h3>
            <p className="mt-2 flex-grow text-sm leading-relaxed text-muted">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            {(project.source || project.live) && (
              <div className="mt-5 flex gap-4 border-t border-border pt-4 text-sm">
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
                  >
                    <FaGithub size={14} /> Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
                  >
                    <FaExternalLinkAlt size={12} /> Live
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>

      <p className="mt-10 text-muted">
        More on{' '}
        <a href={socials.github} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
          GitHub
        </a>{' '}
        — 60+ public repositories covering algorithms, visualizations and experiments.
      </p>
    </Section>
  )
}
