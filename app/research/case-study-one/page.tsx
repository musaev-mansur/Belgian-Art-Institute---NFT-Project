"use client"

import { useState } from "react"
import { ArticleLayout } from "@/components/article-layout"
import { ImageModal, ImageGalleryItem } from "@/components/image-modal"
import { PDFModal, PDFGalleryItem } from "@/components/pdf-modal"
import { BackButton } from "@/components/back-button"

const caseStudyOneText = `
One of the most complex and significant projects undertaken by the Belgian Art Institute was the comprehensive investigation and restoration of a painting attributed to Fra Bartolommeo di San Marco (1472–1517), a prominent master of the Italian Renaissance, central figure of the Florentine Mannerist school, and close associate of Raphael.

Paintings by Fra Bartolommeo are exceptionally rare and possess both outstanding art historical and substantial market value. Works by his hand regularly reach several tens of millions of dollars at international auctions, placing considerable responsibility on every stage of handling and examination.

## Initial Condition and Restoration Analysis

The painting, upon its arrival at the Institute, required preliminary surface cleaning. Over several decades, layers of dust, surface grime, and oxidized coatings had accumulated. For this delicate task, Etienne Van Vyve (Brussels), one of Europe's foremost conservators with extensive experience working with Old Masters, was engaged.

During the restoration, Van Vyve determined that the painting had undergone a significant intervention in the 19th century: the original panel had been transferred to canvas — a practice commonly employed at the time by collectors concerned about the structural stability of wooden supports. This highly technical and risky operation involved removing the painted layer from the wooden panel and adhering it to canvas. Unfortunately, this process resulted in the loss of portions of the image. Van Vyve meticulously reconstructed the damaged areas, adhering to contemporary ethical conservation standards.

## Technical Examination and Dating

The next stage involved scientific examination of the materials and technique. The work was submitted to the Royal Institute for Cultural Heritage (KIK-IRPA, Brussels) — one of Europe's leading laboratories for the physico-chemical analysis of works of art.

The Institute's specialists conducted radiocarbon dating of the organic components (primarily the paint layers) and examined the remaining structure of the original support. The analysis confirmed that the pigments dated to the early 16th century. Particularly noteworthy was the dendrochronological study of residual wood from the original panel (preserved on the reverse), which revealed that it was felled in the latter half of the 15th century. This corresponds with historical practices of the time, when wooden panels were seasoned for several decades to stabilize them before being used in painting.

## Art Historical Analysis and Attribution

With both the date and technique confirmed, the Institute proceeded with a thorough art historical investigation. Several leading experts were consulted:

- **Prof. Waldemar H. de Boer (PhD, Florence)**, a distinguished Renaissance scholar specializing in Florentine painting, prepared an extensive report identifying key stylistic elements typical of Fra Bartolommeo's oeuvre — including the use of chiaroscuro, compositional structures, and treatment of drapery — all of which aligned closely with comparable works held in Florentine collections.

- **Alexis Ashot**, senior specialist in the Old Masters Department at Christie's (London), reviewed the work and confirmed that it exhibited all the hallmarks of Fra Bartolommeo's mature period. He concluded that the painting could be securely attributed either to the master himself or to his immediate workshop.

Additionally, archival research led to the consultation of the Düsseldorf Academy of Fine Arts, where post-war restoration work had been conducted on numerous paintings affected by World War II. Documentation confirmed that in 1949, the painting underwent treatment by Professor Wilhelm Herberholz, who ensured its preservation after its wartime displacement to Germany in the 1940s.

## Historical Context

According to archival records, the painting was created in 1511 and was originally intended for the Church of San Marco in Florence, where Fra Bartolommeo lived as part of a monastic community. In 1512, the work was acquired by the Florentine Republic and presented as a diplomatic gift to Jacques Hurault, Bishop of Autun — a gesture that likely accounts for the painting's subsequent relocation to France.

## Conclusion

The research project ultimately confirmed the painting's authenticity and its significant place within the cultural and historical legacy of the early 16th century. Tracing the artwork's journey across five centuries, this investigation exemplifies the interdisciplinary approach practiced by the Belgian Art Institute — one that integrates restoration expertise, scientific analysis, art historical scholarship, and archival inquiry to illuminate the provenance and essence of exceptional works of art.
`

