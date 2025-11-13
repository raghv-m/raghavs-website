import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://raghv.dev'),
  title: {
    default: 'Raghav Mahajan - Full Stack Developer | Edmonton, AB',
    template: '%s | Raghav Mahajan'
  },
  description: 'Full Stack Developer in Edmonton, AB specializing in React, Node.js, Flutter & web development. Building scalable applications for businesses. 15+ live projects delivered.',
  keywords: [
    'Full Stack Developer Edmonton',
    'React Developer Edmonton',
    'Web Developer Alberta',
    'Freelance Web Development Edmonton',
    'Node.js Developer',
    'Flutter Developer',
    'JavaScript Developer Edmonton',
    'TypeScript Developer',
    'Next.js Developer',
    'MongoDB Developer',
    'Full Stack Engineer',
    'Edmonton Web Developer',
    'Custom Website Development',
    'Business Website Edmonton'
  ],
  authors: [{ name: 'Raghav Mahajan', url: 'https://raghv.dev' }],
  creator: 'Raghav Mahajan',
  publisher: 'Raghav Mahajan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://raghv.dev',
    title: 'Raghav Mahajan - Full Stack Developer | Edmonton, AB',
    description: 'Full Stack Developer in Edmonton, AB specializing in React, Node.js, Flutter & web development. Building scalable applications for businesses. 15+ live projects delivered.',
    siteName: 'Raghav Mahajan Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Raghav Mahajan - Full Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raghav Mahajan - Full Stack Developer | Edmonton, AB',
    description: 'Full Stack Developer in Edmonton, AB specializing in React, Node.js, Flutter & web development. Building scalable applications for businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}