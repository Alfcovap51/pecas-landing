import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/app/components/nav-bar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fundación Pecas',
  description: 'Organización sin fines de lucro para el apoyo de la educación',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
