"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import AnimatedContainer from "./AnimatedContainer"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href: string
  delay?: number
  featured?: boolean
  image?: string
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  delay = 0,
  featured = false,
  image,
}: ProjectCardProps) {
  return (
    <AnimatedContainer delay={delay}>
      <Link
        href={href}
        className={cn(
          "group block rounded-2xl border border-border bg-background p-6 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10",
          featured && "md:col-span-2"
        )}
      >
        <div className="mb-4 aspect-video w-full overflow-hidden rounded-xl bg-muted/10">
          {image ? (
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-muted">
              {/* Placeholder for project image */}
              <div className="text-center">
                <div className="mb-2 text-4xl">📱</div>
                <div className="text-sm">Project Screenshot</div>
              </div>
            </div>
          )}
        </div>

        <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="mb-4 text-muted">{description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-accent">
          <span>View Project</span>
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </Link>
    </AnimatedContainer>
  )
}

