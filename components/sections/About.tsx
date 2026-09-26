import Section from '@/components/ui/Section'
import { profile, stats } from '@/lib/data'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering AI that holds up in production" className="border-t border-border">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>

          <div className="mt-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">Currently</p>
            <ul className="space-y-2">
              {profile.currently.map((item) => (
                <li key={item} className="flex gap-3 text-fg">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border border-border bg-border md:col-span-2">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse bg-surface p-6">
              <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-fg">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
