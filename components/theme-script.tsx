"use client"

import { useEffect } from "react"

export function ThemeScript() {
  useEffect(() => {
    // Применяем тему сразу после монтирования компонента
    try {
      const savedTheme = localStorage.getItem('theme')
      const body = document.body
      
      if (savedTheme === 'light') {
        body.classList.add('light-theme')
        body.classList.remove('dark-theme')
      } else {
        body.classList.add('dark-theme')
        body.classList.remove('light-theme')
      }
    } catch (error) {
      // Игнорируем ошибки
    }
  }, [])

  return null
}
