import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export default function Experience() {
  const experiences = [
    {
      title: "Senior Officer - IT Development Division",
      company: "Dutch-Bangla Bank PLC",
      location: "Dhaka, Bangladesh",
      period: "May 2024 - Present",
      projects: [
        {
          name: "AI/ML Research & Development",
          description: "Conducting R&D on Large Language Models, RAG, vector search, and generative AI frameworks",
          tech: ["Python", "Django REST", "PostgreSQL", "ChromaDB", "LangChain", "ReactJS"]
        },
        {
          name: "Cross-Border Transaction Automation System",
          description: "Developed intelligent SWIFT transaction processing system, eliminating 90%+ of manual tasks",
          tech: ["Java", "Spring Boot", "Oracle PL/SQL", "ReactJS"]
        }
      ]
    },
    {
      title: "Management Trainee Officer - IT Development Division",
      company: "Dutch-Bangla Bank PLC",
      location: "Dhaka, Bangladesh",
      period: "May 2023 - May 2024",
      projects: [
        {
          name: "AI-Based Face Liveness Detection System",
          description: "Trained custom CNN model on 100,000+ images for fraud prevention",
          tech: ["Python", "Flask", "OpenCV", "TensorFlow"]
        }
      ]
    },
    {
      title: "Jr. Software Engineer",
      company: "Mirailit Ltd",
      location: "Dhaka, Bangladesh",
      period: "February 2022 - May 2023",
      projects: [
        {
          name: "Software Development",
          description: "Developed scalable RESTful APIs and cross-platform mobile applications",
          tech: ["Python", "Django", "Flutter"]
        }
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-white shadow-medium"></div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <Card variant="elevated" className="relative">
                    {/* Period Badge */}
                    <div className="inline-block mb-4">
                      <span className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-secondary mb-1 font-medium">{exp.company}</p>
                    <p className="text-sm text-secondary mb-6">{exp.location}</p>

                    <div className="space-y-6">
                      {exp.projects.map((project, pIndex) => (
                        <div key={pIndex} className="pb-6 last:pb-0 border-b last:border-b-0 border-border">
                          <h4 className="font-semibold text-primary mb-2 text-lg">{project.name}</h4>
                          <p className="text-secondary mb-3 leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, tIndex) => (
                              <Badge key={tIndex}>{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
