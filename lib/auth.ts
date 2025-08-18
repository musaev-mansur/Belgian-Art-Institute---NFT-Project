// Простая система аутентификации для закрытых документов
// Один логин и пароль для всех пользователей

export interface AuthCredentials {
  username: string
  password: string
}

const SHARED_CREDENTIALS: AuthCredentials = {
  username: process.env.NEXT_PUBLIC_AUTH_USERNAME || "",
  password: process.env.NEXT_PUBLIC_AUTH_PASSWORD || ""
}

export function validateCredentials(credentials: AuthCredentials): boolean {
  // Проверяем, что переменные окружения установлены
  if (!SHARED_CREDENTIALS.username || !SHARED_CREDENTIALS.password) {
    console.error("Authentication credentials not configured. Please set NEXT_PUBLIC_AUTH_USERNAME and NEXT_PUBLIC_AUTH_PASSWORD environment variables.")
    return false
  }
  
  return (
    credentials.username === SHARED_CREDENTIALS.username &&
    credentials.password === SHARED_CREDENTIALS.password
  )
}

export function getSharedCredentials(): AuthCredentials {
  return SHARED_CREDENTIALS
}

// Проверка аутентификации в сессии (используя localStorage для простоты)
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('bai_authenticated') === 'true'
}

export function setAuthenticated(value: boolean): void {
  if (typeof window === 'undefined') return
  if (value) {
    localStorage.setItem('bai_authenticated', 'true')
  } else {
    localStorage.removeItem('bai_authenticated')
  }
}

export function logout(): void {
  setAuthenticated(false)
}
