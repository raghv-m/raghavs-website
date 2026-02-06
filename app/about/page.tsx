import { AboutHero } from '@/components/about-hero'
import { AchievementsSection } from '@/components/achievements-section'
import { FunFacts } from '@/components/fun-facts'
import { Timeline } from '@/components/timeline'
import { TechStack } from '@/components/tech-stack'
import { SoftSkills } from '@/components/soft-skills'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Cybersecurity Professional Edmonton',
  description: 'Raghav Mahajan - Cybersecurity professional in Edmonton. Journey from Full Stack Development to penetration testing, security auditing, and secure development.',
  alternates: {
    canonical: 'https://www.raghv.dev/about',
  },
  openGraph: {
    title: 'About Raghav Mahajan - Cybersecurity Professional',
    description: 'From Full Stack to Cybersecurity. Penetration testing, security auditing, secure development.',
    url: 'https://www.raghv.dev/about',
    type: 'profile',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-cyber-bg-primary">
      <AboutHero />
      <AchievementsSection />
      <FunFacts />
      <Timeline />
      <TechStack />
      <SoftSkills />
    </div>
  )
}