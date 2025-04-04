import Header from '../components/header/Header'
import PostGallery from '../components/postgallery/PostGallery'
import Subheader from '../components/subheader/Subheader'
import '../../styles/pages/home.css'
import HighchartsComp from '../components/highcharts/HighchartsComp'
import { mapPostsByUser } from '../helper/mapPostsByUser'
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
            categories={'Users'}
            legend={'Users'}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
