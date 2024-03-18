import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Astra Interactive Studio',
  description: 'Astra Interactive Studio',
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
        <main className='relative overflow-hidden'>
        {children}
        </main> 
        <Footer />
        </div>
      </body>
    </html>
  )
}
