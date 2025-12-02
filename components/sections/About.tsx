import Card from '@/components/ui/Card'

export default function About() {
  return (
    <section id="about" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Professional Summary
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <Card className="max-w-4xl mx-auto" variant="elevated">
          <p className="text-lg text-secondary leading-relaxed mb-8">
            Results-driven Software Engineer with <span className="text-accent font-semibold">3+ years of experience</span> in banking technology. Proven track record of automating financial processes and developing intelligent systems that improved operational efficiency by <span className="text-accent font-semibold">90%+</span>. Strong expertise in Python, Java, PL/SQL, and financial systems with hands-on banking industry experience.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-background-alt rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">3+</div>
              <div className="text-sm text-secondary">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-background-alt rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-sm text-secondary">Projects</div>
            </div>
            <div className="text-center p-4 bg-background-alt rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">90%</div>
              <div className="text-sm text-secondary">Efficiency Gain</div>
            </div>
            <div className="text-center p-4 bg-background-alt rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">2</div>
              <div className="text-sm text-secondary">Publications</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
