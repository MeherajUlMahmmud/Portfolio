import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked" className="bg-surface-alt">
      <ol className="relative space-y-12 border-l border-border pl-6 md:pl-10">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span
              className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-surface-alt md:-left-[47px] ${
                job.current ? 'bg-accent' : 'bg-muted'
              }`}
            />
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-xl font-semibold text-fg">{job.role}</h3>
              <p className="font-mono text-sm text-muted">{job.period}</p>
            </div>
            <p className="mt-1 text-muted">
              {job.companyUrl ? (
                <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
                  {job.company}
                </a>
              ) : (
                <span className="font-medium text-fg">{job.company}</span>
              )}{' '}
              · {job.location}
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {job.highlights.map((h) => (
                <div key={h.title} className="rounded-xl border border-border bg-surface p-5">
                  <h4 className="font-medium text-fg">{h.title}</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                    {h.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {job.tech.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
