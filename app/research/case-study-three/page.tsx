"use client"

import { useState } from "react"
import { ImageModal, ImageGalleryItem } from "@/components/image-modal"
import { PDFModal, PDFGalleryItem } from "@/components/pdf-modal"
import { BackButton } from "@/components/back-button"

const caseStudyThreeText = `
One of the most insightful and instructive projects undertaken by the Belgian Art Institute was the study of a painting attributed to Theodore Robinson — a leading figure of American Impressionism, a close friend of Claude Monet, and a key contributor to the transformation of American painting at the end of the 19th century.

The painting was submitted to the Institute for scholarly analysis and expert evaluation as part of our program dedicated to the study of Impressionist painting. From the outset, its stylistic features and technical execution raised keen interest: the visual language of the work pointed to the mature Impressionist period of the 1890s, with characteristics close to those found in Robinson's works created in Giverny under the influence of Monet.

## Historical and Artistic Context

Theodore Robinson lived in France from 1884 to 1892, spending most of his time in Giverny — a small Norman village that became an artistic colony around Claude Monet. Their relationship was not only personal but also creative: it is known that Monet offered Robinson advice on composition and was equally interested in Robinson's feedback on his own unfinished canvases.

Robinson, in turn, deeply absorbed the principles of Impressionism, adapting them to his individual artistic vision. His works from the late 1880s and early 1890s — delicate plein air scenes with figures immersed in lyrical atmospheres — are considered among the high points of American Impressionism.

## Beginning of the Investigation and an Unexpected Turn

The initial stage of research was marked by an unexpected development that later became a valuable case study in the importance of precision in scholarly work. The painting was submitted to the Royal Institute for Cultural Heritage (KIK-IRPA, Brussels) for radiocarbon (C14) analysis aimed at dating the canvas. Surprisingly, the results indicated that the material dated to either 1958–1959 or 1985–1990 — clearly conflicting with Robinson's death in 1896. This contradiction raised serious doubts among our expert team, as all visible indicators — the weave, patina, and fiber character — suggested a canvas from the late 19th century.

As was later discovered, the confusion stemmed from an error made by our junior staff member who accompanied the painting: he did not remove the frame and incorrectly stated that the canvas was not relined. Based on this misleading information, the KIK-IRPA specialist took a sample from the protruding edge of the canvas — not realizing it was a relining added in the 20th century.

This issue was clarified thanks to the assistance of Dr. Mathieu Boudin, Head of the Radiocarbon Dating Laboratory at KIK-IRPA. He arranged for a second analysis, this time sampling the original canvas layer. The new results placed the canvas securely within the range of 1893–1904, which aligns with the chronology of Robinson's career and strongly supports the authenticity of the painted surface.

## Technical and Pigment Analysis

Following the clarification regarding the canvas, the painting was transferred to the scientific laboratory of KIK-IRPA for pigment and structural analysis. The study revealed no materials inconsistent with a creation date between 1893 and 1896. The palette, multi-layered painting technique, and stratigraphy of pigment application were all in accordance with the practices of European Impressionists in the 1890s — further strengthening the attribution hypothesis.

## The Question of Robinson's Departure from France

One crucial detail became the exact date of Robinson's departure from France. Initial references indicated that he had left Giverny in May 1892, which would have made it impossible for him to have painted the work in 1893. However, an in-depth investigation into the artist's biography revealed that his actual transatlantic voyage took place in December 1892. Only then did he return definitively to the United States. Thus, the minor margin of error allowed in radiocarbon dating did not contradict the hypothesis that the painting was executed by Robinson during the final months of his European period.

## Conclusion

This case demonstrates the critical role of precision, interdisciplinary methodology, and attention to detail in the study of artworks. From the mistake during sampling to the verification of biographical minutiae — every step proved decisive in the attribution process.

As a result of the collaborative efforts between the Belgian Art Institute and the Royal Institute for Cultural Heritage, the following was achieved:
- The materials were confirmed as consistent with the presumed creation date (1893–1896);
- The provenance and legal status of the work were clarified;
- The importance of even minor details — such as the month of an artist's departure — was reaffirmed as essential to authentication.

This project reflects the core principles guiding the Belgian Art Institute: scholarly integrity, methodological rigor, and profound respect for cultural heritage.
`

export default function CaseStudyThreePage() {
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
      src: "/case-study-three/02 Theodore Robinson Report.JPG",
      alt: "Theodore Robinson attributed painting",
      title: "The painting attributed to Theodore Robinson"
    },
    {
      src: "/case-study-three/03 THR dubl C14.jpeg",
      alt: "Canvas analysis showing relining confusion",
      title: "Initial canvas analysis showing the relining confusion"
    },
    {
      src: "/case-study-three/04 THR C14.jpeg",
      alt: "Corrected radiocarbon dating results",
      title: "Corrected C14 analysis of original canvas (1893-1904)"
    }
  ]

  const pdfFiles = [
    {
      src: "/case-study-three/01 Theodore Robinson Report.pdf",
      title: "Theodore Robinson Research Report",
      description: "A detailed report on the study of the painting Theodore Robinson",
      mobilePreview: "/case-study-three/01 Theodore Robinson Report_mobile.jpg"
    }
  ]

  return (
    <div className="container max-w-6xl mx-auto px-6">
      <div className="mb-6">
        <BackButton href="/research" />
      </div>
      <article className="bg-[#282828] p-8 md:p-12 rounded-lg text-white shadow-custom-inset">
        <h1 className="font-light text-4xl mb-8">Research on a Painting Attributed to Theodore Robinson (1852–1896)</h1>
        
        {/* Combined Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 shadow-custom-inset">
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
          <div dangerouslySetInnerHTML={{ __html: caseStudyThreeText.split('\n').map(paragraph => {
            if (paragraph.startsWith('## ')) {
              return `<h2 class="font-semibold text-2xl mt-8 mb-4">${paragraph.replace('## ', '')}</h2>`
            }
            if (paragraph.startsWith('- ')) {
              return `<p class="mb-2">${paragraph}</p>`
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