export default function CaseStudyOnePage() {
  const [modalImage, setModalImage] = useState<{
    src: string
    alt: string
    title: string
  } | null>(null)

  const [modalPDF, setModalPDF] = useState<{
    src: string
    title: string
    mobilePreview?: string
  } | null>(null)

  const [modalMobileImage, setModalMobileImage] = useState<{
    src: string
    alt: string
    title: string
  } | null>(null)

  const images = [
    {
      src: "/case-study-one/Fra5.jpg",
      alt: "Fra Bartolommeo painting before restoration",
      title: "Before restoration - showing accumulated grime and oxidized coatings"
    },
    {
      src: "/case-study-one/Fra Bart C14 2.jpeg",
      alt: "Scientific analysis at KIK-IRPA",
      title: "Scientific analysis at KIK-IRPA laboratory"
    },
    {
      src: "/case-study-one/Fra Bart C14 1.jpeg",
      alt: "Dendrochronological analysis of wood panel",
      title: "Dendrochronological analysis of original wood panel remnants"
    }
  ]

  const pdfFiles = [
    {
      src: "/case-study-one/WaldemarH.deBoer.pdf",
      title: "Expert Report by Prof. Waldemar H. de Boer",
      description: "A detailed analysis of the stylistic elements of Fra Bartolommeo's work",
      mobilePreview: "/case-study-one/WaldemarH.deBoer_mobile.jpg"
    }
  ]

  return (
    <div className="container max-w-6xl mx-auto px-6">
      <div className="mb-6">
        <BackButton href="/research" />
      </div>
      <article className="bg-[#282828] p-8 md:p-12 rounded-lg shadow-sm text-white">
        <h1 className="font-light text-4xl mb-8">Study and Attribution of a Painting by Fra Bartolommeo (1472–1517)</h1>
        
        {/* Combined Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {images.map((image, index) => (
            <ImageGalleryItem
              key={`image-${index}`}
              src={image.src}
              alt={image.alt}
              title={image.title}
              onClick={() => setModalImage(image)}
            />
          ))}
          {pdfFiles.map((pdf, index) => (
            <PDFGalleryItem
              key={`pdf-${index}`}
              src={pdf.src}
              title={pdf.title}
              description={pdf.description}
              mobilePreview={pdf.mobilePreview}
              onClick={() => {
                // На мобильных устройствах открываем изображение, на десктопе - PDF
                if (window.innerWidth < 768 && pdf.mobilePreview) {
                  setModalMobileImage({
                    src: pdf.mobilePreview,
                    alt: pdf.title,
                    title: pdf.title
                  })
                } else {
                  setModalPDF(pdf)
                }
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="prose lg:prose-xl max-w-none">
          <div dangerouslySetInnerHTML={{ __html: caseStudyOneText.split('\n').map(paragraph => {
            if (paragraph.startsWith('## ')) {
              return `<h2 class="font-semibold text-2xl mt-8 mb-4">${paragraph.replace('## ', '')}</h2>`
            }
            if (paragraph.startsWith('- **')) {
              return `<p class="mb-4">${paragraph}</p>`
            }
            if (paragraph.trim() === '') {
              return ''
            }
            return `<p class="mb-4">${paragraph}</p>`
          }).join('') }} />
        </div>
      </article>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
        imageSrc={modalImage?.src || ''}
        imageAlt={modalImage?.alt || ''}
        imageTitle={modalImage?.title}
      />

      {/* PDF Modal */}
      <PDFModal
        isOpen={!!modalPDF}
        onClose={() => setModalPDF(null)}
        pdfSrc={modalPDF?.src || ''}
        pdfTitle={modalPDF?.title}
        mobilePreview={modalPDF?.mobilePreview}
      />

      {/* Mobile Image Modal */}
      <ImageModal
        isOpen={!!modalMobileImage}
        onClose={() => setModalMobileImage(null)}
        imageSrc={modalMobileImage?.src || ''}
        imageAlt={modalMobileImage?.alt || ''}
        imageTitle={modalMobileImage?.title}
      />
    </div>
  )
}
