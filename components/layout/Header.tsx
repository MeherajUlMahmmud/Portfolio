'use client'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { profile } from '@/lib/data'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Writing', href: '#publications' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || isOpen ? 'border-b border-border bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-mono text-sm font-semibold tracking-tight text-fg">
          {profile.shortName.toLowerCase()}
          <span className="text-accent">.dev</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm text-muted transition-colors hover:text-fg">
              {item.name}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-3 py-1.5 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Résumé
          </a>
        </nav>

        <button
          type="button"
          className="text-fg md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-border bg-bg md:hidden" aria-label="Mobile">
          <div className="flex flex-col px-4 py-3">
            {[...navItems, { name: 'Résumé', href: profile.resumeUrl }].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-2.5 text-muted transition-colors hover:text-fg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
