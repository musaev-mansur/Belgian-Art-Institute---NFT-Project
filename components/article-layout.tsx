import Image from "next/image"
import ReactMarkdown from "react-markdown"

interface ArticleLayoutProps {
  title: string
  content: string
  imageUrl?: string
  imageAlt?: string
}

export function ArticleLayout({ title, content, imageUrl, imageAlt }: ArticleLayoutProps) {
  return (
    <div className="container max-w-4xl mx-auto px-6 text-white">
      <article className="prose lg:prose-xl max-w-none bg-[#282828] p-8 md:p-12 rounded-lg shadow-sm">
        <h1 className="font-light">{title}</h1>
        {imageUrl && imageAlt && (
          <div className="relative my-8 rounded-md overflow-hidden">
            <Image 
              src={imageUrl || "/placeholder.svg"} 
              alt={imageAlt} 
              width={1200}
              height={800}
              className="w-full h-auto object-contain" 
            />
          </div>
        )}
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  )
}
