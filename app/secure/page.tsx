"use client"

import { useState } from "react"
import { PDFModal, PDFGalleryItem } from "@/components/pdf-modal"
import { ImageModal } from "@/components/image-modal"
import { BackButton } from "@/components/back-button"
import { ProtectedContent } from "@/components/protected-content"

export default function SecurePage() {
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
      src: "/vip/2_Graphological_examination_Bacon.pdf",
      title: "Graphological examination of Bacon's signature",
      description: " ",
      mobilePreview: "/vip/mobile/2_Graphological_examination_Bacon_mobile.jpg"
    },
    {
      src: "/vip/Appraisal_Bacon.pdf",
      title: "Appraisal of Bacon's painting",
      description: " ",
      mobilePreview: "/vip/mobile/Appraisal_Bacon_mobile.jpg"
    },
    {
      src: "/vip/Belgian_Royal_Institute_Bacon.pdf",
      title: "Belgian Royal Institute of Art History",
      description: " ",
      mobilePreview: "/vip/mobile/Belgian_Royal_Institute_Bacon_mobile.jpg"
    },
    {
      src: "/vip/Graphological_examination_Bacon.pdf",
      title: "Graphological examination of Bacon's signature",
      description: " ",
      mobilePreview: "/vip/mobile/Graphological_examination_Bacon_mobile.jpg"
    }
  ]

  return (
    <ProtectedContent 
      title="VIP Documents" 
      description="These documents are only available to authorized users."
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">VIP Documents</h2>
          <p className="text-gray-300">
            This site contains classified documents and research that is only accessible to authorized users.
          </p>
        </div>



        <div className="container max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <BackButton href="/research" />
          </div>
          <article className="bg-[#282828] p-8 md:p-12 rounded-lg shadow-sm text-white">
            
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
      </div>
    </ProtectedContent>
  )
}
