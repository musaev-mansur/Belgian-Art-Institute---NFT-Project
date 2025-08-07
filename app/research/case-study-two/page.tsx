"use client"

import { useState } from "react"
import { PDFModal, PDFGalleryItem } from "@/components/pdf-modal"
import { ImageModal } from "@/components/image-modal"
import { BackButton } from "@/components/back-button"

const caseStudyTwoText = `
In 2019, a painting attributed to Claude Monet (1840-1926) was submitted to the Belgian Art Institute for expert assessment and technical analysis. The work was entrusted by its current owner, a Belgian collector with whom the Institute has a long-standing partnership. Given that Impressionist painting constitutes one of the core focuses of the Belgian Art Institute, it was an honor to work with such an exceptional artwork.

The provenance of the painting was confirmed through two independent sources:
– First, a letter from a niece of the Russian emperor, stating that she inherited the painting from Grand Duke Vladimir Alexandrovich, son of Emperor Alexander II and President of the Imperial Academy of Arts;
– Second, a notarized declaration from a well-known Russian millionaire, confirming that he acquired the work from the heiress in 1991.

## 1. Provenance and Legal Status Verification

Considering the complex fate of many artworks displaced during the 20th century, our first step was to consult the international Art Loss Register to determine whether the painting had ever been reported as missing, looted, or subject to ownership disputes. The painting was not listed as lost or contested, nor was it associated with Nazi-era seizures, which allowed us to proceed to the second stage: scientific analysis.

## 2. Scientific Examination at KIK-IRPA (Brussels)

The painting was submitted for in-depth analysis to the Royal Institute for Cultural Heritage (KIK-IRPA) in Brussels, under the supervision of Dr. Steven Saverwyns, Head of the Painting Laboratory. The goal was to determine the pigment composition and assess the likely date of execution.

## 3. Methodology

The following techniques were applied:
- **MA-XRF (Macro X-ray Fluorescence Mapping)** — for identifying inorganic pigments;
- **Micro-Raman Spectroscopy (MRS)** — for precise identification of organic and synthetic pigments;
- **Cross-sectional analysis** — using optical and electron microscopy to study the paint layers;
- **SEM-EDX (Scanning Electron Microscopy with Energy Dispersive X-ray Spectroscopy)** — for chemical analysis of the stratigraphy.

## 4. Analytical Results

The examination identified a multi-layered structure and a broad spectrum of characteristic pigments commonly used in the second half of the 19th and early 20th centuries:

**Identified Pigments:**
- **White:** lead white, zinc white, barite (barium sulfate), chalk, anhydrite
- **Red:** vermilion (HgS), red ochre, PR83 (synthetic alizarin crimson, in use since 1868)
- **Yellow:** cadmium yellow (CdS)
- **Blue:** ultramarine, Prussian blue
- **Green:** emerald green (copper acetoarsenite), hydrated chromium oxide
- **Brown:** ochre, sienna, umber

**Key Chronological Marker:**
The latest pigment found, PR83 (alizarin crimson), entered commercial production in 1868, which defines the terminus post quem for the creation of the painting.

**Technical Characteristics:**
- A complex stratigraphy of up to six layers, with evidence of underpainting and varnishing
- Green tones created using cadmium yellow mixed with emerald green
- Blue zones (sky, windows) constructed from layered applications of Prussian blue, ultramarine, vermilion, and lead white
- Pink flowers composed of vermilion, PR83, ultramarine, and Prussian blue
- Minimal restoration detected; one patched tear in the canvas was observed

## 5. Conclusion

The results of the technical and chemical analysis support, with a high degree of probability, the authenticity of the painting. The pigment palette, structural layering, and material composition are consistent with late 19th- to early 20th-century French painting, and display numerous features characteristic of the Impressionist school.

Of particular note is that the pigment composition was compared with published datasets on Claude Monet's documented palette, as established in previous analyses of his works held in the Musée d'Orsay, the Musée Marmottan Monet, and the National Gallery in London. The presence of PR83, vermilion, ultramarine, cadmium yellow, and emerald green is fully aligned with Monet's known materials from the 1870s to 1890s.

Taken together — artistic quality, execution technique, dating, complex layering, and verified provenance — these findings provide strong grounds to regard the painting as a genuine work by Claude Monet, or as originating directly from his studio.

This project stands as a model of effective inter-institutional collaboration between the Belgian Art Institute and KIK-IRPA, and demonstrates the Institute's rigorous methodology: from ethical provenance verification to advanced physico-chemical analysis conducted in accordance with the highest international standards in conservation and art historical research.
`

export default function CaseStudyTwoPage() {
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

  const pdfFiles = [
    {
      src: "/case-study-two/Art Loss Monet 01.pdf",
      title: "Art Loss Register Verification Report",
      description: "Checking the status in the international Art Loss Register",
      mobilePreview: "/case-study-two/Art Loss Monet_mobile.jpg"
    },
    {
      src: "/case-study-two/Claude Monet 02.pdf",
      title: "Scientific Analysis Report - KIK-IRPA",
      description: "Scientific Analysis Report at KIK-IRPA Laboratory",
      mobilePreview: "/case-study-two/Claude Monet 02_mobile.jpg"
    },
    {
      src: "/case-study-two/Claude Monet 03.pdf",
      title: "Pigment Analysis Results",
      description: "Results of pigment and materials analysis",
      mobilePreview: "/case-study-two/Claude Monet 03_mobile.jpg"
    },
    {
      src: "/case-study-two/Claude Monet 04.pdf",
      title: "Final Authentication Report",
      description: "Final report on the authentication of the painting",
      mobilePreview: "/case-study-two/Claude Monet 04_page-0001.jpg"
    }
  ]

  return (
    <div className="container max-w-6xl mx-auto px-6">
      <div className="mb-6">
        <BackButton href="/research" />
      </div>
      <article className="bg-[#282828] p-8 md:p-12 rounded-lg shadow-sm text-white">
        <h1 className="font-light text-4xl mb-8">Study of Claude Monet's Painting "Jardin"</h1>
        
        {/* PDF Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {pdfFiles.map((pdf, index) => (
            <PDFGalleryItem
              key={index}
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
          <div dangerouslySetInnerHTML={{ __html: caseStudyTwoText.split('\n').map(paragraph => {
            if (paragraph.startsWith('## ')) {
              return `<h2 class="font-semibold text-2xl mt-8 mb-4">${paragraph.replace('## ', '')}</h2>`
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return `<h3 class="font-medium text-lg mt-6 mb-3">${paragraph.replace(/\*\*/g, '')}</h3>`
            }
            if (paragraph.startsWith('- **')) {
              return `<p class="mb-2">${paragraph}</p>`
            }
            if (paragraph.trim() === '') {
              return ''
            }
            return `<p class="mb-4">${paragraph}</p>`
          }).join('') }} />
        </div>
      </article>

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
