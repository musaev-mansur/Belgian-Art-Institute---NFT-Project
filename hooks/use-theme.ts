"use client"

import { useState, useEffect } from "react"

export function useTheme() {
  const [isDark, setIsDark] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Загружаем сохраненную тему из localStorage только на клиенте
    try {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        const isDarkTheme = savedTheme === 'dark'
        setIsDark(isDarkTheme)
        applyTheme(isDarkTheme)
      } else {
        // По умолчанию темная тема
        applyTheme(true)
      }
    } catch (error) {
      // Если localStorage недоступен, используем темную тему по умолчанию
      applyTheme(true)
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      // Применяем тему при изменении
      applyTheme(isDark)
      // Сохраняем в localStorage
      try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
      } catch (error) {
        // Игнорируем ошибки localStorage
      }
    }
  }, [isDark, isLoaded])

  // Слушаем изменения в localStorage для синхронизации между вкладками
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const newTheme = e.newValue === 'dark'
        setIsDark(newTheme)
        applyTheme(newTheme)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const applyTheme = (dark: boolean) => {
    try {
      const body = document.body
      const header = document.querySelector('header')
      
      if (dark) {
        body.classList.add('dark-theme')
        body.classList.remove('light-theme')
        if (header) {
          header.classList.add('dark-theme')
          header.classList.remove('light-theme')
        }
      } else {
        body.classList.add('light-theme')
        body.classList.remove('dark-theme')
        if (header) {
          header.classList.add('light-theme')
          header.classList.remove('dark-theme')
        }
      }
    } catch (error) {
      // Игнорируем ошибки при применении темы
    }
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return {
    isDark,
    isLoaded,
    toggleTheme,
    applyTheme
  }
}
