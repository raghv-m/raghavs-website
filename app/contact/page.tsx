import { ContactForm } from '@/components/contact-form'
import { ContactInfo } from '@/components/contact-info'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Hire Full Stack Developer Edmonton',
  description: 'Contact Raghav Mahajan for web development projects in Edmonton, AB. Available for freelance work, full-time opportunities. Specializing in React, Node.js, Next.js, Flutter development.',
  alternates: {
    canonical: 'https://raghv.dev/contact',
  },
  openGraph: {
    title: 'Contact Raghav Mahajan - Full Stack Developer',
    description: 'Get in touch for web development projects in Edmonton. Available for freelance work and full-time opportunities.',
    url: 'https://raghv.dev/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Let's discuss your next project or just say hello. I'm always open to new opportunities and collaborations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
} 