import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import SearchPost from '../searchpost/SearchPost'
import './subheader.css'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../../enums/global.enum'

function Subheader() {
  const { t, i18n } = useTranslation()

  const setCurrentLanguage = (entry: LANGUAGES) => {
    i18n.changeLanguage(entry)
  }

  const location = useLocation()
  return (
    <div className="subheader">
      <div className="subheader__item subheader__item">
        {location.pathname !== '/' && <Breadcrumbs />}
        <SearchPost />
        <h3>
          {t('APP.SUBHEADER.CURRENT_LANGUAGE')} {currentLanguage}
        </h3>
        <button type="button" onClick={setCurrentLanguage}></button>
      </div>
    </div>
  )
}

export default Subheader
