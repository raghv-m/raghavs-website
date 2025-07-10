"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Camera, Eye } from 'lucide-react'

type Photo = {
  filename: string;
  title: string;
  description: string;
  tags: string[];
}

const photoGallery: Photo[] = [
  {
    filename: "468646440_17936655428944893_7509135090935189598_n.jpg",
    title: "Highway Drift",
    description: "A sleek Porsche captured in motionless power, resting under an urban skyline.",
    tags: ["#photography", "#urban", "#street", "#cars"]
  },
  {
    filename: "343992219_177325821532978_5717638195834194623_n.jpg",
    title: "Frozen Still",
    description: "A tree frozen in winter's embrace, framed by the fading colors of twilight.",
    tags: ["#photography", "#winter", "#landscape", "#serene"]
  },
  {
    filename: "344551174_251455580748429_1306517930164923290_n.jpg",
    title: "Urban Echoes",
    description: "Muted alleyways and empty paths resonate with a city's silent rhythm.",
    tags: ["#photography", "#city", "#night", "#urban"]
  },
  {
    filename: "344551437_258245773307347_8201155647119979062_n.jpg",
    title: "Golden Hours",
    description: "A glowing sunset bathing the horizon in gentle gold.",
    tags: ["#photography", "#lifestyle", "#sunset", "#goldenhour"]
  },
  {
    filename: "468468371_17936662667944893_2934671188529144460_n.jpg",
    title: "Portrait of Solitude",
    description: "Framed in natural light, a quiet figure embodies peaceful introspection.",
    tags: ["#photography", "#mood", "#minimal", "#portrait"]
  },
  {
    filename: "468534948_17936662769944893_5200617860650749917_n.jpg",
    title: "Nature's Script",
    description: "Every branch a sentence, every leaf a word — telling a forest's silent story.",
    tags: ["#photography", "#trees", "#forest", "#nature"]
  },
  {
    filename: "468589628_17936662748944893_3394555438534651684_n.jpg",
    title: "Skyline Pulse",
    description: "City lights blink in the haze of dusk, where buildings breathe with stories untold.",
    tags: ["#photography", "#city", "#architecture", "#twilight"]
  },
  {
    filename: "468631434_17936662721944893_467031268218679813_n.jpg",
    title: "Lens on Culture",
    description: "A candid capture of street energy and everyday essence.",
    tags: ["#photography", "#street", "#lifestyle", "#culture"]
  },
  {
    filename: "468636033_17936662802944893_3301526694209351755_n.jpg",
    title: "Whispers of Light",
    description: "Soft shadows dance on surfaces touched by natural light through leaves.",
    tags: ["#photography", "#light", "#nature", "#dreamy"]
  },
  {
    filename: "343764454_253295190545938_7232388711521733149_n.jpg",
    title: "Highway Drift",
    description: "A sleek Porsche captured in motionless power, resting under an urban skyline.",
    tags: ["#photography", "#urban", "#street", "#cars"]
  },
  {
    filename: "379144100_17880040289944893_5838213105233392185_n.jpg",
    title: "Frozen Still",
    description: "A tree frozen in winter's embrace, framed by the fading colors of twilight.",
    tags: ["#photography", "#winter", "#landscape", "#serene"]
  },
  {
    filename: "379180061_17880040298944893_5806981374134411631_n.jpg",
    title: "Urban Echoes",
    description: "Muted alleyways and empty paths resonate with a city's silent rhythm.",
    tags: ["#photography", "#city", "#night", "#urban"]
  },
  {
    filename: "370360854_1407304003168976_989827643006898521_n.jpg",
    title: "Golden Hours",
    description: "A glowing sunset bathing the horizon in gentle gold.",
    tags: ["#photography", "#lifestyle", "#sunset", "#goldenhour"]
  },
  {
    filename: "370717900_967044241049091_5715068842131214150_n.jpg",
    title: "Portrait of Solitude",
    description: "Framed in natural light, a quiet figure embodies peaceful introspection.",
    tags: ["#photography", "#mood", "#minimal", "#portrait"]
  },
  {
    filename: "377957795_17880138881944893_8350813131163337920_n.jpg",
    title: "Nature's Script",
    description: "Every branch a sentence, every leaf a word — telling a forest's silent story.",
    tags: ["#photography", "#trees", "#forest", "#nature"]
  },
  {
    filename: "378386506_17880138860944893_4706844385474141978_n.jpg",
    title: "Skyline Pulse",
    description: "City lights blink in the haze of dusk, where buildings breathe with stories untold.",
    tags: ["#photography", "#city", "#architecture", "#twilight"]
  },
  {
    filename: "378386585_17880138890944893_4606621962207709997_n.jpg",
    title: "Lens on Culture",
    description: "A candid capture of street energy and everyday essence.",
    tags: ["#photography", "#street", "#lifestyle", "#culture"]
  },
  {
    filename: "338230374_237668175326306_7808895535459229091_n.jpg",
    title: "Whispers of Light",
    description: "Soft shadows dance on surfaces touched by natural light through leaves.",
    tags: ["#photography", "#light", "#nature", "#dreamy"]
  },
  {
    filename: "338724253_896534131604832_3198426206516570979_n.jpg",
    title: "Highway Drift",
    description: "A sleek Porsche captured in motionless power, resting under an urban skyline.",
    tags: ["#photography", "#urban", "#street", "#cars"]
  },
  {
    filename: "340687911_913669476516342_2516605092478236339_n.jpg",
    title: "Frozen Still",
    description: "A tree frozen in winter's embrace, framed by the fading colors of twilight.",
    tags: ["#photography", "#winter", "#landscape", "#serene"]
  },
  {
    filename: "345021714_187407430865926_6128676970177016447_n.jpg",
    title: "Urban Echoes",
    description: "Muted alleyways and empty paths resonate with a city's silent rhythm.",
    tags: ["#photography", "#city", "#night", "#urban"]
  },
  {
    filename: "347459148_1199949680709713_5873771730978605721_n.jpg",
    title: "Golden Hours",
    description: "A glowing sunset bathing the horizon in gentle gold.",
    tags: ["#photography", "#lifestyle", "#sunset", "#goldenhour"]
  },
  {
    filename: "347641952_183978434232073_1353891339375020397_n.jpg",
    title: "Portrait of Solitude",
    description: "Framed in natural light, a quiet figure embodies peaceful introspection.",
    tags: ["#photography", "#mood", "#minimal", "#portrait"]
  },
  {
    filename: "369956289_643250864242872_616285542558747926_n.jpg",
    title: "Nature's Script",
    description: "Every branch a sentence, every leaf a word — telling a forest's silent story.",
    tags: ["#photography", "#trees", "#forest", "#nature"]
  },
  {
    filename: "369994537_836828411171713_1564340975655020105_n.jpg",
    title: "Skyline Pulse",
    description: "City lights blink in the haze of dusk, where buildings breathe with stories untold.",
    tags: ["#photography", "#city", "#architecture", "#twilight"]
  },
  {
    filename: "370003826_321926486944342_6341356255380684349_n.jpg",
    title: "Lens on Culture",
    description: "A candid capture of street energy and everyday essence.",
    tags: ["#photography", "#street", "#lifestyle", "#culture"]
  },
  {
    filename: "370569547_872363814484127_3710562338195829928_n.jpg",
    title: "Whispers of Light",
    description: "Soft shadows dance on surfaces touched by natural light through leaves.",
    tags: ["#photography", "#light", "#nature", "#dreamy"]
  },
  {
    filename: "370615765_804750717859193_9213318328654467694_n.jpg",
    title: "Highway Drift",
    description: "A sleek Porsche captured in motionless power, resting under an urban skyline.",
    tags: ["#photography", "#urban", "#street", "#cars"]
  },
  {
    filename: "376625663_325415719848426_157055517698654095_n.jpg",
    title: "Frozen Still",
    description: "A tree frozen in winter's embrace, framed by the fading colors of twilight.",
    tags: ["#photography", "#winter", "#landscape", "#serene"]
  },
  {
    filename: "377769853_1780716382369939_3007038905095385746_n.jpg",
    title: "Urban Echoes",
    description: "Muted alleyways and empty paths resonate with a city's silent rhythm.",
    tags: ["#photography", "#city", "#night", "#urban"]
  },
  {
    filename: "401145473_17888593919944893_3391469059670294431_n.jpg",
    title: "Golden Hours",
    description: "A glowing sunset bathing the horizon in gentle gold.",
    tags: ["#photography", "#lifestyle", "#sunset", "#goldenhour"]
  },
  {
    filename: "401271979_17888593931944893_3191792138330606467_n.jpg",
    title: "Portrait of Solitude",
    description: "Framed in natural light, a quiet figure embodies peaceful introspection.",
    tags: ["#photography", "#mood", "#minimal", "#portrait"]
  },
  {
    filename: "401291406_17888593910944893_3051471909535346596_n.jpg",
    title: "Nature's Script",
    description: "Every branch a sentence, every leaf a word — telling a forest's silent story.",
    tags: ["#photography", "#trees", "#forest", "#nature"]
  },
  {
    filename: "468551347_17936657042944893_4145983589040278334_n.jpg",
    title: "Skyline Pulse",
    description: "City lights blink in the haze of dusk, where buildings breathe with stories untold.",
    tags: ["#photography", "#city", "#architecture", "#twilight"]
  }
];

