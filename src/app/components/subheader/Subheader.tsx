import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import SearchPost from '../searchpost/SearchPost'
import './subheader.css'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../../enums/global.enum'
import ToggleTheme from '../toggleTheme/ToggleTheme'
import ReactLogo from '../../../assets/react.svg'

function Subheader() {
  const { i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  // Obtener el idioma actual
  const currentLanguage = i18n.language

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    const newLanguage =
      currentLanguage === LANGUAGES.EN_US ? LANGUAGES.ES_ES : LANGUAGES.EN_US
    i18n.changeLanguage(newLanguage)
  }

  const handleLogout = () => {
    if (location.pathname !== '/') {
      alert('You must log in')
      sessionStorage.removeItem('user')
      navigate('/login')
    }
  }

  return (
    <div className="subheader">
      <div className="subheader__logo">
        <img src={ReactLogo} alt="" />
      </div>
      <div className="subheader__item">
        {location.pathname !== '/' && <Breadcrumbs />}
        <SearchPost />
        <div className="subheader__item--language">
          <button type="button" onClick={toggleLanguage}>
            {currentLanguage}
          </button>
        </div>
        <div>
          <ToggleTheme />
        </div>
        <div>
          <Link to="/login">Login</Link>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </div>
  )
}

export default Subheader
