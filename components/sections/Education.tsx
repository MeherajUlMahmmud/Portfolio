import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "East West University",
      location: "Dhaka, Bangladesh",
      period: "April 2018 - May 2022",
      specialization: "Data Science and Artificial Intelligence",
      cgpa: "3.64/4.00 (Dean's List Recognition)",
      coursework: ["Machine Learning", "Data Mining", "Algorithm Design", "Database Systems", "Software Engineering"]
    },
    {
      degree: "Higher Secondary School Certificate",
      institution: "Al-Haz Noor Mia Degree College",
      location: "Cumilla, Bangladesh",
      period: "April 2015 - April 2017",
      group: "Science",
      gpa: "4.00/5.00"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Senbag Govt. Pilot High School",
      location: "Noakhali, Bangladesh",
      period: "2015",
      group: "Science",
      gpa: "5.00/5.00"
    }
  ]

  return (
    <section id="education" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line - Left aligned */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {education.map((edu, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-8 transform -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-white shadow-medium"></div>
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-20">
                  <Card variant="elevated">
                    {/* Period Badge */}
                    <div className="inline-block mb-4">
                      <span className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                        {edu.period}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-secondary mb-1 font-medium">{edu.institution}</p>
                    <p className="text-sm text-secondary mb-4">{edu.location}</p>

                    {edu.specialization && (
                      <div className="mb-3 p-3 bg-background-alt rounded-lg">
                        <p className="text-secondary">
                          <span className="font-semibold text-primary">Specialization:</span> {edu.specialization}
                        </p>
                      </div>
                    )}

                    {edu.group && (
                      <div className="mb-3 p-3 bg-background-alt rounded-lg">
                        <p className="text-secondary">
                          <span className="font-semibold text-primary">Group:</span> {edu.group}
                        </p>
                      </div>
                    )}

                    {edu.cgpa && (
                      <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-accent text-white rounded-lg font-semibold">
                          CGPA: {edu.cgpa}
                        </span>
                      </div>
                    )}

                    {edu.gpa && (
                      <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-accent text-white rounded-lg font-semibold">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}

                    {edu.coursework && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="font-semibold text-primary mb-3">Relevant Coursework</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, idx) => (
                            <Badge key={idx}>{course}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
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
