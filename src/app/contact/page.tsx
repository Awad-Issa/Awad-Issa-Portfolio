import SectionTitle from "@/components/SectionTitle"
import AnimatedContainer from "@/components/AnimatedContainer"
import { Mail, Linkedin, Send, Phone, MapPin, Github } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-container">
        <SectionTitle title="Let's Work Together" />

        <AnimatedContainer>
          <div className="mx-auto max-w-2xl space-y-8 rounded-2xl border border-border bg-background p-8">
            <p className="text-center text-lg text-muted">
              I'm open to backend and full-stack roles, internships, freelance
              work, and MVP building.
            </p>

            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <div className="rounded-xl bg-accent/10 p-3">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Email</h4>
                  <Link
                    href="mailto:awadissa403@gmail.com"
                    className="text-muted transition-colors hover:text-accent"
                  >
                    awadissa403@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="rounded-xl bg-accent/10 p-3">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Phone</h4>
                  <Link
                    href="tel:+972599021851"
                    className="text-muted transition-colors hover:text-accent"
                  >
                    +972599021851
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="rounded-xl bg-accent/10 p-3">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Location</h4>
                  <p className="text-muted">Ramallah, Palestine</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="rounded-xl bg-accent/10 p-3">
                  <Linkedin className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">
                    LinkedIn
                  </h4>
                  <Link
                    href="https://linkedin.com/in/awadissa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-accent"
                  >
                    linkedin.com/in/awadissa
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="rounded-xl bg-accent/10 p-3">
                  <Github className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">
                    GitHub
                  </h4>
                  <Link
                    href="https://github.com/Awad-Issa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-accent"
                  >
                    github.com/Awad-Issa
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Link
                href="mailto:awadissa403@gmail.com"
                className="group flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                Send Email
                <Send
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  )
}

