"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/hooks/use-theme"

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { isLoaded } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Показываем контент только после монтирования и загрузки темы
  if (!mounted || !isLoaded) {
    return null
  }

  return <>{children}</>
}
