import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raghav Mahajan - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Node.js, Flutter, and modern web technologies. Based in Edmonton, AB.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'Flutter', 'JavaScript', 'TypeScript', 'Edmonton'],
  authors: [{ name: 'Raghav Mahajan' }],
  creator: 'Raghav Mahajan',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://raghavmahajan.com',
    title: 'Raghav Mahajan - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, Flutter, and modern web technologies.',
    siteName: 'Raghav Mahajan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raghav Mahajan - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, Flutter, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  )
} 