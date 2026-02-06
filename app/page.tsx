import { HeroSection } from '@/components/hero-section'
import { AboutPreview } from '@/components/about-preview'
import { ServicesSection } from '@/components/services-section'
import { ProjectsPreview } from '@/components/projects-preview'
import { TestimonialsSection } from '@/components/testimonials-section'
import { SkillsSection } from '@/components/skills-section'
import { HomeLabSection } from '@/components/home-lab-section'
import { CommunityCTA } from '@/components/community-cta'
import { ContactCTA } from '@/components/contact-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Cybersecurity Professional Edmonton',
  description: 'Raghav Mahajan - Cybersecurity professional in Edmonton, AB. Penetration testing, security auditing, secure development. Securing the digital frontier.',
  alternates: {
    canonical: 'https://www.raghv.dev',
  },
  openGraph: {
    title: 'Raghav Mahajan - Cybersecurity Professional | Edmonton, AB',
    description: 'Securing the digital frontier. Penetration testing, security audits, secure development.',
    url: 'https://www.raghv.dev',
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
      <HomeLabSection />
      <CommunityCTA />
      <ContactCTA />
    </div>
  )
}