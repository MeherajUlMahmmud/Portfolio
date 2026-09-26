import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { profile, socials, experience, education } from '@/lib/data'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const description =
  'Software Engineer building LLM, RAG, OCR and fraud-detection systems in banking. 4+ years with Python, Java, Django, Spring Boot and React.'

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name} | Software Engineer, AI/ML`,
  description,
  keywords: ['Software Engineer', 'AI/ML', 'LLM', 'RAG', 'OCR', 'Fraud Detection', 'Banking Technology', 'Python', 'Java', 'Django', 'React', 'Next.js', 'Flutter'],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  openGraph: {
    title: `${profile.name} | Software Engineer, AI/ML`,
    description,
    url: profile.siteUrl,
    siteName: profile.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} | Software Engineer, AI/ML`,
    description,
  },
  alternates: { canonical: '/' },
}

// Structured data so search engines can show a profile card for the site owner.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: 'Software Engineer',
  worksFor: { '@type': 'Organization', name: experience[0].company },
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: education.institution },
  sameAs: Object.values(socials),
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfaf7' },
    { media: '(prefers-color-scheme: dark)', color: '#0e1014' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  )
}
