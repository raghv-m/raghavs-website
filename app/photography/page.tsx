import { PhotographyGallery } from '@/components/photography-gallery'

export default function PhotographyPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Photography</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I love capturing the world through my lens—here's a glimpse into my visual storytelling.
            </p>
          </div>
          
          <PhotographyGallery />
        </div>
      </div>
    </div>
  )
} 