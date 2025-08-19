// "use client"

// import { useState, useEffect } from "react"
// import { Sun, Moon } from "lucide-react"

// export function ThemeToggle() {
//   const [isDark, setIsDark] = useState(true)

//   useEffect(() => {
//     // Загружаем сохраненную тему из localStorage
//     const savedTheme = localStorage.getItem('theme')
//     if (savedTheme) {
//       const isDarkTheme = savedTheme === 'dark'
//       setIsDark(isDarkTheme)
//       applyTheme(isDarkTheme)
//     } else {
//       // По умолчанию темная тема
//       applyTheme(true)
//     }
//   }, [])

//   useEffect(() => {
//     // Применяем тему при изменении
//     applyTheme(isDark)
//     // Сохраняем в localStorage
//     localStorage.setItem('theme', isDark ? 'dark' : 'light')
//   }, [isDark])

//   const applyTheme = (dark: boolean) => {
//     const body = document.body
//     const header = document.querySelector('header')
    
//     if (dark) {
//       body.classList.add('dark-theme')
//       body.classList.remove('light-theme')
//       if (header) {
//         header.classList.add('dark-theme')
//         header.classList.remove('light-theme')
//       }
//     } else {
//       body.classList.add('light-theme')
//       body.classList.remove('dark-theme')
//       if (header) {
//         header.classList.add('light-theme')
//         header.classList.remove('dark-theme')
//       }
//     }
//   }

//   const toggleTheme = () => {
//     setIsDark(!isDark)
//   }

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-md hover:bg-gray-700 transition-colors"
//       aria-label="Toggle theme"
//     >
//       {isDark ? (
//         <Sun size={20} className="text-white" />
//       ) : (
//         <Moon size={20} className="text-gray-800" />
//       )}
//     </button>
//   )
// }
