"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

interface BackButtonProps {
  href?: string
  className?: string
}

export function BackButton({ href, className = "" }: BackButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-[#282828] hover:bg-white hover:text-black text-white rounded-md transition-colors ${className}`}
      aria-label="Back"
    >
      <ArrowLeft size={16} />
      <span>Back</span>
    </button>
  )
}
