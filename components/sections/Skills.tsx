import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export default function Skills() {
  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "TypeScript", "C/C++"],
    "Frontend Technologies": ["React.js", "Next.js", "HTML5", "CSS3"],
    "Backend Technologies": ["Django", "Flask", "Spring Boot", "Node.js"],
    "Mobile Development": ["Flutter", "React Native", "Android"],
    "Databases": ["Oracle", "PostgreSQL", "MongoDB", "Firebase"],
    "Machine Learning": ["TensorFlow", "OpenCV", "NLP", "CNN"],
    "DevOps & Cloud": ["AWS", "GCP", "Docker", "CI/CD"],
    "Tools": ["Git", "Redis", "RabbitMQ"]
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <Card key={index} variant="bordered">
              <h3 className="text-xl font-serif font-bold text-primary mb-4 pb-2 border-b border-border">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => (
                  <Badge key={idx}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
