import { Link, useLocation } from 'react-router-dom'
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
  const user = JSON.parse(sessionStorage.getItem('user')!)

  const currentLanguage = i18n.language

  const toggleLanguage = () => {
    const newLanguage =
      currentLanguage === LANGUAGES.EN_US ? LANGUAGES.ES_ES : LANGUAGES.EN_US
    i18n.changeLanguage(newLanguage)
  }

  return (
    <div className="subheader">
      <div className="subheader__logo">
        <h1>Logotype</h1>
        {/* <img src={ReactLogo} alt="" /> */}
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
        <div className="subheader__item--login">
          <Link to="/login" className="subheader__item--loginLink">
            Login
          </Link>
          {user && <p>{user.username}</p>}
        </div>
      </div>
    </div>
  )
}

export default Subheader
