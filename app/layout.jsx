import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata = {
  title: 'nuBeam Gen — Founder Growth & Market Access Advisory',
  description: 'We connect founders to relationships across $3T+ in capital — Family Offices, VC, PE, and Hedge Funds. Our team brings $80B in transaction experience. Strategic introductions. By application only.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
