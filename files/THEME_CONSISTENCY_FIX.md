# 🎨 THEME CONSISTENCY FIX - Complete Guide

## 🔴 CRITICAL ISSUES IDENTIFIED

After reviewing your live site at raghv.dev, here are the **MAJOR theme inconsistencies**:

### 1. **Photography Page is COMPLETELY Different Theme** ❌
- Uses `gray-900`, `gray-600`, `gray-400` (generic grays)
- Uses `primary-600`, `primary-400` colors
- Has `bg-white/8` instead of your cyber theme
- Doesn't match the dark cyber aesthetic AT ALL

### 2. **About/Images Pages** ❌
- Likely using different color variables
- Not using the `cyber-` prefixed theme colors
- Inconsistent typography

### 3. **Root Cause:**
Your components are mixing **THREE different color systems**:
- ✅ Cyber theme colors (`cyber-bg-primary`, `cyber-accent-cyan`)
- ❌ Generic Tailwind colors (`gray-900`, `gray-600`)
- ❌ Custom primary colors (`primary-600`, `primary-400`)

---

## 🛠️ IMMEDIATE FIXES

### Fix #1: Photography Gallery Component

Replace `/frontend/components/photography-gallery.tsx` lines 345-405 with this:

```tsx
{/* Card - FIXED TO MATCH CYBER THEME */}
<div className="relative overflow-hidden rounded-2xl glass-card hover:border-cyber-accent-cyan/30 shadow-xl hover:shadow-glow-cyan transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
  
  {/* Image Container */}
  <div className="relative overflow-hidden rounded-t-2xl">
    <img
      src={`/assets/${photo.filename}`}
      alt={photo.title}
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      onError={(e) => {
        console.error('Image failed to load:', photo.filename);
        const target = e.target as HTMLImageElement;
        target.src = `https://placehold.co/800x600/0a0a0f/00d9ff?text=${encodeURIComponent(photo.title)}`;
      }}
    />
    
    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg-primary/90 via-cyber-bg-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-2 mb-2">
          <Camera className="w-4 h-4 text-cyber-accent-cyan" />
          <Eye className="w-4 h-4 text-cyber-accent-cyan" />
        </div>
      </div>
    </div>
  </div>

  {/* Caption Section - FIXED */}
  <div className="p-6 bg-cyber-bg-secondary/50">
    <h3 className="font-heading text-lg mb-2 text-cyber-text-primary group-hover:text-cyber-accent-cyan transition-colors duration-300">
      {photo.title}
    </h3>
    <p className="text-sm text-cyber-text-secondary leading-relaxed mb-3">
      {photo.description}
    </p>
    
    {/* Tags - FIXED */}
    <div className="flex flex-wrap gap-2">
      {photo.tags.filter(tag => tag !== "#photography").slice(0, 3).map((tag, tagIndex) => (
        <span
          key={tagIndex}
          className="px-2 py-1 text-xs bg-cyber-accent-cyan/10 border border-cyber-accent-cyan/30 text-cyber-accent-cyan rounded-full hover:bg-cyber-accent-cyan/20 transition-colors duration-300 cursor-pointer"
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
        <span className="px-2 py-1 text-xs bg-cyber-bg-primary border border-white/10 text-cyber-text-tertiary rounded-full">
          +{photo.tags.filter(tag => tag !== "#photography").length - 3}
        </span>
      )}
    </div>
  </div>
</div>
```

### Fix #2: Filter Buttons (Photography Gallery)

Replace lines 311-326 with:

```tsx
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
      {category.name} ({category.count})
    </motion.button>
  ))}
