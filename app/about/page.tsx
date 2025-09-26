import { AboutHero } from '@/components/about-hero'
import { Timeline } from '@/components/timeline'
import { TechStack } from '@/components/tech-stack'
import { SoftSkills } from '@/components/soft-skills'
import { Analytics } from "@vercel/analytics/next"
export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <AboutHero />
      <Timeline />
      <TechStack />
      <SoftSkills />
    </div>
  )
} 