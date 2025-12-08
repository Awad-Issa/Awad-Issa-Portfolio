import Link from "next/link"
import { Linkedin, Mail, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-container px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            © {currentYear} Awad Issa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="mailto:awadissa403@gmail.com"
              className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
              aria-label="Email"
            >
              <Mail size={18} />
              <span className="text-sm">Email</span>
            </Link>
            <Link
              href="https://linkedin.com/in/awadissa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/Awad-Issa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={18} />
              <span className="text-sm">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

