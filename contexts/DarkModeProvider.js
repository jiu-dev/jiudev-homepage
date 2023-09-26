import { createContext, useContext, useEffect, useState } from 'react'

const DarkModeContext = createContext()

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const currentTheme = window.localStorage.getItem('theme')
    if (currentTheme && currentTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  return useContext(DarkModeContext)
}
