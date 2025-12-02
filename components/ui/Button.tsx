import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  children: ReactNode
}

export default function Button({ variant = 'primary', href, children, className = '', ...props }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2"

  const variantClasses = {
    primary: "bg-accent text-white hover:bg-accent-light shadow-soft hover:shadow-medium",
    secondary: "bg-primary text-white hover:bg-secondary shadow-soft hover:shadow-medium",
    outline: "border-2 border-primary text-primary hover:bg-accent hover:text-accent-light"
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
