import { useSelector } from 'react-redux'
import HighchartsComp from '../components/highcharts/HighchartsComp'
import { mapCommentsByPost } from '../helper/mapCommentsByPost'
import { mapPostsByUser } from '../helper/mapPostsByUser'
import { useEffect, useState } from 'react'
import { getComments } from '../services/commentsService'
import { Comment } from '../types/types'
import Header from '../components/header/Header'
import Subheader from '../components/subheader/Subheader'
import '../../styles/pages/analyticspage.css'
import { useTranslation } from 'react-i18next'

function AnalyticsPage() {
  const { t } = useTranslation()
  const { posts } = useSelector((state: RootState) => state.posts_reducer)
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    const getCommenta = async () => {
      const data = await getComments()
      setComments(data)
    }
    getCommenta()
  }, [])

  return (
    <div>
      <Header />
      <Subheader />
      <div className="highcharts-page">
        <h1>{t('APP.PAGE.ANALYTICS.TITLE')}</h1>
        <div className="home_highcharts">
          <HighchartsComp
            fetchDataFunction={() => posts}
            mapData={mapPostsByUser}
            title={t('APP.ANALYTICS.USER.TITLE')}
            categories={t('APP.ANALYTICS.USER.CATEGORIES')}
          />
        </div>
        <div className="home_highcharts">
          <HighchartsComp
            fetchDataFunction={() => comments}
            mapData={mapCommentsByPost}
            title={t('APP.ANALYTICS.COMMENTS.TITLE')}
            categories={t('APP.ANALYTICS.COMMENTS.CATEGORIES')}
          />
        </div>
      </div>
    </div>
  )
}

export default AnalyticsPage
