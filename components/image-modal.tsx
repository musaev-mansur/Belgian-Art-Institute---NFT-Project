"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Maximize2, ZoomIn } from "lucide-react"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  imageTitle?: string
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt, imageTitle }: ImageModalProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          aria-label="Закрыть"
        >
          <X size={24} />
        </button>

        {/* Image container */}
        <div className="relative max-w-full max-h-full">
          <div className="relative">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={800}
              className={`max-w-full max-h-[90vh] object-contain transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsLoaded(true)}
              priority
            />
            
            {/* Loading indicator */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            )}
          </div>

          {/* Image title */}
          {imageTitle && (
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded-lg">
              <p className="text-sm font-medium">{imageTitle}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface ImageGalleryItemProps {
  src: string
  alt: string
  title: string
  onClick: () => void
}

export function ImageGalleryItem({ src, alt, title, onClick }: ImageGalleryItemProps) {
  return (
    <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-cover transition-transform duration-300 group-hover:scale-105" 
      />
      
      {/* Overlay with title and zoom icon */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-sm">{title}</p>
            <div className="flex items-center gap-2">
              <ZoomIn size={16} className="opacity-70" />
              <span className="text-xs opacity-70">Click to enlarge</span>
            </div>
          </div>
        </div>
        
        {/* Zoom icon in top-right corner */}
        <div className="absolute top-3 right-3 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Maximize2 size={16} />
        </div>
      </div>
      
      {/* Click handler */}
      <button
        onClick={onClick}
        className="absolute inset-0 w-full h-full"
        aria-label={`Open image: ${title}`}
      />
    </div>
  )
}
