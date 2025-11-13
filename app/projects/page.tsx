import { ProjectsGrid } from '@/components/projects-grid'
import { ProjectFilters } from '@/components/project-filters'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Web Development Portfolio',
  description: '15+ live web development projects including business websites for EZ Plumbing, Mr. Rooter, Fatima\'s Kitchen. Full-stack applications built with React, Node.js, Next.js, Flutter.',
  alternates: {
    canonical: 'https://raghv.dev/projects',
  },
  openGraph: {
    title: 'Projects - Raghav Mahajan Portfolio',
    description: '15+ live web development projects including business websites for Edmonton companies. Full-stack applications built with React, Node.js, Next.js.',
    url: 'https://raghv.dev/projects',
    type: 'website',
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of projects that showcase my skills in full-stack development, mobile apps, and innovative solutions.
            </p>
          </div>
          
          <ProjectFilters />
          <ProjectsGrid />
        </div>
      </div>
    </div>
  )
} 