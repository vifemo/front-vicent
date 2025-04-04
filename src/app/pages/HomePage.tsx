import Header from '../components/header/Header'
import PostGallery from '../components/postgallery/PostGallery'
import Subheader from '../components/subheader/Subheader'
import '../../styles/pages/home.css'

import HighchartsComp from '../components/highcharts/HighchartsComp'

import { mapPostsByUser } from '../helper/mapPostsByUser'

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getComments } from '../services/commentsService'
import { Comment } from '../types/types'
import { mapCommentsByPost } from '../helper/mapCommentsByPost'

function HomePage() {
  const { posts } = useSelector((state: RootState) => state.posts_reducer)
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    const getCommenta = async () => {
      const data = await getComments()
      console.log(data)
      setComments(data)
    }
    getCommenta()
  }, [])

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
        <div className="home_highcharts">
          <HighchartsComp
            fetchDataFunction={() => comments}
            mapData={mapCommentsByPost}
            title={'Comments by post'}
            categories={'Comments'}
            legend={'Comments'}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
