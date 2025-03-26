import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import SearchPost from '../searchpost/SearchPost'
import './subheader.css'

function Subheader() {
  return (
    <div className="subheader">
      <Breadcrumbs />
      <SearchPost />
    </div>
  )
}

export default Subheader
