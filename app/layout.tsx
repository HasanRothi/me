import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Md Riad Hasan Sarker (Rothi) - Software Engineer @ 10MS | Backend | GenAI',
  description: 'Backend & GenAI Engineer with 5+ years of experience building scalable, high-performance systems across EdTech, E-commerce, and Media platforms.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}