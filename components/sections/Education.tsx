import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import { education, achievements, earlierEducation } from '@/lib/data'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education & recognition">
      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <p className="font-mono text-sm text-muted">{education.period}</p>
          <h3 className="mt-2 text-xl font-semibold text-fg">{education.degree}</h3>
          <p className="mt-1 text-muted">
            {education.institution} · {education.location}
          </p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Specialization</dt>
              <dd className="mt-1 text-fg">{education.specialization}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted">CGPA</dt>
              <dd className="mt-1 text-fg">{education.cgpa}</dd>
            </div>
          </dl>

          <div className="mt-6 border-t border-border pt-5">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">Relevant coursework</p>
            <div className="flex flex-wrap gap-1.5">
              {education.coursework.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>
          </div>
        </Card>

        <div className="space-y-6 lg:col-span-2">
          <Card>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">Recognition</h3>
            <ul className="space-y-4">
              {achievements.map((a) => (
                <li key={a.title} className="flex gap-4">
                  <span className="w-16 shrink-0 font-mono text-sm text-muted">{a.year}</span>
                  <div>
                    <p className="font-medium text-fg">{a.title}</p>
                    <p className="text-sm text-muted">{a.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">School</h3>
            <ul className="space-y-4">
              {earlierEducation.map((e) => (
                <li key={e.title} className="flex gap-4">
                  <span className="w-16 shrink-0 font-mono text-sm text-muted">{e.year}</span>
                  <div>
                    <p className="font-medium text-fg">
                      {e.title} <span className="font-normal text-muted">· {e.result}</span>
                    </p>
                    <p className="text-sm text-muted">{e.institution}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  )
}
