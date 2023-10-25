import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { createClient } from '@/prismicio'

import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const settings = await client.getSingle("settings")

  return {
    title: settings.data.site_title || 'Whatever',
    openGraph: {
      images: [settings.data.og_image || ""],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
