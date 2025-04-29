import Header from '../components/header/Header'
import PostGallery from '../components/postgallery/PostGallery'
import Subheader from '../components/subheader/Subheader'
import '../../styles/pages/home.css'
import HighchartsComp from '../components/highcharts/HighchartsComp'
import { mapPostsByUser } from '../helper/mapPostsByUser'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { User } from '../types/types'

function HomePage() {
  const { t } = useTranslation()
  const { posts } = useSelector((state: RootState) => state.posts_reducer)
  const { users } = useSelector((state: UserState) => state.users_reducer)

  const postsByUser = mapPostsByUser(posts)

  const postsByUserWithName = {
    labels: postsByUser.labels.map((userId) => {
      const user = users.find((u: User) => u.id === Number(userId))
      return user ? user.userName : `User ${userId}`
    }),
  }

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
            labels={postsByUserWithName.labels}
            values={postsByUser.values}
            title={t('APP.ANALYTICS.USER.TITLE')}
            categories={t('APP.ANALYTICS.USER.CATEGORIES')}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
