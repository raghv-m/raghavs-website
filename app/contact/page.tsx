import { ContactForm } from '@/components/contact-form'
import { ContactInfo } from '@/components/contact-info'
import { Analytics } from "@vercel/analytics/next"
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