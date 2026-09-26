import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { profile, socials } from '@/lib/data'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: FaEnvelope },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`, icon: FaPhone },
  { label: 'LinkedIn', value: 'in/meherajulmahmmud', href: socials.linkedin, icon: FaLinkedin },
  { label: 'GitHub', value: 'MeherajUlMahmmud', href: socials.github, icon: FaGithub },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      intro="Open to AI/ML engineering roles, backend work and interesting collaborations. The fastest way to reach me is email."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon size={18} />
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-xs uppercase tracking-[0.2em] text-muted">{label}</span>
              <span className="block truncate text-fg group-hover:text-accent">{value}</span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button href={`mailto:${profile.email}`}>Send an email</Button>
        <Button href={profile.resumeUrl} variant="outline" target="_blank" rel="noopener noreferrer">
          Download résumé
        </Button>
        <p className="text-sm text-muted">References available on request.</p>
      </div>
    </Section>
  )
}
