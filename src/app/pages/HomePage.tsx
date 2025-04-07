import Header from '../components/header/Header'
import PostGallery from '../components/postgallery/PostGallery'
import Subheader from '../components/subheader/Subheader'
import '../../styles/pages/home.css'
import { useEffect } from 'react'
import { getComments } from '../services/commentsService'

function HomePage() {
  useEffect(() => {
    const getCommenta = async () => {
      const data = await getComments()
      console.log(data)
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
        <h1>Aquí las gráficas</h1>
      </div>
    </div>
  )
}

export default HomePage
