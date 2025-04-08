import { useState, useEffect } from 'react'
import './toggleTheme.css'
import { THEMES } from '../../enums/global.enum'
import { useTranslation } from 'react-i18next'

function ToggleTheme() {
  const { t } = useTranslation()
  const storedTheme = localStorage.getItem('theme') || THEMES.DARK
  const [theme, setTheme] = useState(storedTheme)

  useEffect(() => {
    document.documentElement.classList.toggle(
      'light-mode',
      theme === THEMES.LIGHT
    )
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
  }

  return (
    <div className="toggletheme">
      <button onClick={handleChangeTheme}>
        {theme === THEMES.LIGHT ? t('APP.BUTTON.DARK') : t('APP.BUTTON.LIGHT')}
      </button>
    </div>
  )
}

export default ToggleTheme
