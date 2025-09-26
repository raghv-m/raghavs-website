import { ProjectsGrid } from '@/components/projects-grid'
import { ProjectFilters } from '@/components/project-filters'
import { Analytics } from "@vercel/analytics/next"
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