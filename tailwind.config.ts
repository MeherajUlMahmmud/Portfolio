import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#4a4a4a',
        accent: '#2563eb',
        'accent-light': '#3b82f6',
        background: '#ffffff',
        'background-alt': '#f9fafb',
        'background-dark': '#f3f4f6',
        border: '#e5e7eb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 25px rgba(0, 0, 0, 0.1)',
        'large': '0 10px 40px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config
