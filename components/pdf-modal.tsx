"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Download, FileText } from "lucide-react"

interface PDFModalProps {
  isOpen: boolean
  onClose: () => void
  pdfSrc: string
  pdfTitle?: string
  mobilePreview?: string
}

export function PDFModal({ isOpen, onClose, pdfSrc, pdfTitle, mobilePreview }: PDFModalProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [iframeError, setIframeError] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setIsLoading(true)
      setIframeError(false)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIframeError(true)
    setIsLoading(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          aria-label="Закрыть"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        {/* PDF container */}
        <div className="relative w-full h-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-lg overflow-hidden">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-white border-b border-gray-200 p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <FileText size={16} className="text-blue-600 sm:w-5 sm:h-5 flex-shrink-0" />
              <h3 className="font-medium text-gray-900 text-sm sm:text-base truncate">
                {pdfTitle || 'PDF документ'}
              </h3>
            </div>
            <a
              href={pdfSrc}
              download
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-xs sm:text-sm flex-shrink-0"
            >
              <Download size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Download</span>
              <span className="sm:hidden">↓</span>
            </a>
          </div>

          {/* Content viewer */}
          <div className="w-full h-full pt-12 sm:pt-16">
            {/* Mobile: Show image preview */}
            {mobilePreview && (
              <div className="sm:hidden w-full h-full flex items-center justify-center">
                <Image
                  src={mobilePreview}
                  alt={pdfTitle || 'Document preview'}
                  width={800}
                  height={600}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}

            {/* Desktop: Show PDF iframe */}
            <div className="hidden sm:block w-full h-full">
              {!iframeError ? (
                <iframe
                  src={`${pdfSrc}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
                  className="w-full h-full border-0"
                  title={pdfTitle || 'PDF документ'}
                  allowFullScreen
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-50">
                  <div className="text-center p-6">
                    <FileText size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Failed to load PDF
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Try downloading the file to view it
                    </p>
                    <a
                      href={pdfSrc}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                    >
                      <Download size={16} />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Loading indicator - only for desktop PDF */}
            {isLoading && !iframeError && (
              <div className="hidden sm:flex absolute inset-0 items-center justify-center bg-white">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading PDF...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

interface PDFGalleryItemProps {
  src: string
  title: string
  description?: string
  onClick: () => void
  mobilePreview?: string // PNG превью для мобильных устройств
}

export function PDFGalleryItem({ src, title, description, onClick, mobilePreview }: PDFGalleryItemProps) {
  const [previewLoaded, setPreviewLoaded] = useState(false)
  const [previewError, setPreviewError] = useState(false)
  
  return (
    <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer bg-gray-100 border-2 border-gray-200 hover:border-blue-300 transition-colors">
      {/* Mobile PNG Preview */}
      {mobilePreview && (
        <div className="sm:hidden absolute inset-0">
          <Image
            src={mobilePreview}
            alt={`Preview: ${title}`}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {/* PDF preview - только на десктопе */}
      <div className="absolute inset-0">
        {/* Превью PDF через iframe - только на десктопе */}
        {!previewError && (
          <iframe
            src={`${src}#page=1&view=FitH`}
            className={`w-full h-full border-0 transition-opacity duration-300 hidden sm:block ${
              previewLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            title={`Preview: ${title}`}
            loading="lazy"
            onLoad={() => setPreviewLoaded(true)}
            onError={() => setPreviewError(true)}
          />
        )}
        
        {/* Fallback overlay - показывается на мобильных и при ошибках */}
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 group-hover:bg-gray-50 transition-all duration-300 ${
          (previewLoaded && !previewError) ? 'opacity-0 pointer-events-none sm:opacity-0' : 'opacity-100'
        }`}>
          <div className="text-center p-4">
            {!previewLoaded && !previewError && (
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-3"></div>
            )}
            <FileText size={48} className="text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-600">{title}</p>
            {description && (
              <p className="text-xs text-gray-500 mt-1">{description}</p>
            )}
            {!previewLoaded && !previewError && (
              <p className="text-xs text-blue-600 mt-2">Loading preview...</p>
            )}
            {previewError && (
              <p className="text-xs text-gray-500 mt-2">Click to view</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Overlay with title and open icon */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{title}</p>
              {description && (
                <p className="text-xs opacity-70 mt-1 line-clamp-1">{description}</p>
              )}
            </div>
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <FileText size={14} className="opacity-70 sm:w-4 sm:h-4" />
              <span className="text-xs opacity-70 hidden sm:inline">Open PDF</span>
              <span className="text-xs opacity-70 sm:hidden">PDF</span>
            </div>
          </div>
        </div>
        
        {/* Open icon in top-right corner */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FileText size={14} className="sm:w-4 sm:h-4" />
        </div>
      </div>
      
      {/* Click handler */}
      <button
        onClick={onClick}
        className="absolute inset-0 w-full h-full"
        aria-label={`Open PDF: ${title}`}
      />
    </div>
  )
}
