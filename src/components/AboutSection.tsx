"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedContainer from "./AnimatedContainer"

interface AboutSectionProps {
  preview?: boolean
}

export default function AboutSection({ preview = false }: AboutSectionProps) {
  const content = preview ? (
    <>
      <AnimatedContainer>
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          About Me
        </h2>
      </AnimatedContainer>
      <AnimatedContainer delay={0.1}>
        <p className="mb-6 text-lg text-muted">
          I&apos;m a motivated and detail-oriented Software Developer with solid experience in designing and building modern web applications. Based in Ramallah, Palestine, I specialize in full-stack development with a strong focus on creating efficient, user-centered solutions.
        </p>
      </AnimatedContainer>
      <AnimatedContainer delay={0.2}>
        <p className="mb-8 text-muted">
          With strong problem-solving skills and a passion for continuous learning, I have a proven ability to adapt to new technologies and project requirements. My work spans from complex backend systems using Spring Boot and Java to modern frontend applications built with React and Next.js.
        </p>
      </AnimatedContainer>
      <AnimatedContainer delay={0.3}>
        <Link
          href="/about"
          className="group inline-flex items-center gap-2 text-accent transition-colors hover:text-accent/80"
        >
          Learn More
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </AnimatedContainer>
    </>
  ) : (
    <>
      <AnimatedContainer>
        <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
          About Me
        </h1>
      </AnimatedContainer>
      <AnimatedContainer delay={0.1}>
        <div className="prose prose-invert max-w-none">
          <p className="mb-6 text-lg text-muted">
            I&apos;m Awad Issa, a motivated and detail-oriented Software Developer based in Ramallah, Palestine. With solid experience in designing and building modern web applications, I specialize in full-stack development with a strong focus on creating efficient, user-centered solutions.
          </p>
          <p className="mb-6 text-muted">
            My technical expertise spans across multiple technologies and frameworks. On the backend, I work extensively with Java and Spring Boot to build robust, scalable REST APIs. For frontend development, I leverage React and Next.js to create modern, responsive user interfaces. I&apos;m also proficient in Python with Django, and I work with various databases including MySQL, MongoDB, and PostgreSQL.
          </p>
          <p className="mb-6 text-muted">
            What sets me apart is my strong problem-solving skills and passion for continuous learning. I have a proven ability to adapt to new technologies and project requirements, which has enabled me to deliver high-quality solutions across different domains. From livestock management systems to e-commerce platforms, I approach each project with dedication to delivering efficient, scalable, and user-centered solutions.
          </p>
          <p className="mb-6 text-muted">
            I hold a Bachelor&apos;s degree in Computer Engineering from Dumlupinar University in Turkey and completed an intensive Full Stack Development Bootcamp at AXSOS Academy in Ramallah, where I logged over 1,200 coding hours and completed multiple real-world projects. I continuously enhance my skills through courses on Spring Boot, microservices, clean code principles, and cloud technologies.
          </p>
          <p className="mb-6 text-muted">
            When I&apos;m not coding, I enjoy staying current with the latest technologies, working on personal projects, and contributing to the developer community. I&apos;m fluent in Arabic (native), English (professional), and Turkish (professional), which allows me to collaborate effectively in diverse environments.
          </p>
        </div>
      </AnimatedContainer>
    </>
  )

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-container">{content}</div>
    </section>
  )
}

