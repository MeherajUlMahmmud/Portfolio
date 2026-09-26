import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`rounded-2xl border border-border bg-surface p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}
