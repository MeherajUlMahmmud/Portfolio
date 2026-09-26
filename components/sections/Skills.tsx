import Section from '@/components/ui/Section'
import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with" className="bg-surface-alt">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ group, items }) => (
          <div key={group} className="bg-surface p-6">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">{group}</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-fg">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
