import { HeroSection } from '@/components/hero-section'
import { AboutPreview } from '@/components/about-preview'
import { ProjectsPreview } from '@/components/projects-preview'
import { SkillsSection } from '@/components/skills-section'
import { ContactCTA } from '@/components/contact-cta'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutPreview />
      <ProjectsPreview />
      <SkillsSection />
      <ContactCTA />
    </div>
  )
} 