import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
}

export default function Badge({ children, variant = 'primary' }: BadgeProps) {
  const baseClasses = "px-3 py-1 rounded-full text-sm font-medium inline-block"

  const variantClasses = {
    primary: "bg-accent/10 text-accent",
    secondary: "bg-background-dark text-secondary",
    outline: "border border-border text-secondary"
  }

  const classes = `${baseClasses} ${variantClasses[variant]}`

  return (
    <span className={classes}>
      {children}
    </span>
  )
}
