# Awad Issa - Portfolio Website

A modern, premium portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide Icons**
- **Fonts**: Inter + Cairo

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout with fonts and global structure
    page.tsx            # Home page
    about/page.tsx      # About page
    projects/page.tsx   # Projects page
    contact/page.tsx    # Contact page
  components/
    Navbar.tsx          # Navigation component
    Footer.tsx          # Footer component
    Hero.tsx            # Hero section
    SectionTitle.tsx    # Reusable section title
    ProjectCard.tsx     # Project card component
    SkillCard.tsx       # Skill card component
    AboutSection.tsx    # About content section
    ContactForm.tsx     # Contact form
    AnimatedContainer.tsx # Framer Motion wrapper
  styles/
    globals.css         # Global styles and Tailwind directives
  lib/
    utils.ts           # Utility functions (cn helper)
```

## Design Principles

- **Dark Theme**: Background #0d0d0d, Text #f2f2f2, Muted #b3b3b3, Accent Indigo/Cyan
- **Layout**: Max width 1200px, generous spacing, rounded corners
- **Typography**: Inter for English, Cairo for Arabic
- **Animations**: Subtle fade-in effects with Framer Motion

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is configured for deployment on Vercel. Simply push to your repository and connect it to Vercel.

## Customization

- Update contact information in `src/components/Footer.tsx` and `src/app/contact/page.tsx`
- Modify project content in `src/app/projects/page.tsx`
- Update skills in `src/app/page.tsx` and `src/app/about/page.tsx`
- Customize colors in `tailwind.config.ts` and `src/styles/globals.css`


