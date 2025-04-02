import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import SearchPost from '../searchpost/SearchPost'
import './subheader.css'

function Subheader() {
  const location = useLocation()
  return (
    <div className="subheader">
      <div className="subheader__item subheader__item">
        {location.pathname !== '/' && <Breadcrumbs />}
        <SearchPost />
      </div>
    </div>
  )
}

export default Subheader
