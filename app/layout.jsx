import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata = {
  title: 'nuBeam Gen — Founder Capital Advisory & Investor Introductions',
  description: 'Get warm introductions to Family Offices, VC, PE, and Hedge Funds. nuBeam Gen connects founders to $3T+ in capital networks. $80B in team transaction experience. By application only.',
  keywords: [
    'founder capital advisor',
    'how to get a meeting with a family office',
    'investor introductions for startups',
    'family office introductions',
    'deal flow sourcing',
    'raise capital from family office',
    'PE fund introductions for founders',
    'private capital access',
    'market access advisory',
    'institutional investor access',
    'capital partner sourcing',
    'founder growth advisor',
    'warm introductions investors',
    'hedge fund introductions',
    'venture capital introductions',
  ],
  metadataBase: new URL('https://nubeam.io'),
  openGraph: {
    title: 'nuBeam Gen — Founder Capital Advisory & Investor Introductions',
    description: 'Warm introductions to Family Offices, VC, PE, and Hedge Funds. $3T+ capital network. $80B in team transaction experience.',
    url: 'https://nubeam.io',
    siteName: 'nuBeam Gen',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nuBeam Gen — Founder Capital Advisory',
    description: 'Warm introductions to Family Offices, VC, PE, and Hedge Funds. $3T+ capital network.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
