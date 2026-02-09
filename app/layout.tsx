import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'
import { LoadingScreen } from '@/components/loading-screen'
import { MatrixRain } from '@/components/matrix-rain'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.raghv.dev'),
  title: {
    default: 'Raghav Mahajan - Cybersecurity Professional | Edmonton, AB',
    template: '%s | Raghav Mahajan'
  },
  description: 'Cybersecurity professional specializing in penetration testing, security auditing, and secure application development. Based in Edmonton, AB. Securing the digital frontier.',
  keywords: [
    'cybersecurity edmonton',
    'penetration testing',
    'security auditing',
    'ethical hacking',
    'SOC analyst',
    'TryHackMe',
    'edmonton',
    'alberta',
    'canada',
    'web application security',
    'vulnerability assessment',
    'secure development',
    'threat analysis',
    'incident response',
    'security consultant',
    'CompTIA Security+',
    'cybersecurity professional',
  ],
  authors: [{ name: 'Raghav Mahajan', url: 'https://www.raghv.dev' }],
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
    url: 'https://www.raghv.dev',
    title: 'Raghav Mahajan - Cybersecurity Professional | Edmonton, AB',
    description: 'Securing the digital frontier with expertise in penetration testing and security auditing.',
    siteName: 'Raghav Mahajan Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Raghav Mahajan - Cybersecurity Professional'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raghav Mahajan - Cybersecurity Professional',
    description: 'Securing the digital frontier',
    images: ['/og-image.jpg'],
    creator: '@raghv_m',
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
  other: {
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;",
  },
}

const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Raghav Mahajan',
  jobTitle: 'Cybersecurity Professional',
  description: 'Penetration tester and security auditor. Edmonton, AB. SOC analyst in training.',
  url: 'https://www.raghv.dev',
  sameAs: [
    'https://github.com/raaghvv',
    'https://github.com/raghv-m',
    'https://linkedin.com/in/raghavmahajan08',
    'https://linkedin.com/in/raghav-mahajan-17611b24b',
    'https://tryhackme.com/p/raghv-m',
  ],
  knowsAbout: ['Cybersecurity', 'Penetration Testing', 'Web Application Security', 'Secure Development', 'Threat Analysis', 'Security Auditing'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Edmonton',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
}

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Raghav Mahajan - Cybersecurity Portfolio',
  url: 'https://www.raghv.dev',
  description: 'Cybersecurity professional portfolio. Edmonton, AB. TryHackMe writeups, community, certifications.',
  author: { '@id': 'https://www.raghv.dev/#person' },
  inLanguage: 'en-CA',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.raghv.dev/projects?search={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}>
      <head>
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="theme-color" content="#0a0a0f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="canonical" href="https://www.raghv.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col bg-cyber-bg-primary text-cyber-text-primary relative">
            <MatrixRain />
            <Navbar />
            <main className="flex-1 relative z-10" id="main">
              <a href="#main" className="skip-link absolute -top-full left-4 z-[100] px-4 py-2 bg-cyber-accent-cyan text-cyber-bg-primary rounded-lg font-semibold focus:top-4 transition-[top] duration-200">
                Skip to main content
              </a>
              {children}
            </main>
            <Footer />
            <BackToTop />
            <LoadingScreen />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
