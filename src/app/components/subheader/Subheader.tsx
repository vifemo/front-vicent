import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import SearchPost from '../searchpost/SearchPost'
import './subheader.css'
import { useLocation } from 'react-router-dom'

function Subheader() {
  const location = useLocation()

  return (
    <div className="subheader">
      {location.pathname !== '/' && <Breadcrumbs />}
      <SearchPost />
    </div>
  )
}

export default Subheader
