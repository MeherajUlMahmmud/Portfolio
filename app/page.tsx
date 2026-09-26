import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Publications from '@/components/sections/Publications'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Publications />
      <Contact />
    </Layout>
  )
}
