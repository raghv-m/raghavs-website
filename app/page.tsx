import { HeroSection } from '@/components/hero-section'
import { AboutPreview } from '@/components/about-preview'
import { ServicesSection } from '@/components/services-section'
import { ProjectsPreview } from '@/components/projects-preview'
import { TestimonialsSection } from '@/components/testimonials-section'
import { SkillsSection } from '@/components/skills-section'
import { ContactCTA } from '@/components/contact-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Full Stack Developer Edmonton',
  description: 'Raghav Mahajan - Full Stack Developer in Edmonton, AB. Delivered 15+ production websites for local businesses. Specializing in React, Node.js, Next.js, Flutter. Available for freelance projects.',
  alternates: {
    canonical: 'https://raghv.dev',
  },
  openGraph: {
    title: 'Raghav Mahajan - Full Stack Developer | Edmonton, AB',
    description: 'Full Stack Developer in Edmonton, AB. Delivered 15+ production websites for local businesses including EZ Plumbing, Mr. Rooter, and Fatima\'s Kitchen.',
    url: 'https://raghv.dev',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <ProjectsPreview />
      <TestimonialsSection />
      <SkillsSection />
      <ContactCTA />
    </div>
  )
}