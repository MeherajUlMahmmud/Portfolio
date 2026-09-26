import { FaArrowRight } from 'react-icons/fa'
import Section from '@/components/ui/Section'
import { publications, articles, socials } from '@/lib/data'

export default function Publications() {
  return (
    <Section id="publications" eyebrow="Research & writing" title="Publications and articles" className="bg-surface-alt">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">Peer-reviewed · Springer</h3>
          <ul className="space-y-4">
            {publications.map((pub) => (
              <li key={pub.title}>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
                >
                  <p className="font-mono text-xs text-muted">{pub.year}</p>
                  <p className="mt-2 font-semibold text-fg group-hover:text-accent">{pub.title}</p>
                  <p className="mt-2 text-sm text-muted">{pub.venue}</p>
                  <p className="mt-2 text-xs text-muted">{pub.authors}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">Articles · Medium</h3>
          <ul className="divide-y divide-border rounded-2xl border border-border bg-surface">
            {articles.map((a) => (
              <li key={a.title}>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 p-5"
                >
                  <div>
                    <p className="font-medium text-fg group-hover:text-accent">{a.title}</p>
                    <p className="mt-1 text-sm text-muted">{a.description}</p>
                  </div>
                  <FaArrowRight size={12} className="shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
          >
            All articles on Medium
          </a>
        </div>
      </div>
    </Section>
  )
}
