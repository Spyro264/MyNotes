import { useEffect, useState } from 'react'

const KEY = 'theme'

const initialTheme = () => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'

const useTheme = () => {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      // storage blocked: the theme still applies for this visit
    }
  }, [theme])

  const toggle = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}

export default useTheme
