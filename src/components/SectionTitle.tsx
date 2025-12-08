import { ReactNode } from "react"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-muted">{subtitle}</p>
      )}
    </div>
  )
}

