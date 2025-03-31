import Header from '../components/header/Header'
import PostGallery from '../components/PostGallery'
import Subheader from '../components/subheader/Subheader'
import '../../styles/home.css'

function HomePage() {
  return (
    <div>
      <Subheader />
      <div className="home-container">
        <Header />
        <div className="home-body-container">
          <PostGallery numberOfItems={4} />
          <h1>Aquí las gráficas</h1>
        </div>
      </div>
    </div>
  )
}

export default HomePage
