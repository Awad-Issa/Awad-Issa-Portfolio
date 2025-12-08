import AboutSection from "@/components/AboutSection"
import SectionTitle from "@/components/SectionTitle"
import SkillCard from "@/components/SkillCard"
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

export default function AboutPage() {
  return (
    <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-container">
        <AboutSection />

        {/* Skills Section */}
        <section className="mt-24">
          <SectionTitle
            title="Technical Expertise"
            subtitle="Technologies and tools I use to bring ideas to life"
          />

          <div className="space-y-12">
            {/* Languages */}
            <AnimatedContainer delay={0.1}>
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
            <AnimatedContainer delay={0.2}>
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
            <AnimatedContainer delay={0.4}>
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
            <AnimatedContainer delay={0.5}>
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
        </section>

        {/* Education Section */}
        <section className="mt-24">
          <SectionTitle
            title="Education"
            subtitle="Academic background and professional training"
          />

          <div className="space-y-8">
            <AnimatedContainer delay={0.1}>
              <div className="rounded-2xl border border-border bg-background p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Dumlupinar University, Turkey
                </h3>
                <p className="mb-2 text-muted">Computer Engineering</p>
                <p className="text-sm text-muted">2019 – 2023</p>
              </div>
            </AnimatedContainer>

            <AnimatedContainer delay={0.2}>
              <div className="rounded-2xl border border-border bg-background p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  AXSOS Academy, Ramallah
                </h3>
                <p className="mb-2 text-muted">Full Stack Development Bootcamp</p>
                <p className="mb-4 text-sm text-muted">2023</p>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Immersive training in Python, Java, and MERN Web technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>16-week Bootcamp: 1,200+ coding hours, 100+ hours algorithms & data structures, 3 complete projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Hands-on experience with group activities, labs, and real-world projects</span>
                  </li>
                </ul>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* Courses & Certifications Section */}
        <section className="mt-24">
          <SectionTitle
            title="Courses & Certifications"
            subtitle="Continuous learning and professional development"
          />

          <AnimatedContainer delay={0.1}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-background p-4">
                <h4 className="mb-1 font-semibold text-foreground">
                  Master Spring Boot 3 & Microservices
                </h4>
                <p className="text-sm text-muted">Udemy • Spring, Docker, Kubernetes</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <h4 className="mb-1 font-semibold text-foreground">
                  Java Mastery Series
                </h4>
                <p className="text-sm text-muted">Udemy • Java Fundamentals, Generics, Concurrency</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <h4 className="mb-1 font-semibold text-foreground">
                  Clean Code & Software Security Principles
                </h4>
                <p className="text-sm text-muted">Udemy</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <h4 className="mb-1 font-semibold text-foreground">
                  Git & AWS
                </h4>
                <p className="text-sm text-muted">Completed courses in version control and cloud deployment</p>
              </div>
            </div>
          </AnimatedContainer>
        </section>

        {/* Languages Section */}
        <section className="mt-24">
          <SectionTitle
            title="Languages"
            subtitle="Communication skills"
          />

          <AnimatedContainer delay={0.1}>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-background p-4 text-center">
                <h4 className="mb-1 font-semibold text-foreground">Arabic</h4>
                <p className="text-sm text-muted">Native</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4 text-center">
                <h4 className="mb-1 font-semibold text-foreground">English</h4>
                <p className="text-sm text-muted">Professional</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4 text-center">
                <h4 className="mb-1 font-semibold text-foreground">Turkish</h4>
                <p className="text-sm text-muted">Professional</p>
              </div>
            </div>
          </AnimatedContainer>
        </section>
      </div>
    </div>
  )
}

