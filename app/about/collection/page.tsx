import { collectionText } from "@/lib/content"
import { ArticleLayout } from "@/components/article-layout"

export default function AboutCollectionPage() {
  return (
    <ArticleLayout
      title="The Belgian Impressionist Collection"
      content={collectionText}
      imageUrl="/images/collections.png"
      imageAlt="A secure art storage facility"
    />
  )
}
