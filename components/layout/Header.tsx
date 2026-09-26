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
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Highlight the nav link for the section crossing the upper third of the viewport.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-30% 0px -65% 0px' },
    )
    sections.forEach((section) => observer.observe(section))

    const clearAtTop = () => {
      if (window.scrollY < window.innerHeight * 0.3) setActive('')
    }
    window.addEventListener('scroll', clearAtTop, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', clearAtTop)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [isOpen])

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

        <nav className="hidden items-center gap-6 md:flex lg:gap-7" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = active === item.href
            return (
              <a
                key={item.name}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={`relative text-sm transition-colors hover:text-fg ${
                  isActive ? 'text-fg after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:bg-accent' : 'text-muted'
                }`}
              >
                {item.name}
              </a>
            )
          })}
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
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-lg text-fg md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-nav" className="border-t border-border bg-bg md:hidden" aria-label="Mobile">
          <div className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={active === item.href ? 'location' : undefined}
                className={`py-2.5 transition-colors hover:text-fg ${active === item.href ? 'text-fg' : 'text-muted'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 text-muted transition-colors hover:text-fg"
              onClick={() => setIsOpen(false)}
            >
              Résumé
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
