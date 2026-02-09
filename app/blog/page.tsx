import { BlogContent } from '@/components/blog-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Cybersecurity Learning Journey & Writeups',
  description: 'TryHackMe writeups, security tutorials, and documentation from my cybersecurity learning journey. Learning in public.',
  alternates: {
    canonical: 'https://www.raghv.dev/blog',
  },
  openGraph: {
    title: 'Blog | Raghav Mahajan - Cybersecurity Learning',
    description: 'TryHackMe writeups, security tutorials, and learning documentation.',
    url: 'https://www.raghv.dev/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20 bg-cyber-bg-primary">
      <BlogContent />
    </div>
  )
}
