import Header from '../components/header/Header'
import PostGallery from '../components/postgallery/PostGallery'
import Subheader from '../components/subheader/Subheader'
import '../../styles/pages/home.css'
import { useEffect } from 'react'
import { getComments } from '../services/commentsService'
import HighchartsComp from '../components/highcharts/HighchartsComp'
import { fetchAllPosts } from '../store/slices/slice'
import { mapPostsByUser } from '../helper/mapPostsByUser'
import { getPosts } from '../services/postService'
import { useSelector } from 'react-redux'

function HomePage() {
  const { posts } = useSelector((state: RootState) => state.posts_reducer)

  return (
    <div>
      <Header />
      <Subheader />
      <div className="home-body-container">
        <div className="home__postgallery">
          <PostGallery numberOfItems={4} />
        </div>
        <div className="home_highcharts">
          <HighchartsComp
            fetchDataFunction={() => posts}
            mapData={mapPostsByUser}
            title={'Posts by user'}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
