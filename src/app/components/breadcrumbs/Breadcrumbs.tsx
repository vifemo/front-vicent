import { Link, useLocation } from 'react-router-dom'
import './breadcrumbs.css'
import { useTranslation } from 'react-i18next'

function Breadcrumbs() {
  const { t } = useTranslation()
  const location = useLocation()
  const paths = location.pathname.split('/').filter((path) => path)

  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb-mid">
        <li className="breadcrumb-item">
          <Link to="/">{t('APP.HEADER.HOME')}</Link>
        </li>
        {paths.map((path, index) => {
          const isEditPage = path === 'edit'
          const routeTo = `/${paths.slice(0, index + 1).join('/')}`
          return (
            <li key={index} className="breadcrumb-item">
              {index === paths.length - 1 ? (
                path === 'create' ? (
                  t('APP.BREADCRUMBS.CREATE')
                ) : path === 'analytics' ? (
                  t('APP.BREADCRUMBS.ANALYTICS')
                ) : (
                  path
                )
              ) : (
                <Link to={isEditPage ? '/posts' : routeTo}>
                  {isEditPage ? 'posts' : path}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
