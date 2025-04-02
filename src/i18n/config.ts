import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enUSBackup from './translations/enUS-backup.json'
import esESBackup from './translations/esES-backup.json'
import { I18nType } from '../app/types/types'
import { LANGUAGES } from '../app/enums/global.enum'

const resources = {
  'en-US': {
    translation: enUSBackup,
  },
  'es-ES': {
    translation: esESBackup,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: LANGUAGES.EN_US,
  fallbackLng: LANGUAGES.EN_US,
})

export const filterTranslations = (
  translations: I18nType[],
  language: string
) => {
  return translations.find((lang) => lang.language === language)?.values
}

export const setTranslations = (jsonTranslations: I18nType[]) => {
  if (!jsonTranslations) return

  const enUS =
    filterTranslations(jsonTranslations, LANGUAGES.EN_US) ?? enUSBackup
  const esES =
    filterTranslations(jsonTranslations, LANGUAGES.ES_ES) ?? esESBackup

  if (enUS) {
    i18n.addResourceBundle('en-US', 'translation', enUS)
  }

  if (esES) {
    i18n.addResourceBundle('es-ES', 'translation', esES)
  }
}

export default i18n
