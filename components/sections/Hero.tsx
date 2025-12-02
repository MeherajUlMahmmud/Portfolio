import Button from '@/components/ui/Button'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-8 bg-white pt-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary leading-tight">
            Meharaj Ul Mahmmud
          </h1>
          <p className="text-2xl md:text-3xl text-accent font-medium mb-4">
            Software Engineer
          </p>
          <p className="text-lg text-secondary">
            Dhaka, Bangladesh
          </p>
        </div>

        <div className="my-12 py-8 px-6 bg-background-alt rounded-2xl shadow-soft max-w-3xl mx-auto">
          <p className="text-xl text-secondary leading-relaxed">
            Results-driven Software Engineer with <span className="text-accent font-semibold">3+ years of experience</span> in banking technology, specializing in <span className="text-accent font-semibold">AI/ML solutions</span> and financial systems
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button variant="outline" href="https://github.com/MeherajUlMahmmud">
            <FaGithub size={20} /> Github
          </Button>
          <Button variant="outline" href="https://www.linkedin.com/in/meherajulmahmmud/">
            <FaLinkedin size={20} /> LinkedIn
          </Button>
          <Button variant="outline" href="https://medium.com/@meheraj">
            <FaMedium size={20} /> Medium
          </Button>
        </div>
      </div>
    </section>
  )
}
