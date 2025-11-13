import { AboutHero } from '@/components/about-hero'
import { AchievementsSection } from '@/components/achievements-section'
import { FunFacts } from '@/components/fun-facts'
import { Timeline } from '@/components/timeline'
import { TechStack } from '@/components/tech-stack'
import { SoftSkills } from '@/components/soft-skills'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Full Stack Developer & Software Engineer',
  description: 'Learn about Raghav Mahajan - Full Stack Developer in Edmonton with expertise in React, Node.js, Flutter. Delivered 15+ production websites for local businesses. Available for hire.',
  alternates: {
    canonical: 'https://raghv.dev/about',
  },
  openGraph: {
    title: 'About Raghav Mahajan - Full Stack Developer',
    description: 'Full Stack Developer in Edmonton with expertise in React, Node.js, Flutter. Delivered 15+ production websites for local businesses.',
    url: 'https://raghv.dev/about',
    type: 'profile',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <AboutHero />
      <AchievementsSection />
      <FunFacts />
      <Timeline />
      <TechStack />
      <SoftSkills />
    </div>
  )
}