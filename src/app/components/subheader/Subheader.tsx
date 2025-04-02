import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import SearchPost from '../searchpost/SearchPost'
import './subheader.css'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../../enums/global.enum'

function Subheader() {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  // Obtener el idioma actual
  const currentLanguage = i18n.language

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    const newLanguage =
      currentLanguage === LANGUAGES.EN_US ? LANGUAGES.ES_ES : LANGUAGES.EN_US
    i18n.changeLanguage(newLanguage)
  }

  return (
    <div className="subheader">
      <div className="subheader__item">
        {location.pathname !== '/' && <Breadcrumbs />}
        <SearchPost />
        <div className="subheader__item--language">
          {/* <p>{t('APP.SUBHEADER.CURRENT_LANGUAGE')}</p> */}
          <button type="button" onClick={toggleLanguage}>
            {currentLanguage}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subheader
