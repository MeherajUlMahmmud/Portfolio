import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
}

export default function Badge({ children, variant = 'outline' }: BadgeProps) {
  const variantClasses = {
    primary: 'bg-accent-soft text-accent',
    outline: 'border border-border text-muted',
  }

  return (
    <span className={`inline-block rounded-md px-2 py-0.5 font-mono text-xs ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}
