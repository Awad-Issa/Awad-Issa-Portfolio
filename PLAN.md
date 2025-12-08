# Portfolio Implementation Plan

## Pages to Create
1. **Home** (`src/app/page.tsx`) - Hero, About preview, Skills preview, Projects preview, Final CTA
2. **About** (`src/app/about/page.tsx`) - Detailed story about Awad Issa
3. **Projects** (`src/app/projects/page.tsx`) - Case studies for Farmy, SmokeApp, CargoRate
4. **Contact** (`src/app/contact/page.tsx`) - Contact info and form

## Components to Create
1. **Navbar.tsx** - Sticky navigation with links
2. **Footer.tsx** - Copyright and social links
3. **Hero.tsx** - Hero section with modern typography and CTA buttons
4. **SectionTitle.tsx** - Reusable section title component
5. **ProjectCard.tsx** - Card component for project previews
6. **SkillCard.tsx** - Card component for skills display
7. **AboutSection.tsx** - About content section
8. **ContactForm.tsx** - Contact form component
9. **AnimatedContainer.tsx** - Framer Motion wrapper for animations

## Libraries to Use
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- ShadCN UI (for base components)
- Framer Motion (for animations)
- Lucide Icons (for icons)
- next/font (for Inter + Cairo fonts)

## Design Application
- **Dark Theme**: Background #0d0d0d, Text #f2f2f2, Muted #b3b3b3, Accent Indigo/Cyan
- **Layout**: Max width 1200px, generous spacing, rounded corners (xl/2xl)
- **Typography**: Inter for English, Cairo for Arabic, large headings
- **Animations**: Subtle fade-in + upward motion on scroll, hover effects
- **Responsive**: Mobile-first approach with breakpoints

## File Structure
```
src/
  app/
    layout.tsx
    page.tsx
    about/page.tsx
    projects/page.tsx
    contact/page.tsx
  components/
    Navbar.tsx
    Footer.tsx
    Hero.tsx
    SectionTitle.tsx
    ProjectCard.tsx
    SkillCard.tsx
    AboutSection.tsx
    ContactForm.tsx
    AnimatedContainer.tsx
  styles/
    globals.css
```

