import { CommunityContent } from '@/components/community-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community - Edmonton Cybersecurity Discord & GitHub',
  description: 'Join Edmonton\'s cybersecurity community. Discord server for professionals and learners, GitHub organization with open-source labs and notes.',
  alternates: {
    canonical: 'https://www.raghv.dev/community',
  },
  openGraph: {
    title: 'Community | Raghav Mahajan - Edmonton Cybersecurity',
    description: 'Join Edmonton\'s cybersecurity community. Discord, GitHub org, and collaborative learning.',
    url: 'https://www.raghv.dev/community',
    type: 'website',
  },
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen pt-20 bg-cyber-bg-primary">
      <CommunityContent />
    </div>
  )
}
