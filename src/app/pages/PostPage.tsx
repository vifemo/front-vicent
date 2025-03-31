import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import Header from '../components/header/Header'
import PostGallery from '../components/postgallery/PostGallery'
import Subheader from '../components/subheader/Subheader'

function PostPage() {
  return (
    <div>
      <Header />
      <Subheader />
      <Breadcrumbs />
      <PostGallery />
    </div>
  )
}

export default PostPage
