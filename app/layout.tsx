import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VIVACEmusic',
  description: 'An outlet for our passion.',
  // set icon of website
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
