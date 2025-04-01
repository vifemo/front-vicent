import Header from '../components/header/Header'
import PostGallery from '../components/postgallery/PostGallery'
import Subheader from '../components/subheader/Subheader'
import '../../styles/pages/home.css'

function HomePage() {
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
