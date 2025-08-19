import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const caseStudies = [
  {
    slug: "case-study-one",
    title: "Fra Bartolommeo (March 1472 – October 1517)",
    description: "Scientific analysis and provenance research leading to the rediscovery of a key work.",
    imageUrl: "/case-study-one/Fra5.jpg?width=400&height=300",
  },
  {
    slug: "case-study-two",
    title: "Claude Monet (November 1840 – December 1926)",
    description: "Uncovering the artist's technique through infrared reflectography and chemical analysis.",
    imageUrl: "/case-study-two/Claude Monet 04_page-0001.jpg?width=400&height=300",
  },
  {
    slug: "case-study-three",
    title: "Theodore Robinson (June 1852 – April 1896)",
    description: "A delicate restoration process to preserve a fragile canvas for future generations.",
    imageUrl: "/case-study-three/02 Theodore Robinson Report.JPG?width=400&height=300",
  },
]

export default function ResearchPage() {
  return (
    <div className="container max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-white">Analysis & Research</h1>
        <p className="mt-4 text-lg text-white">Selected case studies from our internal research archive.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 shadow-custom-inset">
        {caseStudies.map((study) => (
          <Link href={`/research/${study.slug}`} key={study.slug}>
            <Card className="h-full bg-[#282828] text-white shadow-custom-inset">
              <CardHeader>
                <div className="relative aspect-video mb-4 rounded-md overflow-hidden shadow-custom-inset">
                  <Image src={study.imageUrl || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                </div>
                <CardTitle className="font-medium">{study.title}</CardTitle>
                <CardDescription>{study.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
