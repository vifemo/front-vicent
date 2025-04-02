import { useTranslation } from 'react-i18next'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  const { t } = useTranslation()

  return (
    <div className="header">
      <nav className="nav">
        <ul className="link-list">
          <li>
            <Link className="link" to="/">
              {t('APP.HEADER.HOME')}
            </Link>
          </li>
          <li>
            <Link className="link" to="/posts">
              {t('APP.HEADER.POSTS')}
            </Link>
          </li>
          <li>
            <Link className="link" to="/create">
              {t('APP.HEADER.CREATE')}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
