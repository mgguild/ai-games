import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/scrolltotop' // Import the component

export const metadata: Metadata = {
  title: 'Astra Interactive Studios',
  description: 'Astra Interactive Studios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          <main className="relative overflow-hidden">
            {children}
          </main> 
          <Footer />
          <ScrollToTop /> {/* Add the scroll-to-top button */}
        </div>
      </body>
    </html>
  )
}
