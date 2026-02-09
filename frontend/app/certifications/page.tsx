import { CertificationsContent } from '@/components/certifications-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certifications & Learning Path',
  description: 'Cybersecurity certifications and learning journey — CompTIA Security+, CEH, OSCP, and planned credentials. Edmonton, AB.',
  alternates: {
    canonical: 'https://www.raghv.dev/certifications',
  },
  openGraph: {
    title: 'Certifications | Raghav Mahajan - Cybersecurity',
    description: 'Cybersecurity certifications and learning path.',
    url: 'https://www.raghv.dev/certifications',
    type: 'website',
  },
}

export default function CertificationsPage() {
  return (
    <div className="min-h-screen pt-20">
      <CertificationsContent />
    </div>
  )
}
