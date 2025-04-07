import { useTranslation } from 'react-i18next'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }: any) {
  const { t } = useTranslation()
  const user = JSON.parse(sessionStorage.getItem('user')!)

  if (!user) {
    return alert(t('APP.LOGIN.MESSAGE')), (<Navigate to="/login" />)
  }

  return children
}

export default ProtectedRoute
