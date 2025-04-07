import { useState, useEffect } from 'react'
import './toggleTheme.css'

function ToggleTheme() {
  const storedTheme = localStorage.getItem('theme') || 'dark'
  const [theme, setTheme] = useState(storedTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="toggletheme">
      <button onClick={handleChangeTheme}>
        {theme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  )
}

export default ToggleTheme
