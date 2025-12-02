import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card variant="elevated">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-accent" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <a href="mailto:meharajulmahmmud@gmail.com" className="text-secondary hover:text-accent">
                    meharajulmahmmud@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <FaPhone className="text-accent" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-primary">Phone</p>
                  <p className="text-secondary">+880 1814-325624</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button variant="primary" href="https://github.com/meharajulmahmmud" className="w-full">
                Github Profile
              </Button>
              <Button variant="outline" href="https://linkedin.com/in/meharajulmahmmud" className="w-full">
                LinkedIn Profile
              </Button>
            </div>
          </Card>

          <Card variant="elevated">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">References</h3>
            
            <div className="space-y-6">
              <div>
                <p className="font-bold text-primary">Md. Aswad Ahmed Shams</p>
                <p className="text-secondary">Assistant Vice President</p>
                <p className="text-secondary">IT Operation Division, Dutch-Bangla Bank PLC</p>
                <a href="mailto:aswadshams@gmail.com" className="text-accent hover:underline">
                  aswadshams@gmail.com
                </a>
              </div>

              <div>
                <p className="font-bold text-primary">Dr. Mohammad Rezwanul Huq</p>
                <p className="text-secondary">Associate Professor</p>
                <p className="text-secondary">Department of CSE, East West University</p>
                <a href="mailto:mrhuq@ewubd.edu" className="text-accent hover:underline">
                  mrhuq@ewubd.edu
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