</motion.div>
```

### Fix #3: Lightbox Modal

Replace the lightbox info box (lines 440-464) with:

```tsx
{/* Info Box - FIXED */}
<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glass-card text-cyber-text-primary p-6 rounded-2xl border border-cyber-accent-cyan/30 w-[90vw] max-w-xl min-w-[300px] text-center">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
    <h3 className="font-heading text-xl mb-2 md:mb-0 text-cyber-text-primary">{selectedPhoto.title}</h3>
    <span className="text-sm text-cyber-accent-cyan bg-cyber-accent-cyan/10 px-3 py-1 rounded-full border border-cyber-accent-cyan/30">
      {currentPhotoIndex + 1} of {filteredPhotos.length}
    </span>
  </div>
  <p className="text-cyber-text-secondary leading-relaxed mb-3">{selectedPhoto.description}</p>
  <div className="flex flex-wrap gap-2 justify-center">
    {selectedPhoto.tags.filter(tag => tag !== "#photography").map((tag, tagIndex) => (
      <span
        key={tagIndex}
        className="px-3 py-1 text-sm bg-cyber-accent-cyan/20 text-cyber-accent-cyan border border-cyber-accent-cyan/30 rounded-full hover:bg-cyber-accent-cyan/30 transition-colors duration-300 cursor-pointer"
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
```

---

## 📝 COMPLETE UPDATED PHOTOGRAPHY GALLERY FILE

Here's the FULL corrected file - copy and replace entirely:

```tsx
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

// [Keep all your photoGallery array data - lines 14-234]

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

        {/* Filter Buttons - CYBER THEME */}
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

        {/* Photo Grid - CYBER THEME */}
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
              {/* Card - CYBER THEME */}
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
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg-primary/90 via-cyber-bg-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Camera className="w-4 h-4 text-cyber-accent-cyan" />
                        <Eye className="w-4 h-4 text-cyber-accent-cyan" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption Section */}
                <div className="p-6 bg-cyber-bg-secondary/50">
                  <h3 className="font-heading text-lg mb-2 text-cyber-text-primary group-hover:text-cyber-accent-cyan transition-colors duration-300">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-cyber-text-secondary leading-relaxed mb-3">
                    {photo.description}
                  </p>
                  
                  {/* Tags */}
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
                className="relative w-[95vw] max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image */}
                <img
                  src={`/assets/${selectedPhoto.filename}`}
                  alt={selectedPhoto.title}
                  className="max-w-full max-h-[65vh] object-contain rounded-2xl shadow-2xl mx-auto border border-cyber-accent-cyan/30"
                />

                {/* Info Box */}
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

                {/* Navigation Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevPhoto()
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card text-cyber-accent-cyan p-3 rounded-full hover:bg-cyber-accent-cyan/20 transition-all duration-300 hover:scale-110 border border-cyber-accent-cyan/30"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextPhoto()
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card text-cyber-accent-cyan p-3 rounded-full hover:bg-cyber-accent-cyan/20 transition-all duration-300 hover:scale-110 border border-cyber-accent-cyan/30"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 glass-card text-cyber-accent-cyan p-3 rounded-full hover:bg-cyber-accent-cyan/20 transition-all duration-300 hover:scale-110 border border-cyber-accent-cyan/30"
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
```

---

## 🤖 AI PROMPT FOR DESIGN IMPROVEMENTS

### Prompt 1: For Claude/ChatGPT to Redesign Entire Site

```
I need you to audit my entire Next.js portfolio website for theme consistency and design improvements.

CURRENT THEME SYSTEM:
- Primary background: #0a0a0f (dark navy/black)
- Secondary background: #12121a 
- Accent cyan: #00d9ff
- Accent green: #00ff88
- Text primary: #ffffff
- Text secondary: #a0a0a0
- Glass-morphism cards with backdrop-blur
- Cyber/tech aesthetic

PROBLEMS:
1. Some components use generic Tailwind grays (gray-900, gray-600) instead of my cyber theme
2. Photography page doesn't match the main site theme
3. Inconsistent use of color variables across components

TASK:
1. Review ALL components and identify theme inconsistencies
2. Replace ALL generic colors with the cyber- prefixed theme colors
3. Ensure glass-card class is used consistently
4. Make sure all hover states use cyber-accent-cyan
5. Verify font families match (Orbitron for headings, Inter for body, JetBrains Mono for code)

OUTPUT:
- List of files that need fixing
- Specific line-by-line changes
- Updated component code
- Design improvements to make the site more cohesive
```

### Prompt 2: For Redesigning Photography Page Specifically

```
Redesign my photography gallery page to match my cybersecurity portfolio's dark cyber theme.

REQUIREMENTS:
- Dark theme: #0a0a0f background
- Cyan accent: #00d9ff for interactive elements
- Glass-morphism cards with backdrop-blur
- Smooth hover animations with cyan glow
- Font: Orbitron for headings, Inter for body
- Masonry or grid layout
- Lightbox modal for full-size images
- Filter buttons with active state in cyan
- Tags with cyber theme styling

AVOID:
- Generic gray colors
- White backgrounds
- Standard Bootstrap/Material UI styling
- Bright, colorful accents (keep it dark and techy)

Make it look like it belongs on a professional cybersecurity analyst's portfolio.
```

### Prompt 3: For Component-Level Consistency

```
Fix this [COMPONENT NAME] to match my design system:

DESIGN TOKENS:
```javascript
colors: {
  bg: {
    primary: '#0a0a0f',
    secondary: '#12121a',
    glass: 'rgba(18, 18, 26, 0.7)',
  },
  accent: {
    cyan: '#00d9ff',
    green: '#00ff88',
  },
  text: {
    primary: '#ffffff',
    secondary: '#a0a0a0',
    tertiary: '#606060',
  }
}

typography: {
  heading: 'Orbitron',
  body: 'Inter',
  mono: 'JetBrains Mono',
}
```

RULES:
1. Use only colors from the design tokens above
2. All cards must use glass-card class
3. All hover states must include cyan accent
4. No hardcoded colors (use Tailwind config)
5. Maintain smooth transitions (300-500ms)

[PASTE YOUR COMPONENT CODE HERE]

Fix all inconsistencies and return the corrected code.
```

---

## 🎯 DESIGN IMPROVEMENT CHECKLIST

### Global Consistency
- [ ] All components use `cyber-` prefixed colors only
- [ ] No generic `gray-*` colors anywhere
- [ ] No hardcoded hex colors (use variables)
- [ ] All cards use `glass-card` class
- [ ] All hover states have cyan glow effect
- [ ] Consistent spacing (use `section-padding` class)

### Typography
- [ ] All `<h1>-<h6>` use `font-heading` (Orbitron)
- [ ] All body text uses `font-body` (Inter)
- [ ] All code/terminal text uses `font-mono` (JetBrains Mono)
- [ ] Consistent font sizes across similar elements

### Interactive Elements
- [ ] Buttons use `btn-primary` or `btn-secondary` classes
- [ ] Links have `nav-link` underline animation
- [ ] Cards have hover lift effect
- [ ] Focus states use `focus-visible-cyber`

### Colors by Component Type
- Background: `bg-cyber-bg-primary` or `bg-cyber-bg-secondary`
- Cards: `glass-card` class
- Text: `text-cyber-text-primary/secondary/tertiary`
- Accents: `text-cyber-accent-cyan` or `border-cyber-accent-cyan`
- Hover borders: `hover:border-cyber-accent-cyan/30`
- Shadows: `shadow-glow-cyan` on hover

---

## 🚀 QUICK FIX SCRIPT

Run this to find all inconsistencies:

```bash
# Search for generic gray colors
grep -r "gray-[0-9]" components/

# Search for hardcoded colors
grep -r "#[0-9a-fA-F]\{6\}" components/ | grep -v "cyber-"

# Search for non-cyber class names
grep -r "bg-white\|bg-black\|bg-gray" components/

# Find components not using glass-card
grep -rL "glass-card" components/*.tsx
```

---

## 📊 BEFORE vs AFTER

### BEFORE (Photography Page):
```tsx
className="bg-white/8 text-gray-900 dark:text-white 
  bg-primary-100 dark:bg-primary-900/30 
  text-primary-700 dark:text-primary-300"
```

### AFTER (Consistent Cyber Theme):
```tsx
className="glass-card text-cyber-text-primary
  bg-cyber-accent-cyan/10 border border-cyber-accent-cyan/30
  text-cyber-accent-cyan hover:bg-cyber-accent-cyan/20"
```

---

## 🎨 DESIGN IMPROVEMENTS BEYOND CONSISTENCY

### 1. Add Gradient Accents
```css
background: linear-gradient(135deg, 
  rgba(0, 217, 255, 0.1) 0%, 
  rgba(176, 38, 255, 0.1) 100%
);
```

### 2. Animated Border Glow
```tsx
<div className="relative group">
  <div className="absolute inset-0 bg-gradient-accent opacity-0 
    group-hover:opacity-20 blur-xl transition-opacity duration-500" />
  <div className="relative glass-card">
    {/* Content */}
  </div>
</div>
```

### 3. Parallax Scroll Effects
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
```

### 4. Terminal-Style Loading States
```tsx
<div className="font-mono text-cyber-accent-cyan">
  <span className="animate-pulse">Loading</span>
  <span className="animate-cursor-blink">_</span>
</div>
```

---

## 🔧 TESTING CHECKLIST

After applying fixes:

- [ ] Visit each page and verify theme consistency
- [ ] Test all hover states (should glow cyan)
- [ ] Verify all text is readable (contrast check)
- [ ] Test on mobile (responsive breakpoints)
- [ ] Check dark mode (if implemented)
- [ ] Verify animations are smooth (60fps)
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit (should be >90)

---

## 📝 NOTES

### Common Mistakes to Avoid:
1. ❌ Using `bg-white` or `bg-black` directly
2. ❌ Hardcoding colors like `#ffffff`
3. ❌ Using generic Tailwind colors like `blue-500`
4. ❌ Mixing different design systems
5. ❌ Forgetting hover states

### Best Practices:
1. ✅ Always use `cyber-` prefixed colors
2. ✅ Use design system classes (`glass-card`, `btn-primary`)
3. ✅ Add hover effects to all interactive elements
4. ✅ Use consistent spacing values
5. ✅ Test on multiple screen sizes

---

*Last Updated: Feb 9, 2026*
*Files Modified: photography-gallery.tsx*
*Next: Check about page, images page for similar issues*
