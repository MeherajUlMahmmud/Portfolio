import Card from '@/components/ui/Card'

export default function Publications() {
  const publications = [
    {
      authors: "Mahmmud, M.U., Ahmed, M.A., Alam, S.M., Imam, O.T., Reza, A.W., Arefin, M.S.",
      year: "2022",
      title: "Human Posture Estimation: In the Aspect of Agricultural Industry",
      conference: "Third International Conference on Image Processing and Capsule Networks (ICIPCN 2022)",
      publisher: "Springer Link"
    },
    {
      authors: "Mahmmud, M.U., Laskar, M.S., Arafin, M., Molla, M.S., Reza, A.W., Arefin, M.S.",
      year: "2023",
      title: "Improved Virtualization to Reduce e-Waste in Green Computing",
      conference: "International Conference on Intelligent Computing & Optimization (ICO 2022)",
      publisher: "Springer Link"
    }
  ]

  return (
    <section id="publications" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Publications
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} variant="elevated">
              <p className="text-sm text-secondary mb-2">{pub.authors} ({pub.year})</p>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">{pub.title}</h3>
              <p className="text-secondary mb-2">{pub.conference}</p>
              <p className="text-accent font-semibold">{pub.publisher}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
