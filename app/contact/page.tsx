import { ContactForm } from '@/components/contact-form'
import { ContactInfo } from '@/components/contact-info'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Cybersecurity Professional Edmonton',
  description: 'Contact Raghav Mahajan for penetration testing, security audits, and secure development. Edmonton, AB. PGP key available for secure communication.',
  alternates: {
    canonical: 'https://www.raghv.dev/contact',
  },
  openGraph: {
    title: 'Contact | Raghav Mahajan - Cybersecurity',
    description: 'Get in touch for security engagements. PGP key available.',
    url: 'https://www.raghv.dev/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-cyber-text-primary">
              {'< CONTACT />'}
            </h1>
            <p className="text-xl text-cyber-text-secondary max-w-3xl mx-auto">
              Secure channel — discuss engagements, audits, or just say hello.
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
