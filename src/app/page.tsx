import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import SectionTitle from "@/components/SectionTitle"
import SkillCard from "@/components/SkillCard"
import ProjectCard from "@/components/ProjectCard"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedContainer from "@/components/AnimatedContainer"

const skills = {
  languages: [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "📜" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
  ],
  frameworks: [
    { name: "Spring Boot", icon: "🌱" },
    { name: "React", icon: "⚛️" },
    { name: "Django", icon: "🎯" },
    { name: "Next.js", icon: "▲" },
  ],
  databases: [
    { name: "MySQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
  ],
  tools: [
    { name: "Git", icon: "🔀" },
    { name: "GitHub", icon: "💻" },
    { name: "Bitbucket", icon: "🪣" },
    { name: "AWS", icon: "☁️" },
    { name: "Maven", icon: "📦" },
    { name: "REST APIs", icon: "🔌" },
    { name: "Postman", icon: "📮" },
    { name: "Jira", icon: "🎫" },
  ],
  other: [
    { name: "Spring Security", icon: "🔒" },
    { name: "JSON", icon: "📋" },
  ],
}

const featuredProjects = [
  {
    title: "Farmy - Farm Management System",
    description:
      "A mobile-first, offline-first farm management system for Palestinian small-to-medium sheep farms. Built with TypeScript, Next.js, Expo, and tRPC in a Turborepo monorepo.",
    tags: ["TypeScript", "Next.js", "Expo", "tRPC", "Turborepo", "Prisma"],
    href: "/projects#farmy",
    image: "/farmy-screenshots/Screenshot 2025-12-08 092732.png",
  },
  {
    title: "Smoke App – Smoke Purchasing Platform",
    description:
      "A web platform for managing smoke purchases with role-based access control for Super Admin, Distributor, and Supermarket roles.",
    tags: ["Next.js", "MySQL", "Prisma", "NextAuth.js", "Vercel"],
    href: "/projects#smoke-app",
    image: "/smoke-app-screenshots/Screenshot 2025-12-08 092659.png",
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Preview */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-container">
          <AboutSection preview />
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-container">
          <SectionTitle
            title="Skills & Technologies"
            subtitle="Technologies I work with to build modern applications"
          />

          <div className="space-y-12">
            {/* Languages */}
            <AnimatedContainer>
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                {skills.languages.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </AnimatedContainer>

            {/* Frameworks & Libraries */}
            <AnimatedContainer delay={0.15}>
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                {skills.frameworks.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </AnimatedContainer>

            {/* Databases */}
            <AnimatedContainer delay={0.3}>
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Databases
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                {skills.databases.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </AnimatedContainer>

            {/* Tools & Platforms */}
            <AnimatedContainer delay={0.45}>
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Tools & Platforms
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                {skills.tools.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </AnimatedContainer>

            {/* Other Skills */}
            <AnimatedContainer delay={0.6}>
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Other Skills
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                {skills.other.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-container">
          <SectionTitle
            title="Featured Projects"
            subtitle="A selection of projects I've built and launched"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                href={project.href}
                delay={index * 0.1}
                image={project.image}
              />
            ))}
          </div>

          <AnimatedContainer delay={0.4}>
            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-accent/10"
              >
                View All Projects
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </AnimatedContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-container">
          <AnimatedContainer>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/10 to-cyan-500/10 p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Let&apos;s Work Together
              </h2>
              <p className="mb-8 text-lg text-muted">
                Have a project in mind? I&apos;d love to hear about it.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                Get In Touch
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </AnimatedContainer>
        </div>
      </section>
    </>
  )
}

