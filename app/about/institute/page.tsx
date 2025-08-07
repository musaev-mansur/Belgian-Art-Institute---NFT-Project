import { aboutInstituteText } from "@/lib/content"
import { ArticleLayout } from "@/components/article-layout"

export default function AboutInstitutePage() {
  return (
    <ArticleLayout
      title="About the Belgian Art Institute"
      content={aboutInstituteText}
      imageUrl="/images/door.png"
      imageAlt="The doors of the Belgian Art Institute"
    />
  )
}
