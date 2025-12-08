"use client"

import { useState } from "react"
import SectionTitle from "@/components/SectionTitle"
import AnimatedContainer from "@/components/AnimatedContainer"
import ImageModal from "@/components/ImageModal"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: "farmy",
    title: "Farmy - Farm Management System",
    description:
      "A mobile-first, offline-first farm management system for Palestinian small-to-medium sheep farms. Built with TypeScript, Next.js, Expo, and tRPC in a Turborepo monorepo.",
    liveUrl: "https://farmy-web.vercel.app/en",
    images: [
      "/farmy-screenshots/Screenshot 2025-12-08 092732.png",
      "/farmy-screenshots/Screenshot 2025-12-08 092814.png",
      "/farmy-screenshots/Screenshot 2025-12-08 092850.png",
      "/farmy-screenshots/Screenshot 2025-12-08 092912.png",
      "/farmy-screenshots/Screenshot 2025-12-08 092919.png",
    ],
    techStack: [
      "TypeScript",
      "Next.js 14",
      "Expo",
      "React Native",
      "tRPC",
      "Turborepo",
      "Prisma",
      "PostgreSQL",
      "WatermelonDB",
      "Chakra UI",
      "Argon2id",
      "JWT",
    ],
    features: [
      "Breeding & Pregnancy Management: Track breeding cycles, pregnancy checks, due dates, and lambing events",
      "Health & Treatment Tracking: Record diagnoses, treatments, and withdrawal periods",
      "Weight & Feed Management: Batch weight entry, ADG calculations, and feed tracking",
      "Milk & Sales Recording: Daily milk yields, milk sales, and animal sales tracking",
      "Inventory & Cost Tracking: Multi-level cost resolver with confidence badges",
      "Insights & Causality Analysis: Relate actions to outcomes using statistical methods",
      "Offline-First Mobile: WatermelonDB local SQLite storage with background sync every 15 minutes",
      "Multi-farm Support: Role-based access control (Owner, Admin, Worker, Vet)",
      "Internationalization: Arabic and English support with RTL layout",
    ],
    achievements: [
      "Built a comprehensive offline-first mobile app with WatermelonDB and outbox pattern for queued mutations",
      "Implemented complex farm management features including breeding cycles, health tracking, and cost analysis",
      "Created a Turborepo monorepo architecture with shared packages for type-safe API calls using tRPC",
      "Designed secure authentication system with phone + password, Argon2id hashing, and JWT tokens",
    ],
  },
  {
    id: "smoke-app",
    title: "Smoke App – Smoke Purchasing Platform",
    description:
      "A web platform for managing smoke purchases with three roles: Super Admin, Distributor, and Supermarket.",
    liveUrl: "https://smoke-app-deployment-jueb.vercel.app/login",
    images: [
      "/smoke-app-screenshots/Screenshot 2025-12-08 092659.png",
    ],
    techStack: [
      "Next.js 14",
      "Tailwind CSS",
      "MySQL",
      "Prisma",
      "NextAuth.js",
      "Vercel",
    ],
    features: [
      "Super Admin: Manage supermarkets and platform access",
      "Distributor: Add/edit/delete products, manage orders, update order status",
      "Supermarket: Browse products, place orders, track order history",
    ],
    achievements: [
      "Developed a role-based authentication system",
      "Implemented CRUD operations and order management",
      "Deployed the platform on Vercel with a scalable database structure",
    ],
  },
]

export default function ProjectsPage() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    images: string[]
    currentIndex: number
    projectTitle: string
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    projectTitle: "",
  })

  const openModal = (images: string[], index: number, projectTitle: string) => {
    setModalState({
      isOpen: true,
      images,
      currentIndex: index,
      projectTitle,
    })
  }

  const closeModal = () => {
    setModalState({
      isOpen: false,
      images: [],
      currentIndex: 0,
      projectTitle: "",
    })
  }

  const nextImage = () => {
    setModalState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }))
  }

  const previousImage = () => {
    setModalState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }))
  }

  return (
    <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-container">
        <SectionTitle
          title="Projects"
          subtitle="Detailed case studies of projects I've built and launched"
        />

        <div className="space-y-24">
          {projects.map((project, projectIndex) => (
            <section
              key={project.id}
              id={project.id}
              className="scroll-mt-24"
            >
              <AnimatedContainer delay={projectIndex * 0.1}>
                <div className="mb-8">
                  <div className="flex items-center gap-4 flex-wrap">
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                      {project.title}
                    </h2>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-accent/10"
                      >
                        <span>Visit Live App</span>
                        <ExternalLink
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Images Gallery - Horizontal Scrolling */}
                {project.images && project.images.length > 0 ? (
                  <div className="mb-8 w-full">
                    <div className="overflow-x-auto overflow-y-hidden scrollbar-thin scroll-smooth">
                      <div className="flex flex-row gap-6 pb-4" style={{ width: 'max-content', display: 'flex' }}>
                        {project.images.map((image, imageIndex) => (
                          <div 
                            key={imageIndex}
                            className="flex-shrink-0 w-[400px] sm:w-[500px]"
                          >
                            <AnimatedContainer delay={projectIndex * 0.1 + imageIndex * 0.05}>
                              <div 
                                className="group relative h-[300px] sm:h-[350px] w-full overflow-hidden rounded-xl border border-border bg-muted/5 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/10 cursor-pointer"
                                onClick={() => openModal(project.images, imageIndex, project.title)}
                              >
                                <Image
                                  src={image}
                                  alt={`${project.title} screenshot ${imageIndex + 1}`}
                                  fill
                                  className="object-contain transition-transform group-hover:scale-105"
                                  sizes="(max-width: 640px) 400px, 500px"
                                />
                              </div>
                            </AnimatedContainer>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mb-8 aspect-video w-full overflow-hidden rounded-2xl bg-muted/10">
                    <div className="flex h-full items-center justify-center text-muted">
                      <div className="text-center">
                        <div className="mb-2 text-6xl">📱</div>
                        <div className="text-lg">{project.title} Screenshots</div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-8">
                  {/* Description */}
                  <AnimatedContainer delay={projectIndex * 0.1 + 0.1}>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Description
                      </h3>
                      <p className="text-muted">{project.description}</p>
                    </div>
                  </AnimatedContainer>

                  {/* Tech Stack */}
                  <AnimatedContainer delay={projectIndex * 0.1 + 0.2}>
                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-foreground">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedContainer>

                  {/* Features */}
                  <AnimatedContainer delay={projectIndex * 0.1 + 0.3}>
                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-foreground">
                        Features & Role
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-muted"
                          >
                            <span className="mt-1 text-accent">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedContainer>

                  {/* Achievements */}
                  <AnimatedContainer delay={projectIndex * 0.1 + 0.4}>
                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-foreground">
                        Achievements
                      </h3>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-muted"
                          >
                            <span className="mt-1 text-accent">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedContainer>
                </div>
              </AnimatedContainer>
            </section>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        images={modalState.images}
        currentIndex={modalState.currentIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrevious={previousImage}
        alt={modalState.projectTitle}
      />
    </div>
  )
}

