"use client"

import { useState, useEffect } from "react"
import { LoginModal } from "./login-modal"
import { isAuthenticated, logout } from "@/lib/auth"
import { Lock, LogOut } from "lucide-react"

interface ProtectedContentProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export function ProtectedContent({ children, title = "Closed Reports content", description = "Authorization is required to access this section" }: ProtectedContentProps) {
  const [authenticated, setAuthenticated] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      const auth = isAuthenticated()
      setAuthenticated(auth)
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const handleLoginSuccess = () => {
    setAuthenticated(true)
  }

  const handleLogout = () => {
    logout()
    setAuthenticated(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#212121]">
        <div className="text-white text-lg">Loading...</div>
      </div>
    )
  }

  if (!authenticated) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-[#212121] px-4">
          <div className="text-center max-w-md">
            <div className="mb-8">
              <Lock size={64} className="mx-auto text-gray-400 mb-4" />
              <h1 className="text-3xl font-semibold text-white mb-4">{title}</h1>
              <p className="text-gray-300 mb-8">{description}</p>
            </div>
            
            <button
              onClick={() => setShowLogin(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Login
            </button>
          </div>
        </div>

        <LoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
          onSuccess={handleLoginSuccess}
        />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-[#212121]">
      {/* Header с кнопкой выхода */}
      <div className="bg-[#1b1b1b] border-b border-gray-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-white">{title}</h1>
            <p className="text-sm text-gray-400">You are logged in</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>

      {/* Защищенный контент */}
      <div className="py-8">
        {children}
      </div>
    </div>
  )
}
