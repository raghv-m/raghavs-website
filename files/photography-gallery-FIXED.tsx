// COPY THIS ENTIRE FILE TO: /frontend/components/photography-gallery.tsx
// This version uses CONSISTENT cyber theme colors throughout

"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Camera, Eye } from 'lucide-react'

type Photo = {
  filename: string;
  title: string;
  description: string;
  tags: string[];
}

// KEEP YOUR EXISTING photoGallery ARRAY HERE (lines 14-234 from original file)
// I'm omitting it for brevity but DO NOT DELETE IT

const photoGallery: Photo[] = [
  // ... your existing photo data
]

export function PhotographyGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [selectedFilter, setSelectedFilter] = useState('all')

  const categories = [
    { name: 'all', count: photoGallery.length },
    { name: 'urban', count: photoGallery.filter(p => p.tags.includes('#urban')).length },
    { name: 'nature', count: photoGallery.filter(p => p.tags.includes('#nature')).length },
    { name: 'portrait', count: photoGallery.filter(p => p.tags.includes('#portrait')).length },
    { name: 'street', count: photoGallery.filter(p => p.tags.includes('#street')).length },
    { name: 'landscape', count: photoGallery.filter(p => p.tags.includes('#landscape')).length },
  ]

  const filteredPhotos = selectedFilter === 'all' 
    ? photoGallery 
    : photoGallery.filter(photo => 
        photo.tags.some(tag => tag.toLowerCase().includes(selectedFilter.toLowerCase()))
      )

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo)
    setCurrentPhotoIndex(index)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    const nextIndex = (currentPhotoIndex + 1) % filteredPhotos.length
    setCurrentPhotoIndex(nextIndex)
    setSelectedPhoto(filteredPhotos[nextIndex])
  }

  const prevPhoto = () => {
    const prevIndex = currentPhotoIndex === 0 ? filteredPhotos.length - 1 : currentPhotoIndex - 1
    setCurrentPhotoIndex(prevIndex)
    setSelectedPhoto(filteredPhotos[prevIndex])
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextPhoto()
      if (e.key === 'ArrowLeft') prevPhoto()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedPhoto, currentPhotoIndex])

  return (
    <div className="section-padding bg-cyber-bg-primary">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-cyber-text-primary">
            {'< PHOTOGRAPHY />'} 
          </h1>
          <p className="text-xl text-cyber-text-secondary max-w-2xl mx-auto">
            Capturing moments through the lens — street photography, urban landscapes, and beyond.
          </p>
        </motion.div>

        {/* Filter Buttons - CYBER THEME ✅ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(category.name)}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                selectedFilter === category.name
                  ? 'bg-cyber-accent-cyan/20 border border-cyber-accent-cyan/50 text-cyber-accent-cyan shadow-glow-cyan'
                  : 'glass-card text-cyber-text-secondary hover:text-cyber-accent-cyan hover:border-cyber-accent-cyan/30'
              }`}
            >
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Photo Grid - CYBER THEME ✅ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={`${photo.filename}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(photo, index)}
            >
              {/* Card - CYBER THEME ✅ */}
              <div className="relative overflow-hidden rounded-2xl glass-card hover:border-cyber-accent-cyan/30 shadow-xl hover:shadow-glow-cyan transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
                
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={`/assets/${photo.filename}`}
                    alt={photo.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/800x600/0a0a0f/00d9ff?text=${encodeURIComponent(photo.title)}`;
                    }}
                  />
                  
                  {/* Hover Overlay - CYBER THEME ✅ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg-primary/90 via-cyber-bg-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Camera className="w-4 h-4 text-cyber-accent-cyan" />
                        <Eye className="w-4 h-4 text-cyber-accent-cyan" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption Section - CYBER THEME ✅ */}
                <div className="p-6 bg-cyber-bg-secondary/50">
                  <h3 className="font-heading text-lg mb-2 text-cyber-text-primary group-hover:text-cyber-accent-cyan transition-colors duration-300">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-cyber-text-secondary leading-relaxed mb-3">
                    {photo.description}
                  </p>
                  
                  {/* Tags - CYBER THEME ✅ */}
                  <div className="flex flex-wrap gap-2">
                    {photo.tags.filter(tag => tag !== "#photography").slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-cyber-accent-cyan/10 border border-cyber-accent-cyan/30 text-cyber-accent-cyan rounded-full hover:bg-cyber-accent-cyan/20 transition-colors duration-300 cursor-pointer font-mono"
                        onClick={(e) => {
                          e.stopPropagation()
                          const tagName = tag.replace('#', '')
                          setSelectedFilter(tagName)
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {photo.tags.filter(tag => tag !== "#photography").length > 3 && (
                      <span className="px-2 py-1 text-xs bg-cyber-bg-primary border border-white/10 text-cyber-text-tertiary rounded-full font-mono">
                        +{photo.tags.filter(tag => tag !== "#photography").length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox - CYBER THEME ✅ */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-[95vw] max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image */}
                <img
                  src={`/assets/${selectedPhoto.filename}`}
                  alt={selectedPhoto.title}
                  className="max-w-full max-h-[65vh] object-contain rounded-2xl shadow-2xl mx-auto border border-cyber-accent-cyan/30"
                />

                {/* Info Box - CYBER THEME ✅ */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glass-card text-cyber-text-primary p-6 rounded-2xl border border-cyber-accent-cyan/30 w-[90vw] max-w-xl min-w-[300px] text-center backdrop-blur-xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                    <h3 className="font-heading text-xl mb-2 md:mb-0 text-cyber-text-primary">{selectedPhoto.title}</h3>
                    <span className="text-sm text-cyber-accent-cyan bg-cyber-accent-cyan/10 px-3 py-1 rounded-full border border-cyber-accent-cyan/30 font-mono">
                      {currentPhotoIndex + 1} / {filteredPhotos.length}
                    </span>
                  </div>
                  <p className="text-cyber-text-secondary leading-relaxed mb-3">{selectedPhoto.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {selectedPhoto.tags.filter(tag => tag !== "#photography").map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-cyber-accent-cyan/20 text-cyber-accent-cyan border border-cyber-accent-cyan/30 rounded-full hover:bg-cyber-accent-cyan/30 transition-colors duration-300 cursor-pointer font-mono"
                        onClick={(e) => {
                          e.stopPropagation()
                          const tagName = tag.replace('#', '')
                          setSelectedFilter(tagName)
                          closeLightbox()
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons - CYBER THEME ✅ */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevPhoto()
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card text-cyber-accent-cyan p-3 rounded-full hover:bg-cyber-accent-cyan/20 hover:shadow-glow-cyan transition-all duration-300 hover:scale-110 border border-cyber-accent-cyan/30"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextPhoto()
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card text-cyber-accent-cyan p-3 rounded-full hover:bg-cyber-accent-cyan/20 hover:shadow-glow-cyan transition-all duration-300 hover:scale-110 border border-cyber-accent-cyan/30"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 glass-card text-cyber-accent-cyan p-3 rounded-full hover:bg-cyber-accent-cyan/20 hover:shadow-glow-cyan transition-all duration-300 hover:scale-110 border border-cyber-accent-cyan/30"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