const categories = [
  { id: 'all', name: 'All', icon: '📸' },
  { id: 'nature', name: 'Nature', icon: '🌿' },
  { id: 'city', name: 'City', icon: '🏙️' },
  { id: 'cars', name: 'Cars', icon: '🚗' },
  { id: 'portrait', name: 'Portrait', icon: '👤' },
  { id: 'landscape', name: 'Landscape', icon: '🏔️' },
  { id: 'street', name: 'Street', icon: '🛣️' },
  { id: 'lifestyle', name: 'Lifestyle', icon: '🌟' },
  { id: 'architecture', name: 'Architecture', icon: '🏗️' },
  { id: 'sunset', name: 'Sunset', icon: '🌅' },
  { id: 'night', name: 'Night', icon: '🌙' },
  { id: 'winter', name: 'Winter', icon: '❄️' },
  { id: 'light', name: 'Light', icon: '💡' },
  { id: 'culture', name: 'Culture', icon: '🎭' },
  { id: 'urban', name: 'Urban', icon: '🏢' },
  { id: 'trees', name: 'Trees', icon: '🌳' },
  { id: 'forest', name: 'Forest', icon: '🌲' },
  { id: 'serene', name: 'Serene', icon: '🧘' },
  { id: 'mood', name: 'Mood', icon: '🎨' },
  { id: 'minimal', name: 'Minimal', icon: '⚪' },
  { id: 'dreamy', name: 'Dreamy', icon: '💭' },
  { id: 'goldenhour', name: 'Golden Hour', icon: '✨' },
  { id: 'twilight', name: 'Twilight', icon: '🌆' }
];

