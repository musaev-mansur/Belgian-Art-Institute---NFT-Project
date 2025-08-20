"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

export function ThemeToggle() {
  const { isDark, isLoaded, toggleTheme } = useTheme()

  // Не рендерим кнопку до загрузки темы
  if (!isLoaded) {
    return null
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="text-white transition-all duration-300" />
      ) : (
        <Moon size={20} className="text-gray-800 transition-all duration-300" />
      )}
    </button>
  )
}
