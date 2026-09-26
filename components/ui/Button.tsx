import { AnchorHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'outline'
  href: string
  children: ReactNode
}

export default function Button({ variant = 'primary', href, children, className = '', ...props }: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

  const variantClasses = {
    primary: 'bg-fg text-bg hover:bg-accent',
    outline: 'border border-border bg-surface text-fg hover:border-accent hover:text-accent',
  }

  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  )
}