export function PhotographyGallery() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  // Filter photos based on selected tag
  const filteredPhotos = selectedFilter === 'all' 
    ? photoGallery 
    : photoGallery.filter(photo => 
        photo.tags.some(tag => tag.toLowerCase().includes(selectedFilter.toLowerCase()))
      )

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    const nextIndex = (currentPhotoIndex + 1) % filteredPhotos.length
    setSelectedPhoto(filteredPhotos[nextIndex])
    setCurrentPhotoIndex(nextIndex)
  }

  const prevPhoto = () => {
    const prevIndex = currentPhotoIndex === 0 ? filteredPhotos.length - 1 : currentPhotoIndex - 1
    setSelectedPhoto(filteredPhotos[prevIndex])
    setCurrentPhotoIndex(prevIndex)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return
      
      switch (e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowRight':
          nextPhoto()
          break
        case 'ArrowLeft':
          prevPhoto()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedPhoto, currentPhotoIndex, filteredPhotos])

  return (
    <div className="space-y-12">
      {/* Category Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedFilter(category.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm ${
              selectedFilter === category.id
                ? 'bg-primary-600/90 text-white shadow-lg shadow-primary-600/25'
                : 'bg-white/10 dark:bg-dark-700/50 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-dark-600/50 border border-white/20 dark:border-dark-600'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Debug Info */}
      <div className="text-center text-sm text-gray-500">
        Showing {filteredPhotos.length} photos
      </div>

      {/* Simple Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPhotos.map((photo, index) => (
          <motion.div
            key={`${photo.filename}-${index}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => openLightbox(photo, index)}
          >
            {/* Card */}
            <div className="relative overflow-hidden rounded-2xl bg-white/8 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={`/assets/${photo.filename}`}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    console.error('Image failed to load:', photo.filename);
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/800x600/6366f1/ffffff?text=${encodeURIComponent(photo.title)}`;
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully:', photo.filename);
                  }}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="w-4 h-4 text-white/80" />
                      <Eye className="w-4 h-4 text-white/80" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption Section */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {photo.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  {photo.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {photo.tags.filter(tag => tag !== "#photography").slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-300 cursor-pointer"
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
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                      +{photo.tags.filter(tag => tag !== "#photography").length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
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
              className="relative w-[95vw] max-w-3xl max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <img
                src={`/assets/${selectedPhoto.filename}`}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[60vh] object-contain rounded-2xl shadow-2xl mx-auto"
                onError={(e) => {
                  console.error('Lightbox image failed to load:', selectedPhoto.filename);
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/800x600/6366f1/ffffff?text=${encodeURIComponent(selectedPhoto.title)}`;
                }}
              />

              {/* Info Box */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white p-6 rounded-2xl border border-white/20 w-[90vw] max-w-xl min-w-[300px] text-center">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                  <h3 className="font-semibold text-xl mb-2 md:mb-0">{selectedPhoto.title}</h3>
                  <span className="text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-full">
                    {currentPhotoIndex + 1} of {filteredPhotos.length}
                  </span>
                </div>
                <p className="text-gray-200 leading-relaxed mb-3">{selectedPhoto.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {selectedPhoto.tags.filter(tag => tag !== "#photography").map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors duration-300 cursor-pointer"
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

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevPhoto()
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextPhoto()
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}