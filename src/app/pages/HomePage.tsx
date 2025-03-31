import Header from '../components/header/Header'
import PostGallery from '../components/postgallery/PostGallery'
import Subheader from '../components/subheader/Subheader'
import '../../styles/pages/home.css'

function HomePage() {
  return (
    <div>
      <Subheader />
      <div className="home-container">
        <Header />
        <div className="home-body-container">
          <div className="home__postgallery">
            <PostGallery numberOfItems={4} />
          </div>
          <h1>Aquí las gráficas</h1>
        </div>
      </div>
    </div>
  )
}

export default HomePage
