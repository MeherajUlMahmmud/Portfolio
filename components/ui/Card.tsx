import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'bordered' | 'elevated'
}

export default function Card({ variant = 'default', children, className = '', ...props }: CardProps) {
  const baseClasses = "rounded-xl p-6 transition-all duration-300"

  const variantClasses = {
    default: "bg-white shadow-soft hover:shadow-medium",
    bordered: "bg-white border border-border hover:border-accent",
    elevated: "bg-white shadow-medium hover:shadow-large"
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
