import { ReactNode } from 'react'

interface TimelineProps {
  children: ReactNode
}

export default function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-black"></div>
      {children}
    </div>
  )
}
