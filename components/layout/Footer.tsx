import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-background-dark py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif font-bold text-primary mb-2">Meharaj Ul Mahmmud</h3>
            <p className="text-secondary">Software Engineer</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/meharajulmahmmud"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-secondary hover:text-accent hover:shadow-medium transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/meharajulmahmmud"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-secondary hover:text-accent hover:shadow-medium transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://medium.com/@meharajulmahmmud"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-secondary hover:text-accent hover:shadow-medium transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium size={20} />
            </a>
            <a
              href="mailto:meharajulmahmmud@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-secondary hover:text-accent hover:shadow-medium transition-all"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Meharaj Ul Mahmmud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
