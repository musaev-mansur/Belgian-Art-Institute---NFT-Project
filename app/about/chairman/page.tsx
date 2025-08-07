import { chairmanMessage } from "@/lib/content"
import { ArticleLayout } from "@/components/article-layout"

export default function ChairmanMessagePage() {
  return <ArticleLayout title="Message from the Chairman" content={chairmanMessage} />
}
