import { ProjectsGrid } from '@/components/projects-grid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Security & Web Applications',
  description: 'Security-focused projects and client work: business websites with security best practices, secure web apps, and development portfolio. Edmonton, AB.',
  alternates: {
    canonical: 'https://www.raghv.dev/projects',
  },
  openGraph: {
    title: 'Projects - Raghav Mahajan Cybersecurity',
    description: 'Security projects and client websites. Secure development in practice.',
    url: 'https://www.raghv.dev/projects',
    type: 'website',
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 bg-cyber-bg-primary">
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-cyber-text-primary">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-cyber-text-secondary max-w-3xl mx-auto">
              Security-focused applications and client work — secure development and business websites.
            </p>
          </div>

          <ProjectsGrid />
        </div>
      </div>
    </div>
  )
} 