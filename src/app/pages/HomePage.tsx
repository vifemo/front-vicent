import Header from '../components/header/Header'
import PostGallery from '../components/postgallery/PostGallery'
import Subheader from '../components/subheader/Subheader'
import '../../styles/pages/home.css'
import { useEffect } from 'react'
import { getComments } from '../services/commentsService'
import HighchartsComp from '../components/highcharts/HighchartsComp'

function HomePage() {
  return (
    <div>
      <Header />
      <Subheader />
      <div className="home-body-container">
        <div className="home__postgallery">
          <PostGallery numberOfItems={4} />
        </div>
        <div className="home_highcharts">
          <HighchartsComp />
        </div>
      </div>
    </div>
  )
}

export default HomePage
