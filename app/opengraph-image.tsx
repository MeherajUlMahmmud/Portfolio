import { ImageResponse } from 'next/og'
import { profile } from '@/lib/data'

export const alt = `${profile.name} | ${profile.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Rendered once at build time and served as the social preview card.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#0e1014',
          backgroundImage:
            'linear-gradient(#272c36 1px, transparent 1px), linear-gradient(90deg, #272c36 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          color: '#eceef2',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, color: '#9aa1ae' }}>
          {profile.shortName.toLowerCase()}
          <span style={{ color: '#7d95ff' }}>.dev</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ marginTop: 16, fontSize: 32, color: '#7d95ff' }}>{profile.role}</div>
          <div style={{ marginTop: 32, fontSize: 34, lineHeight: 1.35, color: '#9aa1ae', maxWidth: 960 }}>
            {profile.headline}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
