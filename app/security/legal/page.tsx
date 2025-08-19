import { legalText } from "@/lib/content"

const legalContent = legalText.split("\n\n").map((paragraph, index) => {
  if (paragraph.startsWith("###")) {
    return (
      <h3 key={index} className="font-semibold text-xl mt-8 mb-4">
        {paragraph.replace("### ", "")}
      </h3>
    )
  }
  if (paragraph.startsWith("**")) {
    return (
      <h4 key={index} className="font-medium text-lg mt-6 mb-2">
        {paragraph.replace(/\*\*/g, "")}
      </h4>
    )
  }
  return (
    <p key={index} className="text-gray-700 mb-4">
      {paragraph}
    </p>
  )
})

export default function LegalPage() {
  return (
    <div className="container max-w-4xl mx-auto px-6">
      <article className="bg-[#282828] p-8 md:p-12 rounded-lg shadow-custom-inset">
        <h1 className="font-light text-4xl mb-8">Legal & Institutional Framework</h1>
        <div>{legalContent}</div>
      </article>
    </div>
  )
}
