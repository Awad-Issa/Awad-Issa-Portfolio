"use client"

import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import AnimatedContainer from "./AnimatedContainer"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-container">
        <div className="relative z-10">
          <AnimatedContainer>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-accent to-cyan-500 bg-clip-text text-transparent">
                Awad Issa
              </span>
            </h1>
          </AnimatedContainer>

          <AnimatedContainer delay={0.1}>
            <p className="mb-8 text-xl text-muted sm:text-2xl">
              Software Developer & Full Stack Developer
            </p>
          </AnimatedContainer>

          <AnimatedContainer delay={0.2}>
            <p className="mb-12 max-w-2xl text-lg text-muted">
              Motivated and detail-oriented developer with solid experience in designing and building modern web applications. Strong problem-solving skills, passionate about continuous learning, and dedicated to delivering high-quality, user-centered solutions.
            </p>
          </AnimatedContainer>

          <AnimatedContainer delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="group flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-accent/10"
              >
                Get In Touch
              </Link>
            </div>
          </AnimatedContainer>
        </div>

        {/* Gradient shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  )
}

