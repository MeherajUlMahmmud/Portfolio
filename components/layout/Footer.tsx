import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa'
import { profile, socials } from '@/lib/data'

const links = [
  { label: 'GitHub', href: socials.github, icon: FaGithub },
  { label: 'LinkedIn', href: socials.linkedin, icon: FaLinkedin },
  { label: 'Medium', href: socials.medium, icon: FaMedium },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FaEnvelope },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
        <div className="flex gap-2">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-alt hover:text-fg"
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
